import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import {
  SliderWrapper,
  ProductSlide,
  ProductImage,
  ContentWrapper,
  ProductTitle,
  Price,
} from "./styles";
import Tabs from "../tabs/tabs";
import OptionList from "../options-list/options-list";

function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Описание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <OptionList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionList list={product.structure} />,
    },
  ];
  return (
    <>
      <SliderWrapper>
        <ProductSlide>
          <ProductImage src={product.image} />
          <ContentWrapper>
            <ProductTitle as="h3" size={TitleSize.SMALL}>
              {product.name}
            </ProductTitle>
            <Tabs maxContentHeight="105px" tabsList={tabsList} />
            <Price>
              {product.price} руб. / {product.weight} гр.
            </Price>
          </ContentWrapper>
        </ProductSlide>
      </SliderWrapper>
    </>
  );
}

export default ProductCart;
