import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id="page-top">
        <Header></Header>
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto mb-3">AlfaisalSpaceX</h1>
                        <Link className="btn btn-primary" to="/master">Master Log</Link>
                    </div>
                </div>
            </div>
        </header>
      </div>
    )
  }
}
