import React from 'react'
import RecipeReviewCard from "../components/CardMovie"
import IconLabelTabs from "../components/MovieListSort"
import FloatingActionButtons from "../components/PageNumber"
import "../css/pageMovie.css"


function MOVIES () {
    return (
        
        <div>
            <div id="sort-bar">
                <IconLabelTabs/> 
            </div>
            <div className="list-container">
            <RecipeReviewCard/>
            {/* <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/> */}
            </div>
            
            <div className="pagination">
                <FloatingActionButtons/>
            </div>
        </div>
    )
}

export default MOVIES;