import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private host: string = "http://localhost:8080";


  constructor(private http: HttpClient, private router: Router) {
  }


  getHeaders(): {} {
    // @ts-ignore
    let headers = new HttpHeaders();
    headers.set("Cache-control", "no-cache");
    headers.set("Cache-control", "no-store");
    headers.set("Expires", "0");
    headers.set("Pragma", "no-cache");
    return {headers};
  }

  signIn(user: any) {
    return this.http.post(this.host + "/signin", user, {observe: "response"}, );
  }

  logout() {
    this.router.navigateByUrl("/signin");
  }

  signUp(body: any) {
    console.log(body);
    return this.http.post(this.host + "/signup", body,  this.getHeaders());
  }
}
