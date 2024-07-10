import { Component } from '@angular/core';
import { NewHospitalComponent } from "../new-hospital/new-hospital.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NewHospitalComponent]
})
export class HomeComponent {

}
