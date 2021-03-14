import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickSearch($event: MouseEvent): void {
    console.log($event);
  }

}
