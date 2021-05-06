import React from 'react'
import RecipeReviewCard from "../components/Card_Movie"
import IconLabelTabs from "../components/movie-list-sort"
import FloatingActionButtons from "../components/page_number"
import "../css/page-movie.css"


function MOVIES () {
    return (
        
        <div>
            <div id="sort-bar">
                <IconLabelTabs/> 
            </div>
            <div className="list-container">
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            </div>
            
            <div id="pagination">
                <FloatingActionButtons/>
            </div>
        </div>
    )
}

export default MOVIES;