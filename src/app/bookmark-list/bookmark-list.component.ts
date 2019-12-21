import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';


@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent {

  bookmarks: Observable<{}>;

  constructor(private store: Store<any>) {
    this.bookmarks = store.pipe(select('bookmarks'));
  }
}
