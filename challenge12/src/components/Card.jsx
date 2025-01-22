import github_logo from '../assets/img/github.png';

export default function Card(props) {
    return (
        <div className="col">
            <div className="contenedorcito">
            <img src={props.img} style={{ width: "100%", borderRadius: "10%" }} className='bd-placeholder-img card-img-top card-img-bottom imageRes' alt="project preview" focusable="false" /> 
                <div className='overlay'>
                    <a href={props.url1} target="_blank">Deploy</a>
                    <br />
                    <br />
                <a href={props.url2} target="_blank"><img src={github_logo} style={{ width: '30px', height: '30px' }} /></a>
                </div>
            </div>
        </div>
    );
}

/**
 * 
 * <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
 */