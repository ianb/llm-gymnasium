/* eslint no-unused-vars: "off" */
import { PageContainer, Card, H1, P } from "./common";
import { Header } from "./header";

export const Home = () => {
  return (
    <PageContainer>
      <Header title="Large Language Model (GPT-3) Gymnasium" />
      <a href="/interactive-fiction">
        <Card>
          <H1>Interactive Fiction</H1>
          <P></P>
        </Card>
      </a>
      <a href="/chat">
        <Card>
          <H1>Chat</H1>
          <P></P>
        </Card>
      </a>
    </PageContainer>
  );
};
