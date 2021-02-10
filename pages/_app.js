import ContextProvider from "../context"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    )
}

export default MyApp
