import React from "react";
import "../styles/tickets.css"
import {IoIosRadioButtonOn} from "react-icons/io"
import {TiLeaf} from "react-icons/ti"
import {FiDollarSign} from "react-icons/fi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
function Tickets(){
    return(
        <div>
            <div className="nav">
                <div><h1>SNGR</h1></div>
                <div><h6>Product</h6></div>
                <div><h6>Features</h6></div>
                <div><h6>Pricing</h6></div>
                <div><h6>About us</h6></div>
                <div><h6>Login</h6></div>
                <div className="start"><button className="btn1">Get started for free</button></div>

            </div>
            <div className="header">
                <div><h1>Ready to get started</h1></div>
                <div><p>Choose a plan tailored to your needs</p></div>
                <div className="month"><h6>Monthly</h6><button className="btn"><IoIosRadioButtonOn/></button><h6>yearly</h6></div>

            </div>
            <div className="lite">
                <div className="get">
                    <div><h6><TiLeaf/>lite</h6></div>
                    <div><p>perfect to get started</p></div>
                    <div><FiDollarSign/>11 per seat/month</div>
                    <div><button>Try 7 days for free</button></div>
                    <div><h6>Lite includes</h6></div>
                    <div><h6>CMS integration</h6></div>
                    <div><h6>Email &SMS reminders</h6></div>
                    <div><h6>Customer support 24/7</h6></div>
                    <div><button>See all features</button></div>

                </div>
                <div className="get">
                    <div><h6><AiOutlineFundProjectionScreen/></h6></div>
                    <div><p>Best for professionals</p></div>
                    <div><FiDollarSign/>19 per seat/month</div>
                    <div><button>Get started</button></div>
                    <div><h6>Everything in Lite,plus</h6></div>
                    <div><h6>advanced analytics</h6></div>
                    <div><h6>100+ integration</h6></div>
                    <div><h6>Chat widget</h6></div>
                    <div><h6>Templates library</h6></div>

                </div>
                <div className="tool">
                    <div><h6>Ultimate</h6></div>
                    <div><p>Toolset for hand players</p></div>
                    <div><FiDollarSign/>35 per seat/month</div>
                    <div><button>get started</button></div>
                    <div><h6>Everything in pro plus</h6></div>
                    <div><h6>Daily performance reports</h6></div>
                    <div><h6>Dediacated assistant</h6></div>
                    <div><h6>Artificial intelligence</h6></div>
                    <div><h6>Marketing tools and automations</h6></div>
                    <div><button>See all features</button></div>
                </div>





            </div>

        </div>
    )
}
export default Tickets;