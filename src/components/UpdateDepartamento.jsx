import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from "react-router-dom";
export default class UpdateDepartamento extends Component {
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
        axios.put(this.url + request, departamento).then(response => {
            console.log("Departamento Cambiado")
            this.setState({status:true})
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label className='form-label'>Introduzca Numero</label>
                    <input className='form-control' defaultValue={this.props.numero} type="text" ref={this.cajaNumero} />
                    <label className='form-label'>Introduzca Nombre</label>
                    <input className='form-control' defaultValue={this.props.nombre} type="text" ref={this.cajaNombre} />
                    <label className='form-label'>Introduzca Localidad</label>
                    <input className='form-control' defaultValue={this.props.localidad} type="text" ref={this.cajaLocalidad} />
                    <button className='btn btn-warning' onClick={this.createDepartamento}>Update Departamento</button>
                </form>
                {
                    this.state.status === true &&
                    <Navigate to="/"/>
                }
            </div>
        )
    }
}