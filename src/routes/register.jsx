import {Footer,Navbar} from '../Header.jsx'
import '../index.css'


export function Register (){


    return (
        <>
            <Navbar />

                <div className='div-formulario'>
                        <h1 className='cbrn'>cbrn</h1>
                    <form className='formulario'>
                        <h2>Ingresa tus datos</h2>
                        <label htmlFor='username'>Nombre completo:</label>
                        <input type="text" id="username" name="username" placeholder='nombre y apellidos' required/>
                        
                        <label htmlFor='password'>Direccion de correo:</label>
                        <input type="text" id="correo" name="password" placeholder='correo electronico' required/>

                        <label htmlFor='password'>Direccion:</label>
                        <input type="email" id="direccion" name="password" placeholder='direccion domicilio' required/>

                      

                        <label htmlFor='password'>Contraseña:</label>
                        <input type="text" id="contraseña" name="password" placeholder='digite su contraseña' required/>
                
                        <button className='btn-iniciar' type='submit'>Registrarme</button>

                        
                        
                    </form>
                </div>

            <Footer />
        </>
    )
}


export default Register;