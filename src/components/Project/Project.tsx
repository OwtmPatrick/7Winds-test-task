import React from 'react';
import List from '../List';
import ListItem from '../ListItem';
import { Row } from '../../types';

import './Project.style.scss';

interface IProjectProps {
  rows: Array<Row>;
  nestingTotalLevel: number;
}

function Project({ rows, nestingTotalLevel }: IProjectProps): React.ReactElement {
  return (
    <div className="project">
      <div className="project__header">Строительно-монтажные работы</div>

      <div className="project__table-wrapper">
        <div className="project__table-header">
          <div
            className="project__table-header-item project__table-header-item_lvl"
            style={{ paddingRight: `${nestingTotalLevel * 25}px` }}
          >
            Уровень
          </div>
          <div className="project__table-header-rest-items">
            <div className="project__table-header-item project__table-header-item_rowName">
              Наименование работ
            </div>
            <div className="project__table-header-item">Основная з/п</div>
            <div className="project__table-header-item">Оборудование</div>
            <div className="project__table-header-item">Накладные расходы</div>
            <div className="project__table-header-item">Сметная прибыль</div>
          </div>
        </div>

        {!rows.length && (
          <ul className="list list_root">
            <ListItem isEditing isRoot nestingTotalLevel={nestingTotalLevel} />
          </ul>
        )}
        <List rows={rows} nestingTotalLevel={nestingTotalLevel} />
      </div>
    </div>
  );
}

export default Project;
