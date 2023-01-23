import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Form from "./components/Form";
import Information from "./components/Information";
import MobileBackground from "./img/bg-intro-mobile.png";
import DesktopBackground from "./img/bg-intro-desktop.png";

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
  width: 100%;
  padding: 0 24px;
  background-color: #ff637b;
`;

const Content = styled.div`
  background-image: url(${MobileBackground});
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 45px;
    background-image: url(${DesktopBackground});
  }
`;
