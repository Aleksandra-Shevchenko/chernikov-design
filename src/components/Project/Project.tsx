import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { Images } from './Project.types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { XMLParser } = require('fast-xml-parser');

const xmlToJson = (XMLdata: any) => {
  const parser = new XMLParser();
  const jObj = parser.parse(XMLdata);
  return jObj;
};

export const Project = () => {
  const [content, setProjectContent] = useState<object[]>([]);
  const [images, setImages] = useState<Images>({});

  const c = () => {
    fetch(
      'https://storage.yandexcloud.net/test-sh?list-type=2&prefix=duderhof_club/',
    )
      .then((res) => {
        return res.text();
      })
      .then((response) => {
        const x = xmlToJson(response);
        console.log('prefix', x);
        setProjectContent(x?.ListBucketResult?.Contents);
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    c();
  }, []);

  useEffect(() => {
    if (content?.length) {
      const list = content.reduce((res: any, item) => {
        // @ts-ignore
        const key = item?.Key.split('/')[1].split('.')[0];

        if (key) {
          const blockNumber = key.split('_')[0];

          if (res[blockNumber]) {
            res[blockNumber].push({
              id: key,
              blockNumber: key.split('_')[0],
              ordinal: Number(key.split('_')[1]),
              // @ts-ignore
              imageUrl: `https://storage.yandexcloud.net/test-sh/${item.Key}`,
            });
          } else {
            res[blockNumber] = [
              {
                id: key,
                blockNumber: key.split('_')[0],
                ordinal: Number(key.split('_')[1]),
                // @ts-ignore
                imageUrl: `https://storage.yandexcloud.net/test-sh/${item.Key}`,
              },
            ];
          }
        }
        return res;
      }, {});

      setImages(list);
    }
  }, [content]);

  console.log('images', images);

  return (
    <section>
      <div className="grid gauto-cols-auto h-full">
        {images['1']?.map((item) => {
          return (
            <div
              key={item.id}
              className={clsx(
                'overflow-hidden',
                item.ordinal === 1 && 'col-span-4',
                item.ordinal === 2 && 'col-span-2',
                item.ordinal === 3 && 'col-start-3 col-end-5',
              )}
            >
              <img
                className={clsx(
                  'h-[89vh] w-full aspect-auto object-cover object-center',
                )}
                src={item.imageUrl}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
