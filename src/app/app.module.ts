import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaperUploadComponent } from './components/paper-upload/paper-upload.component';
import { WordUploadComponent } from './components/word-upload/word-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaperUploadComponent,
    WordUploadComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
