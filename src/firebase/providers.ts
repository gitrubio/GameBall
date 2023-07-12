import { collection, CollectionReference } from "firebase/firestore";
import { FirebaseDB } from "./ConfigFirebase";
import { ISession } from "../interfaces/sesions.interface";

export const sessionCollectionRef = collection(FirebaseDB, "modules") as CollectionReference<Omit<ISession, 'id'>>;



