import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

async function getSearchSchools(searchValue) {
    const result = await axios({
        method: 'get',
        url: 'http://universities.hipolabs.com/search',
        params: {
            name: searchValue,
            country: 'United States'
        }
    });
    return result.data;
}

const useSearch = (searchQuery) => {
    const [searchResults, setSearchResults] = useState(null);
    const loaded = useRef(false);
    useEffect(() => {
        if (!loaded.current) {
        const getAndSetSearchResults = async () => {
                const fetchedSearch = await getSearchSchools(searchQuery);
                setSearchResults(fetchedSearch)
                // Commented out so daycards reload when requested.
                // loaded.current = true;
            }
            getAndSetSearchResults();
        }
    }, [searchQuery])
    return searchResults;
}

export default useSearch;