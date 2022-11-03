import type { NextPage } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMugHot, faGhost } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from "next/router";

const Home: NextPage = () => {

  const router  = useRouter();

  return(  
  <>
    <main>
      <header>
        <h1>World Domination Committee</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#episodes">Episodes</a>
          <a href="#patreon">Patreon</a>
          <a href="#contact ">Contact</a>
        </nav>
      </header>
      <section>
        <Image src="/images/wdc cover v04.png" alt="World Domination Committee logo with a demon repersented with green in a black background" layout="fixed" width="200px" height="250px" />
        <p>Follow along as the Zala cover all things villians from
          : from pop culture icons such as Jafaar and Hal 9000 to real-life figures
          like Dick Cheney and the Queen. The Zalas explore the villians journey as
          opposed to that of the hero, the villians alignment, and the philosophy/ethics
          behind what makes a villian.
        </p>
        <h4>What makes A bad villian good, and a good villain better</h4>
        <h2>Your Hosts</h2>
        <Image src="/images/Trynn Headshot.jpg" alt="Photo of Trynn" layout="fixed" width="200px" height="250px" />
        <Image src="/images/X Headshot.jpg" alt="Photo of Trynn" layout="fixed" width="200px" height="250px" />
        <h2>Trynn Zala</h2>
        <p>With the moniker of Console Cowboy, Trynn is the tech nerd of the podcast.
          Providing the ever-needed IT support as well as dark humor and frequent 
          &quot;Interesting&quot; Facts. His favorite villian is Light from <i>Death Note</i>
        </p>
        <h2>X Zala</h2>
        <p>Known as the Transient Vampire X brings a creative and ghoulish touch
          to the podcast, balancing out Trynn&apos;s technical side with the artsy and
          macabre. Their favorite villian is the alien from <i>Annihilation</i>
        </p>
      </section>
      <section>
        <h2>Latest Episodes</h2>
        <iframe src="https://player.rss.com/worlddominationcommittee/679294?theme=dark" title="The World Domination Committee" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        <span>
          <a href="#">View Backlog</a>
          <a href="#">Subscribe</a>
          <a href="#">Patreon</a>
        </span>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Become a member of the world domination committee today</p>
        <div className="social_media_icons">
          <FontAwesomeIcon icon={faEnvelope}  className="mr-2"/>
          <FontAwesomeIcon icon={faYoutube}  className="mr-2"/>
          <FontAwesomeIcon icon={faInstagram}  className="mr-2"/>
          <FontAwesomeIcon icon={faTwitter}  className="mr-2"/>
          <FontAwesomeIcon icon={faMugHot}  className="mr-2"/>
          <FontAwesomeIcon icon={faGhost}  className="mr-2"/>
          </div>
      </section>
      <footer onClick={() => router.push('https://badbabystudios.com')}className="BadBabyLogo">
        <span>
          <FontAwesomeIcon icon={faCopyright}  className="mr-2"/>
          <h3>Bad Baby Studios</h3>
        </span>
      </footer>
    </main>
  </>)
};

export default Home;