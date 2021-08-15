import React, {useReducer} from "react";
import '../css/CDU.css';

const initState = {login:true,
    user:false,
password:false,
recordar:false};

export default function CDU(props) {

    const reLabels = (state, action) => {
        switch (action.type){
            case "user":
                return{user: !state.user}
            case "password":
                return{password: !state.password}
            case "recordar":
                return{recordar: !state.recordar}
            case "login":
                return{login: !state.login}
            default:
                break;
        }
    }
    const [labels, diskpatch] = useReducer(reLabels, initState)

    const login = () => {
        return(
            <div className='d-flex'>
                <div className={props.modoDia ? ' col-6 formcbgd':'col-6 formcbgn'}>
                    <div className='text-center titleStyle'>
                        <br/>
                        <br/>
                        <span><b>Inicio de sesion</b></span>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <form className='was-validated' action="">
                        <div className='form-group'>
                            <input type="email" className='form-control' placeholder='Nombre de usuario/Email'
                                   id='email'/>
                            <label htmlFor='email'></label>
                        </div>
                        <div className='form-group'>
                            <input type="password" className='form-control' placeholder='Contraseña'
                                   id='pass'/>
                            <label htmlFor='pass'></label>
                        </div>
                        <br/>
                        <div className=''>
                            <button type='button' className='btn-success '>Entrar</button>
                        </div>
                        <br/>
                        <br/>
                    </form>
                </div>
                <div className='col-5 container text-center text-primary'>
                    b
                </div>
            </div>
        )
    }
    const register = () =>{
        return(
            <div>

            </div>
        )
    }

    return(
        <div className={props.modoDia? 'bgcd':'bgcn'}>
            <br/>
            <br/>
            <br/>
            <div className={props.modoDia ? 'container bgbd':'container bgbn'}>
                {labels.login ? login():register()}
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}