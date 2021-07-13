export interface Tour {
  id: number;
  steps: TourStep[];
}

export interface TourStep {
  selector: () => Element;
  title: string;
  description: string;
}
