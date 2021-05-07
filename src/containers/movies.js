import React,{useState} from 'react';
import RecipeReviewCard from "../components/CardMovie";
import IconLabelTabs from "../components/MovieListSort";
import FloatingActionButtons from "../components/PageNumber";
import "../css/pageMovie.css";
import { bindActionCreators } from "redux";
import {actions} from '../actionsConst/actionCreater'
import { connect, useSelector } from "react-redux";

function MOVIES (props) {
    

    return (
        
        <div id="Movie-Page">
            <div id="sort-bar">
                <IconLabelTabs sorts={props.actionController} /> 
            </div>
            <div className="list-container">
            <RecipeReviewCard curPage={props.curPage} poster={props.moviePosters} likes={props.actionController}/>
            </div>
            
            <div className="pagination">
                <FloatingActionButtons pages={props.actionController} pageNumber={props.page} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      ...state
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actionController: bindActionCreators({ ...actions }, dispatch)
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MOVIES);
// export default MOVIES;
  
