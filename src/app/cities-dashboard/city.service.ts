import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CityService {
    private CITIES_API = "http://localhost:8080/api/cities";

    constructor(private http: HttpClient) {
    }

    fetchCities(): Observable<any> {
        return this.http.get<any>(this.CITIES_API);
    }
}
