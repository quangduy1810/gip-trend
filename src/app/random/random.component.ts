import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  constructor(private giphyService:GiphyService,
    private clipboard: Clipboard) { }
  randGif!:any
  ngOnInit(): void {
    this.giphyService.getRand().subscribe(res=>
     
        this.randGif=res.data )
  }
  onChange(){
    this.randGif=undefined
    this.giphyService.getRand().subscribe(res=>
      this.randGif=res.data )
  }
  getLink(){
    this.clipboard.copy(this.randGif.url)
    window.alert('Link copied!')
  }
}
