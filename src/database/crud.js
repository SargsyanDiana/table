import {onValue, ref} from "firebase/database";
import {db} from "./firebase";

export async function getDataFromFirebase() {
    const query = ref(db, "rows");

    return new Promise((resolve, reject) => {
        onValue(query, (snapshot) => {
            const data = snapshot.val();
            const array = Object.values(data);
            resolve(array);
        }, (error) => {
            reject(error);
        });
    });
}
