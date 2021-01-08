import React from "react";
import { Wrapper, Title, Array } from "./styles";
import Checkbox from "../../shared/Checkbox";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/products/selectors";

interface LayoutProps {
  title?: string;
  onToggle?: any;
  products?: Array<{
    id?: string;
    name?: string;
    checked?: boolean;
  }>;
}

const ShoppingList: React.FC<LayoutProps> = (props) => {
  const { title, products, onToggle } = props;

  // const productsFromRedux = useSelector(selectAllProducts);

  // useEffect(() => {
  //   console.log(productsFromRedux);
  // }, [productsFromRedux]);

  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products?.map((product) => (
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
