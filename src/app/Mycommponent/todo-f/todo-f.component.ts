import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-f',
  templateUrl: './todo-f.component.html',
  styleUrls: ['./todo-f.component.css'],
})
export class TodoFComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cruntQuestion = 0;

  quizData = [
    {
      question: 'Which language runs in a web browser?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd',
    },
    {
      question: 'What does CSS stand for?',
      a: 'Central Style Sheets',
      b: 'Cascading Style Sheets',
      c: 'Cascading Simple Sheets',
      d: 'Cars SUVs Sailboats',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Hypertext Markdown Language',
      c: 'Hyperloop Machine Language',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    },
  ];

  next(formvalue: any) {
    console.log(formvalue);

    if (formvalue.answer === this.quizData[this.cruntQuestion].correct) {
      this.cruntQuestion=this.cruntQuestion+1
      alert('pass');
    } else {
      alert('error');
    }
  }

  submitOption() {}
}
