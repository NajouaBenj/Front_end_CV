import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cv} from "../Classes/cv";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  public host:string="http://localhost:8080/cvs"
  constructor(private  httpClient:HttpClient) { }

  public getCvs(){
    return this.httpClient.get(this.host);
  }

  addCv(cv:Cv):Observable<Object>{
    return this.httpClient.post(this.host,cv);
  }

  deleteCv(idc: number):Observable<Object>{
    return this.httpClient.delete(this.host+'/'+idc);
  }

  getCvById(idc: number) : Observable<Object> {
    return this.httpClient.get<Cv>(this.host + '/' + idc);
  }

  updateCv(idc : number, cv : Cv): Observable<Object> {
    return this.httpClient.patch(this.host + '/' + idc, cv);
  }
  /*
  addExperience(cv:Cv):Observable<<Object>{
    return this.httpC
  }

   */

}
