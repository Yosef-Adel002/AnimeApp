import React from 'react'
import classes from './Hero.module.css'
import img from '../img/Bg.jpg'
import { useState ,useEffect } from 'react'
import axios from '../axios'
import AnimeCard from './AnimeCard'
import { useSelector } from 'react-redux'


const Hero = () => {
    const Data=  useSelector(state => state.data);
    const [topAnime,setTopAnime]= useState([])
    var url;
    if (Data==="Top Anime"){
        url ="/trending/anime"

    }
    if (Data==="Anime") {
        url = "anime"
    } 
    if (Data==="Top Manga"){
        url ="trending/manga"

    }
    if (Data==="Manga"){
        url ="/manga"

    }
    useEffect (()=>{
        
        async function fetchData(){
            const request = await axios.get(url)
            setTopAnime(request.data.data)
            return request
        };
        fetchData();
    },[url]) 
    return (
        <div className={classes.hero}>
            <div className={classes.banner}>
            <img 
            className={classes.homeimg}
            src= {img}
            />
            <div className={classes.bannerfade}></div>
            </div>

            <div className={classes.row}>
                <div className={classes.title}>
                <h1 >{Data}</h1>
                    </div>
                {topAnime.map(anime =>(
                    <AnimeCard anime={anime} 
                    key={anime.id} />
                ))}
                
            </div>
            

        </div>
    )
}

export default Hero
