import { Injectable } from "@angular/core";
import { Firestore, collectionData } from "@angular/fire/firestore";
import { addDoc, collection, doc} from "firebase/firestore";

@Injectable({
    providedIn:'root'
})

export class DataService {

    constructor(private firestore:Firestore){

    }

getNotes(){
    const notesRef = collection(this.firestore, 'gastos', '9994', 'kevin');
    return collectionData(notesRef)
}

getNotesById(id:any){
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, {idField:'id'})
}

addNote(note:any){
    const notesRef = collection(this.firestore, 'gastos', '9994', 'kevin');
    return addDoc(notesRef, note)
}
}