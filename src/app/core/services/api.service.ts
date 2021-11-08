import { GlobalCovidStats } from './../models/covid.model';
import { COVID_COLORS } from './../../constants/colors';
import {
  CovidSummaryCountryType,
  CovidSummaryType,
} from '../models/covid.model';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CovidStatData } from '../models/covid.model';
import { HttpClient } from '@angular/common/http';

enum COVID_STATUS {
  TotalConfirmed = 'Total Confirmed',
  ActiveConfirmed = 'Active Confirmed',
  TotalRecovered = 'Total Recovered',
  TotalDeaths = 'Total Deaths',
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getSummary(params: any): Observable<CovidSummaryType> {
    return this.http.get<any>(`https://api.covid19api.com/summary`, {
      params,
    });
  }
  getCountriesWithState(): Observable<CovidStatData> {
    return this.getSummary({}).pipe(
      map((response: CovidSummaryType) => {
        const { Global, Countries } = response;
        const {
          NewConfirmed,
          TotalConfirmed,
          TotalDeaths,
          TotalRecovered,
          Date,
        } = Global as any;

        const globalStats: GlobalCovidStats[] = [
          {
            title: COVID_STATUS.TotalConfirmed,
            stat: TotalConfirmed,
            color: COVID_COLORS.totalConfirmed,
          },
          {
            title: COVID_STATUS.ActiveConfirmed,
            stat: NewConfirmed,
            color: COVID_COLORS.activeConfirmed,
          },
          {
            title: COVID_STATUS.TotalRecovered,
            stat: TotalRecovered,
            color: COVID_COLORS.totalRecovered,
          },
          {
            title: COVID_STATUS.TotalDeaths,
            stat: TotalDeaths,
            color: COVID_COLORS.totalDeaths,
          },
        ];
        return {
          globalStats,
          countries: Countries?.sort(
            (a: CovidSummaryCountryType, b: CovidSummaryCountryType) =>
              b.TotalConfirmed - a.TotalConfirmed
          ),
          date: Date,
        };
      })
    );
  }
}
