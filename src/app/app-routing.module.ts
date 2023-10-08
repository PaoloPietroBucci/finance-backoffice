import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaperUploadComponent } from './components/paper-upload/paper-upload.component';
import { WordUploadComponent } from './components/word-upload/word-upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'paper-upload', component:PaperUploadComponent},
  {path:'word-upload', component:WordUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
