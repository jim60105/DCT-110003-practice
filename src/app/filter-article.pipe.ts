import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './Article';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(value: Article[], keyword: string): unknown {
    const list: Article[] = [];
    value.forEach((article: Article) => {
      if (article.title.indexOf(keyword) >= 0) {
        list.push(article);
      }
    });
    return list;
  }

}
