import React, { Component } from "react";
import { POSTS } from "../api/api";
import Moment from "react-moment";
import { Link, withRouter} from "react-router-dom";
import Loading from "./Loading";

class OneGrid extends Component {
  _isMounted = false

  state = {
    items: []
  };

  async getPosts() {
    this._isMounted = true

    await fetch(POSTS)
      .then((res) => res.json())
      .then((data) => {

        if(this._isMounted) {
          this.setState({
            items: data.posts.slice(0,1),
          });
        }

      });
  };

  componentDidMount() {
    this.getPosts();
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { items } = this.state

    return (
      <div className="site-section">
        <div className="">
          {
            items.length ? (
              items.map((m) => (
                <div className="" key={m.ID}>
                  <div className="container">
                    <div className="half-post-entry d-block d-lg-flex bg-light">
                      {m.featured_image && (
                        <div
                          className="img-bg"
                          style={{
                            backgroundImage: "url(" + m.featured_image + ")",
                            cursor: 'pointer'
                          }}
                          onClick={() => this.props.history.push(`/blog/${m.slug}`)}
                        />
                      )}
  
                      <div className="contents">
                        <span className="caption">Editor's Pick</span>
                        <h2>
                          <Link to={`/blog/${m.slug}`}>{m.title}</Link>
                        </h2>
  
                        <p
                          className="mb-3"
                          dangerouslySetInnerHTML={{ __html: m.excerpt }}
                        />
  
                        <div className="post-meta">
                          <span className="date-read">
                            <Moment format="MMM DD">{m.date}</Moment>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )
          }
         
        </div>
      </div>
    );
  }
}

export default withRouter(OneGrid)