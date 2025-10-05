import { createContext, useContext } from "react";
import { ID } from "appwrite";
import { databases, storage } from "../appwrite.ts";
import { toast } from "sonner";

export type EmailUser = {
  id?: string;
  emailAddress: string;
  isSubscribed: boolean;
};

type EmailUsersContextValue = {
  // current: EmailUser[];
  add: (user: EmailUser) => Promise<boolean>;
  // remove: (id: string) => sPromise<void>;
};

const EmailUsersContext = createContext<EmailUsersContextValue | null>(null);

export function useEmailUsers() {
  return useContext(EmailUsersContext);
}

export function EmailUsersProvider(props: any) {
  // const [emailUsers, setEmailUsers] = useState<EmailUser[]>([]);

/**
 * Provides email users context to child components
 * @param props - Component props
 * @returns {boolean} `true` if the operation is successful, `false` otherwise
 */
  async function add(user: EmailUser): Promise<boolean> {
    try {
      if (!user?.emailAddress) throw new Error("Invalid Email Address");

      // const createdUser =
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_EMAIL_USERS_COLLECTION_ID,
        ID.unique(),
        {
          emailAddress: user.emailAddress,
          isSubscribed: user.isSubscribed,
        },
      );

      // const newUser: EmailUser = {
      //   id: createdUser.$id,
      //   emailAddress: createdUser.emailAddress,
      //   isSubscribed: createdUser.isSubscribed,
      // };

      // setEmailUsers((prev) => [newUser, ...prev].slice(0, 50));

      const downloadUrl = storage.getFileDownload(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        import.meta.env.VITE_APPWRITE_FILE_ID
      );
      window.location.href = downloadUrl;

      toast.success("Email user added successfully!");
      return true;
    } catch (error) {
      toast.error("Invalid Email Address. Try again.")
      return false;
    }
  }

  // async function remove(id: string) {
  //   try {
  //     await databases.deleteDocument(
  //       import.meta.env.VITE_APPWRITE_DATABASE_ID,
  //       import.meta.env.VITE_APPWRITE_EMAIL_USERS_COLLECTION_ID,
  //       id
  //     );
  //     setEmailUsers((prev) => prev.filter((user) => user.id !== id));
  //     toast.success("Email user removed successfully!");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to remove email user.");
  //   }
  // }

  // async function init() {
  //   try {
  //     const response = await databases.listDocuments(
  //       import.meta.env.VITE_APPWRITE_DATABASE_ID,
  //       import.meta.env.VITE_APPWRITE_EMAIL_USERS_COLLECTION_ID,
  //       [Query.orderDesc("$createdAt"), Query.limit(50)]
  //     );

  //     const users: EmailUser[] = response.documents.map((doc: any) => ({
  //       id: doc.$id,
  //       emailAddress: doc.emailAddress,
  //       isSubscribed: doc.isSubscribed,
  //     }));

  //     setEmailUsers(users);
  //   } catch (error) {
  //     console.error("Error fetching email users:", error);
  //   }
  // }

  // useEffect(() => {
  //   init();
  // }, []);

  const contextProviderValue: EmailUsersContextValue = {
    // current: emailUsers,
    add,
    // remove,
  };

  return (
    <EmailUsersContext.Provider value={contextProviderValue}>
      {props.children}
    </EmailUsersContext.Provider>
  );
}
