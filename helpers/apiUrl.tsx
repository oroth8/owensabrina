const { NEXT_PUBLIC_VERCEL_URL, NODE_ENV } = process.env;

const apiUrl = (env: string | undefined = NODE_ENV): string => {

    if (env === "development") {
        const devUrl = `http://${NEXT_PUBLIC_VERCEL_URL}`;
        console.log({ devUrl });
        return devUrl;
    } else {
        return `https://${NEXT_PUBLIC_VERCEL_URL}`;
    }
};

export default apiUrl;