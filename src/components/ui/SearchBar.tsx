interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}: Props) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;