import { COVID_COLORS } from './../../constants/colors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import format from 'date-fns/format';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import * as utils from 'src/app/core/utils';
import { takeUntil } from 'rxjs/operators';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  componentDestroyed$: Subject<boolean> = new Subject();
  data$ = this.apiService.getCountriesWithState();
  chartData: BehaviorSubject<{}> = new BehaviorSubject({});
  data: any;
  displayedColumns: string[] = [
    'country',
    'newConfirmed',
    'newDeaths',
    'newRecovered',
    'totalConfirmed',
    'totalRecovered',
    'totalDeaths',
  ];
  clickedRows = new Set<PeriodicElement>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.data$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((subscriber: any) => {
        console.log(subscriber);
        this.data = subscriber;
      });
  }
  getLabels() {
    let labels = Object.keys(this.clickedRows.values().next().value).filter(
      (item: any) => {
        if (
          item === 'totalConfirmed' ||
          item === 'totalRecovered' ||
          item === 'totalDeaths'
        ) {
          return item;
        }
      }
    );
    return labels;
  }

  getChart() {
    const itm = this.data.countries.find(
      (item: any) =>
        item.Country === this.clickedRows.values().next().value.country
    );
    const chartData = this.getLabels().map((item: string) => {
      return {
        label: utils.deCamelize(item),
        data: [
          { x: format(new Date(2015, 25, 6), 'yyyy-dd-mm'), y: 0 },
          {
            x: format(new Date(itm.Date), 'yyyy-dd-mm'),
            y: itm[utils.capitalizeFirstLetter(item)],
          },
        ],
        borderColor: (COVID_COLORS as any)[item],
        borderWidth: 1,
      };
    });
    return chartData;
  }

  createData(countries: any): any {
    return countries.map((country: any) => ({
      country: country.Country,
      newConfirmed: country.NewConfirmed,
      newDeaths: country.NewDeaths,
      newRecovered: country.NewRecovered,
      totalConfirmed: country.TotalConfirmed,
      totalDeaths: country.TotalDeaths,
      totalRecovered: country.TotalRecovered,
    }));
  }
  handleTableRowClick(item: any): any {
    this.clickedRows.clear();
    this.clickedRows.add(item);
    this.chartData.next(this.getChart());
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
