const apiUrl = (env: string | undefined = process.env.NODE_ENV): string => {

    if (env === "development") {
        const devUrl = `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
        console.log({ devUrl });
        return devUrl;
    } else {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }
};

export default apiUrl;