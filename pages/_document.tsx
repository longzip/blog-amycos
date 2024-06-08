import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","${process.env.MAILCHIMP_FORM_CONN}");`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script async src="https://sp.zalo.me/plugins/sdk.js" />

        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/44095848.js"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8EFLJMH5H8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-8EFLJMH5H8');
            
          `,
          }}
        />
      </body>
    </Html>
  );
}
