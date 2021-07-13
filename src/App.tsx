import { useState } from "react";
import { Modal } from "./components/Modal";
import { Tour, TourStep } from "./models/Tour";

export interface Props {
  tour: Tour;
}

export const App: React.FC<Props> = ({ tour }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleNextClick = () => {
    if (currentIndex < tour.steps.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleClose = () => {
    setCompleted(true);
  };

  const TourModal = () => {
    const step: TourStep | null = tour.steps[currentIndex];
    return step ? (
      <Modal
        currentStep={currentIndex + 1}
        lastStep={tour.steps.length}
        step={step}
        handleNextClick={handleNextClick}
        handleClose={handleClose}
      />
    ) : null;
  };

  return completed ? null : <TourModal />;
};
