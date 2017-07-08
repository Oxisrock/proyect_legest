import React, { Component } from 'react'
import { Link } from 'react-router'
class FormLogin extends Component {
  render () {
    return (
      					 <div className="row">
      							<div className="col-md-14">
      								Login via
      								<div className="social-buttons">
      									<a href="#" className="btn btn-fb"><span className="fa fa-facebook"></span> Facebook</a>
      									<a href="#" className="btn btn-twitter"><span className="fa fa-twitter"></span>Twitter</a>
      								</div>
                                      or
      								 <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
      										<div className="form-group">
      											 <label className="sr-only" for="exampleInputEmail2">Email address</label>
      											 <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
      										</div>
      										<div className="form-group">
      											 <label className="sr-only" for="exampleInputPassword2">Password</label>
      											 <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                                   <div className="help-block text-right"><a href="">Forget the password ?</a></div>
      										</div>
      										<div className="form-group">
      											 <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      										</div>
      										<div className="checkbox">
      											 <label>
      											 <input type="checkbox" /> keep me logged-in
      											 </label>
      										</div>
      								 </form>
      							</div>
      							<div className="bottom text-center">
      								<Link to='Register' className='btn btn-primary'>New here ? <b>Join Us</b></Link>
      							</div>
      					 </div>
    )
  }
}

export default FormLogin
