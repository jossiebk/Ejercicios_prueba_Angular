import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HistoriesComponent } from './histories/histories.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { HomeMenuBtnComponent } from './home-menu-btn/home-menu-btn.component';
import { HeaderBtnComponent } from './header-btn/header-btn.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HistoriesComponent,
    SearchMenuComponent,
    HomeMenuComponent,
    HistoryItemComponent,
    HomeMenuBtnComponent,
    HeaderBtnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacebookModule { }
