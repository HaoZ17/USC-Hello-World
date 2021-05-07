import Actions from '../constants';
import axios from "axios";


const moveToPrePage=()=>({
    type:Actions.PRE_PAGE
})

const moveToNextPage=()=>({
    type:Actions.NEXT_PAGE
})

const moveToLikedPage=()=>({
    type:Actions.LIKED_PAGE
})

const moveToBlockPage=()=>({
    type:Actions.BLOCK_PAGE
})

const addToLikedPage=(payload)=>({
    type:Actions.ADD_LIKE,
    payload
})
const addToBlockPage=(payload)=>({ //movies.id
    type:Actions.ADD_BLOCK,
    payload
})

const removeFromBlockPage=(payload)=>({ //movies.id
    type:Actions.REMOVE_BLOCK,
    payload
})
const removeFromLikedPage=(payload)=>({
    type:Actions.REMOVE_LIKE,
    payload
})
const timeSort=()=>({
    type:Actions.TIMESORT
})
const voteSort=()=>({
    type:Actions.VOTESORT
})
const titleSort=()=>({
    type:Actions.TITLESORT
})
const rateSort=()=>({
    type:Actions.RATESORT
})

const setupMovieList = (payload)=>({
    type: Actions.SAVEMOVIETOMAP,
    payload
})

const movieListRequest=()=>{
    return (dispatch,getState)=>{
        const storeData = { ...getState()};
        // console.log(storeData, "in the thunk");
        return axios.get(Actions.HTTPURL+storeData.page).then((res) => {
        // console.log(res.data.results);
        dispatch(setupMovieList(res.data.results));
        });
    };
}

const setupDetail = (payload)=>({
    type: Actions.SETDETAIL,
    payload
})

const movieDetailRequest=(page)=>{
    return (dispatch,getState)=>{
        const storeData = { ...getState()};
        // console.log(storeData, "in the thunk");
        return axios.get(Actions.MOVIEDETAL1+page+Actions.MOVIEDETAL2).then((res) => {
        // console.log(page);
        // console.log(res.data);
        dispatch(setupDetail(res.data));
        });
    };
}

export const actions = {
    movieListRequest,
    setupMovieList,
    moveToPrePage,
    moveToNextPage,
    moveToLikedPage,
    moveToBlockPage,
    addToLikedPage,
    addToBlockPage,
    removeFromBlockPage,
    removeFromLikedPage,
    timeSort,
    voteSort,
    titleSort,
    rateSort,
    setupDetail,
    movieDetailRequest
}