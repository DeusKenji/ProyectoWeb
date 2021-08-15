import React, {useState} from "react";
import {IconContext} from "react-icons";
import {BsSun,BsMoon} from "react-icons/bs";
import {FaShoppingCart} from "react-icons/fa";
import "./css/Header.css";

export default function Header(props){

    const modo = props.modo
    const {setLocalMode} = props

    const lightHeader = ()=>{
        return(
            <div className="btn-form">
                <IconContext.Provider value={{color:'#FFFF00'}}>
                    <BsSun onClick={setLocalMode}/>
                </IconContext.Provider>
            </div>
        );
    }
    const darkHeader = ()=>{
        return(
            <div className="btn-form">
                <IconContext.Provider value={{color:"#696969"}}>
                    <BsMoon onClick={setLocalMode}/>
                </IconContext.Provider>
            </div>
        )
    }
    const lightShoppingCart = () => {
        return(
            <div className="btn-form ">
                <IconContext.Provider value={{color:"#ffffff"}}>
                    <FaShoppingCart data-toggle="modal" data-target="#myModal"/>
                </IconContext.Provider>
            </div>
        )
    }
    const darkShoppingCart = () => {
        return(
            <div className="btn-form">
                <IconContext.Provider value={{color:"#000000"}}>
                    <FaShoppingCart data-toggle="modal" data-target="#myModal"/>
                </IconContext.Provider>
            </div>
        )
    }
    return(
        <>
            <div className={modo ? 'container-fluid d-inline-flex col-12 d-inline-block daybg':'container-fluid d-flex col-12 d-inline-block nigthbg'}>
                <div className='text-center col-8 col-lg-9 TituloIl'>
                    <span className={modo?'text-body font-weight-bold':'text-white font-weight-bold'}>DK PROJECTS</span>
                </div>
                <div className="btn-container d-inline-flex col-3 TituloIl">
                    <div className="col-1">{modo ? darkHeader():lightHeader()}</div>
                    <div className="col-1">{modo ? darkShoppingCart():lightShoppingCart()}</div>
                </div>
                <br/><br/>
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            Modal body..
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}