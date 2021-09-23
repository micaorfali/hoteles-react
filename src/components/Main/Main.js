import React from 'react'
import './Main.css';
import Card from '../Card/Card';
import Loader from '../../loading.gif';


const Main = ({ isLoading, hoteles }) => {
    return (
        <>
            <div className="container">
                <br /> <br />
                <h1 className="title">Los mejores hoteles</h1>
                <h2 className="subtitle">Encontrá el hotel que mejor se adapta a vos</h2>
                {!isLoading ? (
                    hoteles.length > 0 ? (
                        <div className="columns is-multiline is-mobile">
                            {hoteles.map((hotel) =>
                                <Card hotel={hotel} key={hotel.name} />
                            )}
                        </div>
                    )
                        :
                        (<p className="subtitle"> <strong> NO HAY RESULTADOS </strong> <br/> Seguí investigando los filtros para más opciones </p>)
                ) : (
                    <div id="loader">
                        <img src={Loader} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Main