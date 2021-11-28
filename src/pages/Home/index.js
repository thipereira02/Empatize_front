import React from 'react';
import {useState} from 'react';

export const HomePage = () => {
    

    const goToLogin = (navigation) => {
        navigation('/login')
    }

    return(
        <>
       <div>
           <h1>QUEM É VOCÊ NA FILA DO PÃO?</h1>
           <p> Viva a diversidade de experiências humanas através de jornadas de empatia</p>

           <button onClick={goToLogin()}>LOGIN</button>
       </div>

        

        </>
    )

}