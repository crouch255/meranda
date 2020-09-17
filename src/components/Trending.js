import React, { Component } from 'react'
import { POSTS } from "../api/api";
import Moment from "react-moment";
import { Link } from 'react-router-dom';

export default class Trending extends Component {
    state = {
        trends: []
    }

    async getTrends() {
        await fetch(POSTS)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    trends: data.posts.filter(fl => fl.terms.category.Trending).slice(0,4)
                })
            })
    }

    componentDidMount() {
        this.getTrends()
    }

    render() {

        const { trends } = this.state

        const lists = trends.map((tr,i) => (
            <div className="trend-entry d-flex" key={tr.ID}>
              <div className="number align-self-start">0{i + 1}</div>
              <div className="trend-contents">
                <h2><Link to={`/blog/${tr.slug}`}>{tr.title}</Link></h2>
                <div className="post-meta">
                  <span className="date-read"><Moment format="MMM DD">{tr.date}</Moment></span>
                </div>
              </div>
            </div>
        ))

        return (
            <div className="col-lg-4">
            <div className="section-title">
              <h2>Trending</h2>
            </div>

            {lists}
            
            <p>
              <Link to="/trending" className="more">See All Trends</Link>
            </p>

          </div>
        )
    }
}
