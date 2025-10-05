import { createContext, useContext } from "react";
import { ID, Permission, Role } from "appwrite";
import { databases } from "../appwrite.ts";
import { toast } from "sonner";

export type EmailUser = {
  id?: string;
  emailAddress: string;
  isSubscribed: boolean;
};

type EmailUsersContextValue = {
  // current: EmailUser[];
  add: (user: EmailUser) => Promise<void>;
  // remove: (id: string) => sPromise<void>;
};

const EmailUsersContext = createContext<EmailUsersContextValue | null>(null);

export function useEmailUsers() {
  return useContext(EmailUsersContext);
}

export function EmailUsersProvider(props: any) {
  // const [emailUsers, setEmailUsers] = useState<EmailUser[]>([]);

  async function add(user: EmailUser) {
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
      toast.success("Email user added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add email user.");
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
