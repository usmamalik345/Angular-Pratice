import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-input',
  templateUrl: './td-input.component.html',
  styleUrls: ['./td-input.component.css'],
})
export class TdInputComponent implements OnInit {
  @Input() questions = 'Css';

  constructor() {}

  ngOnInit(): void {}
}
