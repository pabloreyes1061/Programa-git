//////////////////////ERROR
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Header.css'


function Header() {
  
  return (
    <header>
      <nav className="nav">
            <div className="logo">
            <img src={reactLogo} className="logo react" alt="React logo" /></div>

              
            <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/store">Tienda</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="/login">Registros</a></li>
            </ul>
      </nav>
        
            <div className="header__div glass-efect"><h2>Lino blanco </h2><a href="../loggin.html">Comprar ahora</a></div>
    </header>
  )
}

export default Header;




export function Navbar(){
return(
        <nav className="nav">
            <div className="logo">
            <img src={reactLogo} className="logo react" alt="React logo" /></div>

              
            <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/store">Tienda</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="/login">Registro</a></li>
            </ul>
        </nav>
        )
}        


export function Section() {
  
  return (
    <>
      <div className='section-fotos'>

        <img src="../img/2.png" alt="" />

        <img src="../img/3.png" alt="" />

        <img src="../img/4.png" alt="" />

      </div>
    </>
  )
}

export function Footer() {
  
  return (
    <footer>
      
      <h3>Lino Blanco</h3>

      <ul>
        <li>Tiendas</li>
        <li>Contactanos</li>
        <li>Sobre nosotros</li>
        <li>Pregunta por nuestros creditos</li>
      </ul>

    </footer>
  )
}



// imagen react y vite

// <div>
//         <a href="https://vitejs.dev" target="">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>