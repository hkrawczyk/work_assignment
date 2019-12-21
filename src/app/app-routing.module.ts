import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookmarkListComponent} from './bookmark-list/bookmark-list.component';

const routes: Routes = [
  { path: '', component: BookmarkListComponent },
  { path: '*', component: BookmarkListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
