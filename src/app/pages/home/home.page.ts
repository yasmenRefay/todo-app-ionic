import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonCard, IonLabel, IonText, IonFab, IonFabButton, IonIcon, IonButton, IonRefresher, IonRefresherContent, IonInfiniteScroll, IonInfiniteScrollContent , IonSpinner } from '@ionic/angular/standalone';
import { NavController, AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, create, trash } from 'ionicons/icons';
import { DataService } from 'src/app/services/data/data.service';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/interface/todo';
addIcons({
  'add': add,
  'trash': trash,
  'create': create
});

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonRow, IonCol, IonCard, IonLabel, IonText, IonFab, IonFabButton, IonIcon, IonButton, IonRefresher, IonRefresherContent, IonInfiniteScroll, IonInfiniteScrollContent , IonSpinner ]
})
export class HomePage implements OnInit {


  todos !: Todo[];
  ann!: void;
  loading!:boolean;


  constructor(
    private _NavController: NavController,
    private _AlertController: AlertController,
    private _DataService: DataService
  ) { }

  ngOnInit() {
    this.getData();
  }

  createTodo() {
    this._NavController.navigateForward('/order-config')
  }

  getData() {
    this.loading = true ;
    setTimeout(() => {
      this.loading = false ;
      this.todos = this._DataService.getData();
    }, 3000);
  }

  showDetails(todo: Todo) {
    this._DataService.setParams({
      todo
    });
    this._NavController.navigateForward('/order-details')

  }

  async delete(i: number) {
    let Alert = await this._AlertController.create({
      header: 'confirm deleting',
      mode: 'ios',
      message: 'Are You Sure For Deleting ? ',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('delete todo');
            this.todos.splice(i, 1)
          }
        },
      ]
    });

    await Alert.present();
  }

  edit(todo: Todo) {
    this._DataService.setParams({
      todo
    });

    this._NavController.navigateForward('/order-config')
  }

  refreshpage(ev: any) {
    setTimeout(() => {
      this.todos = this._DataService.getData();
      ev.target.complete()
    }, 3000);
  }

  loadData(ev:any) {
    setTimeout(() => {
      this.todos = this.todos.concat(this._DataService.getData())
      ev.target.complete()
    }, 3000);
  }
}
