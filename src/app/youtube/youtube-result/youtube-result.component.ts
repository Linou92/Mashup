import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-result',
  templateUrl: './youtube-result.component.html',
  // styleUrls: ['./youtube-result.component.scss']
})
export class YoutubeResultComponent implements OnInit {

  @Input() title: string;
  @Input() vidUrl: string;
  @Input() vidPic: string;

  constructor() { }

  ngOnInit() {
  }

}
