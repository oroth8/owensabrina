const devUrl = (envUrl: string | undefined): string | undefined => {
    if (envUrl === "localhost:3000" || envUrl === "localhost:3030") {
        return `http://${envUrl}`
    }else {
        return `https://${envUrl}`
    }
}

export default devUrl;