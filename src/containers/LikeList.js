import React from "react"
import { connect } from "react-redux"
import CardLike from "../components/CardLike"
import {actions} from '../actionsConst/actionCreater'
import { bindActionCreators } from "redux";
import "../css/blockList.css"

class LikeList extends React.Component {


    renderList = () => {
        return (
            <>  
                <div className = "blockList">
                    {this.props.currList.length !== 0 
                        ? this.props.currList.map( (item) => <CardLike content = {item} actionController = {this.props.actionController}/>) 
                        : <div> <p>You Do not have any thing liked yet</p> </div>}
                </div> 
            </>
        )
    }

    render() {
        return this.renderList()
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const likeListIDs = Array.from(state.likedList.keys())
    console.log(state.moviePosters)

    const likeListContents = likeListIDs.map((item, index) => {
        const itemObj = state.movieSet.get(item)
        return {
            id: item,
            index : index,
            poster : state.moviePosters.get(item),
            backdrop : state.movieBackdrops.get(item),
            title: itemObj.title,
            desc: itemObj.overview,
            date: itemObj.release_date,
            vote_count: itemObj.vote_count,
            vote_avg: itemObj.vote_average,
            popularity: itemObj.popularity,
            data : itemObj,
        }
    })
    return {
        currList : likeListContents,
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actionController: bindActionCreators({ ...actions }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LikeList)