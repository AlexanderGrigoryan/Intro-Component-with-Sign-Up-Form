import React from "react";
import styled from "styled-components";

function Information() {
  return (
    <Container>
      <Title>Learn to code by watching others</Title>
      <Text>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </Text>
    </Container>
  );
}

export default Information;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 16px;
  padding-top: 88px;
  margin-bottom: 64px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2916666865348816px;
  color: #ffffff;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: #ffffff;
`;
