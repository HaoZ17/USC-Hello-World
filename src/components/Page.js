import "../css/page.css";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import CancelIcon from '@material-ui/icons/Cancel';
import MOVIES from "../containers/Movies"
import HomePage from "../containers/HomePageContainer";
import { bindActionCreators } from "redux";
import React, {useEffect, useState} from 'react'
import {actions} from '../actionsConst/actionCreater'
import { connect, useSelector } from "react-redux";

/**
 * The navgation bar will be used in 4 different pages
 * @param {Object} props -  
 * 
 */
const C_LOGO = "logo";
const C_LOGO_IMG = "logo-img";
const HOME_PAGE = "HOME";
const MOVIE_LIST_PAGE = "MOVIES";
const LIKED_LIST_PAGE = "LIKED";
const BLOCKED_LIST_PAGE = "BLOCKED";
const C_CURRENT_PAGE = "current-page";

const ROUTER_MAPPING = {
    HOME: "/",
    MOVIES: "/movies",
    LIKED: "/liked",
    BLOCKED: "/blocked"
}

function Page (props) {

    const currentPageNumber = useSelector(state => state.page);

    const currentPageContent = useSelector(state => state.curPage);

    useEffect(() => {
        props.actionController.movieListRequest();
    }, []);

    useEffect(() => {
        props.actionController.movieListRequest();
    }, [currentPageNumber]);

    const [currentTitle, setcurrentTitle] = useState(HOME_PAGE);
    
    const handleClickTitle = (e) => {
        setcurrentTitle(e.target.innerHTML.trim());
    }

    window.onresize =  (e) => {
        const pageNav = document.getElementById("page-nav");
        if (pageNav.style.display && e.target.innerWidth > 798) {
            pageNav.removeAttribute("style")
        }
    }

    const handleClickMenuIcon = (e) => {
        const pageNav = document.getElementById("page-nav");

        pageNav.style.display = "block";
    }

    const handleClickCloseMenuIcon = (e) => {
        const pageNav = document.getElementById("page-nav");

        pageNav.removeAttribute("style");
    }

    const createLink = (title, path, index) => {
        return <Link to={path} key={index}>
            <span className={currentTitle === title ? C_CURRENT_PAGE: null} onClick={handleClickTitle}> {title} </span>
        </Link>
    }

    return (
        <Router>
            <div className="page-header">
                <a className={C_LOGO} href=".">
                    {props.img ? <img src={props.img} id={C_LOGO_IMG} alt={C_LOGO_IMG}></img> : <span>Movie<span id="logo-text">World</span></span>}
                </a>
                <nav id="page-nav">
                    <ul id="page-nav-link">
                        {
                            Object.entries(ROUTER_MAPPING).map(([title, path], index) => createLink(title, path, index))
                        }
                        <CancelIcon id="mobile-menu-exit" onClick={handleClickCloseMenuIcon}/>
                    </ul>
                </nav>
                <div id="mobile-menu" onClick={handleClickMenuIcon}><AppsIcon fontSize="large"/></div>
            </div>
            <section className="page-content">
                <Switch>
                    <Route exact path={ROUTER_MAPPING[HOME_PAGE]} key={0}> <HomePage data={currentPageContent}/></Route>
                    <Route exact path={ROUTER_MAPPING[MOVIE_LIST_PAGE]} key={1}> <MOVIES /></Route>
                    <Route exact path={ROUTER_MAPPING[LIKED_LIST_PAGE]} key={2}> here to render liked page</Route>
                    <Route exact path={ROUTER_MAPPING[BLOCKED_LIST_PAGE]} key={3}> here to render blocked page</Route>
                </Switch>
            </section>
        </Router>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Page);