import { Component, Input } from '@angular/core';
import {Bookmark} from '../models/Bookmark';
import {BookmarkRemove} from '../store/bookmark.actions';
import {Store} from '@ngrx/store';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookmark-list-item',
  templateUrl: './bookmark-list-item.component.html',
  styleUrls: ['./bookmark-list-item.component.scss']
})
export class BookmarkListItemComponent {
  @Input() bookmark: Bookmark;

  constructor(
    private store: Store<any>,
    private SNACKBAR: MatSnackBar
  ) {
  }

  removeBookmark(bookmarkItem) {
    this.store.dispatch(new BookmarkRemove(bookmarkItem));
    this.SNACKBAR.open('Bookmark removed', 'Close', {
      duration: 2000,
    });
  }
}
