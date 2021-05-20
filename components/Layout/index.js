import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>TSS</title>
        <meta name="description" content="geo" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="NDI ULO DOT NG, the best platform for finding a suitable home"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div> {children}</div>
    </>
  );
};
export default Layout;
