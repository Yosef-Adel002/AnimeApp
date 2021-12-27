import React from 'react'
import { useState, useEffect} from 'react';
import classes from "./Layout.module.css"
import { getAuth, signOut  } from "firebase/auth";
import { useHistory } from "react-router-dom";
import {  useDispatch } from 'react-redux';
const auth = getAuth();
const Layout = () => {
    const history = useHistory();
    const [login, setLogin]=useState(true)
    const [bur,setBur]= useState(false)
    
    const dispatch = useDispatch();



    const userHandeller = ()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setLogin(true);
            }else{
                setLogin(false)
            }
        })
        
    }
  

    useEffect(()=>{
        userHandeller();
        
        
    },[])
    
    const clickHandeller = (e)=>{
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });

          setLogin(false)
          
    }
    const clickloginHandeller = ()=>{
        history.push("/login")
    }
    const barHandeler = ()=>{
        setBur(!bur)
        
    }

    const animeHandeler = ()=>{
        dispatch({type: "Anime"})
        setBur(false)
        history.push("/Home")
    }
    const topAnimeHandeler = ()=>{
        dispatch({type: "Top Anime"})
        setBur(false)
        history.push("/Home")
    }

    const mangaHandeler = ()=>{
        dispatch({type: "Manga"})
        setBur(false)
        history.push("/Home")
    }
    const topMangaHandeler = ()=>{
        dispatch({type: "Top Manga"})
        setBur(false)
        history.push("/Home")
    }
    const searchHandeler =()=>{
        history.push("/search")
        setBur(false)
    }
    return (
        <div className={classes.Layout}>
            <nav className={classes.navBar}>
           
                <div className={classes.Brand}>
                    <h3>Anime</h3>
                </div>

            <div onClick={barHandeler} className={classes.bur}>
                <div className={classes.line}>
                </div>
                <div className={classes.line}>
                </div>
                <div className={classes.line}>
                </div>
    
            </div>

            </nav>
            
            {
            
            bur&&
            <div className={classes.sideBar}>
               
            <div className={classes.animebtn}>
                <button onClick={topAnimeHandeler}>Top Anime</button>
                <button onClick={animeHandeler}>Anime List</button>
                
            </div>
            <div className={classes.mangabtn}>
                <button onClick={topMangaHandeler}>Top Manga</button>
                <button onClick={mangaHandeler}>Manga List</button>
                
            </div>
            <div className={classes.searchbtn}>
                <button onClick={searchHandeler}>Search</button>
            </div>
            <div className={classes.loginbtn}>
                {!login&&<button  onClick={clickloginHandeller}>Log in</button>}
                {login&&<button  onClick={clickHandeller}>Log out</button>}  
            </div>

            
        </div>
            
        }
        {bur && <div className= {classes.gg}>
            </div>}
        </div>
    )
}

export default Layout
