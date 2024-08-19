import { Col, Container, Row } from "react-bootstrap";
import { HelmetTitle } from "../Components/HelmetTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Paths } from "../routes";

interface MyFormInput {
  id: string;
  password: string;
}
const MsgOpt: { value: number; message: string } = {
  value: 2,
  message: "최소 2자리 이상입니다.",
};
export const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormInput>();
  const onSubmit: SubmitHandler<MyFormInput> = (data) => {
    nav({ pathname: Paths.home });
  };

  return (
    <>
      <HelmetTitle title="Login"></HelmetTitle>
      <Container>
        <Row>
          <Col
            xs={7}
            style={{
              backgroundColor: "lavender",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Col>
                <div>아이디</div>
                <input
                  {...register("id", {
                    required: true,
                    minLength: { value: MsgOpt.value, message: MsgOpt.message },
                  })}
                ></input>
              </Col>
              <Col>
                <div>비밀번호</div>
                <input
                  {...register("password", {
                    required: true,

                    minLength: { value: MsgOpt.value, message: MsgOpt.message },
                  })}
                ></input>
              </Col>
              <Col>
                <button type="submit">제출</button>
              </Col>
            </form>
          </Col>
          <Col xs={true} style={{ backgroundColor: "lawngreen" }}></Col>
        </Row>
      </Container>
    </>
  );
};
