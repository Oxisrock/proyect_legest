import React, { Component } from 'react'

class Search extends Component {
  render() {
    return(
  <div className='row'>
		<div className="col-md-12">
            <div className="input-group" id="adv-search">
                <input type="text" className="form-control" placeholder="Buscar" />
                <div className="input-group-btn">
                    <div className="btn-group" role="group">
                        <div className="dropdown dropdown-lg">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></button>
                            <div className="dropdown-menu dropdown-menu-right" role="menu">
                                <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                    <label for="filter">Filtra por</label>
                                    <select className="form-control">
                                        <option value="0" selected>Todos</option>
                                        <option value="1">Abogados</option>
                                        <option value="2">Programadores</option>
                                        <option value="3">Diseñadores</option>
                                        <option value="4">Comercios</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="contain">Nombre de usuario o Correo </label>
                                    <input className="form-control" type="text" />
                                  </div>
                                  <div className="form-group">
                                    <label for="contain">Descripcion</label>
                                    <input className="form-control" type="text" />
                                  </div>
                                  <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                </form>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Search
