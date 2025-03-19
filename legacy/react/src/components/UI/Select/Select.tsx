import React from 'react';
import { IOption } from '../../../types/types';

import './Select.sass';

interface Props {
    options: IOption[];
    value?: string;
    noValueLabel?: string;
    onChange: (event: string) => void;
}

const Select: React.FC<Props> = ({ options, value, noValueLabel, onChange }) => {
  return (
    <select 
      className="select"
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
    >
      {noValueLabel && <option value="">{noValueLabel}</option>}
      {options.map((option: IOption, idx) =>
        <option key={idx} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
};

export default Select;
