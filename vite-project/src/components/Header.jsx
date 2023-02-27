import reactLogo from '../assets/react.svg'

function Header(props) {
    return (
         <nav className={props.darkMode ? "dark": ""}>
            
            <img className="logo react" src={reactLogo}/>

            <h3 className="logo-title">ReactFacts</h3>
            
            <div className="toggle">
                <p className="toggle-light">Light</p>

                <div className="toggle-slider" onClick={props.toggleDarkMode}>
                    <div className="toggle-circle"></div>
                </div>

                <p className="toggle-dark">Dark</p>
            </div>
        </nav>
    )
}

export default Header