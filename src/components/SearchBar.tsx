import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const {searchPlacesByTerm} = useContext(PlacesContext);

  const onQueryChange = (query: ChangeEvent<HTMLInputElement>) => {
    const { value } = query.target;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        className="form-control"
        onChange={onQueryChange}
        placeholder="Search"
        type="text"
      />
    <SearchResults />
    </div>
  );
};
