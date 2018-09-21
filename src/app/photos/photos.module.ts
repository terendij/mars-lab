import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PagePhotosListComponent } from './page-photos-list/page-photos-list.component';
import { PhotoSearchFormComponent } from './photo-search-form/photo-search-form.component';
import {FormsModule} from "@angular/forms";
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PageBigPhotoComponent } from './page-big-photo/page-big-photo.component';
import { ResultListPhotoComponent } from './result-list-photo/result-list-photo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhotosRoutingModule
  ],
  declarations: [PagePhotosListComponent, PhotoSearchFormComponent, PhotoItemComponent, PageBigPhotoComponent, ResultListPhotoComponent]
})
export class PhotosModule { }
