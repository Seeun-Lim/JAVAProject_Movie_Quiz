import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionAnswerFormComponent } from '../question/question-answer-form/question-answer-form.component';
import { MarvelComponent } from '../question/marvel/marvel.component';
import { DisneyComponent } from '../question/disney/disney.component';
import { PixarComponent } from '../question/pixar/pixar.component';
import { FormsModule } from '@angular/forms';
import { FirstpageComponent } from '../welcome/firstpage/firstpage.component';

export const ROUTES:Routes = [
  {path:'welcome', component: FirstpageComponent},
  {path:'marvel', component: MarvelComponent},
  {path:'quiz_page/:user.loginName', component: QuestionAnswerFormComponent},
  {path:'disney', component:DisneyComponent},
  {path:'pixar', component:PixarComponent}
]

@NgModule({
  declarations: [
    MarvelComponent,
    DisneyComponent,
    PixarComponent,
    QuestionAnswerFormComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    FormsModule
  ]
})
export class ViewModule { }
