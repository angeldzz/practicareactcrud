import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from "react-router-dom";
export default class CreateDepartamento extends Component {
    url = Global.urlDepartamentos
    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()
    createDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),   
            nombre: this.cajaNombre.current.value,   
            localidad: this.cajaLocalidad.current.value    
        }
        let request = "api/Departamentos"
        axios.post(this.url + request, departamento).then(response => {
            console.log("Departamento Creado")
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label>Introduzca Numero</label>
                    <input type="text" ref={this.cajaNumero} />
                    <label>Introduzca Nombre</label>
                    <input type="text" ref={this.cajaNombre} />
                    <label>Introduzca Localidad</label>
                    <input type="text" ref={this.cajaLocalidad} />
                    <button onClick={this.createDepartamento}>Crear Departamento</button>
                </form>
            </div>
        )
    }
}
