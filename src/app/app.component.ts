import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDemoService } from './user-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'userUI';
  submitForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserDemoService
  ) {
    this.submitForm = this.formBuilder.group({
      name: '',
      email: '',
    });
  }
  onSubmit(user): void {
    this.userService.addUser(user).subscribe((res) => console.log('hi'));
  }
}
