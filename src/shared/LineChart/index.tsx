import React from "react";
import { Wrapper, ProgressBar } from "./styles";

interface LayoutProps {
  title?: string;
  color?: string;
  percentage?: number;
}

const LineChart: React.FC<LayoutProps> = (props) => {
  const { title, percentage, color } = props;

  return (
    <Wrapper>
      <span>{title}:</span>
      <ProgressBar color={color} percentage={percentage} />
    </Wrapper>
  );
};

export default LineChart;
