import React, { Component } from 'react'
import { BiSearch } from 'react-icons/bi'
import { TiThMenuOutline } from 'react-icons/ti'
import { Link, withRouter } from 'react-router-dom'
import LOGO from '../assets/images/logo.png'
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr'
import { POSTS } from "../api/api";


class PageHeader extends Component 
{
    state = {
        searchText: '',
        items: []
    }

    handleOnChange = e => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()

        let text = this.state.searchText

        this.setState({
            searchText: ''
        })

        this.props.history.push({
            pathname: `/search/blog=${text}`,
            state: {
                searchText: text
            }
        })
    }

    handleFormSubmit = e => e.preventDefault()

    openMenu = () => {
        document.getElementById('sidebar_wrap').style.right = '0%'
    }

    async getPosts() {

        let text = this.state.searchText

        await fetch(POSTS)
            .then((res) => res.json())
            .then((data) => {

                const lists = data.posts

                this.setState({
                    items: lists.filter(f => f.title.toLowerCase().includes(text.toLowerCase()))
                })
            })
    }
    
    componentDidMount() {
        this.getPosts()
    }

    closeSearch = () => {
        document.getElementById('search_results').style.visibility = 'hidden'
    }

    render() {
        const { items } = this.state;

        const cssName = {
            searchShow: {
                left: 0,
                right: 0,
                zIndex: '999999',
                top: '100%',
                visibility: 'visible'
            }
        }

        return (
            <>
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                                <Link to="/" className="site-logo text-dark">
                                    <img
                                        src={LOGO}
                                        alt="Mehm Crouch"
                                        width="200"
                                    />
                                </Link>

                                <a href="!#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                                    className="icon-menu h3"></span></a>

                            </div>
                            
                            <div className="col-9 col-lg-6 ml-auto d-flex">
                                <div className="ml-md-auto top-social d-none d-lg-inline-block">
                                    <a href="!#" className="d-inline-block p-3"><GrFacebookOption /></a>
                                    <a href="!#" className="d-inline-block p-3"><GrTwitter /></a>
                                    <a href="!#" className="d-inline-block p-3"><GrInstagram /></a>
                                </div>

                                <div className="position-relative">
                                    <form 
                                        className="search-form d-inline-block"
                                        onSubmit={this.handleFormSubmit}
                                    >
                                        <div className="d-flex">
                                            <input 
                                                type="text" 
                                                className="form-control rounded-0 mr-0 border border-dark" 
                                                placeholder="Search..." 
                                                value={this.state.searchText}
                                                onChange={this.handleOnChange}
                                            />
                                            <button 
                                                type="submit" 
                                                className="btn btn-secondary rounded-0" 
                                                onClick={this.handleOnSubmit}
                                            ><BiSearch size="1rem" /></button>
                                        </div>
                                    </form>  

                                    {
                                        this.state.searchText.length >= 3 ? (
                                            <div className="position-absolute" style={cssName.searchShow} id="search_results">
                                                {
                                                    items.map((p) => (
                                                        <div className="overflow-hidden" key={p.ID}>
                                                            <button 
                                                                onClick={() => {
                                                                    this.props.history.push(`/blog/${p.slug}`)
                                                                    this.closeSearch()
                                                                }}
                                                                className="btn w-100 p-0 border-0 bg-danger rounded-0 shadow-none text-capitalize text-light"
                                                                style={{
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    fontSize: '12px'
                                                                }}
                                                            >
                                                                <img
                                                                    src={p.featured_image}
                                                                    alt=""
                                                                    width="100"
                                                                    className="pr-2 ml-n1"
                                                                />
                                                                {p.title}
                                                            </button> <br />
                                                        </div>
                                                    ))
                                                }
                                            </div> 
                                        ) : null
                                    }

                                </div>

                            </div>

                            <div className="col-3 d-block d-lg-none text-right">
                                <button className="btn shadow-none bg-transparent border-0 rounded-0 text-dark" onClick={this.openMenu} >                                    
                                    <TiThMenuOutline size="1.5rem" />                 
                                </button>
                            </div>
                        </div>
                    </div>
        
                    
                </div>

                <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block sticky-top border-bottom" role="banner">

                <div className="container">
                    <div className="d-flex align-items-center">
                    
                    <div className="mr-auto">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                        <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                            <li>
                                <Link to="/" className="nav-link text-left">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="nav-link text-left">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/trending" className="nav-link text-left">
                                    Trending
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="nav-link text-left">
                                    Contact us
                                </Link>
                            </li>
                        </ul>                                                                                                                                                                                                                                                                                         
                        </nav>

                    </div>
                    
                    </div>
                </div>

            </div>
            </>
        )
    }
}


export default withRouter(PageHeader)