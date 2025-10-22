import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Departamentos from './Departamentos';
import CreateDepartamento from './CreateDepartamento';
import MenuRutas from '../components/MenuRutas'
import UpdateDepartamento from './UpdateDepartamento';
export default class Router extends Component {
    render() {
        function UpdateElement() {
            let{numero,nombre,localidad} = useParams()
            return(<UpdateDepartamento numero={numero} nombre={nombre} localidad={localidad}></UpdateDepartamento>)
        }
        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path='/' element={<Departamentos />} />
                    <Route path='/createDepartamento' element={<CreateDepartamento />} />
                    <Route path='/updateDepartamento/:numero/:nombre/:localidad' element={<UpdateElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
