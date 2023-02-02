import React from 'react';

// @ts-ignore
import { ReactComponent as TilesIcon } from '../../assets/tiles.svg';
// @ts-ignore
import { ReactComponent as UndoIcon } from '../../assets/undo.svg';

import './Project.style.scss';

function Project(): React.ReactElement {
  return (
    <div className="project">
      <div className="project__header">Строительно-монтажные работы</div>

      <div className="project__table-wrapper">
        <table className="project__table">
          <colgroup>
            <col span={1} style={{ width: '110px' }} />
            <col span={1} style={{ width: '750px' }} />
            <col span={1} style={{ width: '200px' }} />
            <col span={1} style={{ width: '200px' }} />
            <col span={1} style={{ width: '200px' }} />
            <col span={1} style={{ width: '200px' }} />
          </colgroup>
          <thead>
            <tr>
              <td>Уровень</td>
              <td>Наименование работ</td>
              <td>Основная з/п</td>
              <td>Оборудование</td>
              <td>Накладные расходы</td>
              <td>Сметная прибыль</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Project;
