import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  private host = 'https://localhost:8000/';
  private urlMailer = 'email/send-mail';

  constructor(private httpClient : HttpClient) { }

  sendMail(mail: any) : Observable<any>{
    return this.httpClient.post(this.host + this.urlMailer, mail);
  }

}
