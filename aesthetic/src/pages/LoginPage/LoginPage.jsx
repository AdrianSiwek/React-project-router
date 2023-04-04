import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor="">
                <input type="text" placeholder='wpisz login' />
            </label>
            <label htmlFor="">
                <input type="password" placeholder='wpisz hasło' />
            </label>
            <button type='button'>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;