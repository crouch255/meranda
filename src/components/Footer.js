import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p>
                  Copyright &copy; {new Date().getFullYear()} All rights reserved 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
