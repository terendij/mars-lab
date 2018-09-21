import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoversService} from "../../core/services/rovers.service";
import {Observable, of} from "rxjs";
import {Camera, Rover} from "../../core/model/model";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-photo-search-form',
  templateUrl: './photo-search-form.component.html',
  styleUrls: ['./photo-search-form.component.css']
})
export class PhotoSearchFormComponent implements OnInit {

  error: any;
  roverList$: Observable<Rover[]>;
  selectedRover:Rover;

  @Output("searchEvent")
  search = new EventEmitter<SearchFormData>();

  public data: SearchFormData = {};

  constructor(private rovers: RoversService) { }

  ngOnInit() {
    /*this.subscription = this.rovers.getRovers()
      .subscribe(roverList => this.roverList = roverList);*/
    this.roverList$ = this.rovers.getRovers().pipe(
      catchError(error => {
          this.error = error;
          return of([])
        }
      )
    );
  }

  onSubmit(){
    this.search.emit(this.data);
  }

}

export interface SearchFormData {
  rover?: Rover,
    camera?: Camera,
    sol?: number
}
