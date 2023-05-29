import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
import { Project } from './Project/Project';

// const { XMLParser } = require('fast-xml-parser');

// const xmlToJson = (XMLdata: any) => {
//   const parser = new XMLParser();
//   const jObj = parser.parse(XMLdata);
//   return jObj;
// };

function App() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (!config) {
      setLoading(true);
      fetch('https://storage.yandexcloud.net/test-sh/config.json', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
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

  const paddingCalc = useMemo(
    () => ({ paddingTop: `${headerHeight}px` }),
    [headerHeight],
  );

  if (!config) {
    return <p>Loading</p>;
  }

  return (
    <AppConfigContext.Provider value={config}>
      <div className="template">
        <div className="max-w-7xl w-full min-h-screen relative">
          <Header ref={headerRef} />

          <section style={paddingCalc} className="min-h-screen">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ProjectList />
                    <AboutMe />
                    <Services />
                    <Prices />
                  </>
                }
              />
              <Route path="/project/:projectId" element={<Project />} />
            </Routes>
          </section>

          <Footer />
        </div>
      </div>
    </AppConfigContext.Provider>
  );
}

export default App;
