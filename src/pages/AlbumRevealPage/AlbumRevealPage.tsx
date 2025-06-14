import './AlbumRevealPage.css'
const AlbumRevealPage = () => {
    return (
        <main>



            <h1 className='user-info-header'>
                <span>Indify</span>
                <img src='public/images/x-icon.png' alt='X Icon' />
                Chloe
                <span>Present</span>

            </h1>


            <div id='album-container' className='shadow-effect '>

                <img id='album-cover' src='public/images/album-photos/album-cover.png' alt='Album Cover' />
                <img id='parental-advisory-logo' src='public/images/album-photos/parental-advisory-icon.svg' alt='Parental Advisory Logo' />
                <h2>Chloe's indified starter pack</h2>

            </div>

            <button >Analyze</button>
        </main>
    );
};

export default AlbumRevealPage;