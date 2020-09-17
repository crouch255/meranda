import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { POSTS } from "../api/api";

class Search extends Component {
    state = {
        items: [],
    };

    async getPosts() {

        if(this.props.location) {
            let searchText = this.props.location.state.searchText
    
            await fetch(POSTS)
              .then((res) => res.json())
              .then((data) => {

                const lists = data.posts

                this.setState({
                  items: lists.filter(f => 
                        f.title.toLowerCase().includes(searchText.toLowerCase()) ||
                        f.content.toLowerCase().includes(searchText.toLowerCase()) 

                    )
                });
              });
        }

    };
    
    componentDidMount() {
        this.getPosts();
        window.scrollTo(0,0)
    }

    componentDidUpdate(prevProps) {
        const prev = prevProps.location.state.searchText
        const next = this.props.location.state.searchText
        if(prev !== next) {
            this.getPosts()
        }
    }

    render() {
        const { items } = this.state;


        const results = items.map((p) => (
            <div className="col-12 my-4 py-4 border-top" key={p.ID}>
                <Link to={`/blog/${p.slug}`} className="text-dark font-weight-bold" style={{fontSize:'2rem'}} >
                    {p.title}
                </Link>
                <p className="mb-3 mt-1" dangerouslySetInnerHTML={{__html:p.excerpt.slice(0,100)}} />
                <button
                    type="button"
                    className="btn btn-lg btn-primary text-white rounded-sm shadow-none border-0"
                    onClick={() => this.props.history.push(`/blog/${p.slug}`)}
                >
                    Read More
                </button>
            </div>
        ))

        return (
            <div className="site-section">
                <div className="container">
                    {
                        items.length ? (
                            <>
                                <h1>
                                    You are seraching, <i className="text-danger">{this.props.location.state.searchText}</i>
                                </h1>
                                <p>Results: <strong className="text-primary">{items.length}</strong></p>

                                <div className="row">
                                    {results}
                                </div>
                            </>
                        ) : (
                            <p className="display-1 text-center py-5 my-5">404</p>
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Search)