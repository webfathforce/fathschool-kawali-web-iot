export interface RESPONSE_WEATHER {
  airQuality: string;
  temperature: string | number;
  humidity: string | number;
  rainfall: string | number;
  waterQuality: string;
  electricityEfficiency: string | number;
  lightingCondition: string;
  deviceStatus: {
    name: string;
    status: boolean | string;
  }[];
  warningSystem: string;
  history: {
    date: string | Date;
    event: string;
  }[];
}
