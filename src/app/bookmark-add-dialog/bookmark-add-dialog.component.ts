import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {Bookmark} from '../models/Bookmark';
import {BookmarkAdd} from '../store/bookmark.actions';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookmark-add-dialog',
  templateUrl: './bookmark-add-dialog.component.html',
  styleUrls: ['./bookmark-add-dialog.component.scss']
})
export class BookmarkAddDialogComponent implements OnInit {

  newState = 'NEW GROUP';
  bookmarksGroups: any = [this.newState];
  myForm: FormGroup;
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  };
  public isNewGroup = () => {
    return this.myForm.value.group === this.newState;
  };

  constructor(
    private SNACKBAR: MatSnackBar,
    public fb: FormBuilder,
    private dialogRef: MatDialogRef<BookmarkAddDialogComponent>,
    private store: Store<any>) {
    store.pipe(select('bookmarks')).subscribe(result => {

      result.forEach(item => {
        this.bookmarksGroups.push(item.groupName);
      });
    });
  }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      group: [this.newState, [Validators.required]],
      newGroup: [''],
    });
  }

  submitForm() {
    if (this.myForm.status === 'VALID') {
      const bookmark = new Bookmark();
      bookmark.name = this.myForm.value.name;
      bookmark.url = this.myForm.value.url;
      if (this.myForm.value.group === this.newState) {
        bookmark.group = this.myForm.value.newGroup;
      } else {
        bookmark.group = this.myForm.value.group;
      }
      this.store.dispatch(new BookmarkAdd(bookmark));
      this.SNACKBAR.open('Bookmark added', 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

}
