import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import ShoppingList from "../../components/ShoppingList";
import Calculator from "../../components/Calculator";
import Header from "../../components/Header";

// Shared
import LineChart from "../../shared/LineChart";

// Store
import { toggleProduct } from "../../store/products/actions";
import {
  selectSelectedProducts,
  selectSelectedProductTotalPrice,
} from "../../store/products/selectors";

// Utils
import extractPercentage from "../../utils/extractPercentage";

// Private
import { Wrapper, Container, Content, Column } from "./styles";

interface ProductProps {
  price: number;
  tags: Array<string>;
}

const Home: React.FC = () => {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

  const dispatch = useDispatch();

  const totalPrice = useSelector(selectSelectedProductTotalPrice);
  const selectedProducts = useSelector(selectSelectedProducts);

  const handleToggle = (id: string) => {
    dispatch(toggleProduct(id));
  };

  return (
    <Wrapper>
      <Container>
        <Header />

        <Content>
          <ShoppingList title="Produtos disponíveis" onToggle={handleToggle} />

          <ShoppingList
            displayOnlySelected
            onToggle={handleToggle}
            title="Sua lista de compras"
          />

          <Column>
            estatísticas
            <LineChart
              color={colors[0]}
              title="saudável"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter((product: ProductProps) =>
                  product.tags.includes("healthy")
                ).length
              )}
            />
            <LineChart
              color={colors[1]}
              title="não tão saudável"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter((product: ProductProps) =>
                  product.tags.includes("junk")
                ).length
              )}
            />
            <LineChart
              color={colors[2]}
              title="limpeza"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter((product: ProductProps) =>
                  product.tags.includes("cleaning")
                ).length
              )}
            />
            <LineChart
              color={colors[3]}
              title="outros"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter((product: ProductProps) =>
                  product.tags.includes("others")
                ).length
              )}
            />
            <div style={{ marginTop: 12 }}>
              <h2 style={{ fontWeight: 400, fontSize: 12, color: "#00364A" }}>
                previsão de gastos:
              </h2>
              <div style={{ fontSize: 24 }}>
                {totalPrice.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </div>

              <Calculator />
            </div>
          </Column>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;
