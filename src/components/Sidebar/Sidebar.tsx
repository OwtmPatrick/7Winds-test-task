import React from 'react';

// @ts-ignore
import { ReactComponent as ChevronIcon } from '../../assets/chevron.svg';
// @ts-ignore
import { ReactComponent as ProjectIcon } from '../../assets/project.svg';
import projects from './projects.json';
import { Project } from './Sidebar.types';

import './Sidebar.style.scss';

function Sidebar(): React.ReactElement {
  return (
    <aside className="sidebar">
      <button type="button" className="sidebar__header-btn">
        <div className="sidebar__header-btn-text">
          Название проекта <br />
          <span className="sidebar__header-btn-text-abbr">Аббревиатура</span>
        </div>

        <ChevronIcon />
      </button>

      <ul className="sidebar__projects">
        {projects.map((p: Project) => (
          <li
            key={p.title}
            className={`sidebar__project${p.active ? ' sidebar__project_active' : ''}`}
          >
            <ProjectIcon />

            {p.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
