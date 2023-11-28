import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import i18next from 'i18next';
import { ReactComponent as Ukraine } from './icons/ukraine.svg';
import { ReactComponent as Poland } from './icons/poland.svg';
import { ReactComponent as USA } from './icons/usa.svg';

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState(<USA />);

  const changeLang = (e) => {
    switch (e.target.value) {
      case 'en':
        setSelected(<USA />);
        break;
      case 'pl':
        setSelected(<Poland />);
        break;
      case 'ua':
        setSelected(<Ukraine />);
        break;
      default:
        break;
    }

    i18next.changeLanguage(e.target.value)
  }

  return (
    <Select icon={selected} size='md' variant='filled' defaultValue='en' onChange={changeLang} w={135} cursor='pointer' >
      <option value='en'>English</option>
      <option value='pl'>Polski</option>
      <option value='ua'>Українська</option>
    </Select>
  );
};
