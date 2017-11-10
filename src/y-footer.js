import React, { Component } from 'react';
// import './home.css';
import './css/main.css';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-12 y-footer">
                        <div className="col-md-5 ">
                        </div>
                        <div className=" player-controls">
                            <button className="player-controls__buttons" title="Activar aleatorio">0</button>
                            <button className="player-controls__buttons" title="Anterior">0</button>
                            <button className="player-controls__buttons" title="Pausa">0</button>
                            <button className="player-controls__buttons" title="Siguiente">0</button>
                            <button className="player-controls__buttons" title="Activar repetir">0</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer