import { addDoc, collection, doc, getDoc, getDocs, getFirestore, orderBy, query, updateDoc, where } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

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

export async function register(
    userData: {
        username: string;
        email: string;
        password: string;
        role?: string;

    },
    callback: Function) {

    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    //? Mengecek apakah email sudah terdaftar atau belum
    if (data.length > 0) {
        callback({ status: false, message: "Email already registered!" });

    } else {
        //? Hashing password
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";

        //? Insert data ke database
        await addDoc(collection(firestore, "users"), userData).then(() => {
            callback({ status: true, message: "Register success!" })

        }).catch((error) => {
            callback({ status: false, message: error });
        });
    }
}

export async function login(userData: { email: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function loginWithGoogle(userData: any, callback: any) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        userData.role = userData[0].role;
        await updateDoc(doc(firestore, 'users', data[0].id), userData).then(() => {
            callback({status: true, data: userData});
        });

    } else {
        userData.role = "member";
        await addDoc(collection(firestore, "users"), userData).then(() => {
            callback({status: true, data: userData});
        });
    }
}