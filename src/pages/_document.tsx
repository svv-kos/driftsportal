import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://www.vegvesen.no/intranett/_public/Vegveven/versjon2//fonter/lft_etica/LFT_Etica_Reg.woff?_ts=123456789" rel="stylesheet" />
          <link href="https://www.vegvesen.no/intranett/_public/Vegveven/versjon2//fonter/lft_etica/LFT_Etica_Semibold.woff?_ts=123456789" rel="stylesheet" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
