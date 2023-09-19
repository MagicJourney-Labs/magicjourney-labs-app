'use client';

import { Globe } from 'lucide-react';
import { useState } from 'react';

const HeaderLanguageIcon = () => {
  const [language, setLanguage] = useState('LT');

  const toggleLanguage = () => {
    if (language === 'LT') {
      setLanguage('EN');
    } else {
      setLanguage('LT');
    }
  };

  return (
    <div className='flex flex-1 flex-row px-4 gap-1 cursor-pointer' onClick={toggleLanguage}>
      <Globe />
      <span className='w-5'>{language}</span>
    </div>
  )
}
export default HeaderLanguageIcon;