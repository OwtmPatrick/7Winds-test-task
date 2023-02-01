import React from 'react';

// @ts-ignore
import { ReactComponent as TilesIcon } from '../../assets/tiles.svg';
// @ts-ignore
import { ReactComponent as UndoIcon } from '../../assets/undo.svg';

import './Header.style.scss';

function Header(): React.ReactElement {
  return (
    <header className="header">
      <ul className="header__btns">
        <li className="header__btn">
          <TilesIcon className="header__btn" />
        </li>

        <li className="header__btn">
          <UndoIcon className="header__btn" />
        </li>
      </ul>

      <ul className="header__tabs">
        <li className="header__tab header__tab-active" role="tab">
          Просмотр
        </li>
        <li className="header__tab" role="tab">
          Управление
        </li>
      </ul>
    </header>
  );
}

export default Header;
