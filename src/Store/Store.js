const redux = require('redux');

const dataReducer = (state={data: "Top Anime", anime:""},action)=> {
    if(action.type==="Top Anime"){
        return {
            data: "Top Anime",
            anime: state.anime
        }
    }
    if(action.type==="Anime"){
        return {
            data: "Anime",
            anime: state.anime
        }
    }
    if(action.type==="Top Manga"){
        return {
            data: "Top Manga",
            anime: state.anime
        }
    }
    if(action.type==="Manga"){
        return {
            data: "Manga",
            anime: state.anime
        }
    }
    if(action.type ==="setAnime"){
        return{
            data: state.data,
            anime: action.value
        }
    }
    return state;
};

function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
const store =redux.createStore(dataReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store