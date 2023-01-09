import { Component, Input, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
@Component({
  selector: 'app-view-cate',
  templateUrl: './view-cate.component.html',
  styleUrls: ['./view-cate.component.scss']
})
export class ViewCateComponent implements OnInit {
  @Input() gifList:any[]=[]
  selectedGif!:any
  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }
  onSelect(id:number){
    this.selectedGif=this.gifList[id]
  }
  onClose(){
    this.selectedGif=undefined
  }
  getLink(){
    this.clipboard.copy(this.selectedGif.url)
    window.alert('Link copied!')
  }
}
