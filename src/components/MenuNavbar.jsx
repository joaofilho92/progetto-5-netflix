import { Component } from "react";



class MenuNavbar extends Component {
    render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-dark nav1 " style={{backgroundColor: '#221f1f'}}>
          <a className="navbar-brand" href="#">
            <img src="/logo.png" style={{width: '100px', height: '55px'}} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link font-weight-bold tv2" href="#">TV Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">Recently Added</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="#">My List</a>
              </li>
            </ul>
            <container className="container2">
            <i class="bi bi-search search"></i>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons" />
            <i className="fa fa-user icons" />
            </container>
          </div>
        </nav>
      );
    }
  }
  
  export default MenuNavbar;