import React from 'react'
import classes from './Detailes.module.css'
import { useSelector } from 'react-redux'
import Layout from '../Layout';
import YouTube from 'react-youtube';
import { getAuth  } from "firebase/auth";
const auth = getAuth();
const AnimeDetaies = () => {

    const anime=  useSelector(state => state.anime);

    const opts= {
        height: "390",
        width: "100%"
    }

    return (
        <div className={classes.name}>
            <Layout/>
            <div className={classes.animeD}>
                <div className={classes.animeimage}>
                <img
                    src={anime.attributes.posterImage.original}
                
                />
                </div>
                <div className={classes.name}>
                    <h2>{anime.attributes.slug}</h2>
                    </div>  
                    
            </div>
            <div className={classes.descreption}>
                <p>{anime.attributes.description} </p>
                </div>

                <YouTube videoId={anime.attributes.youtubeVideoId} opts={opts}/>
        </div>
    )
}

export default AnimeDetaies
