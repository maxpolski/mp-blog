import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return <div>
             <nav className="top-menu">
               <div className="logo">
                 <span>MP</span>
               </div>
               <ul type="none" className="menu-elements">
                 <li className="color-transition"><span>Blog</span></li>
                 <li className="color-transition"><span>Projects</span></li>
                 <li className="color-transition"><span>Sand Box</span></li>
                 <li className="color-transition"><span>About me</span></li>
                 <li className="animated-cross">
                   <i></i>
                   <i></i>
                 </li>
                 <div className="float-fixer"></div>
               </ul>
               <div className="float-fixer"></div>
             </nav>
             <h1>Пример кириллицы</h1>
           </div>
  }
}
