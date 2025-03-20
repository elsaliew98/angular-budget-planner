import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootLayoutComponent } from './root-layout/root-layout/root-layout.component';

@Component({
  selector: 'app-root',
  imports: [RootLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-budget-planner';
}
