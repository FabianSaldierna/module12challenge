import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className='container-fluid'>
            
            <div className="row">
                <div className="col-6 ">
                    <h1>Fabián</h1>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                    <ul className="nav nav-tabs mb-4">
                        <li className="nav-item">
                            <Link
                                to="/"
                                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Portfolio"
                                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Contact"
                                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Resume"
                                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul >
                </div>
            </div>
        </div>
        
    );
}

export default NavTabs;