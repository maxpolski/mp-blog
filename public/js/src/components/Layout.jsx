import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return <div>
             <nav className="top-menu">
               <div className="logo">
                 <span>MP</span>
               </div>
               <ul type="none" className="menu-elements">
                 <li>Blog</li>
                 <li>About me</li>
                 <li>Projects</li>
                 <li>Sand Box</li>
               </ul>
             </nav>
             <h1>Hello World</h1>
           </div>
  }
}
