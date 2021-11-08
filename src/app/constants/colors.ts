export enum COLORS {
  success = '#1CB142',
  danger = '#6236FF',
  warning = '#F9345E',
  palette = '#FA6400',
}
export const COVID_COLORS: {
  totalRecovered: string;
  totalDeaths: string;
  totalConfirmed: string;
  activeConfirmed: string;
} = {
  totalRecovered: COLORS.success,
  totalDeaths: COLORS.danger,
  totalConfirmed: COLORS.warning,
  activeConfirmed: COLORS.palette,
};
