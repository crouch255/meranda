import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { POSTS } from "../api/api";
import Moment from "react-moment";

class EditorPick extends Component {
  state = {
    items: [],
  };

  async getItems() {
    await fetch(POSTS)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data.posts,
        });
      });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { items } = this.state;

    const oneGrid = items.slice(2, 3).map((it) => (
      <div className="post-entry-1" key={it.ID}>
        <Link to={`/blog/${it.slug}`} >
          <img src={it.featured_image} alt="" className="img-fluid" />
        </Link>
        <h2>
          <Link to={`/blog/${it.slug}`} >{it.title}</Link>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: it.excerpt.slice(0,100)}} />
        <div className="post-meta">
          <span className="date-read">
            <Moment format="MMM DD">{it.date}</Moment>
          </span>
        </div>
      </div>
    ));

    const threeGrid = items.slice(3,6).map((it) => (
      <div className="post-entry-2 d-flex bg-light" key={it.ID}>
        <div 
          className="thumbnail" 
          style={{
              backgroundImage: "url("+ it.featured_image +")",
              cursor: 'pointer'
          }}
          onClick={() => this.props.history.push(`/blog/${it.slug}`)}
        />
        <div className="contents">
          <h2>
            <Link to={`/blog/${it.slug}`} >{it.title}</Link>
          </h2>
          <div className="post-meta">
            <span className="date-read">
                <Moment format="MMM DD">{it.date}</Moment>
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="col-lg-8">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Editor's Pick</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">{oneGrid}</div>

          <div className="col-md-6">{threeGrid}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditorPick)