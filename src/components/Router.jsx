import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Departamentos from './Departamentos';
import CreateDepartamento from './CreateDepartamento';
import MenuRutas from '../components/MenuRutas'
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path='/' element={<Departamentos />} />
                    <Route path='/createDepartamento' element={<CreateDepartamento />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
