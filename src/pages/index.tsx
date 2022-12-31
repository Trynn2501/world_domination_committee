import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMugHot, faGhost } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faTwitter, faInstagram, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import SpotifyPlayer from 'react-spotify-player';

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
      <link rel="icon" href="/images/wdc cover v05.jpg"/>
    </Head>

    <main className="bg-[#000C02]  caret-transparent overflow-hidden">
      <div className="mobile-display min-[481px]:hidden">
          <h1 className="text-[#35FF53] glow text-center text-5xl pt-12 mb-10 font-europe">WDC</h1>
          <div className="bg-[#24C73A] w-full h-full text-center text-xl p-4 mb-6 break-words">
            <Link href="mailto:committee@worlddomination.ca">
              <a target="_blank">
                  <h3 className="font-montserrat"><b>committee@worlddomination.ca</b></h3>
              </a>
            </Link>
          </div>
      </div>
      <div className="desktop-display">
        <header>
          <h1 className="max-[480px]:hidden text-[#35FF53] glow text-center text-5xl pt-12 mb-10"><span className="font-europe">W</span>
            <span>orld </span><br/><span className="font-europe">D</span><span>omination </span>
            <br/><span className="font-europe">C</span><span>ommittee</span>
          </h1>
          <nav className="max-[480px]:hidden block text-center text-4xl space-x-32">
            <Link href="#about"><b className="text-[#1D9B2D] font-montserrat">ABOUT</b></Link>
            <Link href="#episode"><b className="text-[#1D9B2D] font-montserrat">EPISODES</b></Link>
            <Link href="#contact"><b className="text-[#1D9B2D] font-montserrat">CONTACT</b></Link>
            <Link href="https://www.patreon.com/worlddominationcommittee"><a target="_blank"><b className="text-[#1D9B2D] font-montserrat">PATREON</b></a></Link>
          </nav>
        </header>
        <section className="min-[481px]:flex min-[481px]:h-[450px] min-[481px]:mt-12 min-[481px]:mb-8 min-[481px]:mx-12 min-[481px]:pr-24">
          <div className="min-[481px]:mr-8 max-[480px]:m-auto">
            <Image src="/images/wdc cover v05.jpg" alt="World Domination Committee logo with a demon repersented with green in a black background" layout="fixed" width="500px" height="450px" />
          </div>
          <div className="min-[481px]:mr-8 max-[480px]:text-center">
            <p className="max-[480px]:px-8 max-[480px]:text-left text-[#1A8F29] text-2xl min-[481px]:mb-16 max-[480px]:mt-8 max-[480px]:mb-8">Submit to the World Domination Committee, a monthly podcast
              hosted by neutral evil Trynn Zala and chaotic Neutral X Zala.
            </p>
            <h4 className="max-[480px]:px-8 text-[#23C438] font-montserrat text-4xl min-[481px]:mb-16 max-[480px]:mb-8">THE VILLAIN&apos;S ARC</h4>
            <p className="max-[480px]:text-left max-[480px]:px-8 text-[#1A8F29] text-2xl">Follow along as the Zalaz cover all things villains from
              pop culture icons such as Jafaar and Hal 9000 to real-life figures
              like Dick Cheney and Margaret Thatcher. The Zalas explore the villians journey as
              opposed to that of the hero, the villians alignment, and the philosophy/ethics
              behind what makes a villian.
            </p>
          </div>
        </section>
        <section>
          <h4 className="max-[480px]:px-8 text-[#23C438] font-montserrat text-center text-4xl mb-8 mt-6">WHAT MAKES A BAD VILLIAN GOOD, AND A GOOD VILLAIN BETTER?</h4>
        </section>
        <section id="about">
          <h2 className="text-[#35FF53] glow text-center text-5xl max-[480px]:mb-8"><span className="font-europe">Y</span><span>our </span>
            <span className="font-europe">H</span><span>osts</span>
          </h2>
          <div className="min-[481px]:grid min-[481px]:grid-cols-2 text-center min-[481px]:my-12 min-[481px]:mx-12 min-[481px]:px-12 min-[481px]:space-x-16">
            <div>
              <Image src="/images/Trynn Headshot.jpg" alt="Photo of Trynn" layout="fixed" width="300px" height="250px" />
              <Link href="https://trynn.tech/">
                <a target="_blank">
                  <h2 className="text-[#35FF53] text-5xl mt-6 mb-4"><span className="font-europe">T</span><span>rynn </span>
                    <span className="font-europe">Z</span><span>ala</span>
                  </h2>
                </a>
              </Link>
              <p className="max-[480px]:px-8 max-[480px]:text-left text-[#1A8F29] text-2xl max-[480px]:mb-8">With the moniker of Console Cowboy, Trynn is the tech nerd of the podcast.
                Providing the ever-needed IT support as well as dark humor and frequent 
                &quot;Interesting&quot; Facts. His favorite villian is Light from <i>Death Note</i>
              </p>
            </div>
            <div>
              <Image src="/images/X Headshot.jpg" alt="Photo of Xenyth" layout="fixed" width="300px" height="250px" />
              <Link href="https://tapas.io/series/WWDC/">
                <a target="_blank">
                  <h2 className="text-[#35FF53] text-5xl mt-6 mb-4"><span className="font-europe">X </span>
                    <span className="font-europe">Z</span>ala
                  </h2>
                </a>
              </Link>
              <p className="max-[480px]:px-8 max-[480px]:text-left text-[#1A8F29] text-2xl max-[480px]:mb-8">Known as the Transient Vampire X brings a creative and ghoulish touch
                to the podcast, balancing out Trynn&apos;s technical side with the artsy and
                macabre. Their favorite villian is the alien from <i>Annihilation</i>
              </p>
            </div>
          </div>
        </section>
        <section id="episode">
          <h2 className="text-[#35FF53] glow text-center text-5xl mb-10"><span className="font-europe">L</span><span>atest </span>
            <span className="font-europe">E</span><span>pisode</span>
          </h2>
            <SpotifyPlayer
              uri="https://open.spotify.com/show/0NtellRMzIghmTyK8TXcud?si=ac0874086f764bcc"
              size={size}
              view={view}
              theme={theme}
            />
        </section>
        <section id="contact" className="mb-12">
          <h2 className="text-[#35FF53] glow text-center text-5xl mb-8"><span className="font-europe">C</span><span>ontact</span></h2>
           <p className="max-[480px]:px-8 text-[#1A8F29] text-center text-3xl mb-12">BECOME A MEMBER OF THE WORLD DOMINATION COMMITTEE TODAY</p>
          <div className="social_media_icons flex justify-center min-[481px]:space-x-24  max-[480px]:space-x-4 min-[481px]:mb-8">
            <Link href="mailto:committee@worlddomination.ca"><a target="_blank">
              <span className="max-[480px]:hidden text-center">
                <FontAwesomeIcon icon={faEnvelope}  className="mr-2 text-[#35FF53] w-16"/>
              </span>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCS8p_KjjJELc1So8gYv7usg">
              <a target="_blank">
                <span className="text-center">
                  <FontAwesomeIcon icon={faYoutube}  className="mr-2 text-[#35FF53] w-16"/>
                </span>
              </a>
            </Link>
            <Link href="https://twitter.com/TheWDCPodcast">
              <a target="_blank">
                <span className="text-center">
                  <FontAwesomeIcon icon={faTwitter} className="max-[480px]:mr-3 mr-2 text-[#35FF53] w-16"/>
                </span>
              </a>
            </Link>
            <Link href="https://www.instagram.com/worlddominationcommittee/">
              <a target="_blank">
                <span className="text-center">
                <FontAwesomeIcon icon={faInstagram}  className="min-[481px]:mr-2 text-[#35FF53] w-16"/>
                </span>
              </a>
            </Link>
            <Link href="https://trynn.tech/">
              <a target="_blank">
                <span className="max-[480px]:hidden text-center">
                  <FontAwesomeIcon icon={faMugHot}  className="mr-2 text-[#35FF53] w-16"/>
                </span>
              </a>
            </Link>
            <Link href="https://tapas.io/series/WWDC/">
              <a target="_blank">
                <span className="max-[480px]:hidden text-center">
                  <FontAwesomeIcon icon={faGhost}  className="mr-2 text-[#35FF53] w-16"/>
                </span>
              </a>
            </Link>
            <Link href="https://www.patreon.com/worlddominationcommittee">
              <a target="_blank">
                <span className="text-center">
                  <FontAwesomeIcon icon={faPatreon}  className="max-[480px]:ml-[-12px] mr-2 text-[#35FF53] w-16"/>
                </span>
              </a>
            </Link>
            </div>
        </section>
        <footer className="BadBabyLogo bg-[#24C73A] w-full h-full text-center text-3xl">
          <Link href="https://badbabystudios.com/">
            <a target="_blank">
              <span className="inline-flex flex-row py-12">
                <FontAwesomeIcon icon={faCopyright}  className="w-8 h-8 mr-2"/>
                <h3 className="font-montserrat"><b>BAD BABY STUDIOS</b></h3>
              </span>
            </a>
          </Link>
        </footer>
      </div>
    </main>
  </>)
};

export default Home;