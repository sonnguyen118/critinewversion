import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages"
          />
          <meta
            name="google-site-verification"
            content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
          />
          <meta name="robots" content="noindex,nofollow" />
          <link rel="icon" href="/criti_logo.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css"
            integrity="sha512-3PN6gfRNZEX4YFyz+sIyTF6pGlQiryJu9NlGhu9LrLMQ7eDjNgudQoFDK3WSNAayeIKc6B8WXXpo4a7HqxjKwg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="fb-root"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v14.0'
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
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        {/* <div
          className="fb-customerchat"
          attribution="page_inbox"
          page_id="YOUR_FB_PAGE_ID"
        ></div> */}
      </Html>
    );
  }
}
