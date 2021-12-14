import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent implements OnInit {
  
  notes:Note[]= new Array<Note>();
  
  constructor(private notesService:NotesService) {

   }
  
  ngOnInit(): void {
    this.notes=this.notesService.getAll();
  }
  deleteNote(id:number) {
      this.notesService.delete(id)
  }

}
