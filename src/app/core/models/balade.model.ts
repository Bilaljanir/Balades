import {GeoPoint} from './geo-point.model';
import {PointOfInterest} from './point-of-interest.model';

export interface Balade {
  id: number;
  title: string;
  description: string;
  difficultyLevel: string;
  duration: number;
  distance: number;
  region: string;
  startPoint: GeoPoint;
  imageUrl: string;
  createdAt: Date;
  pointsOfInterest?: PointOfInterest[];
  path?: GeoPoint[];
}
