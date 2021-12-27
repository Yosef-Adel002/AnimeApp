import React from 'react'
import classes from './AnimeCard.module.css'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
const AnimeCard = ({anime}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const animeHandeler = ()=>{
        dispatch({type:"setAnime",value: anime})
        history.push(`/Detailes/:${anime.attributes.slug}`)
    }

    return (
        <div className={classes.card} onClick={animeHandeler}>
            <div className={classes.img}>
                <img
                    src={anime.attributes.posterImage.original}
                
                />
            </div>
            <div className={classes.details}>
                <h3>{anime.attributes.slug}</h3>
            </div>
           
        </div>
    )
}

export default AnimeCard
