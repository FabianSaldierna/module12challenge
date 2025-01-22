import Logos from '../components/Logos';

export default function About() {
    return (
        <div>
            <h2 className='mb-3'>About me </h2>
            <p>
                My name is Fabian Saldierna and I'm 38 years old.
            </p> 
            <p> 
                I currently live in Mexico City and I studied Electronic Systems Engineering. I work at Mexico's Central Bank as a server admin for about 4 years and I really like my job. 
                My area oversees a dozen linux servers and It's been very interesting learning wow to monitor, keep them up to date and hardened  to prevent any cyber attack. We also watch over some finantial applications that live in our servers.
            </p>
            <p>
                I have been working at the same Institution since I graduated 16 years ago, however I used to be a network admin. It was a very cool job where I used to manage many different technologies: from switches, routers and firewalls, to the SMTP server,
                DNS, load balancers and traffic shapers.
            </p>
            <p>
                I studied Electronic Systems Engineering. I live in Mexico City and I'm currently learning how to code web applications.
            </p>
            <Logos />
        </div>
    );
}
