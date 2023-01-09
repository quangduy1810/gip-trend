import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor(private giphyService:GiphyService) { }
  tagList:string[]=[]
  searchKey:string=''
  searchRes:any[]=[]
  ngOnInit(): void {
  }
  onSubmit(){
    if (this.searchKey=='') return
    this.tagList.push(this.searchKey)
    this.searchKey=''
    this.giphyService.getSearch(this.tagList).subscribe(res=>
      this.searchRes=res.data )
  }
  onClear(id:number){
    if(id==-1)
      {this.tagList=[]
      this.searchRes=[]
      }
    else
      {this.tagList.splice(id,1)
        this.giphyService.getSearch(this.tagList)
        this.giphyService.getSearch(this.tagList).subscribe(res=>this.searchRes=res.data )
      }
  }
}
