import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonItem, IonInput, IonIcon, IonButton, IonRow, IonCol,  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, personOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
addIcons({
  'lock-closed-outline': lockClosedOutline,
  'person-outline': personOutline,
});

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonItem, IonInput, IonIcon, IonButton, IonRow, IonCol, ReactiveFormsModule]
})
export class LoginPage {

  constructor(private _FormBuilder: FormBuilder, private _NavController: NavController) {
    this.createForm();
  }



  registerForm!: FormGroup;

  createForm() {
    this.registerForm = this._FormBuilder.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  submit() {
    console.log(this.registerForm.value);
    this._NavController.navigateForward('/home')
  }


}
