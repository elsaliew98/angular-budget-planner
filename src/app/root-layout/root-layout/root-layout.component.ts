import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { NavigationPanelComponent } from "../navigation-panel/navigation-panel.component";
import { PageFooterComponent } from "../page-footer/page-footer.component";

@Component({
  selector: 'app-root-layout',
  imports: [PageHeaderComponent, NavigationPanelComponent, PageFooterComponent],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.scss'
})
export class RootLayoutComponent {

}
