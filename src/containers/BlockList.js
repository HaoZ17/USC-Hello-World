import React from "react"
import { connect } from "react-redux"
import Card from "../components/Card"
import {actions} from '../actionsConst/actionCreater'
import { bindActionCreators } from "redux";
import { makeStyles } from '@material-ui/core/styles';
import "../css/blockList.css"

// const useStyles = makeStyles((theme) => ({
//     root: {
//     //   maxWidth: 345,
//       // maxWidth : 500,
//       display: "flex",
//       flexDirection: "row"
//     },
    
//   }));

class BlockList extends React.Component {
    render() {
        return (
            <>  
                <div className = "blockList">
                    {this.props.currList.length !== 0 
                        ? this.props.currList.map( (item) => <Card content = {item}/>) 
                        : <div> <p>WooHoo!! You Like Everything! There are no movies you don't like</p> </div>}
                </div> 
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const blockListIDs = Array.from(state.blockList.keys())
    // const blockListPosters = blockListIDs.map(item => state.moviePosters.get(item))
    // console.log(blockListPosters)

    // return {
    //     currList : blockListIDs,
    // }
    const blockListContents = blockListIDs.map(item => {
        return {
            id: item,
            poster : state.moviePosters.get(item),
            backdrop : state.movieBackdrops.get(item)
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