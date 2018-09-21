import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Rover} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root' // depuis la version 6 ca remplace la déclaration du provider à la racine de l'application
})
export class RoversService {

  /*private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }*/

  constructor(private http: HttpClient) {
  }

  getRovers(): Observable<Rover[]>{
    return this.http.get<Rover[]>("http://localhost:3390/rovers");
  }
}
