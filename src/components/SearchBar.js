
const SearchBar = (props) => {
    return (
        <div>
            <form><input type="text" placeholder="Search..." onChange={(e) => props.setSearchText(e.target.value)} /><p>
                <input type="checkbox" onChange={(e) => props.hideStocked(e.target.checked)} /> Only show products in stock</p></form>

        </div>
    )
};

export default SearchBar