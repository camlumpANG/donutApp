import { Component, OnInit } from '@angular/core';
import { Donuts } from 'src/app/models/donut';
import { DonutServiceService } from 'src/app/services/donut-service.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  donuts:Donuts = {} as Donuts;
  constructor(private donutService:DonutServiceService) { }

  ngOnInit(): void {
   this.donutService.fetchDonut().subscribe((response:Donuts)=>{
      console.log(response)
      this.donuts = response;
    }, (err) => {
      console.log(err)
    } )
  }

}
