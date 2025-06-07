import { createContext, useContext, useEffect, useState } from "react";

import { ID, Permission, Query, Role } from "appwrite";
import { databases, storage } from "../appwrite.ts";
import { createArtworkFromDocument } from "../utils.ts";
import { toast } from "sonner"
import type { ArtworkItem } from "../appwrite types/ArtworkItem.ts";

type ArtworksContextValue = {
    current: ArtworkItem[];
    add: (artwork: ArtworkItem, selectedFile: any) => Promise<void>;
    remove: (id: string, imageId: string) => Promise<void>;
}

const ArtworksContext = createContext<ArtworksContextValue | null>(null);

export function useArtworks() {
    return useContext(ArtworksContext);
}

export function ArtworksProvider(props: any) {
    const [artworks, setArtworks] = useState<ArtworkItem[]>([]);

    async function add(artwork: ArtworkItem, selectedFile: any) {
        try {
            if (!artwork)
                throw new Error("Invalid Artwork");

            // 1. Upload the image to Appwrite Storage
            const uploadedFile = await storage.createFile(
                import.meta.env.VITE_APPWRITE_PRODUCT_IMAGES_BUCKET_ID,
                ID.unique(), // Unique file ID
                selectedFile,
                [
                    // Set permissions for the image file
                    Permission.read(Role.any()), // Anyone can read the image
                    Permission.write(Role.users()), // Only authenticated users can update/delete (adjust as needed)
                ]
            );

            const imageId = uploadedFile.$id;

            // 2. Get the public URL for the uploaded image
            // You can customize the dimensions and quality if needed
            const imageUrl = storage.getFilePreview(import.meta.env.VITE_APPWRITE_PRODUCT_IMAGES_BUCKET_ID, imageId, 0, 0);

            // 3. Create the artwork document in the database
            const artworkModel: ArtworkItem = {
                name: artwork.name,
                description: artwork.description,
                imageId: imageId,
                imageUrl: imageUrl, // Store the URL for easy access
            };

            const createdArtwork = await databases.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_ARTWORKS_COLLECTION_ID,
                ID.unique(), // Unique document ID
                artworkModel,
                [
                    // Set permissions for the document
                    Permission.read(Role.any()), // Anyone can read the artwork details
                    Permission.write(Role.users()), // Only authenticated users can update/delete (adjust as needed)
                ]
            );

            var newArtwork = createArtworkFromDocument(createdArtwork);
            setArtworks(artwork => [newArtwork, ...artwork].slice(0, 10));

            console.log('Artwork added successfully:', createdArtwork);
            toast.success('Artwork added successfully!');
        } catch (e) {
            console.log(e);
            toast.error(e as string);
        }
    }

    async function remove(id: string, imageId: string) {
        try {
            await storage.deleteFile(import.meta.env.VITE_APPWRITE_PRODUCT_IMAGES_BUCKET_ID, imageId)
            await databases.deleteDocument(import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_ARTWORKS_COLLECTION_ID, id);
            setArtworks((artworks) => artworks.filter((artwork) => artwork.id !== id));
            await init();
        } catch (err) {
            console.log(err)
        }
    }

    async function init() {
        try {
            const response = await databases.listDocuments(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_ARTWORKS_COLLECTION_ID,
                [Query.orderDesc("$createdAt"), Query.limit(10)]
            );
            setArtworks(response.documents.map(x => createArtworkFromDocument(x)));
        } catch (error) {
            console.error('Error fetching artworks:', error);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const contextProviderValue: ArtworksContextValue = {
        current: artworks,
        add,
        remove
    }

    return (
        <ArtworksContext.Provider value={contextProviderValue}>
            {props.children}
        </ArtworksContext.Provider>
    );
}
