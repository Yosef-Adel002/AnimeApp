import React from 'react'
import classes from './pages/Detailes.module.css'
import YouTube from 'react-youtube';
const Details = (anime) => {
    const opts= {
        height: "390",
        width: "100%"
    }
    return (
        <div>
            
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

export default Details
