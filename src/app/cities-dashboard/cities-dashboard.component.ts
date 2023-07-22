import { Component } from '@angular/core';
import { CityService } from "./city.service";

@Component({
    selector: 'app-cities-dashboard',
    templateUrl: './cities-dashboard.component.html',
    styleUrls: ['./cities-dashboard.component.css']
})
export class CitiesDashboardComponent {
    displayedColumns: string[] = ['id', 'name', 'image'];
    dataSource: any;

    constructor(private cityService: CityService) {
    }

    ngOnInit(): void {
        this.cityService.fetchCities().subscribe(
            data => {this.dataSource = data}
        )
    }
}
