import React, { Component } from 'react'
import { POSTS } from "../api/api";
import Moment from "react-moment";
import { Link , withRouter } from 'react-router-dom';

class Business extends Component {
    _isMounted = false

    state = {
        items: []
    }

    async getitems() {
        this._isMounted = true 

        await fetch(POSTS)
            .then(res => res.json())
            .then(data => {
                if(this._isMounted) {
                    this.setState({
                        items: data.posts.filter(fl => fl.terms.category.Business).slice(0,3)
                    })
                }
            })
    }

    componentDidMount() {
        this.getitems()
    }

    componentWillUnmount() {
        this._isMounted = false
      }

    render() {

        const { items } = this.state

        const lists = items.map((tr) => (
            <div className="post-entry-2 d-flex" key={tr.ID}>
                <div 
                    className="thumbnail" 
                    style={{
                        backgroundImage: "url("+ tr.featured_image +")",
                        cursor: 'pointer'
                    }}
                    onClick={() => this.props.history.push(`/blog/${tr.slug}`)}
                ></div>
                <div className="contents">
                    <h2><Link to={`/blog/${tr.slug}`}>{tr.title}</Link></h2>
                    <p className="mb-3" dangerouslySetInnerHTML={{__html: tr.excerpt.slice(0,100)}} />
                    <div className="post-meta">
                        <span className="date-read"><Moment format="MMM DD">{tr.date}</Moment></span>
                    </div>
                </div>
            </div>
        ))

        return (
                <div className="col-lg-6">
                    <div className="section-title">
                        <h2>Business</h2>
                    </div>

                    {lists}
                </div>
        )
    }
}

export default withRouter(Business)