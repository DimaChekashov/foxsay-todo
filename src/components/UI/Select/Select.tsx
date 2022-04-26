import React from 'react';
import { IOption } from '../../../types/types';

import './Select.sass';

interface Props {
    defaultValue: string,
    options: IOption[],
    value: string,
    onChange: (event: string) => void
}

function Select({ options, defaultValue, value, onChange }: Props) {
  return (
    <select 
        value={value}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map((option: IOption) =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}

export default Select;
