import "./LandingPage.css"

const LandingPage = () => {


    return (



        <main id="intro-page">
            <div className="striped-graphics-container"></div>

            <h1>
                <span>i</span>
                <span>N</span>
                <span>d</span>
                <span>I</span>
                <span>F</span>
                <span>Y</span>
            </h1>


            {/*             <img id="intro-graphic-1" src="public/images/intro-graphic-1.png" alt="Intro Graphic 1" />
 */}
            <p id="intro-subtitle">in-dih-fy (verb) <br />
                discovering up-and-coming artists before they blow up </p>


            <div id="intro-cta">
                <p>Link your spotify account</p>
                <p>Get insights on your music</p>
                <p>Find new artists</p>
            </div>

            <button>Link Spotify</button>


        </main>

    );

}

export default LandingPage;