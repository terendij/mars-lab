import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagePhotosListComponent} from "./page-photos-list/page-photos-list.component";
import {ResultListPhotoComponent} from "./result-list-photo/result-list-photo.component";
import {PageBigPhotoComponent} from "./page-big-photo/page-big-photo.component";

const routes: Routes = [
  {
    path: 'photos',
    component: PagePhotosListComponent,
    children:[
      {path: 'list', component: ResultListPhotoComponent},
      {path: ':id', component: PageBigPhotoComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
