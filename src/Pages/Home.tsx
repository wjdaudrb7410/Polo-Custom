import { Carousel, Container } from "react-bootstrap";
import { HelmetTitle } from "../Components/HelmetTitle";
import { C_Data, C_Data_real, Tennis_img } from "../Data/CarouselData";
import { CarouselItem } from "../Components/CarouselItem";
import { c_interval } from "../Data/ScaleData";
import { url } from "inspector";

export const Home = () => {
  const Carot_Data: Array<C_Data> = C_Data_real;
  return (
    <>
      <HelmetTitle title="Home"></HelmetTitle>
      <Container fluid>
        <Carousel>
          {Carot_Data &&
            Carot_Data.map((item) => (
              <Carousel.Item key={item.id} interval={c_interval}>
                <CarouselItem Data={item}></CarouselItem>
              </Carousel.Item>
            ))}
        </Carousel>
        <div className="Mer_Bg"></div>
        <div
          className="Man_Bg"
          style={{
            backgroundImage: `url(${Tennis_img})`,
          }}
        ></div>
      </Container>
    </>
  );
};
