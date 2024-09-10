import styled, { css } from "styled-components";
import { Section } from "../../styled";
import { Label } from "../../ui/label/label";
import Button from "/src/components/ui/button/button";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/ui/price/price";
import { Input } from "/src/components/ui/input/input";

export const CatalogWrapper = styled(Section)`
  display: flex;
  position: absolute;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundCatalog};
  justify-content: center;
  max-width: ${(props) => props.theme.pageWidth};
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 353px;
  height: 100%;
  overflow-y: overlay;
  flex-direction: column;
  gap: 18px;
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;

export const AddressInput = styled(Input)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ButtonOrder = styled(Button)`
  width: 100%;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }

  .swiper {
    margin-left: 0;
    margin-right: 0;
  }

  .swiper-horizontal {
    touch-action: none;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundCatalog};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
