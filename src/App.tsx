import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Form from "./components/Form";
import Information from "./components/Information";
import GlobalStyles from "./GlobalStyles";
import MobileBackground from "./img/bg-intro-mobile.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <MainContainer>
        <Content>
          <Information />
          <Form />
        </Content>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  background-color: #ff637b;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
`;

const Content = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
 
`;
