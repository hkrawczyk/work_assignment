import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BookmarkAddDialogComponent} from '../bookmark-add-dialog/bookmark-add-dialog.component';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent {

  constructor(private dialog: MatDialog) {
  }



  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(BookmarkAddDialogComponent,
      dialogConfig);

  }
}
