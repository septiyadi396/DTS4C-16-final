import React, { useState } from 'react';
import Row from './Row';

function Search() {

  const [searchField, setSearchField] = useState("");

  function searchList() {
    return (
        <>
        {searchField && <Row rowID='5' title='Search' api={'/search/movie'} query={searchField}/>}
        </>
        // <Row filteredPersons={filteredPersons} />
    );
  }

  return (
    <>
        <section className='flex justify-center py-40 text-white mb' >
            <div className='mx-2'>
                <h2>Search</h2>
            </div>
            <div className='mx-2'>
                <input 
                className='text-black'
                type = "text" 
                placeholder = "Search Movie" 
                onChange = { e => {setSearchField(e.target.value)}}
                value={searchField}
                />
            </div>
        </section>
        {searchList()}
    </>
  );
}

export default Search;