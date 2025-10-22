import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from "react-router-dom";
export default class CreateDepartamento extends Component {
    url = Global.urlDepartamentos
    state = {
        status:false
    }
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
            this.setState({
                status:true
            })
            console.log("Departamento Creado")
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label className='form-label'>Introduzca Numero</label>
                    <input className='form-control' type="text" ref={this.cajaNumero} />
                    <label className='form-label'>Introduzca Nombre</label>
                    <input className='form-control' type="text" ref={this.cajaNombre} />
                    <label className='form-label'>Introduzca Localidad</label>
                    <input className='form-control' type="text" ref={this.cajaLocalidad} />
                    <button className='btn btn-primary' onClick={this.createDepartamento}>Crear Departamento</button>
                    {
                    this.state.status === true &&
                        <Navigate to="/"/>
                    }
                </form>
            </div>
        )
    }
}
