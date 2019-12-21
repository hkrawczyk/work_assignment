import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  bookmarksCount;

  constructor(private store: Store<any>) {
    store.pipe(select('bookmarks')).subscribe(result => {
      let counter = 0;
      result.forEach(item =>{
        counter += item.items.length;
      });

      this.bookmarksCount = counter;

    });

  }


}
