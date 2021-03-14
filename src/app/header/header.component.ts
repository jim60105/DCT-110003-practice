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

  clickSearch($event: MouseEvent): void {
    this.highlight = !this.highlight;
    this.fontSize++;
    console.log(this.highlight);
    this.searchEvent.emit(this.search);
  }

}
