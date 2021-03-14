import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'New Title';
  subTitle = 'A place to share your <u>knowledge</u>.';

  list: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.fetchData()
      .subscribe({
        next: (data) => {
          this.list = data.articles;
        }
      });
  }

  doSearch(search: string): void {
    this.list = this.articleService.doSearch(search);
  }
}
