export type Weather = {
  location: string;
  unit: string;
  useMyApi: boolean;
  days: Day[];
}

export type Day = {
  datetime: string;
  hours: Hours[];
}

export type Hours = {
  temp: number;
  datetime: string;
  checked: boolean;
}
