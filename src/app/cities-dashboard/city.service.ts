import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { City } from "./model/city";

@Injectable({
    providedIn: 'root'
})
export class CityService {
    private CITIES_API = "http://localhost:8080/api/cities";

    constructor(private http: HttpClient) {
    }

    fetchCities(): Observable<City> {
        return this.http.get<City>(this.CITIES_API);
    }
}
