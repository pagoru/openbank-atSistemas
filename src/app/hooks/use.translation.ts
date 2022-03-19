import React, {useState} from "react";
import i18n, {t} from "i18n-js";
import {TranslationEnum} from "../enums/translation.enum";

export const useTranslation = () => {
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
    
    const translation = (translation: TranslationEnum) =>
        t(TranslationEnum[translation].toLowerCase())
    
    return { isLoaded, setLang, translation };
}
