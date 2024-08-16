import { Carousel, Container } from "react-bootstrap";
import { HelmetTitle } from "../Components/HelmetTitle";
import { C_Data, C_Data_real } from "../Data/CarouselData";
import { CarouselItem } from "../Components/CarouselItem";

export const Home = () => {
  const Carot_Data: Array<C_Data> = C_Data_real;
  return (
    <>
      <HelmetTitle title="Home"></HelmetTitle>
      <Container>
        <Carousel>
          {Carot_Data &&
            Carot_Data.map((item) => (
              <Carousel.Item key={item.id} interval={3000}>
                <CarouselItem Data={item}></CarouselItem>
              </Carousel.Item>
            ))}
        </Carousel>
        <div
          style={{
            backgroundColor: "#ddeeff",
            width: "100%",
            height: "600px",
            margin: "20px auto",
            padding: "10px",
          }}
        ></div>
      </Container>
    </>
  );
};
