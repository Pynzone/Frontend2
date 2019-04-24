import { Component, OnInit } from '@angular/core';
import { getComponentViewByIndex } from '@angular/core/src/render3/util';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private httpService: HttpService){}

  ngOnInit(){
  }


  

}


export interface Showing {
  showingId: number;
  date: Date;
  price: number;
}
