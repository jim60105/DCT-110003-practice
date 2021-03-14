import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  rawList: Article[] = [];

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('https://conduit.productionready.io/api/articles');
  }

  getRawList(): Article[] {
    return this.rawList;
  }

  doSearch(search: string): Article[] {
    const list: Article[] = [];
    this.rawList.forEach((element: Article) => {
      if (element.title.indexOf(search) >= 0) {
        list.push(element);
      }
    });
    return list;
  }
}
