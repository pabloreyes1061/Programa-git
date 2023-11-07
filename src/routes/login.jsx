import {Footer,Navbar} from '../Header.jsx'
import '../index.css'


export function Login (){


    return (
        <>
            <Navbar />

                <div className='div-formulario'>
                        <h1 className='cbrn'>cbrn</h1>
                    <form className='formulario'>
                        <label htmlFor='username'>Usuario:</label>
                        <input type="text" id="username" name="username" placeholder='digita tu usuario' required/>
                        
                        <label htmlFor='password'>Contraseña:</label>
                        <input type="password" id="password" name="password" placeholder='digite su contraseña' required/>
                        
                
                        <button className='btn-iniciar' type='submit'>Iniciar sesion</button>

                        <a href="">Olvidaste contraseña?</a>
                        <a href="/register">Registrarme</a>
                        
                    </form>
                </div>

            <Footer />
        </>
    )
}


export default Login;