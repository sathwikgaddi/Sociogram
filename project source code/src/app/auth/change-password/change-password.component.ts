import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit() {

    this.form = new FormGroup({
      cp: new FormControl(null, {
        validators: [Validators.required]
      }),
      np: new FormControl(null, { validators: [Validators.required] }),
      cnp: new FormControl(null, { validators: [Validators.required] })
    });
  }

  onChangePassword() {
    this.authService.changePass(this.form.value.cp, this.form.value.np);
  }

}
