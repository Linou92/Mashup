import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getJobs(title: string) {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q='+title+'&key=AIzaSyD8KlyVjz22K9VDBgRMwPoUy9tbAqRd-iA';
console.log(this.http.get(url));
    return this.http.get(url);
    // .map((res: Response) => res.json());
  }
}
