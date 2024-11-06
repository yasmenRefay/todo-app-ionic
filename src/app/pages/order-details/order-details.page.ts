import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem , IonRow , IonCol , IonCard , IonLabel , IonText , IonFab , IonFabButton , IonIcon , IonCardHeader , IonCardTitle , IonCardSubtitle , IonCardContent , IonButtons , IonBackButton } from '@ionic/angular/standalone';
import { Todo } from 'src/app/interface/todo';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule , IonItem , IonRow , IonCol , IonCard , IonLabel , IonText , IonFab , IonFabButton , IonIcon , IonCardHeader , IonCardTitle , IonCardSubtitle , IonCardContent , IonButtons , IonBackButton]
})
export class OrderDetailsPage implements OnInit , OnDestroy  {

  todo!:Todo;


  constructor(
    private _DataService:DataService ,
  ) { }


  ngOnInit(): void {
    this.todo = this._DataService.getParams().todo;
  }

  ngOnDestroy(): void {
    this._DataService.setParams({});
  }
}
