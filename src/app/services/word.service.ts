import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Word } from '../models/Word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  url = environment.apiUrl + '/word'
  headers = {
    'Content-Type' : 'application/json'
  }

  constructor(private http : HttpClient) { }

  uploadWord(newWord : Word):Observable<any>{
    return this.http.post<any>(this.url + '/upload', newWord, {headers : this.headers, observe : 'response'})
  }
}
