import React from 'react'
import Layout from '../Layout'
import classes from './Search.module.css'
import { useState } from 'react';
import AnimeCard from '../AnimeCard'
import SearchForm from '../SearchForm';
import axios from '../../axios'

const Serch = () => {
    const [animeList, SetAnimeList] = useState([]);
    const [search,setSearch]=useState('');

    async function fetchData(){
        var url=`/anime?filter[text]=${search}`
        const request = await axios.get(url)
        SetAnimeList(request.data.data)
        return request
    };
    const HandleSearch = e => {
		e.preventDefault();
		fetchData(search);
	}
    return (
        <div className={classes.all}>
            <div>
            <Layout/>
            </div>
            <SearchForm 
            HandleSearch={HandleSearch} 
            search={search}
            SetSearch={setSearch}
            
            />
            <div className={classes.row}>
            {animeList.map(anime =>(
                    <AnimeCard anime={anime} 
                    key={anime.id} />
                ))}
            </div>
             
            
        </div>
    )
}

export default Serch
