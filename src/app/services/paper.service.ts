import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paper } from '../models/Paper';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http:HttpClient) { }

  url = environment.apiUrl+'api';

  uploadPaper(newPaper: FormData):Observable<HttpResponse<null>>{
    return this.http.post<HttpResponse<null>>(this.url+'/upload', newPaper);
  }
}
