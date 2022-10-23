import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: any;
  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
    if (contactForm.valid) {
      console.log(contactForm.value);
    }
  }

  click() {
    console.log('click');
  }
}
