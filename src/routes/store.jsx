import ArticulosTienda from '../tienda/tienda.js'              //
import {Footer,Navbar} from '../Header.jsx'
import PropTypes from 'prop-types';                            //


function Card (props){
    return(
        
            <div className="div-card">    
                <h2 className="card-title">{props.nombre}</h2>
                <p className="card-descripcion">{props.descripcion}</p>
                <img src={props.image} alt="" /> 
                <h3>precio</h3>
                <span>$00.000</span>
            </div>
    )
}

export function Store() {

    const articulos = ArticulosTienda.map((v) =>{
        return <Card key={v.id} nombre={v.nombre} descripcion={v.descripcion} image={v.image}
        />
    })

    return(
        <>
            <Navbar/>
                <h1 className='cbrn'>cbrn</h1>
                <div className="container-tienda">
                    {articulos} 
                </div>
            <Footer/>
        </>
    )
}

Card.propTypes = {
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    image:PropTypes.string
    
  };

  