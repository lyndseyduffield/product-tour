export interface Tour {
  id: number;
  steps: TourStep[];
}

export interface TourStep {
  selector: string;
  title: string;
  description: string;
}
