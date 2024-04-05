import nlwUniteIcon from '../assets/nlw_unite_icon.svg'
export  function Header() {
  return (
    <div className=''>
        <img src={nlwUniteIcon}  />

        <nav>
          <a href="">Eventos</a>
          <a href="">Participantes</a>
        </nav>
    </div>

  )
}
