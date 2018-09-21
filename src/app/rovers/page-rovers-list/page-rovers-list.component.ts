import {Component, OnInit} from '@angular/core';
import {RoversService} from "../../core/services/rovers.service";
import {Rover} from "../../core/model/model";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-page-rovers-list',
  templateUrl: './page-rovers-list.component.html',
  styleUrls: ['./page-rovers-list.component.css']
})
export class PageRoversListComponent implements OnInit/*, OnDestroy*/ {

  //roverList: Rover[]
  //private subscription: Subscription;

  error: any;
  roverList$: Observable<Rover[]>;
  selectedRover:Rover;

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

  /*ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }*/

}
