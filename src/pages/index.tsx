import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMugHot, faGhost } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import SpotifyPlayer from 'react-spotify-player';

//TODO: add type for SpotifyPlayer

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const Home: NextPage = () => {

  const router  = useRouter();

  return(  
  <>
    <Head>
      <title>World Domination Committee</title>
      <meta name="description" content="Generated by create-t3-app"/>
      <link rel="icon" href="/images/wdc cover v04.png"/>
    </Head>

    <main className="bg-[#000C02]">
      <header>
        <h1 className="text-[#35FF53] text-center"><span className="font-europe">W</span>
          <span>orld </span><br/><span className="font-europe">D</span><span>omination </span>
          <br/><span className="font-europe">C</span><span>ommittee</span>
        </h1>
        <nav className="block text-center">
          <a href="#home" className="text-[#1D9B2D] font-montserrat mr-16"><b>HOME</b></a>
          <a href="#about" className="text-[#1D9B2D] font-montserrat mr-16"><b>ABOUT</b></a>
          <a href="#episodes" className="text-[#1D9B2D] font-montserrat mr-16"><b>EPISODES</b></a>
          <a href="#patreon" className="text-[#1D9B2D] font-montserrat mr-16"><b>PATREON</b></a>
          <a href="#contact" className="text-[#1D9B2D] font-montserrat mr-16"><b>CONTACT</b></a>
        </nav>
      </header>
      <section>
        <div className="h-[450px] mt-8 mx-12 pr-24">
          <div className="float-left mr-8">
            <Image src="/images/wdc cover v04.png" alt="World Domination Committee logo with a demon repersented with green in a black background" layout="fixed" width="500px" height="450px" />
          </div>
          <div className="mr-8">
            <p className="text-[#1A8F29]">Submit to the World Domination Committee, a monthly podcast
              hosted by neutral evil Trynn Zala and chaotic Neutral X Zala.
            </p>
            <h4 className="text-[#23C438] font-montserrat">THE VILLAIN&apos;S ARC</h4>
            <p className="text-[#1A8F29]">Follow along as the Zala cover all things villains from
              pop culture icons such as Jafaar and Hal 9000 to real-life figures
              like Dick Cheney and the Queen. The Zalas explore the villians journey as
              opposed to that of the hero, the villians alignment, and the philosophy/ethics
              behind what makes a villian.
            </p>
          </div>
        </div>
        <h4 className="text-[#23C438] font-montserrat text-center">WHAT MAKES A BAD VILLIAN GOOD, AND A GOOD VILLAIN BETTER</h4>
        <h2 className="text-[#35FF53] text-center"><span className="font-europe">Y</span><span>our </span>
          <span className="font-europe">H</span><span>osts</span>
        </h2>
        <Image src="/images/Trynn Headshot.jpg" alt="Photo of Trynn" layout="fixed" width="200px" height="250px" />
        <Image src="/images/X Headshot.jpg" alt="Photo of Trynn" layout="fixed" width="200px" height="250px" />
        <h2 className="text-[#35FF53]"><span className="font-europe">T</span><span>rynn </span>
          <span className="font-europe">Z</span><span>ala</span>
        </h2>
        <p className="text-[#1A8F29]">With the moniker of Console Cowboy, Trynn is the tech nerd of the podcast.
          Providing the ever-needed IT support as well as dark humor and frequent 
          &quot;Interesting&quot; Facts. His favorite villian is Light from <i>Death Note</i>
        </p>
        <h2 className="text-[#35FF53]"><span className="font-europe">X </span>
          <span className="font-europe">Z</span>ala
        </h2>
        <p className="text-[#1A8F29]">Known as the Transient Vampire X brings a creative and ghoulish touch
          to the podcast, balancing out Trynn&apos;s technical side with the artsy and
          macabre. Their favorite villian is the alien from <i>Annihilation</i>
        </p>
      </section>
      <section>
        <h2 className="text-[#35FF53] text-center"><span className="font-europe">L</span><span>atest </span>
          <span className="font-europe">E</span><span>pisodes</span>
        </h2>
          <SpotifyPlayer
            uri="https://open.spotify.com/show/0NtellRMzIghmTyK8TXcud?si=ac0874086f764bcc"
            size={size}
            view={view}
            theme={theme}
          />
        <span>
          <a href="#" className="text-[#1D9B2D]">VIEW BACKLOG</a>
          <a href="#" className="text-[#1D9B2D]">SUBSCRIBE</a>
          <a href="#" className="text-[#1D9B2D]">PATREON</a>
        </span>
      </section>
      <section>
        <h2 className="text-[#35FF53] text-center"><span className="font-europe">C</span><span>ontact</span></h2>
        <p className="text-[#1A8F29] text-center">BECOME A MEMBER OF THE WORLD DOMINATION COMMITTEE TODAY</p>
        <div className="social_media_icons flex">
          <FontAwesomeIcon icon={faEnvelope}  className="mr-2 text-[#35FF53]"/>
          <FontAwesomeIcon icon={faYoutube}  className="mr-2 text-[#35FF53]"/>
          <FontAwesomeIcon icon={faTwitter}  className="mr-2 text-[#35FF53]"/>
          <FontAwesomeIcon icon={faInstagram}  className="mr-2 text-[#35FF53]"/>
          <FontAwesomeIcon icon={faMugHot}  className="mr-2 text-[#35FF53]"/>
          <FontAwesomeIcon icon={faGhost}  className="mr-2 text-[#35FF53]"/>
          </div>
      </section>
      <footer className="BadBabyLogo bg-[#24C73A] w-full text-center" onClick={() => router.push("https://badbabystudios.com")}>
        <span className="inline-flex">
          <FontAwesomeIcon icon={faCopyright}  className="max-w-md max-h-16 mr-2"/>
          <h3 className="font-montserrat"><b>BAD BABY STUDIOS</b></h3>
        </span>
      </footer>
    </main>
  </>)
};

export default Home;