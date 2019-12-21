import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkAddDialogComponent } from './bookmark-add-dialog.component';

describe('BookmarkAddDialogComponent', () => {
  let component: BookmarkAddDialogComponent;
  let fixture: ComponentFixture<BookmarkAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
