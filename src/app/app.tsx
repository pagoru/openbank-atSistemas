import * as React from 'react';
import { Provider } from 'react-redux';
import {useStoreHook} from "./hooks/use-store.hook";
import {useTranslationHook} from "./hooks/use-translation.hook";
import {Header} from "./components/layout/header/header.component";
import {Navigation} from "./components/navigation/navigation.component";
import {Content} from "./components/layout/content/content.component";
import {Footer} from "./components/layout/footer/footer.component";

export const App: React.FunctionComponent = () => {
    const isTranslationLoaded = useTranslationHook();
    const store = useStoreHook();

    if (!isTranslationLoaded || !store) return null;

    return (
        <Provider store={store}>
            <Header/>
            <Content>
                <Navigation/>
            </Content>
            <Footer/>
        </Provider>
    );
}
