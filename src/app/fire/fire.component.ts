import { Component, OnInit } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {

  todos = []

  constructor() { }

  ngOnInit() {
   this.fbGetData() 
  }

  fbGetData() {firebase.database().ref("/").on('child_added', (snapshot)=>{
    this.todos.push(snapshot.val())
  })
  }
}
