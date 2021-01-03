import React from "react";
import { Indicator, Wrapper } from "./styles";

interface LayoutProps {
  onClick?: any;
  title?: string;
  value?: boolean;
}

const Checkbox: React.FC<LayoutProps> = (props) => {
  const { value, title, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <Indicator value={value} />
      {title}
    </Wrapper>
  );
};

export default Checkbox;
