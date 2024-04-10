import './FilterBar.scss';
import { Dropdown } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setType, setYear, setSearchString } from '../store/moviesSlice';
import { useState } from 'react';

const typeOptions = [
  {
    key: 'all',
    text: 'All',
    value: '',
  },
  {
    key: 'movie',
    text: 'Movie',
    value: 'movie',
  },
  {
    key: 'series',
    text: 'Series',
    value: 'series',
  },
  {
    key: 'episode',
    text: 'Episode',
    value: 'episode',
  },
];

export default function FilterBar() {
  const years = Array.from({ length: 75 }, (_, i) => 1950 + i);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
    dispatch(setSearchString(event.target.value));
  };

  return (
    <div className='filter-bar'>
      <div className='filter-bar__dropdown'>
        <Dropdown
          fluid
          selection
          options={typeOptions}
          defaultValue={typeOptions[0].value}
          placeholder='All'
          onChange={(_, data) => {
            dispatch(setType(data.value));
          }}
        />
      </div>
      <div className='filter-bar__dropdown'>
        <Dropdown
          fluid
          selection
          options={years.map((year) => ({
            key: year,
            text: year,
            value: year,
          }))}
          placeholder='Year'
          onChange={(_, data) => {
            dispatch(setYear(data.value));
          }}
        />
      </div>
      <div>
        <input
          className='filter-bar__search-input'
          type='text'
          placeholder='Search'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
}
