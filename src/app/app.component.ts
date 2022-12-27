import { Component } from '@angular/core';
import { EmployeeService } from '../../../src/app/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string ='Employee List';

}
