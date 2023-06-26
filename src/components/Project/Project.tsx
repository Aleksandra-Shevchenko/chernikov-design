import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppConfigContext } from '../../hooks/useAppConfigContext';
import { xmlToJson } from '../../utils/common';
import styles from './Project.module.css';
import { ImageItem, Images } from './Project.types';

export const Project = () => {
  const params = useParams();
  const { projects } = useAppConfigContext();

  const [content, setProjectContent] = useState<object[]>([]);
  const [images, setImages] = useState<Images>([]);
  const [firstImage, setfFirstImage] = useState<ImageItem | undefined>(
    undefined,
  );

  const projectInfo = projects.find(
    (project) => project.id === params.projectId,
  );

  const getImages = () => {
    fetch(
      `https://storage.yandexcloud.net/test-sh?list-type=2&prefix=${params.projectId}/`,
    )
      .then((res) => {
        return res.text();
      })
      .then((response) => {
        const x = xmlToJson(response);
        setProjectContent(x?.ListBucketResult?.Contents);
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (content?.length) {
      let number = 0;

      const list = content.reduce((res: Images, item) => {
        // @ts-ignore
        const key = item?.Key.split('/')[1].split('.')[0];

        if (number > 6) {
          number = 1;
        }

        if (key) {
          res.push({
            id: key,
            number: Number(number),
            // @ts-ignore
            imageUrl: `https://storage.yandexcloud.net/test-sh/${item.Key}`,
          });
          number += 1;
        }
        return res;
      }, []);

      const sorted = list.sort((a, b) => +a.id - +b.id);
      const firstElement = sorted.shift();

      setImages(sorted);
      setfFirstImage(firstElement);
    }
  }, [content]);

  return (
    <section>
      <div className={styles.heroContainer}>
        <img className={styles.image} src={firstImage?.imageUrl} alt="" />
        {projectInfo && (
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{projectInfo.name}</h2>
            {projectInfo?.year && (
              <p className={styles.text}>Год: {projectInfo.year}</p>
            )}
            {projectInfo?.location && (
              <p className={styles.text}>Локация: {projectInfo.location}</p>
            )}
            {projectInfo?.description && (
              <p className={clsx(styles.text, styles.description)}>
                {projectInfo.description}
              </p>
            )}
          </div>
        )}
      </div>
      <div className={styles.gridContainer}>
        {images?.map((item) => {
          return (
            <div
              key={item.id}
              className={clsx(
                'overflow-hidden',
                item.number === 1 && 'col-start-1 col-end-4',
                item.number === 2 && 'col-start-4 col-end-7',
                item.number === 3 && 'col-start-1 col-end-3',
                item.number === 4 && 'col-start-3 col-end-5',
                item.number === 5 && 'col-start-5 col-end-7',
                item.number === 6 && 'col-start-1 col-end-7',
              )}
            >
              <img className={styles.image} src={item.imageUrl} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
