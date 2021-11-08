import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule,MatGridListModule],
  providers: [],
})
export class HomeModule {}
