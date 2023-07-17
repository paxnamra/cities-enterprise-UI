import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesDashboardComponent } from './cities-dashboard/cities-dashboard.component';
import { MatTableModule } from "@angular/material/table";

@NgModule({
    declarations: [
        CitiesDashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [CitiesDashboardComponent]
})
export class AppModule {
}
