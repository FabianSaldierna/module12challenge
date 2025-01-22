import github_logo from '../assets/img/github.png';
import linkedin_logo from '../assets/img/linkedin.png';

export default function Footer() {
    return (
        <div className="container-md mt-5">
            <div className="row">
                <div className="col" >
                    <a href="https://github.com/FabianSaldierna" target="_blank">
                        <img src={github_logo} style={{ width: '50px', height: '50px' }} className='mb-2' />
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.linkedin.com/in/fabi%C3%A1n-sm-30770211/" target="_blank">
                        <img src={linkedin_logo} style={{ width: '50px', height: '50px' }} className='mb-2' />
                    </a>
                </div>
            </div>
        </div>
    );
}