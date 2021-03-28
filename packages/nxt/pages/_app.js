import {AppProvider, GraphqlProvider, RestProvider} from "../app/core/providers";
import "../styles/globals.scss"

function MyApp({Component, pageProps}) {
    return (
        <AppProvider {...pageProps}>
            <GraphqlProvider {...pageProps}>
                <RestProvider {...pageProps}>
                    <Component {...pageProps} />
                </RestProvider>
            </GraphqlProvider>
        </AppProvider>
    )
}

export default MyApp
