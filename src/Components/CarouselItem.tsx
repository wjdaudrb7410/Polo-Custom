import { Carousel } from "react-bootstrap";
import { C_Data } from "../Data/CarouselData";

export const CarouselItem = ({ Data }: { Data: C_Data }) => {
  return (
    <>
      <img
        src={Data.src}
        alt={Data.alt}
        style={{ width: "100%", height: "700px", objectFit: "cover" }}
      ></img>
      <Carousel.Caption>
        <h3>{Data.Title}</h3>
        <div>{Data.Desc}</div>
      </Carousel.Caption>
    </>
  );
};
