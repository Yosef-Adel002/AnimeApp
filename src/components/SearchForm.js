import React from 'react'
import classes from './SearchForm.module.css'
const SearchForm = (props) => {
    
    return (
        <div className={classes.form}>
            <div className={classes.container}>
            <form
            onSubmit={props.HandleSearch}
            >
                <input className={classes.search}
                 required type="search"
                  placeholder="Search for an anime..."
                  onChange={e => props.SetSearch(e.target.value)}
                   value={props.search}
                   ></input>
            </form>
            </div>
        </div>
    )
}

export default SearchForm
