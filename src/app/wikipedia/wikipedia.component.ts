import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable }       from 'rxjs';
import { WikipediaService } from '../services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.scss'],
  providers: [ WikipediaService ]
})
export class WikipediaComponent {
  items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  search(term: string){
    this.items = this.wikipediaService.search(term);
  }
}
