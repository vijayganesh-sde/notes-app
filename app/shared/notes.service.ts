import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  notes: Note[]= new Array<Note>();
  constructor() { }
  getAll() {
    return this.notes;
  }
  get(id: number) {
    return this.notes[id];
  }
  getId(note:Note) {
    return this.notes.indexOf(note);  
  }
  add(note:Note) {
    note.noteId=this.notes.length
    let newlength=this.notes.push(note);
    
    let index=newlength-1;
    return index;
  }
  update(id:number, title:any,body:any) {
    let note=this.notes[id];
    console.log("note",this.notes)
    note.title=title;
    note.body=body;
  }
  delete(id:number) {
    this.notes.splice(id,1);
  }
}

