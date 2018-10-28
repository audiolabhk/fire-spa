import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  activities = [
    {activity: 'play', fun: 10},
    {activity: 'run', fun: 8},
    {activity: 'drugs', fun: -2}
  ]

  constructor() { }

  ngOnInit() {
  }

}
