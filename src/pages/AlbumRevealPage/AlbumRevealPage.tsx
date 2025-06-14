import './AlbumRevealPage.css'
const AlbumRevealPage = () => {
    return (
        <main>
            <h2>Album Reveal</h2>
            <div id='album-container' className='shadow-effect '>
                {/*   <div className='album-cover'>
                    <img src='https://via.placeholder.com/300' alt='Album Cover' />
                </div> */}
                <img id='album-cover' src='public/images/album-photos/album-cover.png' alt='Album Cover' />
                <img id='parental-advisory-logo' src='public/images/album-photos/parental-advisory-icon.svg' alt='Parental Advisory Logo' />
                <h2>Chloe's indified starter pack</h2>

            </div>
        </main>
    );
};

export default AlbumRevealPage;