import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {YoutubeService} from '../services/youtube.service';
import {YoutubeResultComponent} from './youtube-result/youtube-result.component';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  // styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  @ViewChild('target', {read: ViewContainerRef}) target: any;

  cmpArray: Array<any> = [];
  cmpRefArray: Array<any> = [];
  noResult: boolean = false;

  constructor(public youtubeService: YoutubeService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onSearch(input) {
    const title = input.value || input.placeholder;

    this.youtubeService.getJobs(title)
      .subscribe((response) => {
          this.onSearchResultsComplete(response);
        },
        error => console.error(error)
      );
  }

  onSearchResultsComplete(response) {
    for (const i of this.cmpRefArray) {
      i.destroy();
    }

    if (response.items == undefined) {
      this.noResult = true;
    } else {
      this.noResult = false;

      for (let i = 0; i < response.items.length; i++) {
        const t = response.items[i].snippet.title;
        const v = response.items[i].id.videoId;
        const p = response.items[i].snippet.thumbnails.default.url;

        this.createComponent(t, v, p);
      }
    }
  }

  createComponent(t: string, v: string, p: string) {
    const newComp = this.resolver.resolveComponentFactory(YoutubeResultComponent);
    const cmpRef = this.target.createComponent(newComp);

    const cmp        = cmpRef.instance;
    cmp.title        = t;
    cmp.vidUrl        = "https://www.youtube.com/watch?v="+v;
    cmp.vidPic       = p;

    this.cmpRefArray.push(cmpRef);
    this.cmpArray.push(cmp);
  }

}
