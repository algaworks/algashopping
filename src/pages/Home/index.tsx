import React, { useState, useEffect } from "react";
import LineChart from "../../shared/LineChart";
import Header from "../../components/Header";
import ShoppingList from "../../components/ShoppingList";
import { Wrapper, Container, Content, Column } from "./styles";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../../components/Calculator";

interface ProductProps {
  price: number;
  tags: Array<string>;
}

interface SelectedProps {
  id: string;
  type: string;
  name: string;
  checked: boolean;
  price: number;
  tags: string[];
}

const Home = () => {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);

    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts
      .map((product: ProductProps) => product.price)
      .reduce((a, b) => a + b, 0);

    setTotalPrice(total);
  }, [selectedProducts]);

  const handleToggle = (id: string, checked: boolean, name: string) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
  };

  return (
    <Wrapper>
      <Container>
        <Header />

        <Content>
          <ShoppingList
            title="Produtos disponíveis"
            products={products}
            onToggle={handleToggle}
          />

          <ShoppingList
            title="Sua lista de compras"
            products={selectedProducts}
            onToggle={handleToggle}
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
              title="nao tao saudável"
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
