import React from 'react';
// import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types'


export default function Navbar(props) { //initiallizing props as well else throws error
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   bg-body-tertiary=>refers to a background color defined by the Bootstrap theme. By default, it takes a background color from Bootstrap’s color palette, which is typically a light or muted shade depending on the theme you're using

    // <nav className="navbar navbar-expand-lg bg-dark"> //gives everything black
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    // {/* gives th text light */}

    //writing all the above string in js
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 

    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* creating below item to match the freak of ep12 */}
          
          {/* <li className="nav-item"> 
            <Link className="nav-link active" aria-current="page" to="/about" style={{color:'grey'}}>About</Link>
          </li> */}

          {/* <li className="nav-item"> */}
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
             {/* About=>Initially@props... */}
          {/* </li> */}
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          
          {/* <button className="btn btn-outline-success" type="submit">Search</button> (success=>green color*/}

          <button className="btn btn-outline-primary" type="submit">Search</button> 
          {/* primary=blue , danger=red color in bootstrap if don't want outline remove it just */}
        </form>

        {/* giving text-light (similarly texr-dark) class below which is given to get any text white color */}
        {/* <div className="form-check form-switch text-dark">  below is the way of text color of button depending on mode => we read it as if props.mode is light (?means chacking) use dark else light 
        ternary operator heh */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  
</nav>
  )
}

/*
Navbar.propTypes ={
    title: PropTypes.string, //title is a string (if title='3' in App.js then error)
    aboutText:PropTypes.string
} 
*/    

/*
Navbar.defaultProps={
    title:'Set title here',
    aboutText:'Set about text' //if title and aboutText not initialized from App.js then these will be shown 
    //Also valid is only one is given in App.js and other is not
}
*/

/*
Navbar.propTypes ={
    title: PropTypes.string.isRequired, //if isRequired then must pass title in App.js else throws error in browser console
    //is used defaultProps then won't create problems
    aboutText:PropTypes.string
} 
*/    
