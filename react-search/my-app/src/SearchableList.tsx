import React, { useState } from 'react';

type SearchableListProps = {
  list: string[];
};

export function SearchableList({ list }: SearchableListProps) {
  const [searchValue, setSearchValue] = useState('');
  const filteredList = list.filter((value) =>
    value.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <SearchBar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ListOfItems
        filteredList={
          filteredList.length > 0 ? filteredList : ['No items match filter']
        }
      />
    </div>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input type="text" value={value} onChange={(e) => onChange(e)}></input>
  );
}

type ListOfItemsProps = {
  filteredList: string[];
};

function ListOfItems({ filteredList }: ListOfItemsProps) {
  const liList = filteredList.map((value, i) => {
    return <li key={i}>{value}</li>;
  });
  return <ul>{liList}</ul>;
}
