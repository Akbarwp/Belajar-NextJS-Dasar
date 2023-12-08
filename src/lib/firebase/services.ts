import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    //? Cara 1
    // const snapshot = await getDocs(collection(firestore, collectionName));

    // const data = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    // }));

    //? Cara 2
    const snapshot = await getDocs(query(collection(firestore, collectionName), orderBy("name", "asc")));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();

    return data;
}