import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
};

const Tags = ({ title, description }: Props) => {
  const { asPath } = useRouter();
  return (
    <Head>
      <title>{`Sabrina Carlins and Owen Roth Wedding | ${title}`}</title>
      <meta
        name="title"
        content={`Sabrina Carlins and Owen Roth Wedding | ${title}`}
      />
      <meta name="description" content={`${description}`} />
      {asPath === "/" ? (
        <link rel="canonical" href={`https://www.sabrina-owen-wedding.com`} />
      ) : (
        <link
          rel="canonical"
          href={`https://www.sabrina-owen-wedding.com${asPath}`}
        />
      )}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.VERCEL_URL} />
      <meta
        property="og:title"
        content={`Sabrina Carlins and Owen Roth Wedding | ${title}`}
      />
      <meta property="og:description" content={`${description}`} />
      <meta
        property="og:image"
        content="https://ca-ventures.s3.us-east-2.amazonaws.com/bw+1+(1).png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={process.env.VERCEL_URL} />
      <meta
        property="twitter:title"
        content={`Sabrina Carlins and Owen Roth Wedding | ${title}`}
      />
      <meta property="twitter:description" content={`${description}`} />
      <meta
        property="twitter:image"
        content="https://ca-ventures.s3.us-east-2.amazonaws.com/bw+1+(1).png"
      />
    </Head>
  );
};

export default Tags;
