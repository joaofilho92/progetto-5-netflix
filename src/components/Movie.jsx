import { Component } from "react";

class Movie extends Component {
  render() {
    return (
        <div className="col mb-2 px-1">
            <img className="img-fluid hp1" src={this.props.src} alt="movie picture" />
        </div>
    );
  }
}
export default Movie;