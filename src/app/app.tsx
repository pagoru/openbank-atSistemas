import * as React from 'react';
import { Provider } from 'react-redux';
import {useStore} from "./hooks/use-store.hook";
import {useTranslation} from "./hooks/use-translation.hook";
import {Header} from "./components/layout/header/header.component";
import {Navigation} from "./components/navigation/navigation.component";
import {Content} from "./components/layout/content/content.component";
import {Footer} from "./components/layout/footer/footer.component";
import {
    BrowserRouter
} from "react-router-dom";

export const App: React.FunctionComponent = () => {
    const isTranslationLoaded = useTranslation();
    const store = useStore();

    if (!isTranslationLoaded || !store) return null;

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Content>
                    <Navigation/>
                </Content>
                <Footer/>
            </BrowserRouter>
        </Provider>
    );
}
