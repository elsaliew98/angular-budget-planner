import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuConfig } from './MenuConfig';
import { CommonModule } from '@angular/common';
import { MenuConfigService } from './menu-config.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navigation-panel',
  imports: [CommonModule],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss'
})
export class NavigationPanelComponent {

  navPanelMenu:MenuConfig[] = []
  parentIdList: number[] = []
  menuMap: {[id:number]:MenuConfig} = {}

  constructor(private menuConfigService:MenuConfigService, private route:Router) {
    this.menuConfigService.getMenuConfig().subscribe((menu:any) => {
      menu.forEach((config:any) => {
        this.parentIdList.push(config.id)
        this.menuMap[config.id] = config
      })
    })
  }

  routeTo(parentId:number) {
    this.route.navigate([this.menuMap[parentId].route])
  }

}
