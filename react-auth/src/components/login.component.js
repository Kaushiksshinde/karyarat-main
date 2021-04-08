/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { Component } from 'react';

import Lighting from "../images/lighting.png";
import '../style.css';
import Logo from "../images/logo.png";
import Vec from "../images/vector-image.png";

export default class Home extends Component {

    handleSubmit=e=>{
        e.preventDefault();

        const data={
            email:this.email,
            password:this.password
        }

        axios.post('http://localhost:8000/login',data).then(
            res=>{
                localStorage.setItem('token', res.data.token);
            }
        )
        .catch(
            err=>{
                console.log(err)
            }
        )
    };

    render() {
        return (
            <div class="login-box" >
            {/* <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Username"
                        onChange={e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                        onChange={e => this.password = e.target.value} />
                </div>

                <button className="btn btn-secondary btn-block">Login</button>
            </form> */}
            <img src={Lighting} className="light"/>
            <img src={Logo} className="logo"/>
                <h1 className="h1">Client Management</h1>
                <img src={Vec} className="new"/>
            
                <form className="formname">
                    <input type="text" name="username" placeholder="Username"
                        onChange={e => this.email = e.target.value}/>
                    <br/>
 
                    <a href="#">Forget password?</a>

                    <input type="text" name="password" placeholder="Password"
                        onChange={e => this.password = e.target.value}/>

                    <input type="submit" name="submit" value="Log in"/>
                </form>



            </div>
        )
    }
}
