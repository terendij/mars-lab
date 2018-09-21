import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from "../../core/services/photos.service";
import {Observable, Subscription} from "rxjs";
import {Photo} from "../../core/model/model";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-page-big-photo',
  templateUrl: './page-big-photo.component.html',
  styleUrls: ['./page-big-photo.component.css']
})
export class PageBigPhotoComponent implements OnInit/*, OnDestroy*/ {

  //old syntax
  //paramSubscription: Subscription;
  //photoSubscription: Subscription;

  photo$: Observable<Photo>;

  constructor(private photoService: PhotosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.photo$ =this.route.paramMap.pipe(
      switchMap(params => this.photoService.getPhoto(+params.get('id')))
    );
  }

  /*
  ngOnInit_old_syntax() {
    this.paramSubscription = this.route.paramMap.subscribe(params => {
        if(this.photoSubscription){
          this.photoSubscription.unsubscribe();
        }
        this.photoSubscription = this.photoService.getPhoto(+params.get('id')).subscribe(photo => this.photo = photo);
      }
    );

  }

  ngOnDestroy(): void {
    if(this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }

    if(this.photoSubscription){
      this.photoSubscription.unsubscribe();
    }
  }
*/
}
