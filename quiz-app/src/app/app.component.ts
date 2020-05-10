import { Component, OnInit } from '@angular/core';
import { User } from './datamodel/user';
import { ExamService } from './services/exam.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title="quiz-app";

  constructor(){}

  ngOnInit(){}

}

