import "../src/styles/index.scss";
import type { AppProps } from 'next/app'
import Layout from "@components/Layout";
import Container from "@components/Container";
import Card from "@components/Card";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Layout>
    <Container>
      <Card>
        <Component {...pageProps} />
      </Card>
    </Container>
  </Layout>
}

export default MyApp
