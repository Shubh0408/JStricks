import React, { Component } from "react";
import "./error.css";
import error from "../../assets/error.gif";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <html id="error-body">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <h1 className="error-h1">𝟰𝟬𝟰</h1>
                <div className="error-img">
                    {/* <img src={error} alt="errorimage" /> */}
                </div>                
                <p className="span-head"><strong>Looks like you're lost</strong> <br />the page you are looking for is not available!</p>
                <div class="col-md-12 text-center">
                    <Link to="http://localhost:3000/"><button type="button" class="btn btn-success btn-lg">Go To Home</button></Link>
                </div>
            </html>
        )
    }
}