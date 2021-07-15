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
  const [colorMode, setColorMode] = useState("light");
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  useEffect(() => {
    const colorMode: string | null = localStorage.getItem(
      LOCAL_STORAGE_COLOR_MODE_KEY
    );
    if (colorMode) {
      setColorMode(colorMode as ColorMode);
    }
    if (props.step.beforeStep) {
      props.step.beforeStep();
    }
    const selected = document.querySelector(props.step.selector);
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

  const isLast = props.currentStep === props.lastStep;

  const handleClick = () => {
    if (props.step.afterStep) {
      props.step.afterStep(referenceElement);
    }

    if (isLast) {
      props.handleClose();
    } else {
      props.handleNextClick();
    }
  };

  const ModalBody = () => (
    <>
      <div id="product-tour-title">{props.step.title}</div>
      <div id="product-tour-description">{props.step.description}</div>
      <div id="product-tour-action">
        <span id="product-tour-step">
          {props.currentStep} of {props.lastStep}
        </span>
        <ModalButton />
      </div>
    </>
  );

  const ModalButton = () => {
    return (
      <button id="product-tour-button" onClick={handleClick}>
        {isLast ? `Finish Tour` : `Next Step`}
      </button>
    );
  };

  const placement = props.step.placement
    ? { "data-popper-placement": props.step.placement }
    : {};

  return (
    <>
      <div
        id="product-tour-tooltip"
        data-color-mode={colorMode}
        ref={setPopperElement}
        style={{ ...styles.popper }}
        {...attributes.popper}
        {...placement}
      >
        <ModalBody />
        <div
          data-popper-arrow
          id="product-tour-arrow"
          ref={setArrowElement}
          style={styles.arrow}
        />
      </div>
    </>
  );
};
