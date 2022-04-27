import React from 'react';
import { SortFieldType } from '../../types/types';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';

import './TodoFilter.sass';

interface Props {
  filter: {
    sort: SortFieldType | undefined;
    query: string;
  };
  setFilter: {
    setSelectedSort: React.Dispatch<React.SetStateAction<SortFieldType | undefined>>;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  }
}

const TodoFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="todo-filter">
      <Input 
        type="text"
        value={filter.query}
        onChange={e => setFilter.setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <Select
        value={filter.sort as string}
        onChange={selectedSort => setFilter.setSelectedSort(selectedSort as SortFieldType)}
        noValueLabel="Select Sort"
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" }
        ]}
      />
    </div>
  )
}

export default TodoFilter;