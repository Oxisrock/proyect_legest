import React, { Component } from 'react'

class Register extends Component {
  render () {
      return(
        <form class="form-signin">
        <div classNameName='container'>
          <div className='col-md-4 col-md-offset-4'>
            <div class="panel panel-default">
                <div class="panel-body">
                <h3 className="text-center">
                    SIGN UP</h3>
                <form className="form form-signup" role="form">

                  <div className="form-group">
                      <div className="input-group">
                          <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                          <input type="text" className="form-control" placeholder="Username" />
                      </div>
                  </div>

                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-home"></span></span>
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span></span>
                        <input type="text" className="form-control" placeholder="Age" />
                    </div>
                </div>


              </form>

            <a href="" className="btn btn-sm btn-primary btn-block" role="button">
                SUBMIT</a>
          </div>
        </div>
      </div>
    </div>
  </form>
      )
  }
}
export default Register
