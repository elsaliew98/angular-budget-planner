import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "",
        component: AppComponent
    },
    {
        path: "dashboard",
        component: AppComponent,
        data: {
            screenTitle: "Dashboard"
        }
    },
    {
        path: "calendar",
        component: AppComponent,
        data: {
            screenTitle: "Calendar"
        }
    }
];
