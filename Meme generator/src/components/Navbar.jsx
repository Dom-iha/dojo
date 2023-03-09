

import troll from '../images/troll-face.svg'


function Navbar () {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={troll}/>
                <h3>Meme Generator</h3>
            </div>
            
            <h3>React Course - Project 3</h3>
        </nav>
    )
}

export default Navbar