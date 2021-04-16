import React, { useContext } from 'react';
import { content } from './content';
import { LanguageContext } from './LanguageContext';

export const LanguageSelector = () => {
    const [, setLanguage] = useContext(LanguageContext)

    return (
        <select name="Languages" id="Languages" defaultValue="en"
        onChange={(e) => setLanguage(content[e.target.value as "en" | "ar" | "ur" | "es" ])}>
            <option value="en">English</option>
            <option value="ar">عربي</option>
            <option value="es">Español</option>
            <option value="ur">اردو</option>
        </select>)
}
