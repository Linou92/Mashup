import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private jsonp: Jsonp) {}
  
  search (term: string) {

    let wikiUrl = 'https://en.wikipedia.org/w/api.php';

    // #docregion search-parameters
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // #enddocregion search-parameters

    // #docregion call-jsonp
    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .pipe(map(response => <string[]> response.json()[1]));
    // #enddocregion call-jsonp
  }
}
