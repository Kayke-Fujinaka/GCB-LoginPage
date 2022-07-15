import React from "react";
import { render } from "@testing-library/react";
import { Container } from "../components/Container";
import Head from "next/head";

describe("Container Test", () => {
  test("Render Container", () => {
    const { getByText } = render(
      <Container title={""} description={""}>
        <>
          <Head>
            <title>GCB Investimentos</title>
            <meta name="description" content={"Login"} />
            <meta property="og:title" content="GCB Investimentos" />
            <meta property="og:description" content={"Login"} />
            <meta property="og:type" content="website" />
            <link rel="icon" href="./favicon.ico" />
          </Head>
          <div>
            <div className="wrapper">
              <h1>Testando</h1>
            </div>
          </div>
        </>
      </Container>
    );
    const head = getByText("Testando");
    expect(head).toBeInTheDocument();
  });
});
