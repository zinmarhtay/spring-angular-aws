import { Component, OnInit } from '@angular/core';

import { DressService } from './services/dress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crazy-color';

  constructor(private dressService : DressService){}
  ngOnInit(){
    this.dressService.findAll().subscribe(
      data => console.log(data)
    )
  }
}
