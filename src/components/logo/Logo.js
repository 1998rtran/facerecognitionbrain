import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start'}} classname='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{max : 55}} style={{ height: '150px', width: '150px'}}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}}alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}
ReactDOM.render(<Logo />, document.getElementById('root'));


export default Logo;