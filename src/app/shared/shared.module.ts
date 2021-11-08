import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './components/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
@NgModule({
  declarations: [CardComponent, TableComponent, AreaChartComponent],
  exports: [CardComponent, TableComponent, AreaChartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
  ],
})
export class SharedModule {}
