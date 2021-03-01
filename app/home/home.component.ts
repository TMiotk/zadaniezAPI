import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import { takeUntil} from 'rxjs/operators';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any;
  jakies: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: DataService) { }

  ngOnInit(): void {
    
    this.apiService.getNews().pipe(takeUntil(this.destroy$)).subscribe((data)=>{

      console.log(data);
      
          
      this.jakies = data;
      console.log(this.jakies);
      const jasonowe = this.jakies;
      console.log(jasonowe);
      const keyso = "icao_code";
      const value = null;
      const resultsWynikix = jasonowe.filter((d:any)=>d[keyso]!==value);
      console.log(resultsWynikix);

        this.articles = resultsWynikix;
      
          });
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    //unsubscir from subjesct
    this.destroy$.unsubscribe();
  }

}
