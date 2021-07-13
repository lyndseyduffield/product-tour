import { useState } from "react";
import { Modal } from "./components/Modal";
import { Tour, TourStep } from "./models/Tour";

export interface Props {
  tour: Tour;
}

export const App: React.FC<Props> = ({ tour }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const Header = () => <h1 className="text-xl text-pink-300">Product Tour</h1>;

  const firstStep: TourStep | null = tour.steps[0];

  const handleNextClick = () => {
    if (currentIndex < tour.steps.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  return firstStep ? (
    <>
      <Header />
      <Modal
        currentStep={currentIndex + 1}
        lastStep={tour.steps.length}
        step={firstStep}
        handleNextClick={handleNextClick}
      />
    </>
  ) : null;
};
