import Card from '../components/Card';
import Footer from '../components/Footer';
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/project4.png';
import project5 from '../assets/img/project5.png';
import project6 from '../assets/img/project6.png';

export default function Portfolio() {
    return (
        <>
        <div className='container'>
            <h2>My Portfolio</h2>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Card img={project1} url1={"https://module9challengefsm.onrender.com/"} url2={"https://github.com/FabianSaldierna/module9challenge"} />
                        <Card img={project2} url1={"https://drive.google.com/file/d/1MfdF15xpMyWNeTTIF8tcVvQCczovYqhO/view"} url2={"https://github.com/FabianSaldierna/module10challenge"} />
                        <Card img={project3} url1={"https://drive.google.com/file/d/1bcV2Ver8SGwM6H4nOdHZTWpHzn7h2x7w/view"} url2={"https://github.com/FabianSaldierna/module8challenge"} />
                        <Card img={project4} url1={"https://drive.google.com/file/d/1H602Sp5dizHXtcXDxga8KCwibel5qZ3p/view"} url2={"https://github.com/FabianSaldierna/module7Challenge"} />
                        <Card img={project5} url1={"https://mikealiaga.github.io/Michaelangelo/"} url2={"https://github.com/mikealiaga/Michaelangelo"} />
                        <Card img={project6} url1={"https://fabiansaldierna.github.io/prework-study-guide/"} url2={"https://github.com/FabianSaldierna/prework-study-guide"} />
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}
