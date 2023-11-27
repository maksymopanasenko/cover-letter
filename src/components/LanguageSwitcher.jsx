import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ReactComponent as Ukraine } from './icons/ukraine.svg';
import { ReactComponent as Poland } from './icons/poland.svg';
import { ReactComponent as USA } from './icons/usa.svg';

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState(<USA />);

  const changeLang = (e) => {
    switch (e.target.value) {
      case 'eng':
        setSelected(<USA />);
        break;
      case 'pol':
        setSelected(<Poland />);
        break;
      case 'ukr':
        setSelected(<Ukraine />);
        break;
      default:
        break;
    }
  }

  return (
    <Select icon={selected} size='md' variant='filled' defaultValue='eng' onChange={changeLang} w={130} cursor='pointer' >
      <option value='eng'>English</option>
      <option value='pol'>Polish</option>
      <option value='ukr'>Ukrainian</option>
    </Select>
  );
};
