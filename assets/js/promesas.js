
import {collection,addDoc,getDocs,updateDoc,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; 
import {db} from "./firebase.js";

export const registrarPersona = async(persona) => {
    console.log("persona");
    console.log(persona);
    const docRef = await addDoc(collection(db, "persona"), persona);
}

export const obtenerPersonas = async() => {
    const ref = collection(db, "persona");
    const querySnapshot = await getDocs(ref);
    console.log(querySnapshot);
    let listado = [];
    querySnapshot.forEach(doc => {
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id});
    })

    
    console.log(listado);
    return listado;

}

export const actualizarPersona = async(persona,id) => {
    const ref = doc(db, "persona", id);
    await updateDoc(ref, persona);


}

export const eliminarPersona = async(id) => {
    const ref = doc(db, "persona", id);
    await deleteDoc(ref);
}