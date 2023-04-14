import React from 'react';
import clsx from 'clsx';

import styles from './ProjectList.module.scss';

export const ProjectList = ({ projects }: { projects: any }) => {
  console.log('projects', projects);

  return (
    <nav className="min-h-full">
      <ul className=" grid grid-cols-1 gap-0 sm:grid-cols-2 h-full">
        {projects.map((project: any) => (
          <li
            key={project.id}
            // className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            className={clsx(
              styles.card,
              // `bg-[url(https://storage.yandexcloud.net/test-sh/kirzhach/007%201.png)]`
            )}
            style={{ backgroundImage: `url(${project.heroImage})` }}
          >
            <h2 className="uppercase text-xxlg font-bold text-general font-steppe">
              {project.name}
            </h2>
            {/* <img
              className="h-full w-full aspect-auto"
              src={project.heroImage}
              alt=""
            /> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};
