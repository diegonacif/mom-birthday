import { Image } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <div className="header">
      <Link to="/">
        <h1>Feliz Aniversário</h1>
      </Link>
      
      <button onClick={() => handleMenu()}>
        <Image size={48} weight="duotone" />
      </button>

      {menu ? <Menu /> : null}
      
        
    </div>
  )
}