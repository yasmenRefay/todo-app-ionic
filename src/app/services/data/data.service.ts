import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interface/todo';

const Todos : Todo[] = [

  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},

  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},

  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},

  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},

  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},


  {
  title : 'title' ,
  desc : 'description' ,
  Date : new Date()
},

]

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private navParams:any = {};



  constructor() { }

  getParams() {
    return this.navParams;
  }

  setParams(body:any) {
    this.navParams = body;
  }

  getData() {
return Todos ;
  }

  postData() {
    throw new Error('method not implemented')
  }

  updateData() {

  }

  deleteData() {

  }
}
