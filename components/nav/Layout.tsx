import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Sabrina Carlins & Owen Roth Wedding |</title>
        <meta name="title" content="Sabrina Carlins & Owen Roth Wedding |" />
        <meta
          name="description"
          content="The wedding website for Sabrina Carlins and Owen Roth on September 9, 2023."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.VERCEL_URL} />
        <meta
          property="og:title"
          content="Sabrina Carlins & Owen Roth Wedding |"
        />
        <meta
          property="og:description"
          content="The wedding website for Sabrina Carlins and Owen Roth on September 9, 2023."
        />
        <meta property="og:image" content="https://ca-ventures.s3.us-east-2.amazonaws.com/bw+1+(1).png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={process.env.VERCEL_URL}
        />
        <meta
          property="twitter:title"
          content="Sabrina Carlins & Owen Roth Wedding |"
        />
        <meta
          property="twitter:description"
          content="The wedding website for Sabrina Carlins and Owen Roth on September 9, 2023."
        />
        <meta property="twitter:image" content="https://ca-ventures.s3.us-east-2.amazonaws.com/bw+1+(1).png" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
