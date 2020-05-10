import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/datamodel/answer';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-pixar',
  templateUrl: './pixar.component.html',
  styleUrls: ['./pixar.component.css']
})

export class PixarComponent implements OnInit {

  answer : Answer = new Answer("");

  constructor(
    private examService : ExamService) 
  { }

  ngOnInit(): void {
  }

  save(){
    this.examService.save(this.answer);
  }

  checkanswer(submit:string){
    if(submit=='D'||submit=='d'){
      alert("You got it!! It was waterhole, not cheese");
    }else if(submit==''){
      alert("Please write your answer");
    }else if(submit=='A'||submit=='a'||
    submit=='b'||submit=='B'||
    submit=='c'||submit=='C'
    ){
      alert("You are wrongㅠ.ㅠ Try again!");
    }else{
      alert("You can write only among A,B,C,D");
    }
  }

}
