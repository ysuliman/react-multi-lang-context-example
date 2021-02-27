import React from 'react';
import { content } from './content'

const defaultLanguageContent = content.en

export interface IContent {
    title: string;
    intro: string;
}

export const LanguageContext = React.createContext(
    [defaultLanguageContent, newLanguage => { }] as [IContent, (newLanguage: IContent) => void]
);
