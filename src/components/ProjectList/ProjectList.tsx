import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppConfigContext } from '../../hooks/useAppConfigContext';
import { useDimensions } from '../../hooks/useDimensions';

import styles from './ProjectList.module.css';

export const ProjectList = () => {
  const { projects } = useAppConfigContext();
  const { windowWidth } = useDimensions();

  const [defaultNum, setDefaultNum] = useState(0);
  const [showed, setShowed] = useState(defaultNum);

  const scollToRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setDefaultNum(3);
    } else if (windowWidth < 640) {
      setDefaultNum(1);
    } else {
      setDefaultNum(2);
    }
  }, [windowWidth]);

  useEffect(() => {
    setShowed(defaultNum);
  }, [defaultNum]);

  const handleShowMore = () => {
    if (showed < projects.length) {
      setShowed((prevVal) => prevVal + defaultNum);
      scollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="max-h-max">
      <ul className={styles.list}>
        {projects.map((project, index) => {
          if (index + 1 <= showed) {
            return (
              <li key={project.id} className={styles.card}>
                <Link to={`/project/${project.id}`} className={styles.link}>
                  <div className={styles.imageBox}>
                    <img
                      className="h-full w-full object-cover"
                      src={project.heroImage}
                      alt=""
                    />
                  </div>
                  <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{project.name}</h2>
                  </div>
                </Link>
                <div
                  className="absolute bottom-[80px]"
                  ref={index + 1 === showed ? scollToRef : undefined}
                />
              </li>
            );
          }
          return undefined;
        })}
      </ul>
      {showed < projects.length && (
        <button type="button" onClick={handleShowMore}>
          Показать еще
        </button>
      )}
    </nav>
  );
};
