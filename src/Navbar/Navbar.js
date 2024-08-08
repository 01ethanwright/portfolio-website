import './Navbar.css';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='navbarcontent'>
                <div className='logo'>
                    <a href="/" className='logo-text'>Ethan Wright</a>
                </div>
                <div className='links'>
                    <a href="/aboutme" className='link-item'>About Me</a>
                    <a href="/projects" className='link-item'>Projects</a>
                    {/* <a href="" className='link-item'>Blog</a> */}
                    <a href="/youtube" className='link-item'>YouTube</a>
                    <a href="" className='link-item-contact'>Contact</a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;