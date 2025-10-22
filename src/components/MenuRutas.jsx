import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
        <li><NavLink to="/">Departamentos</NavLink></li>
        <li><NavLink to="/createDepartamento">Create Departamentos</NavLink></li>
        </ul>
      </div>
    )
  }
}
