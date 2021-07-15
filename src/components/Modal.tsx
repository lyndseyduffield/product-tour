import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { LOCAL_STORAGE_COLOR_MODE_KEY } from "../constants";
import { ColorMode } from "../models/Color";
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
    const colorMode: ColorMode = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_COLOR_MODE_KEY)
    );
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
            className="text-xl leading-6 font-medium text-black"
            id="modal-title"
          >
            {props.step.title}
          </h3>
          <div className="mt-2">
            <p className="text-md text-gray-900">{props.step.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center text-sm font-extralight text-opacity-75 text-gray-700">
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
        className="inline-flex w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
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
        className="bg-gray-200 max-w-sm rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all"
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
