import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonIcon, IonRow, IonCol, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { DataService } from 'src/app/services/data/data.service';
import { Todo } from 'src/app/interface/todo';
addIcons({
  'chevron-back-outline': chevronBackOutline
});

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.page.html',
  styleUrls: ['./order-config.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonButtons, IonIcon, IonRow, IonCol, IonItem, IonLabel, IonInput, ReactiveFormsModule, IonTextarea]
})
export class OrderConfigPage implements OnInit {

  form!: FormGroup;
  todo!: Todo;



  constructor(
    private _FormBuilder: FormBuilder,
    private _NavController: NavController,
    private _DataService: DataService
  ) {
    this.createForm()
  }

  ngOnInit() {
    this.todo = this._DataService.getParams().todo;
    this.patchForm();
  }


  patchForm() {
    if (this.todo) {
      this.form.patchValue({
        Title: this.todo.title,
        desc: this.todo.desc,
        Date : this.todo.Date
      })
    }
  }


  createForm() {
    this.form = this._FormBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    })
  }


  onSubmit() {
    console.log(this.form.value);
    // change edit on submit
    let form = this.form.value;
    if(this.todo) {
      this.todo.title = form.title;
      this.todo.desc = form.desc;
      this.todo.Date = form.Date();
    }
    this._NavController.pop();
  }


}
