import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='menu-hamburguer'>
        <label className="burger" htmlFor='burger'>
          <input type="checkbox" id="burger"/>
          <span></span>
          <span></span>
          <span></span>
        </label>
      
        <ul>
          <li>Home</li>
          <li>Genre</li>
          <li>Types</li>
        </ul>
      </div>

      <img className='nav-logo' src="https://storage.googleapis.com/spotify-newsroom-staging.appspot.com/1/2021/02/Spotify_Logo_RGB_Green.png" alt="Website logo" />

      <form className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>

        <input
          id="query"
          className="input"
          type="search"
          placeholder="Search anime..."
          name="searchbar"
        />
      </form>

      <ul className="quick-links">
        <li>
          <span className="material-symbols-outlined">groups</span>
          Watch2gether 
          <span className="tooltip">Watch with friends</span>
        </li>
        <li>
          <span className="material-symbols-outlined">shuffle</span>
          Random
          <span className="tooltip">Watch a random anime</span>
        </li>
        <li>
          <span className="material-symbols-outlined">menu_book</span>
          Read Manga
        </li>
      </ul>

      <div className='user-wrapper'>
        <img src="https://carrosselgeek.com.br/wp-content/uploads/2024/05/Carrossel-Geek-Imagem-Destacada-Alya-Sometimes-Hides-Her-Feelings-in-Russian-Janela-de-Estreia.jpg" alt="Profile picture" />
      </div>
    </nav>
  )
}

export default Navbar