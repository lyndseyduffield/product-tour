import { useEffect, useState } from "react";
import { TourStep } from "../models/Tour";

interface Props {
  step: TourStep;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  useEffect(() => {
    const selected = props.step.selector();
    console.log(selected);
    setSelectedElement(selected);
  }, []);

  return selectedElement ? <div>{selectedElement.id}</div> : null;
};
