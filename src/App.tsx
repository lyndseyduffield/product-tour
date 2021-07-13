import { Modal } from "./components/Modal";
import { Tour, TourStep } from "./models/Tour";

export interface Props {
  tour: Tour;
}

export const App: React.FC<Props> = ({ tour }) => {
  const Header = () => <h1 className="text-xl text-pink-300">Product Tour</h1>;

  const firstStep: TourStep | null = tour.steps[0];

  return firstStep ? (
    <>
      <Header />
      <Modal step={firstStep} />
    </>
  ) : null;
};
