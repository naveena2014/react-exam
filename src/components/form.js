import React from "react";
import "../styles/form.css"
import {AiOutlineGoogle} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
 function Form(){
    return(
        <div className="main">
            <div className="form">
                <div>
                <h1 className="h1">Login</h1>
            <p className="p">Doesn't have an acount yet? <a href="Sign up" target="_blank">Sign up</a></p>
            </div>
            <div>
                <label className="label1">Email address</label>
                </div>
                <div>
                <input className="inp1" type="text" placeholder="you@example.com" />
            </div>
            <div className="forget">
                <label className="label2">Password </label><a href="Forget password" target="blank">Forget password</a>
             
            </div>
            <div>
                <input className="inp2" type="text" placeholder="enter 6 character or more"/>
            </div>
            <div className="check">
                <input type="checkbox"/><h6>Remember</h6>
            </div>
            <div>
         
            </div>
            <div>
                <button className="btn1">Login</button>
            </div>
            <div>--------or login with---------</div>
            <div className="but">
            <button className="btn2"><AiOutlineGoogle/>Google</button>
            <button className="btn3"><FiFacebook/>Facebook</button>
            </div>


            </div>
            <div className="imgg">
                <img className="img1" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=""></img>
            </div>

        </div>
    )
 }
 export default Form;
