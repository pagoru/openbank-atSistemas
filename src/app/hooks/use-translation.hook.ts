import * as React from 'react';
import i18n from "i18n-js";
import {useState} from "react";

export const useTranslationHook = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [lang, setLang] = useState('es');
    
    React.useEffect(() => {
        i18n.translations = {
            es: require('../assets/translations/es.json'),
        };
    }, []);
    
    React.useEffect(() => {
        i18n.defaultLocale = lang;
        i18n.fallbacks = lang;
        i18n.locale = lang;
        
        setIsLoaded(true);
    }, [lang]);
    
    return { isLoaded, setLang };
}
