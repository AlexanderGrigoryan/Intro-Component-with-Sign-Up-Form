import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

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
        <div></div>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main``;
