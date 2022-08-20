import React from 'react';
import UltimoProducto from './UltimoProducto';
import UltimoUsuario from './UltimoUsuario';

function PanelUltimos() {
    return (
        <div>
            <h2>DETALLES PROD Y USER</h2>
            <p> 
                <UltimoProducto />
                <UltimoUsuario />
            </p>
        </div>
    )
}



export default PanelUltimos;