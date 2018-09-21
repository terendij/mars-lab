import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(rover: String, camera: String, sol: number): Observable<Photo[]>{
    ///photos?rover.name=:rover&sol=:sol
    const path2 = `http://localhost:3390/rovers/${rover}/photos?camera=${camera}&sol=${sol}`;
    const path = `http://localhost:3390/rovers/${rover}/photos`;
    const pathParam = [
      {name: 'camera', value: camera},
      {name: 'sol', value: sol}
    ].filter(param => param.value)
      .map(param => `${param.name}=${param.value}`);
    const queryString = pathParam.join('&');
    const url = queryString ? path + '?' + queryString : path;

    return this.http.get<Photo[]>(url);
  }

  getPhoto(id: number): Observable<Photo>{
    return this.http.get<Photo>(`http://localhost:3390/photos/${id}`);
  }

}
