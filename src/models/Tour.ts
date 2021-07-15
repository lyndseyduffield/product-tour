export interface Tour {
  id: number;
  steps: TourStep[];
}

export interface TourStep {
  selector: string;
  title: string;
  description: string;
  beforeStep?: () => void;
  afterStep?: (selected: HTMLElement | null) => void;
  placement?: string;
}
