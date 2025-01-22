import Footer from '../components/Footer';
import resume from '../assets/resume.pdf';

export default function Resume() {
    return (
        <div>
            <h2>My resume</h2>
            <p>
                Download my <a href={resume}> resume. </a>
            </p>
            <h3 style={{ textAlign: "left" }}> Front-end knowledge </h3>
            <ul style={{ textAlign: "left" }}> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>

            </ul>
            <h3 style={{ textAlign: "left" }}> Back-end knowledge </h3>
            <ul style={{ textAlign: "left" }}>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>Postgres</li>
            </ul>

            <Footer />
        </div>
    );
}
