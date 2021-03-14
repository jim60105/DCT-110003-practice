import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  search = '';
  highlight = false;
  fontSize = 12;

  constructor() { }

  ngOnInit(): void {
  }

  clickSearch($event: KeyboardEvent | MouseEvent): void {
    this.highlight = !this.highlight;
    this.fontSize++;
    console.log($event);
    this.searchEvent.emit(this.search);
  }

}
