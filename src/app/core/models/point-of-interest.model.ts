import {GeoPoint} from './geo-point.model';

export interface PointOfInterest {
  id: number;
  baladeId: number;
  title: string;
  description: string;
  historicalPeriod?: string;
  imageUrl?: string;
  location: GeoPoint;
}
