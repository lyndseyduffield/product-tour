import { useEffect, useState } from "react";
import { TourStep } from "../models/Tour";

interface Props {
  step: TourStep;
  currentStep: number;
  lastStep: number;
  handleNextClick: () => void;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  useEffect(() => {
    const selected = props.step.selector();
    setSelectedElement(selected);
  }, []);

  return selectedElement ? (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-xl leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                {props.step.title}
              </h3>
              <div className="mt-2">
                <p className="text-md text-gray-500">
                  {props.step.description}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-center text-sm font-extralight text-opacity-75 text-gray-500">
              {props.currentStep} of {props.lastStep}
            </p>
          </div>
          <div className="mt-4 sm:mt-5">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              onClick={() => props.handleNextClick()}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
