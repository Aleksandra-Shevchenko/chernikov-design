import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { useAppConfigContext } from '../../hooks/useAppConfigContext';
import { useDimensions } from '../../hooks/useDimensions';

import styles from './ProjectList.module.css';

export const ProjectList = ({ headerHeight }: { headerHeight: number }) => {
  const { projects } = useAppConfigContext();
  const { windowWidth } = useDimensions();

  const [defaultNum, setDefaultNum] = useState(0);
  const [showed, setShowed] = useState(defaultNum);

  const sortedProjects = useMemo(
    () => projects.sort((a, b) => +a.num - +b.num),
    [projects],
  );

  const scollToRef = useRef<HTMLDivElement | null>(null);
  const scollToTop = useRef<HTMLDivElement>(null);

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
      scollToRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleHide = () => {
    scollToTop.current?.scrollIntoView({ behavior: 'smooth' });
    const delay =
      (scollToTop.current?.clientHeight || 600) /
        Math.ceil(projects.length / defaultNum) -
      60;
    requestAnimationFrame(() =>
      setTimeout(() => setShowed(defaultNum), Math.round(delay)),
    );
  };

  return (
    <nav className={styles.container}>
      <div
        className="absolute -top-[80px] bottom-0"
        ref={scollToTop}
        style={{ top: `-${headerHeight}px` }}
      />
      <ul className={styles.list}>
        {sortedProjects.map((project, index) => {
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
                  style={{ bottom: `${headerHeight}px` }}
                  ref={index + 1 === showed ? scollToRef : undefined}
                />
              </li>
            );
          }
          return undefined;
        })}
      </ul>
      {showed < projects.length && (
        <button
          type="button"
          onClick={handleShowMore}
          className={styles.button}
        >
          <span className={styles.buttonText}>Загрузить еще</span>
          <div className={clsx(styles.arrow, styles.animation)} />
        </button>
      )}
      {showed >= projects.length && (
        <button type="button" onClick={handleHide} className={styles.button}>
          <span className={styles.buttonText}>Свернуть</span>
          <div className={clsx(styles.arrow, styles.arrowUp)} />
        </button>
      )}
    </nav>
  );
};
