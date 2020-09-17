import React, { Component } from "react";

export default class ContactUs extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    tel_no: "",
    message: "",
  };

  componentDidMount() {
    window.scrollTo(0,0)
  }

  fieldOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      tel_no: "",
      message: "",
    });
  };

  render() {
    const pList = (
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title mb-5">
            <h2>Contact us</h2>
          </div>
          <form name="contact" method="POST" data-netlify="true">
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control form-control-lg"
                  value={this.state.fname}
                  onChange={this.fieldOnChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="form-control form-control-lg"
                  value={this.state.lname}
                  onChange={this.fieldOnChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                  value={this.state.email}
                  onChange={this.fieldOnChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="tel_no">Tel. Number</label>
                <input
                  type="text"
                  id="tel_no"
                  name="tel_no"
                  className="form-control form-control-lg"
                  value={this.state.tel_no}
                  onChange={this.fieldOnChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="form-control"
                  value={this.state.message}
                  onChange={this.fieldOnChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                {this.state.fname &&
                this.state.lname &&
                this.state.email &&
                this.state.tel_no &&
                this.state.message ? (
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                ) : (
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-dark py-3 px-5"
                    disabled
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );

    return (
      <div className="site-section bg-light">
        <div className="container">{pList}</div>
      </div>
    );
  }
}
