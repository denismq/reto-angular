import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { login } from 'src/app/state/auth/auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private store: Store<any>,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.logIn();
    //this.store.dispatch(login(this.username, this.password));
  }

  logIn() {
    this.authService.getUsers().subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.usuario === this.username && a.password === this.password;
        });

        if (user) {
          this.router.navigate(['/tasks']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
