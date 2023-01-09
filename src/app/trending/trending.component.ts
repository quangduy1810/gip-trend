import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  constructor(
    private giphyService:GiphyService
  ) {}
  resList:any[]=[]
  selectedGif:any
  ngOnInit(): void {
    this.giphyService.getTrend().subscribe(res=>
      this.resList=res.data
    )
  }
  
}
