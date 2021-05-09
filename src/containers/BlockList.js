import React from "react"
import { connect } from "react-redux"
import CardBlock from "../components/CardBlock"
import {actions} from '../actionsConst/actionCreater'
import { bindActionCreators } from "redux";
import "../css/blockList.css"

class BlockList extends React.Component {


    renderList = () => {
        return (
            <>  
                <div className = "blockList">
                    {this.props.currList.length !== 0 
                        ? this.props.currList.map( (item) => <CardBlock content = {item} actionController = {this.props.actionController}/>) 
                        : <div> <p>WooHoo!! You Like Everything! There are no movies you don't like</p> </div>}
                </div> 
            </>
        )
    }

    render() {
        return this.renderList()
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    const blockListIDs = Array.from(state.blockList.keys())
    console.log(state.moviePosters)

    const blockListContents = blockListIDs.map((item, index) => {
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
        currList : blockListContents,
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actionController: bindActionCreators({ ...actions }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlockList)