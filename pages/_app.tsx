import { ChakraProvider, Heading, Image, extendTheme } from "@chakra-ui/react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "../components/globals";
import {
  Body,
  BodyWrapper,
  BodyWrapperDone,
  CountMainWrapper,
  CountWrapper,
  Header,
  HeaderWrapper,
  JoinDiscord,
  JoinDiscordWrapper,
  MainHeaderWrapper,
  MainWrapper,
  SubHeading,
  SubHeadingWrapper,
} from "../components/shared";
import "./index.css";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";

const theme: DefaultTheme = {
  colors: {
    primary: "white",
    secondary: "black",
  },
};

export default function App() {
  const endDate = new Date("March 1, 2023 12:00:00 GMT-5").getTime();

  const [date, setDate] = useState(endDate - new Date().getTime());
  const [loaded, setLoaded] = useState(false);

  const [days] = useMemo(() => {
    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    return [days];
  }, [date]);

  const [hours] = useMemo(() => {
    const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return [hours];
  }, [date]);

  const [minutes] = useMemo(() => {
    const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
    return [minutes];
  }, [date]);

  const [seconds] = useMemo(() => {
    const seconds = Math.floor((date % (1000 * 60)) / 1000);
    return [seconds];
  }, [date]);

  useEffect(() => {
    setLoaded(true);
    if (date <= 0) return;

    const interval = setInterval(() => {
      setDate(endDate - new Date().getTime());
    }, 999);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loaded)
    return (
      <>
        <Head>
          <title>Pogy - Coming Soon</title>
        </Head>
        <ChakraProvider
          theme={extendTheme({
            colors: {
              body: {
                bg: "#07050F",
              },
            },
          })}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Body>
              <MainWrapper>
                <MainHeaderWrapper><svg viewBoxSize="575" data-root-id="3423582400713" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="172.49998474121094" y="158.22500610351562" viewBox="171.0000457763672 262 268.9599609375 268.9599609375" xml:space="preserve" height="230.00001525878906" width="230.00001525878906" preserveAspectRatio="xMinYMin" zoom="1" editorType="buyer" data-layer-role="icon" style="position: absolute; height: 230px; width: 230px; top: 158.225px; left: 172.5px; transform: rotate(0deg);">
  <path class="st0" d="M305.48,262c74.27,0,134.48,60.21,134.48,134.48s-60.21,134.48-134.48,134.48  c-74.27,0-134.48-60.21-134.48-134.48S231.21,262,305.48,262L305.48,262z" name="Layer %{number}" zoom="1" data-layer-id="0537177700721" style="fill-rule: evenodd; clip-rule: evenodd; fill-opacity: 0;"></path>
  <path class="st1" d="M363.15,517.91c-17.46,8.36-37.02,13.05-57.67,13.05c-20.65,0-40.21-4.69-57.67-13.05  c10.57-21.47,32.42-36.21,57.67-36.21C330.73,481.7,352.58,496.44,363.15,517.91L363.15,517.91z" name="Layer %{number}" zoom="1" data-layer-id="2036727600725" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(53, 53, 214); fill-opacity: 0;"></path>
  <path class="st2" d="M264.74,496.43c11.1-9.21,25.28-14.73,40.74-14.73c15.45,0,29.64,5.52,40.74,14.73  c-11.8,6.34-25.77,10.01-40.74,10.01C290.5,506.44,276.54,502.77,264.74,496.43L264.74,496.43z" name="Layer %{number}" zoom="1" data-layer-id="9974132100729" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(255, 204, 0); fill-opacity: 0;"></path>
  <path class="st1" d="M252.81,325.91h50.4h6.24h50.4c0.79,0,1.57,0.02,2.35,0.06c9.65-4.35,19.89-8.58,26.23-10.1  c14.81-3.56,15.19-3.56,15.19-3.56s11.06,12.75,9,29.63c-0.75,6.11-3.06,12.84-5.71,18.94c1.6,5.59,2.25,11.6,1.78,17.87  l-2.94,38.79l0.1-0.23c-1.27,16.78,11.69,18.74,11.69,18.74s-4.58,19.7-21.56,36.19c-12.18,11.83-31.29,19.59-48.69,19.59h-37.82  h-6.24h-37.82c-17.41,0-36.48-7.82-48.61-19.59c-16.99-16.49-21.56-36.19-21.56-36.19s12.97-1.96,11.69-18.74l0,0l-2.92-38.56  c-0.47-6.26,0.18-12.28,1.78-17.87c-2.65-6.1-4.97-12.83-5.71-18.94c-2.06-16.87,9-29.63,9-29.63s0.38,0,15.19,3.56  c6.33,1.52,16.58,5.76,26.23,10.1C251.24,325.93,252.02,325.91,252.81,325.91L252.81,325.91z" name="Layer %{number}" zoom="1" data-layer-id="0543111100732" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(53, 53, 214); fill-opacity: 1;"></path>
  <path class="st3" d="M405.75,418.91c-0.04,1.57,0.06,3,0.26,4.31c-5.58,3.39-13,6.42-21.88,8.99c-19.93,5.75-47.43,9.31-77.76,9.31  c-30.33,0-57.83-3.56-77.76-9.31c-8.89-2.56-16.31-5.6-21.88-8.99c0.2-1.3,0.3-2.73,0.26-4.31c5.28,3.61,13.11,6.91,22.86,9.72  c19.55,5.64,46.6,9.13,76.52,9.13s56.97-3.49,76.52-9.13C392.64,425.82,400.47,422.52,405.75,418.91L405.75,418.91z" name="Layer %{number}" zoom="1" data-layer-id="7444862200736" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(0, 0, 0); fill-opacity: 1;"></path>
  <path class="st4" d="M268.07,325.91h3.75v23.39l-3.7,2.04c-0.03-0.45-0.05-0.9-0.05-1.36V325.91L268.07,325.91z M272.32,353.69  c0.66,2.43,1.95,4.61,3.69,6.35c2.58,2.58,6.14,4.18,10.05,4.18h18.23v3.75h-18.23c-4.95,0-9.44-2.02-12.7-5.28  c-1.98-1.98-3.51-4.42-4.4-7.14L272.32,353.69L272.32,353.69z M308.37,364.22h18.23c3.91,0,7.47-1.6,10.05-4.18  c1.38-1.38,2.48-3.05,3.21-4.89l3.25,1.96c-0.91,2.1-2.21,3.99-3.81,5.59c-3.26,3.26-7.76,5.28-12.7,5.28h-18.23V364.22  L308.37,364.22z M340.81,350.95c0.02-0.32,0.03-0.64,0.03-0.96v-24.08h3.75v24.08c0,1.05-0.09,2.08-0.27,3.08L340.81,350.95  L340.81,350.95z" name="Layer %{number}" zoom="1" data-layer-id="6480082300740" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(0, 239, 221); fill-opacity: 1;"></path>
  <path class="st0" d="M306.33,456.44c4.45,0,8.06,2.62,8.06,5.86c0,3.24-3.61,5.86-8.06,5.86c-4.45,0-8.06-2.62-8.06-5.86  C298.27,459.06,301.88,456.44,306.33,456.44L306.33,456.44z M402.38,323.65c0,0-11.72,6.84-15,12.66c-3.28,5.81-3.28,5.81-3.28,5.81  l16.88,15.09c0,0,5.16-8.26,4.78-19.78C405.38,325.91,402.38,323.65,402.38,323.65L402.38,323.65z M208.47,323.65  c0,0,11.72,6.84,15,12.66c3.28,5.81,3.28,5.81,3.28,5.81l-16.88,15.09c0,0-5.16-8.26-4.78-19.78  C205.47,325.91,208.47,323.65,208.47,323.65L208.47,323.65z" name="Layer %{number}" zoom="1" data-layer-id="1243552700743" style="fill-rule: evenodd; clip-rule: evenodd; fill-opacity: 1;"></path>
  <path class="st2" d="M240.9,376.72c-11.23-1.17-19.52-0.81-20.53,5.71c-2.04,13.11-3.66,85.53,30.84,89.11  c27.74,2.88,31.86-3.53,44.78-11.07c10.65-6.21,10.76-5.9,21.4,0.42c12.37,7.36,16.85,13.47,44.07,10.65  c34.5-3.58,33.14-78.16,31.1-91.27c-0.78-5.03-5.93-6.07-13.43-5.5c-8.83,3.05-25.47,5.44-45.99,6.57v4.98c0,2.69-2.19,4.9-4.88,4.9  h-43.88c-2.68,0-4.88-2.21-4.88-4.9v-4.99C263.74,380.44,250.27,378.82,240.9,376.72L240.9,376.72z" name="Layer %{number}" zoom="1" data-layer-id="8383096400747" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(17, 23, 69); fill-opacity: 0.35;"></path>
  <path class="st0" d="M240.9,376.6c-11.23-1.1-19.52-0.76-20.53,5.38c-2.04,12.37-3.66,80.68,30.84,84.06  c27.74,2.72,31.86-3.33,44.78-10.45c10.65-5.86,10.76-5.57,21.4,0.4c12.37,6.94,16.85,12.71,44.07,10.05  c34.5-3.38,33.14-73.73,31.1-86.1c-0.78-4.74-5.93-5.72-13.43-5.19c-8.83,2.88-25.47,5.13-45.99,6.2v4.7c0,2.54-2.19,4.62-4.88,4.62  h-43.88c-2.68,0-4.88-2.08-4.88-4.62v-4.71C263.74,380.11,250.27,378.58,240.9,376.6L240.9,376.6z" name="Layer %{number}" zoom="1" data-layer-id="7300238500751" style="fill-rule: evenodd; clip-rule: evenodd; fill-opacity: 1;"></path>
  <polygon class="st4" points="293.6,381.32 319.29,381.32 319.29,384.38 293.6,384.38 293.6,381.32 " name="Layer %{number}" zoom="1" data-layer-id="4985316600755" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(0, 239, 221); fill-opacity: 1;"></polygon>
  <path class="st5" d="M246.74,405.98c-6.59,4.98-4.56,14.58,4.54,21.46c9.1,6.87,21.82,8.41,28.41,3.43  c6.59-4.98,4.56-14.58-4.54-21.46C266.05,402.53,253.33,401,246.74,405.98L246.74,405.98z M366.04,405.98  c6.59,4.98,4.56,14.58-4.54,21.46c-9.1,6.87-21.82,8.41-28.41,3.43c-6.59-4.98-4.56-14.58,4.54-21.46  C346.74,402.53,359.45,401,366.04,405.98L366.04,405.98z" name="Layer %{number}" zoom="1" data-layer-id="4796756300759" style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(0, 239, 221); fill-opacity: 1;"></path>
</svg>
                      


                  <HeaderWrapper>
                    <Header>
                      <Heading
                        color="white"
                        textTransform={"uppercase"}
                        fontSize={{
                          base: "4rem",
                          md: "4rem",
                          lg: "5rem",
                        }}
                        fontFamily={"Futura xblk bt"}
                        lineHeight={{
                          base: "46px",
                          md: "46px",
                          lg: "66px",
                        }}
                        textShadow={{
                          base: "none",
                          md: "none",
                          lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        pogy
                      </Heading>
                    </Header>
                    <SubHeadingWrapper>
                      <SubHeading>
                        <Heading
                          color="#7649F9"
                          textTransform={"uppercase"}
                          fontSize={"40px"}
                          fontFamily={"Futura xblk bt"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 20px rgba(118, 73, 249, 0.6)",
                          }}
                        >
                          Dashboard
                        </Heading>
                        <Heading
                          color="white"
                          textTransform={"none"}
                          fontSize={"24px"}
                          fontFamily={"Futura xblk bt"}
                          pb={"4px"}
                        >
                          — v1.7.9
                        </Heading>
                      </SubHeading>
                    </SubHeadingWrapper>
                  </HeaderWrapper>
                </MainHeaderWrapper>
                {date <= 0 ? (
                  <>
                    <BodyWrapperDone>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: window.innerWidth > 1024 ? "3rem" : "10px",
                          alignItems: "center",
                        }}
                      >
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "2rem",
                            md: "4rem",
                            lg: "5rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={{
                            base: "46px",
                            md: "46px",
                            lg: "66px",
                          }}
                        >
                          Welcome!
                        </Heading>
                        <Heading
                          as="h2"
                          fontSize={{
                            base: "24px",
                            md: "30px",
                            lg: "2rem",
                          }}
                          color="white"
                        >
                          Cynikbot has not been available as usual for the last 11 months for personal reasons. Despite this, 42 servers have decided to continue using Cynikbot in the time until today, for which I would like to thank you very much!<br /><br/>
A completely redesigned version with a new dashboard will be released soon!<br />
Thank you very much for the use and trust!
                        </Heading>
                      </div>
                    </BodyWrapperDone>
                  </>
                ) : (
                  <BodyWrapper>
                    <Header
                      style={{
                        marginTop: "2rem",
                      }}
                    >
                      <Heading>Phase 1 launches in:</Heading>
                    </Header>
                    <CountMainWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {days}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Days
                        </Heading>
                      </CountWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {hours}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Hours
                        </Heading>
                      </CountWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {minutes}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Minutes
                        </Heading>
                      </CountWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {seconds}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Seconds
                        </Heading>
                      </CountWrapper>
                    </CountMainWrapper>
                  </BodyWrapper>
                )}
                <JoinDiscordWrapper>
                  <JoinDiscord
                    href="https://dev.pogy.gg/discord"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join our Discord
                  </JoinDiscord>
                </JoinDiscordWrapper>
              </MainWrapper>
            </Body>
          </ThemeProvider>
        </ChakraProvider>
      </>
    );
  else
    return (
      <>
        <Head>
          <title>Pogy - Coming Soon</title>
        </Head>
        <ChakraProvider
          theme={extendTheme({
            colors: {
              body: {
                bg: "#07050F",
              },
            },
          })}
        ></ChakraProvider>
      </>
    );
}
