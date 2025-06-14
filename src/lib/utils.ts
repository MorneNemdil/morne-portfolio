import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ArtworkItem } from "./appwrite types/ArtworkItem";
import { storage } from "./appwrite";
import type { Models } from "appwrite";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createArtworkFromDocument(document: Models.Document): ArtworkItem {
  let artworkItem: ArtworkItem = {
    id: document.$id,
    name: document.name as string,
    description: document.description as string,
    imageId: document.imageId as string,
    imageUrl: new URL(storage.getFilePreview(import.meta.env.VITE_APPWRITE_PRODUCT_IMAGES_BUCKET_ID!, document.imageId)).href
  }

  return artworkItem;
}

export function scrollToSectionTop(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function scrollToSectionMiddle(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate the desired scroll position to center the element
    const scrollY = elementRect.top - (viewportHeight / 2) + (elementRect.height / 2) + window.scrollY;

    window.scrollTo({
      top: scrollY,
      behavior: "smooth"
    });
  }
};