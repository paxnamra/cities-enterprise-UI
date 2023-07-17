import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesDashboardComponent } from './cities-dashboard/cities-dashboard.component';
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        CitiesDashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [CitiesDashboardComponent]
})
export class AppModule {
}
