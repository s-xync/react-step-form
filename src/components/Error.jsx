import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Error extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Error" />
          <h1>Error During Submission</h1>
          <p>
            Something went wrong. Maybe the endpoint was deactivated by{" "}
            <a
              href="https://requestbin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              requestbin
            </a>
            .
          </p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Error;
