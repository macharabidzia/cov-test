export interface CovidSummaryType {
  ID: string;
  Message: string;
  Global: CovidSummaryGlobalType;
  Countries: Array<CovidSummaryCountryType>;
  Date: string;
}

export interface CovidSummaryGlobalType {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date?: string;
}

export interface CovidSummaryCountryType {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface DayOneCountry {
  Country: string;
  CountryCode?: string;
  Province?: string;
  City?: string;
  CityCode?: string;
  Lat?: string;
  Lon?: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active?: number;
  Date?: string;
}

export interface UsaCurrentStatistics {
  date: string;
  states: number;
  positive: number;
  negative: number;
  pending: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
  death: number;
  hospitalized: number;
}
// export interface CovidData{
//   globalStats,
//   countries: Countries?.sort(
//     (a: CovidSummaryCountryType, b: CovidSummaryCountryType) =>
//       b.TotalConfirmed - a.TotalConfirmed
//   ),
//   date: Date,
// }
export interface GlobalCovidStats {
  title: string;
  stat: number;
  color: string;
}
export interface CovidStatData {
  globalStats: Array<GlobalCovidStats>;
  countries: Array<CovidSummaryCountryType>;
  date: string | Date;
}
export enum COVID_STATUS {
  TotalConfirmed = 'Total Confirmed',
  ActiveConfirmed = 'Active Confirmed',
  TotalRecovered = 'Total Recovered',
  TotalDeaths = 'Total Deaths',
}
