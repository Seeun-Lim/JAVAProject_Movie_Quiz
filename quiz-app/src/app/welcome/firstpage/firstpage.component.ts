import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/datamodel/user';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent{
  user : User = new User("");

  constructor(
    private examService : ExamService) 
  { }

  save(){
    this.examService.saveId(this.user);
  }
}
