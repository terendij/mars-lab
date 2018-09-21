import { Component, OnInit } from '@angular/core';
import {PhotoSearchResultService} from "../../core/services/photo-search-result.service";

@Component({
  selector: 'app-result-list-photo',
  templateUrl: './result-list-photo.component.html',
  styleUrls: ['./result-list-photo.component.css']
})
export class ResultListPhotoComponent implements OnInit {

  constructor(public resultService: PhotoSearchResultService) { }

  ngOnInit() {
  }

}
