// 기본적인 _document의 형태

import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link href="images/favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="images/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
          <meta name="msapplication-TileColor" content="#9013fe" />
          <meta name="theme-color" content="#9013fe" />
        </Head>
        <body>
          <Main />
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
