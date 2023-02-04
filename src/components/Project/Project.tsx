import React from 'react';
import List from '../List';
import ListItem from '../ListItem';
import { Row } from '../../types';

import './Project.style.scss';

interface IProjectProps {
  rows: Array<Row>;
}

function Project({ rows }: IProjectProps): React.ReactElement {
  // console.log('data:', rows);

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

        <ul>{!rows.length && <ListItem isEditing />}</ul>
        <List rows={rows} />
      </div>
    </div>
  );
}

export default Project;
