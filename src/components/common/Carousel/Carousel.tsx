import React from "react";
import { useCarousel } from "./hooks";
import { ChildrenWrapper, Container, Wrapper } from "./style";
import { uuid } from "@lib/utils";

export interface ICarouselPropsType {
  children: React.ReactNode;
  width?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isAutoplay?: boolean;
}
const Carousel = ({
  children,
  width,
  transition = 1000,
  autoplaySpeed = 3000,
  slideToShow = 1,
  isAutoplay = false,
}: ICarouselPropsType) => {
  const { itemList, showIndex, transitionTime, listeners, itemLength } = useCarousel({
    children,
    slideToShow,
    transition,
    autoplaySpeed,
    isAutoplay,
  });

  return (
    <Wrapper width={width} {...listeners}>
      <Container len={itemLength} transition={transitionTime} showIndex={showIndex} slideToShow={slideToShow}>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            {itemList.map((child) => {
              return (
                <ChildrenWrapper len={itemLength} slideToShow={slideToShow} key={uuid()}>
                  {child}
                </ChildrenWrapper>
              );
            })}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Carousel;

Carousel.defaultProps = {
  transition: 1000,
  autoplaySpeed: 3000,
  slideToShow: 1,
  isArrowShow: true,
  isAutoplay: false,
  isAutoplayControl: true,
  arrowLocation: "mid-side",
};
