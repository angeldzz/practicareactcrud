import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from "react-router-dom";
export default class Departamentos extends Component {
    url = Global.urlDepartamentos;
    state = {
        departamentos: []
    }
    loadDepartamentos = () => {
        let request = "api/Departamentos"
        axios.get(this.url + request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }
    deleteDepartamento = (id) => {
        let request = "api/Departamentos/" + id
        axios.delete(this.url + request).then(()=>{
            console.log("Departamento Borrado");
            this.loadDepartamentos()
        })
    }
    componentDidMount = () => {this.loadDepartamentos()}
  render() {
    return (
      <div>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Numero</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return(
                            <tr key={index}>
                                <td>{departamento.numero}</td>
                                <td>{departamento.nombre}</td>
                                <td>{departamento.localidad}</td>
                                <td><NavLink to={`updateDepartamento/${departamento.numero}/${departamento.nombre}/${departamento.localidad}`} className='btn btn-warning'>Update</NavLink></td>
                                <td><button onClick={() => {this.deleteDepartamento(departamento.numero)}} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
