import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import schema from "../schema";
import { FormTypes } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    setSubmitted(true);
    reset();
  };

  return (
    <Container>
      <Info>
        <Span>Try it free 7 days</Span> then $20/mo. thereafter
      </Info>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputBlock>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName")}
          />
          <Error>{errors.firstName && errors.firstName.message}</Error>
        </InputBlock>
        <InputBlock>
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName")}
          />
          <Error>{errors.lastName && errors.lastName.message}</Error>
        </InputBlock>
        <InputBlock>
          <Input
            type="email"
            id="email"
            placeholder="Email Address"
            {...register("email")}
          />
          <Error>{errors.email && errors.email.message}</Error>
        </InputBlock>
        <InputBlock>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          <Error>{errors.password && errors.password.message}</Error>
        </InputBlock>
        <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
        <Terms>
          By clicking the button, you are agreeing to our{" "}
          <Link href="#">Terms and Services</Link>
        </Terms>
      </FormContainer>
    </Container>
  );
}

export default Form;

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 327px;
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px #00000025;
  text-align: center;
  padding: 18px 68px;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.2678571045398712px;
  color: #ffffff;
`;

const Span = styled.span`
  font-weight: 700;
`;

const FormContainer = styled.form`
  width: 327px;
  height: 442px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 8px 0px 0px #00000025;
  margin-top: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const InputBlock = styled.div``;

const Input = styled.input`
  width: 279px;
  height: 56px;
  border-radius: 5px;
  padding-left: 19.41px;
  background: #ffffff;
  border: 1px solid #dedede;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #3d3b48;

  &::placeholder {
    color: rgba(61, 59, 72, 0.75);
  }

  &:focus {
    outline: 1px solid #5e54a4;
  }
`;

const Button = styled.button`
  width: 279px;
  height: 56px;
  border-radius: 5px;
  background: #38cc8b;
  box-shadow: 0px -4px 0px 0px #00000017 inset;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;

const Terms = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #bab7d4;
`;

const Link = styled.a`
  font-size: 11px;
  font-weight: 700;
  line-height: 21px;
  color: #ff7979;
  text-decoration: none;
`;

const Error = styled.p`
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  line-height: 17px;
  text-align: right;
  color: #ff7979;
  margin-top: 6px;
`;
