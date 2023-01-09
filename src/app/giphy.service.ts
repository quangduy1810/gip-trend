import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  
  constructor(private http: HttpClient) { }
  readonly baseUrl= 'https://api.giphy.com/v1/gifs'
  readonly apiKey= 'arnDaBjTVJw8jL5tGMZjJOYn8hJFxNMR'
  getTrend(limit:number=20, rating:string='g'):Observable<any>{
    let respone= `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=${limit}&rating=${rating}`
    return this.http.get(respone)
  }
  getSearch(searchKeys:string[],limit:number=20,offset:number=0,rating:string='g',lang:string='en'):Observable<any>{
    let q=searchKeys.join('+')
    let respone= `${this.baseUrl}/search?api_key=arnDaBjTVJw8jL5tGMZjJOYn8hJFxNMR&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
    return this.http.get(respone)
  }
  getRand():Observable<any>{
    let respone= `${this.baseUrl}/random?api_key=arnDaBjTVJw8jL5tGMZjJOYn8hJFxNMR&tag=&rating=g`
    return this.http.get(respone)
  }
}
