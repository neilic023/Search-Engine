import React, { useState, useEffect } from 'react'
import './SearchEngine.css'
import api from '../axios'

const Search = () => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);


    //fetching all the results from the backend
    const fetchData = async () => {
        try {
            const response = await api.get('/');
            const result = response.data;
            setResults(result);
        } catch (error) {
            console.log(error);
        }
    }

    //function that will handle search results
    const handleSearch = async (e) => {
        e.preventDefault();
        if (search === '') return;
        //logic for query population and search
    }

    // hook that will run on mount and trigger fetch 
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
                     {results.map(result => (
                           <>
                           <h4 className='thumbnail'>
                           <img className='thumbnail-photo' src={result.photo} alt='new' />
                           </h4>
                           <h3>{result.title}</h3>
                           <p>{result.shortDescription}</p>
                           </>
                     ))}
                </div>
            </div>
        </div>
    )
}

export default Search