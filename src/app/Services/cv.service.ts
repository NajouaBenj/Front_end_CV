import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cv} from "../Classes/cv";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8080/cvs/cvs';
@Injectable({
  providedIn: 'root'
})
export class CvService {

  //public host:string="http://localhost:8080/cvs"


  constructor(private  httpClient:HttpClient) { }

 
  getAll(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(baseUrl);
  }

create(cv:Cv):Observable<Object>{
    return this.httpClient.post(baseUrl,cv);
  }

getCv(id: number): Observable<Cv> {
    return this.httpClient.get<Cv>(`${baseUrl}/${id}`);
}

update(id: any, cv: Cv): Observable<Cv> {
  return this.httpClient.put(`${baseUrl}/${id}`, cv);
}
/*
updateCv(cv: Cv): Observable<void> {
  return this.httpClient.put<void>(`${baseUrl}/${cv.id}`, cv);

}
addCv(cv: Cv): Observable<Cv> {
  return this.httpClient.post<Cv>(baseUrl, cv);

}
/*
update(id: any, data: any): Observable<any> {
  return this.httpClient.put(`${baseUrl}/${id}`, data);
}*/


delete(id: any): Observable<any> {
  return this.httpClient.delete(`${baseUrl}/${id}`);
}
deleteAll(): Observable<any> {
  return this.httpClient.delete(baseUrl);
}

}
