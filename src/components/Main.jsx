import { Component } from "react";
import Movie from "./Movie";


class Main extends Component {
    state = {
        HarryPotter: [],
        LordOfTheRing: [],
        FastFurious: []
       };

    request = async (endpoint, stato) => {
        try {
          const response = await fetch(endpoint);
          const data = await response.json();
          this.setState({[stato]: data.Search });
        } catch (error) {
          console.error(error);
        }
      };

      componentDidMount() {
        this.request("https://www.omdbapi.com/?apikey=f7e930c3&s=harry%20potter&type=movie", "HarryPotter");
        this.request("https://www.omdbapi.com/?apikey=f7e930c3&s=lord%20of%20the%20rings&type=movie", "LordOfTheRing");
        this.request("https://www.omdbapi.com/?apikey=f7e930c3&s=Fast&Furious&type=movie", "FastFurious");
      }

    render() {
      return (
            <div className="container-fluid px-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <div className="dropdown ml-4 mt-1  tvs">
                    <button className="btn btn-secondary btn-sm dropdown-toggle rounded-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor: '#221f1f'}}>
                    Genres &nbsp;
                    </button>
                    <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                    <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                    <a className="dropdown-item text-white bg-dark" href="#">Thriller</a>
                    </div>
                </div>
                </div>
                <div>
                <i className="fa fa-th-large icons" />
                <i className="fa fa-th icons" />
                </div>
            </div>
            <h4>Trending Now</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 mt-3 no-gutters text-center ">
            {this.state.HarryPotter.slice(0, 6).map(movie => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
            </div>
            <h4>Watch it Again</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 mt-3 no-gutters text-center ">
            {this.state.LordOfTheRing.slice(0, 6).map(movie => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
            </div>
            <h4>New Releases</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 mt-3 no-gutters text-center ">
            {this.state.FastFurious.slice(0, 6).map(movie => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
            </div>
            </div>
        );
     }
  }
  
  export default Main;