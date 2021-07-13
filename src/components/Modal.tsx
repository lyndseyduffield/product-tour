import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { TourStep } from "../models/Tour";

interface Props {
  step: TourStep;
  currentStep: number;
  lastStep: number;
  handleNextClick: () => void;
  handleClose: () => void;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  useEffect(() => {
    const selected = props.step.selector();
    setReferenceElement(selected);
  }, []);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const ModalBody = () => (
    <>
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <h3
            className="text-xl leading-6 font-medium text-gray-900"
            id="modal-title"
          >
            {props.step.title}
          </h3>
          <div className="mt-2">
            <p className="text-md text-gray-500">{props.step.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center text-sm font-extralight text-opacity-75 text-gray-500">
          {props.currentStep} of {props.lastStep}
        </p>
      </div>
      <div className="mt-4 sm:mt-5">
        <ModalButton />
      </div>
    </>
  );

  const ModalButton = () => {
    const isLast = props.currentStep === props.lastStep;
    return (
      <button
        type="button"
        onClick={isLast ? props.handleClose : props.handleNextClick}
      >
        {isLast ? `Finish Tour` : `Next Step`}
      </button>
    );
  };

  return (
    <>
      <div
        id="product-tour-tooltip"
        className="bg-gray-200 rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <ModalBody />
        <div
          data-popper-arrow
          id="product-tour-arrow"
          className="bg-gray-200"
          ref={setArrowElement}
          style={styles.arrow}
        />
      </div>
    </>
  );
};
