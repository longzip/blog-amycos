import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            
          `,
          }}
        />
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
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        {process.env.FB_PAGE_ID ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "${process.env.FB_PAGE_ID}");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v13.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            `,
            }}
          />
        ) : null}
        <script async src="https://sp.zalo.me/plugins/sdk.js" />
      </body>
    </Html>
  );
}
