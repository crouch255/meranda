import React, { Component } from "react";
import { POSTS } from "../api/api";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  state = {
    post: null,
    items: []
  };

  async getPost() {
    const slug = this.props.match.params.slug;

    await fetch(POSTS + `/slug:${slug}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          post: data,
        });
      });
  }

  async getPosts() {
    await fetch(POSTS)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        items: data.posts.slice(0,6),
      });
    });
  }

  componentDidMount() {
    this.getPost();
    this.getPosts()
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.slug !== this.props.match.params.slug) {
        this.getPost()
        window.scrollTo(0, 0);
    }
  }

  render() {
    const { post , items } = this.state;

    const postList = post ? (
      <div className="col-lg-8 single-content">
        <p className="mb-5">
          <img src={post.featured_image} alt={post.title} className="img-fluid" />
        </p>
        <h1 className="mb-4">{post.title}</h1>
        <div className="post-meta d-flex mb-5">
          <div className="bio-pic mr-3">
            <img src={post.author.avatar_URL} alt="" className="img-fluidid" />
          </div>
          <div className="vcard">
            <span className="d-block">
              <a href="!#">{post.author.name}</a> in <a href="!#">News</a>
            </span>
            <span className="date-read">
                <Moment format="MMM DD">{post.date}</Moment>
            </span>
          </div>
        </div>

        <p dangerouslySetInnerHTML={{__html: post.content}} />

        <div className="pt-5">
          <p> Categories: </p>
        </div>
      </div>
    ) : null;


    const popularPosts = items.length ? (
        items.map((p,i) => (
            <div className="trend-entry d-flex" key={p.ID}>
                <div className="number align-self-start">0{i+1}</div>
                <div className="trend-contents">
                <h2>
                    <Link to={`/blog/${p.slug}`} >{p.title}</Link>
                </h2>
                <div className="post-meta">
                    <span className="date-read">
                        <Moment format="MMM DD">{p.date}</Moment>
                    </span>
                </div>
                </div>
            </div>
        ))
    ) : null

    return (
      <div className="site-section">
        <div className="container">
          <div className="row">

            {postList}

            <div className="col-lg-3 ml-auto">
              <div className="section-title">
                <h2>Recent News</h2>
              </div>
              
              {popularPosts}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
