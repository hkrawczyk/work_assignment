import {Action} from '@ngrx/store';
export enum BookmarkActionTypes {
  Add = '[Bookmark Component] Add',
  Remove = '[Bookmark Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class BookmarkAdd implements ActionEx {
  readonly type = BookmarkActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class BookmarkRemove implements ActionEx {
  readonly type = BookmarkActionTypes.Remove;
  constructor(public payload: any) {
  }
}
