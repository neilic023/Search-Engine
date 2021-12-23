import React, { useState, useEffect } from 'react'
import './SearchEngine.css'

import api from '../axios'

const Search = () => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    

    const fetchData = async () => {
        try {
            const response = await api.get('/search');
            const result = response;
            setResults(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search === '') return;
    }


    useEffect(() => {
        fetchData();
      }, [])

    return (
        <div>
            <header>
                <h1> Search engine </h1>
                <form className='search-box' onSubmit={handleSearch}>
                    <input type="search" placeholder='Search for...' value={search} onChange={ e => setSearch(e.target.value)} />
                </form>
            </header>
            <div className='results'>
                 <div className='result'>
                    <h4 className='thumbnail'>Thumbnail</h4>
                    <h3>Title goes here...</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique?
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Search