import { Component, OnInit, NgModule } from '@angular/core';
import { Answer } from 'src/app/datamodel/answer';
import { ExamService } from 'src/app/services/exam.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})

export class MarvelComponent implements OnInit {

  answer : Answer = new Answer("");

  constructor(
    private examService : ExamService) 
  { }

  ngOnInit(): void {
  }

  show(){
    alert(this.answer.content);
  }

  save(){
    this.examService.save(this.answer);
  }

  checkanswer(submit:string){
    if(submit=='C'||submit=='c'){
      alert("congratulations:D!! Avengers love you 3000");
    }else if(submit==''){
      alert("Please write your answer");
    }else if(submit=='A'||submit=='a'||
    submit=='b'||submit=='B'||
    submit=='d'||submit=='D'
    ){
      alert("Oh! Do you know who is the Avengers?");
    }else{
      alert("You can write only among A,B,C,D");
    }
  }
}
