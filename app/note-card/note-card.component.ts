import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: string;
  @Output('delete') deleteEvent: EventEmitter<void>= new EventEmitter<void>();
  @ViewChild('bodyText', {static:true}) bodyText!: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }
  onxbuttonclick() {
    this.deleteEvent.emit();
  }
}
