import React, { Component } from "react";
import { POSTS } from "../api/api";
import Moment from "react-moment";
import { Link, withRouter } from "react-router-dom";

class RecentNews extends Component {
  _isMounted = false

  state = {
    items: [],
  };

  async getPosts() {
    this._isMounted = true

    await fetch(POSTS)
      .then((res) => res.json())
      .then((data) => {
        if(this._isMounted) {
          this.setState({
            items: data.posts.slice(0,6),
          });
        }
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { items } = this.state;

    const postLists = items.length ? (
        items.map((p) => (
            <div className="col-12 col-md-6" key={p.ID}>
                <div className="post-entry-2 d-flex">
                    <div
                        className="thumbnail order-md-2"
                        style={{
                            backgroundImage: "url("+ p.featured_image +")",
                            cursor: 'pointer'
                        }}
                        onClick={() => this.props.history.push(`/blog/${p.slug}`)}
                    ></div>

                    <div className="contents order-md-1 pl-3 pl-md-0">
                        <h2>
                            <Link to={`/blog/${p.slug}`}>
                                {p.title}
                            </Link>
                        </h2>
                        <p className="mb-3" dangerouslySetInnerHTML={{__html: p.excerpt.slice(0,100)}} />
                        <div className="post-meta">
                            <span className="date-read">
                                <Moment fromNow>{p.date}</Moment>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ))
    ) : null


    return (
      <div className="col-12">
        <div className="section-title">
          <h2>Recent News</h2>
        </div>

        <div className="row">
            {postLists}
        </div>
        </div>
    );
  }
}

export default withRouter(RecentNews)