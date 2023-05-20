import { Component } from '@angular/core';
import { ICity } from "./model/city";

const ELEMENT_DATA: ICity[] = [
    {id: 1, name: 'Hydrogen', imageLink: '1.0079'},
    {id: 2, name: 'Helium', imageLink: '4.0026'},
    {id: 3, name: 'Lithium', imageLink: '6.941'},
    {id: 4, name: 'Beryllium', imageLink: '9.0122'},
    {id: 5, name: 'Boron', imageLink: '10.811'},
    {id: 6, name: 'Carbon', imageLink: '12.0107'},
    {id: 7, name: 'Nitrogen', imageLink: '14.0067'},
    {id: 8, name: 'Oxygen', imageLink: '15.9994'},
    {id: 9, name: 'Fluorine', imageLink: '18.9984'},
    {id: 10, name: 'Neon', imageLink: '20.1797'},
];

@Component({
    selector: 'app-cities-dashboard',
    templateUrl: './cities-dashboard.component.html',
    styleUrls: ['./cities-dashboard.component.css']
})
export class CitiesDashboardComponent {
    displayedColumns: string[] = ['id', 'name', 'imageLink'];
    dataSource = ELEMENT_DATA;
}
