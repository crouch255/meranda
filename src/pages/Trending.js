import React, { Component } from "react";
import { POSTS } from "../api/api";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default class Trending extends Component {
  state = {
    trends: [],
    visible: 10
  };

  async getTrends() {
    await fetch(POSTS)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          trends: data.posts.filter((fl) => fl.terms.category.Trending),
        });
      });
  }

  componentDidMount() {
    this.getTrends();
    window.scrollTo(0, 0);
  }

  loadMore = () => {
    this.setState((prev) => {
      return {
        visible: prev.visible + 10
      }
    })
  }

  render() {
    const { trends , visible } = this.state;

    const postLists = trends.length ? (
        trends.slice(0,visible).map((t) => (
            <div className="post-entry-2 d-flex flex-md-row flex-column" key={t.ID}>
              <div
                className="fght thumbnail order-md-2"
                style={{
                    backgroundImage: "url("+ t.featured_image +")"
                }}
              ></div>
              <div className="ghty contents order-md-1 pl-3 pl-md-0">
                <h2><Link to={`/blog/${t.slug}`}>{t.title}</Link></h2>
                <p className="mb-3" dangerouslySetInnerHTML={{__html: t.excerpt.slice(0,200)}} />
                <div className="post-meta">
                  <span className="date-read">
                      <Moment format="MMM DD">{t.date}</Moment>
                  </span>
                </div>
              </div>
            </div>
          ))
    ) : (
      <Loading />
    )
    
    return (
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <span className="caption d-block small">Categories</span>
                <h2>Trending</h2>
              </div>

              {postLists}

              {
                visible < trends.length && (
                  <div className="my-5">
                    <button 
                      type="button" 
                      className="btn btn-dark btn-lg btn-block py-3 rounded shadow-none"
                      onClick={this.loadMore}
                    >Load More</button>
                  </div>
                )
              }


            </div>
          </div>
        </div>
      </div>
    );
  }
}
