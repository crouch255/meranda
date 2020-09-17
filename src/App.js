import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Trending from './pages/Trending';
import Blog from './pages/Blog';
import Search from './pages/Search';

function App() {
  return (
    <React.Fragment>
      <Router>
        
        <SideBar />
        <PageHeader />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/trending" component={Trending} />
          <Route path="/blog/:slug" component={Blog} />
          <Route path="/search/blog=:text" component={Search} />
        </Switch>

        <Footer />
        
      </Router>
    </React.Fragment>
  )
}

export default App;
