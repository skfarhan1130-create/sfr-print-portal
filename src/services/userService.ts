import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const createUserIfNotExists = async (user: any) => {
  const userRef = doc(db, "users", user.uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      role: "user",
      status: "pending",
      plan: "free",
      createdAt: new Date().toISOString(),
    });
  }
};