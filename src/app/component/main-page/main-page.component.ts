import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailerService } from 'src/app/service/mailer.service';
import { SnackBarUtilitary } from 'src/app/utilitary/snack-bar.utilitary';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  protected form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mailServ: MailerService,
    private snackBarUtil: SnackBarUtilitary
  ){}

  ngOnInit() {
    this.initForm();
  }

  initForm() : void {
    this.form = this.fb.group({
      subject: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      text_content: ['', Validators.required],
    })
  }

  onSubmit() : void {

    const { subject, from_email, text_content } = this.form.value;

    const email = {
      "subject": subject,
      "from_email": from_email,
      "text_content": text_content
    }

    this.mailServ.sendMail(email).subscribe({
      next:(res)=>{
        this.snackBarUtil.openSnackBarWithoutRedirect("Email envoyé ! Je vous répondrai dans les plus brefs délais", "OK", "center", "end", 5000);
        this.form.reset();
        this.form.markAsPristine();
        this.form.markAsUntouched();

        console.log('email sended', res);
      },
      error:(err)=>{
        this.snackBarUtil.openSnackBarWithoutRedirect("Email non envoyé ! Un problème est survenu, veuillez recommencer", "OK", "center", "end", 5000);
        console.log('error: ', err); 
      },
      complete:()=>{
        console.log('email sender complete');
      }
    })

  }

}
