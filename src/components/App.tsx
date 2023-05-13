import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { Routes, Route, Router } from 'react-router-dom';

import { AppConfigContext } from '../contexts/AppConfigContext';
import './App.css';
import { Header } from './Header/Header';
import { ProjectList } from './ProjectList/ProjectList';
import { AboutMe } from './AboutMe/AboutMe';
import { Services } from './Services/Services';
import { Prices } from './Prices/Prices';
import { Footer } from './Footer/Footer';
import { useDimensions } from '../hooks/useDimensions';

// const { XMLParser } = require('fast-xml-parser');

// const xmlToJson = (XMLdata: any) => {
//   const parser = new XMLParser();
//   const jObj = parser.parse(XMLdata);
//   return jObj;
// };

const mockList = [
  {
    description: 'Super project',
    name: 'Kirzhach',
    id: 'kirzhach',
    heroImage: 'https://storage.yandexcloud.net/test-sh/kirzhach/007%201.png',
  },
  {
    description: 'Super project',
    name: 'Duderhof club',
    id: 'duderhof club',
    heroImage:
      'https://storage.yandexcloud.net/test-sh/duderhof%20club/001%201.png',
  },
  {
    id: 'the one',
    name: 'the one',
    description: 'Super project',
    heroImage:
      'https://storage.yandexcloud.net/test-sh/the%20one/002_Photoshop%201.jpg',
  },
];

function App() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

  // const [projectList, setProjectList] = useState();
  // const [projectContent, setProjectContent] = useState();
  // const [projectDecription] = useState({
  //   name: '',
  // });

  // &delimiter=/
  // const b = () => {
  //   fetch('https://storage.yandexcloud.net/test-sh?list-type=2&delimiter=/', {
  //     method: 'GET',
  //   })
  //     .then((res) => {
  //       return res.text();
  //     })
  //     .then((response) => {
  //       const x = xmlToJson(response);
  //       console.log('x', x);
  //       setProjectList(x?.ListBucketResult?.CommonPrefixes);
  //     })
  //     .catch((err) => console.log('err', err));
  // };

  // useEffect(() => {
  //   b();
  //   c();
  //   d();
  // }, []);

  // const c = () => {
  //   fetch('https://storage.yandexcloud.net/test-sh?list-type=2&prefix=project/')
  //     .then((res) => {
  //       return res.text();
  //     })
  //     .then((response) => {
  //       const x = xmlToJson(response);
  //       console.log('prefix', x);
  //       setProjectContent(x?.ListBucketResult?.Contents);
  //     })
  //     .catch((err) => console.log('err', err));
  // };

  // const d = () => {
  //   fetch('https://storage.yandexcloud.net/test-sh/document.json')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((response) => {
  //       console.log('response', response);
  //       console.log('document', response);
  //       setProjectDecription(response);
  //     })
  //     .catch((err) => console.log('err', err));
  // };

  // console.log('projectList', projectList);
  // console.log('projectContent', projectContent);

  useEffect(() => {
    if (!config) {
      setLoading(true);
      fetch('https://storage.yandexcloud.net/test-sh/config.json')
        .then((res) => res.json())
        .then((response) => {
          setConfig(response);
        })
        .catch((err) => console.log('err', err))
        .finally(() => setLoading(false));

      console.log(loading);
    }
  }, []);

  const headerRef = useRef<HTMLElement | null>(null);
  const { height: headerHeight } = useDimensions(headerRef, config);

  const heightCalc = useMemo(
    () => ({ paddingTop: `${headerHeight}px` }),
    [headerHeight],
  );

  return (
    <AppConfigContext.Provider value={config}>
      <div className="template">
        <div className="max-w-7xl w-full min-h-screen relative">
          {config && (
            <>
              <Header ref={headerRef} />
              <section style={heightCalc}>
                <ProjectList projects={mockList} />
                <AboutMe />
                <Services />
                <Prices />
              </section>
              <Footer />
            </>
          )}
        </div>
      </div>
    </AppConfigContext.Provider>
  );
}

export default App;
