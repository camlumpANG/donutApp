import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Donuts, Result } from 'src/app/models/donut';
import { DonutServiceService } from 'src/app/services/donut-service.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

  displayDonuts:Result[] = []
  donutDetail:Result = {} as Result;
  donutId:number | undefined;
 
  constructor(private donutService:DonutServiceService, private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    // this.donutService.getDonutById(this.donutDetail.id).subscribe((d)=>{
    //   console.log(d)
      

    // })
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    // console.log(id);
    // this.donutDetail = this.donutService.getById(id);
    this.donutService.getDonutById(id).subscribe((d)=> {
      this.donutDetail = d;
      console.log(this.donutDetail);
    },
    error => console.log(error));
    
  
    
 
}

}


