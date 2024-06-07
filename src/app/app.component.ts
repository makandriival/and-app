import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { pickColor } from './utils/pickColor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-app';
  password = new FormControl('');
  power: 'weak' | 'strong' | 'normal' | 'none' = 'none';
  isWeak = this.power === 'weak';
  isStrong = this.power === 'strong';
  isNormal = this.power === 'normal';
  inputType: 'password' | 'text' = 'password';
  isMasked = this.inputType === 'password';
  pickColor = pickColor;

  checkPassword = () => {
    const value = this.password.value;
    if (!value) return;

    if (value.length < 8) {
      this.power = 'none';
    } else if (/^[a-zA-Z]+$/.test(value)) {
      this.power = 'weak';
    } else if (
      /^[a-zA-Z0-9]+$/.test(value) ||
      /^[a-zA-Z\W]+$/.test(value) ||
      /^[0-9\W]+$/.test(value)
    ) {
      this.power = 'normal';
    } else if (/^[a-zA-Z0-9\W]+$/.test(value)) {
      this.power = 'strong';
    }
  };

  toggleMask = () => {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  };
}
