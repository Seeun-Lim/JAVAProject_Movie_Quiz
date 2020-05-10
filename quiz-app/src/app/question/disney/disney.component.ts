import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/datamodel/answer';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.css']
})
export class DisneyComponent implements OnInit {


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
    if(submit=='b'||submit=='B'){
      alert("I'm sure that you sang 'Let it go' almost 100 times!");
    }else if(submit==''){
      alert("Please write your answer");
    }else if(submit=='A'||submit=='a'||
    submit=='C'||submit=='c'||
    submit=='d'||submit=='D'
    ){
      alert("I think you are confused between 'Let it go' and 'Into the Unknown'. Try again");
    }else{
      alert("You can write only among A,B,C,D");
    }
  }

}
