import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  keypressed: string;
  input: any = 0;

  constructor() {}

  ngOnInit(): void {}

  PressBtn(keypressed: any) {
    this.input = this.input + keypressed;
    let a = Number(keypressed || 0);
    let b = Number(keypressed || 0);
    // this.input = a + b;

    if (keypressed === '=') {
      this.input = (0, eval)(this.input);
    } else {
      this.input += keypressed;
    }
    if (keypressed === '=') {
      let subArray = this.input.split('-');
      this.input = parseInt(subArray[0]) - parseInt(subArray[1]);

      // this.input = parseInt(this.input) - parseInt(keypressed);
    } else console.log(typeof keypressed);
  }


    if (keypressed === '=') {
      let subArray = this.input.split('x');
      this.input = parseInt(subArray[0]) * parseInt(subArray[1]);

      // this.input = parseInt(this.input) - parseInt(keypressed);
    } else console.log(typeof keypressed);
   }

  clear(keypressed: any) {
    this.input = 0;
  }
}
