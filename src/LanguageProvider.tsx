import React, { useState } from 'react';
import { content } from "./content";
import { LanguageContext } from './LanguageContext';

export const LanguageProvider: React.FC = ({ children }) => {
    const [Language, setLanguage] = useState(content.en);

    return (
        <LanguageContext.Provider value={[Language, setLanguage]}>
            {children}
        </LanguageContext.Provider>
    );


};
