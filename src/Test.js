import { bindActionCreators } from "redux";
import React from 'react'
import {actions} from './actionsConst/actionCreater'
import { connect } from "react-redux";

class Test extends React.Component {
  componentDidMount() {
    this.props.actionController.movieListRequest();
    console.log(this.props.page)
  }
  componentDidUpdate(prevProps){
    if(this.props.page > prevProps.page){
      this.props.actionController.movieListRequest();
    }
    console.log("curPage:")
    console.log(this.props.curPage)
  }

  zh=()=>{
    console.log(this.props.dataMap);
    console.log(this.props.likedList);
    console.log(this.props.blockList);
    console.log(this.props.curPage);
    console.log(this.props.moviePosters);
    console.log(this.props.movieBackdrops);
    console.log("..................................................")
  }
  render(){
    return (
      <div className="App">
          <button onClick={this.zh}>test point</button>
          <p>page mode</p>
          <button onClick={this.props.actionController.moveToPrePage}>pre</button>
          <button onClick={this.props.actionController.moveToNextPage}>next</button>
          <button onClick={this.props.actionController.moveToLikedPage}>likepage</button>
          <button onClick={this.props.actionController.moveToBlockPage}>blockpage</button>
          <p>like/block</p>
          <button onClick={()=>{this.props.actionController.addToLikedPage(804435)}}>addlike1</button>
          <button onClick={()=>{this.props.actionController.addToBlockPage(804435)}}>addblock1</button>
          <button onClick={()=>{this.props.actionController.addToLikedPage(615457)}}>addlike2</button>
          <button onClick={()=>{this.props.actionController.addToBlockPage(615457)}}>addblock2</button>
          <button onClick={()=>{this.props.actionController.removeFromLikedPage(804435)}}>rmlike1</button>
          <button onClick={()=>{this.props.actionController.removeFromBlockPage(615457)}}>rmblock2</button>
          <p>img and poster</p>
          <button onClick={()=>{console.log(this.props.moviePosters.get(804435))}}>poster</button>
          <button onClick={()=>{console.log(this.props.movieBackdrops.get(804435))}}>backDrop</button>
          <p>Sort</p>
          <button onClick={this.props.actionController.timeSort}>timeSort</button>
          <button onClick={this.props.actionController.titleSort}>titleSort</button>
          <button onClick={this.props.actionController.voteSort}>voteSort</button>
          <button onClick={this.props.actionController.rateSort}>rateSort</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieBackdrops:state.movieBackdrops,
    dataMap:state.dataMap,
    movieIds:state.movieIds,
    moviePosters:state.moviePosters,
    page:state.page,
    curPage:state.curPage,
    likedList:state.likedList,
    blockList:state.blockList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionController: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
