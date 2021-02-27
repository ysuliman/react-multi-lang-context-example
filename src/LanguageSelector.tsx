import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageSelector = () => {
    const [Language, setLanguage] = useContext(LanguageContext)

    return (
        <select name="Languages" id="Languages" defaultValue="en">
            <option value="en">English</option>
            <option value="ar">عربي</option>
            <option value="es">Español</option>
            <option value="ur">اردو</option>
        </select>)
}
