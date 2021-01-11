import React from "react";
import { Wrapper, Title, Array } from "./styles";
import Checkbox from "../../shared/Checkbox";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectSelectedProducts,
} from "../../store/products/selectors";

interface LayoutProps {
  title?: string;
  onToggle?: any;
  displayOnlySelected?: boolean;
}

interface ProductProps {
  id?: string;
  name?: string;
  checked?: boolean;
}

const ShoppingList: React.FC<LayoutProps> = (props) => {
  const { title, onToggle, displayOnlySelected } = props;

  const products = useSelector(
    displayOnlySelected ? selectSelectedProducts : selectAllProducts
  );

  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products?.map((product: ProductProps) => (
          <Checkbox
            key={product.id}
            title={product.name}
            value={product.checked}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        ))}
      </Array>
    </Wrapper>
  );
};

export default ShoppingList;
