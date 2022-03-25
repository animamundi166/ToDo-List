import React from 'react'

const SearchInput = ({ inputFilter }) => {
  return (
    <>
      <div className="ui icon input search-input">
        <input className="searchInput" type="text" placeholder="Поиск" onChange={inputFilter} />
        <i className="inverted circular search icon"></i>
      </div>
    </>
  )
}

export default SearchInput;
