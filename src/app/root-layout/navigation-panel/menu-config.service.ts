import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const MENU_CONFIG = [
  {
      "id": 1,
      "parentId": 0,
      "description": "Dashboard",
      "route": "/dashboard",
      "icon": "fa-solid fa-chart-simple"
  },
  {
      "id": 2,
      "parentId": 0,
      "description": "Calendar",
      "route": "/calendar",
      "icon": "fa-solid fa-calendar"
  }
]
@Injectable({
  providedIn: 'root'
})
export class MenuConfigService {

  constructor(private httpClient:HttpClient) { }

  getMenuConfig() {
    return of(MENU_CONFIG)
  }
}
