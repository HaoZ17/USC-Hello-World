import "../css/page.css";
import {useState} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import CancelIcon from '@material-ui/icons/Cancel';
import HomePage from "../containers/HomePageContainer";

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

    const [currentPage, setCurrentPage] = useState(HOME_PAGE);
    
    const handleClickTitle = (e) => {
        setCurrentPage(e.target.innerHTML.trim());
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
            <span className={currentPage === title ? C_CURRENT_PAGE: null} onClick={handleClickTitle}> {title} </span>
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
                        <Route exact path={ROUTER_MAPPING[HOME_PAGE]} key={0}> <HomePage /></Route>
                        <Route exact path={ROUTER_MAPPING[MOVIE_LIST_PAGE]} key={1}> here to render movies page</Route>
                        <Route exact path={ROUTER_MAPPING[LIKED_LIST_PAGE]} key={2}> here to render liked page</Route>
                        <Route exact path={ROUTER_MAPPING[BLOCKED_LIST_PAGE]} key={3}> here to render blocked page</Route>
                    </Switch>
            </section>
        </Router>
    )
}

export default Page;