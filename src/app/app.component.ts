import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: any;
  onSubmit(contactForm) {
    // if (contactForm.valid) {
    console.log(contactForm.value);
    // }
  }

  click() {
    console.log('click');
  }
}
