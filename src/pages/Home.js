import React, { Component } from "react";
import Business from "../components/Business";
import EditorPick from "../components/EditorPick";
import HomeSlider from "../components/HomeSlider";
import OneGrid from "../components/OneGrid";
import Design from "../components/Design";
import Trending from "../components/Trending";
import RecentNews from "../components/RecentNews";

export default class Home extends Component {
  render() {
    return (
      <>
        <HomeSlider />

        <div className="site-section">
          <div className="container">
            <div className="row">
              <EditorPick />
              <Trending />
            </div>
          </div>
        </div>

        <OneGrid />

        <div className="site-section">
          <div className="container">
            <div className="row">
              <Design />
              <Business />
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <RecentNews />              
            </div>
          </div>
        </div>
      </>
    );
  }
}
