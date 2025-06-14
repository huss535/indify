import './AlbumRevealPage.css'
const AlbumRevealPage = () => {
    return (
        <main>



            <h1 className='user-info-header'>
                <span>Indify</span>
                Chloe
                <span>Present</span>

            </h1>


            <div id='album-container' className='shadow-effect '>
                {/*   <div className='album-cover'>
                    <img src='https://via.placeholder.com/300' alt='Album Cover' />
                </div> */}
                <img id='album-cover' src='public/images/album-photos/album-cover.png' alt='Album Cover' />
                <img id='parental-advisory-logo' src='public/images/album-photos/parental-advisory-icon.svg' alt='Parental Advisory Logo' />
                <h2>Chloe's indified starter pack</h2>

            </div>

            <button >Analyze</button>
        </main>
    );
};

export default AlbumRevealPage;