import React from "react"
import { connect } from "react-redux"
import Card from "../components/Card"
import {actions} from '../actionsConst/actionCreater'
import { bindActionCreators } from "redux";


class BlockList extends React.Component {
    render() {
        return (
            <>  
                <div className = "blockList">
                    {this.props.currLikedList 
                        ? this.props.currLikedList.map( (item) => <Card content = {item}/>) 
                        : <div> <p>WooHoo!! You Like Everything! There are no movies you don't like</p> </div>}
                </div> 
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const blockListIDs = Array.from(state.blockList.keys())
    return {
        currList : blockListIDs,
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actionController: bindActionCreators({ ...actions }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlockList)