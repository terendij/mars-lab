import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {PhotosService} from "../../core/services/photos.service";
import {SearchFormData} from "../photo-search-form/photo-search-form.component";
import {PhotoSearchResultService} from "../../core/services/photo-search-result.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-photos-list',
  templateUrl: './page-photos-list.component.html',
  styleUrls: ['./page-photos-list.component.css'],
  providers: [
    PhotoSearchResultService
  ]
})
export class PagePhotosListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private photosService: PhotosService,
              private resultService: PhotoSearchResultService,
              private router:Router) { }

  ngOnInit() {
  }

  onSearch(data: SearchFormData) {
      this.subscription = this.photosService.getPhotos(data.rover.name, data.camera && data.camera.name, data.sol).subscribe(
        photos => this.resultService.photos = photos
      );
      this.router.navigate(['/photos/list']);
    }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
