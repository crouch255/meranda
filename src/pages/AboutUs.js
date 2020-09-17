import React, { Component } from "react"
import IMG from '../assets/images/big_img_1.jpg'
import { FcCheckmark } from 'react-icons/fc'

export default class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    const dataList = (
      <div className="container">
        <div className="row">
          <div className="col-12 text-left">
            <div className="section-title mb-5">
              <h2>About us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p>
              <img
                src={IMG}
                alt=""
                className="img-fluid"
              />
            </p>
          </div>
          <div className="col-lg-6 pl-md-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui
              obcaecati eaque odio, alias nulla quae, aliquid, rerum
              consequuntur, quaerat blanditiis cupiditate eos doloribus dolor
              debitis! Ex eius deleniti, soluta!
            </p>
            <p>
              Facilis sit molestiae deserunt quo corporis culpa dolorum animi
              architecto illum sapiente. Asperiores, placeat animi distinctio
              provident adipisci.
            </p>
            <ul className="list-unstyled mt-5">
              <li><FcCheckmark /> Lorem ipsum dolor sit.</li>
              <li><FcCheckmark /> Cupiditate dolores rerum, consequatur!</li>
              <li><FcCheckmark /> Quia dolor molestias voluptatem?</li>
            </ul>
          </div>
        </div>
      </div>
    );

    return <div className="site-section">{dataList}</div>;
  }
}
