import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  // private host = 'http://localhost:3000/';
  private host = 'https://tommyweb.eu/public/';
  private urlMailer = 'email/send-mail';

  constructor(private httpClient : HttpClient) { }

  sendMail(mail: any) : Observable<any>{
    const options = { 
      headers: {'Content-Type': 'application/json'},
      withCredentials: true 
    };

    return this.httpClient.post(this.host + this.urlMailer, mail, options);
  }

}
