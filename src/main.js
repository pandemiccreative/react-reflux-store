import React from 'react';
import ReactDOM from 'react-dom';
import './less/core.less';
import jQuery from 'jquery/dist/jquery';
import 'bootstrap-webpack';
import NavBar from './components/nav/NavBar.jsx';

let navLinks = [
  {
    title: "Home",
    href: "#"
  },
  {
    title: "Courses",
    href: "#"
  },
  {
    title: "Blog",
    href: "#"
  }
];

ReactDOM.render(<NavBar bgColor='red' titleColor='white' linkColor='yellow' navData={navLinks} />, document.querySelector('.react-nav'));
