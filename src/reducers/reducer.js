import Actions from "../constants";

const initialState = {
    page:1,
    cur_max_page:1,
    dataMap: new Map(),
    movieIds: new Set(),
    movieSet: new Map(),
    moviePosters: new Map(),
    movieBackdrops: new Map(),
    curPage:[],
    likedList: new Set([804435, 615457]),
    blockList: new Set(),
    timeInc : true,
    voteInc : true,
    titleInc : true,
    rateInc : true
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.SAVEMOVIETOMAP:
            let mvIdupdate=new Set();
            let mvPosterUpdate=new Map(state.moviePosters);
            let mvBackdropUpdate=new Map(state.movieBackdrops);
            let movieSetUpdate=new Map(state.movieSet)
            action.payload.map((movie)=>{
                mvIdupdate.add(movie.id);
                movieSetUpdate.set(movie.id,movie);
                mvPosterUpdate.set(movie.id,Actions.IMGURL+movie.poster_path);
                mvBackdropUpdate.set(movie.id,Actions.IMGURL+movie.backdrop_path);
            })
            for(let idnum of state.movieIds){
                mvIdupdate.add(idnum)
            }
            
            return{
                ...state,
                dataMap: new Map(state.dataMap.set(state.page,action.payload)),
                movieIds: mvIdupdate,
                moviePosters: mvPosterUpdate,
                movieBackdrops: mvBackdropUpdate,
                movieSet:movieSetUpdate,
                curPage: action.payload
            }
        case Actions.SETDETAIL:
            let DetailUpdate= new Map(state.movieSet)
            DetailUpdate.set(action.payload.id,action.payload)
            return{
                ...state,
                movieSet:DetailUpdate
            }

        case Actions.NEXT_PAGE:
            if(state.page+1>state.cur_max_page){
                return{
                    ...state,
                    page: state.page+1,
                    cur_max_page: state.page+1,
                }
            }else{
                return{
                    ...state,
                    page: state.page+1
                }
            }   
        case Actions.PRE_PAGE:
            if(state.page>1){
                return{
                    ...state,
                    page:state.page-1,
                    curPage: state.dataMap.get(state.page-1)
                }
            }else{
                return {...state}
            }
        case Actions.BLOCK_PAGE:
            return{
                ...state,
                curPage:[...state.blockList]
            }
        case Actions.LIKED_PAGE:
            return{
                ...state,
                curPage:[...state.likedList]
            }
        case Actions.ADD_LIKE: //movie id
            let likedListUpdateL= state.likedList.add(action.payload);
            let blockListUpdateL= state.blockList;
            let curPageUpdateL= [];
            if(blockListUpdateL.has(action.payload)){
                blockListUpdateL.delete(action.payload)
            }
            for(let a of state.dataMap.get(state.page)){
                if(state.blockList.has(a.id)){
                    continue;
                }else{
                    curPageUpdateL.push(a);
                }
            }
            // console.log(state.curPage);
            return{
                ...state,
                likedList: likedListUpdateL,
                blockList: blockListUpdateL,
                curPage:curPageUpdateL
            }
        case Actions.ADD_BLOCK: //movie id
            let likedListUpdateB= state.likedList;
            let blockListUpdateB= state.blockList.add(action.payload);
            let curPageUpdate= [];
            if(likedListUpdateB.has(action.payload)){
                likedListUpdateB.delete(action.payload);
            }
            for(let a of state.curPage){
                if(a.id!==action.payload){
                    curPageUpdate.push(a)
                }
            }
            console.log(curPageUpdate);
            return{
                ...state,
                likedList: likedListUpdateB,
                blockList: blockListUpdateB,
                curPage: curPageUpdate
            }
        case Actions.REMOVE_LIKE:
            let likedListUpdateR= state.likedList.delete(action.payload)
            return{
                ...state,
                likedListUpdateR
            }
        case Actions.REMOVE_BLOCK:
            let blockListUpdateR = state.blockList.delete(action.payload)
            return{
                ...state,
                blockListUpdateR
            }
        case Actions.TIMESORT:
            let timeSortUpdate = state.curPage;
            timeSortUpdate.sort((a,b)=>{
                if(state.timeInc){
                    if(a.release_date<b.release_date){
                        return -1;
                    }
                    if(a.release_date>b.release_date){
                        return 1;
                    }
                    return 0;
                }else{
                    if(a.release_date<b.release_date){
                        return 1;
                    }
                    if(a.release_date>b.release_date){
                        return -1;
                    }
                    return 0;
                }
            })
            return{
                ...state,
                curPage: timeSortUpdate,
                timeInc: !state.timeInc
            }
        case Actions.VOTESORT:
            let voteSortUpdate = state.curPage;
            voteSortUpdate.sort((a,b)=>{
                if(state.voteInc){
                    if(a.vote_count<b.vote_count){
                        return -1;
                    }
                    if(a.vote_count>b.vote_count){
                        return 1;
                    }
                    return 0;
                }else{
                    if(a.vote_count<b.vote_count){
                        return 1;
                    }
                    if(a.vote_count>b.vote_count){
                        return -1;
                    }
                    return 0;
                }
            })
            return{
                ...state,
                curPage: voteSortUpdate,
                voteInc: !state.voteInc
            }
        case Actions.TITLESORT:
            let titleSortUpdate = state.curPage;
            titleSortUpdate.sort((a,b)=>{
                if(state.titleInc){
                    if(a.title<b.title){
                        return -1;
                    }
                    if(a.title>b.title){
                        return 1;
                    }
                    return 0;
                }else{
                    if(a.title<b.title){
                        return 1;
                    }
                    if(a.title>b.title){
                        return -1;
                    }
                    return 0;
                }
            })
            return{
                ...state,
                curPage: titleSortUpdate,
                titleInc: !state.titleInc
            }
        case Actions.RATESORT:
            let rateSortUpdate = state.curPage;
            rateSortUpdate.sort((a,b)=>{
                if(state.rateInc){
                    if(a.vote_average<b.vote_average){
                        return -1;
                    }
                    if(a.vote_average>b.vote_average){
                        return 1;
                    }
                    return 0;
                }else{
                    if(a.vote_average<b.vote_average){
                        return 1;
                    }
                    if(a.vote_average>b.vote_average){
                        return -1;
                    }
                    return 0;
                }
            })
            return{
                ...state,
                curPage: rateSortUpdate,
                rateInc: !state.rateInc
            }
        default:
            return { ...state };
    }
    
};

export default reducer;
