import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  keypressed: string;
  input = ' ';
  constructor() {}

  ngOnInit(): void {}

  PressBtn(keypressed: string) {
    this.input = keypressed;
  }
}
