import SignIn from "@/app/(auth)/sign-in";
import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";
export const appWriteConfig = {
  endPoint: "https://cloud.appwrite.io/v1",
  platform: "com.zen.aora",
  projectId: "679cf5ad002f44c272e8",
  databaseId: "679cfaa50010bb830a07",
  userCollectionId: "679cfb0200081586122b",
  videoCollectionId: "679cfb39002c269231b2",
  storageId: "679d00ca00131f707496",
};

const client = new Client();

client
  .setEndpoint(appWriteConfig.endPoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Account creation failed");

    const avatarUrl = avatars.getInitials(username);
    console.log("User Created:", newAccount);
    console.log("Avatar URL:", avatarUrl);

    await signInUser(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        username,
        email,
        avatar: avatarUrl,
      }
    );

    return newUser; 
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error);
  }
};

export const signInUser = async (email, password) => {
  try {
    const session = await account.createSession(email, password);
    console.log(session);
    return session;
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error(error);
  }
};
