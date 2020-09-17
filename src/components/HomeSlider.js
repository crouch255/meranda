import React, { Component } from "react";
import { POSTS } from "../api/api";
import Slider from "react-slick";
import Moment from "react-moment";
import { Link , withRouter } from "react-router-dom";
import Loading from "./Loading";

class HomeSlider extends Component {
  state = {
    items: [],
  };

  async getPosts() {
    await fetch(POSTS)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data.posts.slice(0,2),
        });
      });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { items } = this.state;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      responsive: [
        {
          breakpoint: 481,
          settings: {
            arrows: false
          }
        }
      ]
    };

    return (
      <div className="site-section py-0">
        <div className="owl-carousel hero-slide owl-style slider-slick">
            {
              items.length ? (
                <Slider {...settings}>
                  {
                    items.map((m) => (
                      <div className="site-section" key={m.ID}>
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
                  }
                </Slider>
              ) : (
                <Loading />
              )
            }
        </div>
      </div>
    );
  }
}

export default withRouter(HomeSlider)