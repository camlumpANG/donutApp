import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donuts, Result } from '../models/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutServiceService {

  constructor(private http:HttpClient) { }
  donuts:Donuts = {} as Donuts
  
  url:string = "https://grandcircusco.github.io/demo-apis/donuts.json"

  fetchDonut():Observable<Donuts> {
    return this.http.get<Donuts>(this.url);
  }

  fetchResult():Observable<Result> {
    return this.http.get<Result>(this.url)
  }
  getDonutById(id: number): Observable<Result> {
    return this.http.get<Result>(`donuts/${id}`);
}
  getById(id:number):Result{
    let index = this.donuts.results.findIndex(d => d.id === id);
    console.log(this.donuts.results)
    return this.donuts.results[index];
  }

  
}
