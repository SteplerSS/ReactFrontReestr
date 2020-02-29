import React from "react";
import s from './Loginout.module.css'


const Loginout = (props) => {
    return (
        <div  className={s.loginout}>
            
                <div>
                    <textarea placeholder='LoginName'></textarea>
                </div>
                <div>
                <textarea placeholder='Password'></textarea>
                </div>
                <button>in/out</button>
                <div>
                    Registration
                </div>
                <div>
                    Forget??
                </div>
            
            
        </div>
    )
};
export default Loginout;