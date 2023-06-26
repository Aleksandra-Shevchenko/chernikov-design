import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppConfigContext } from '../contexts/AppConfigContext';
import './App.css';
import { useDimensions } from '../hooks/useDimensions';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Header } from './Header/Header';
import { ProjectList } from './ProjectList/ProjectList';
import { AboutMe } from './AboutMe/AboutMe';
import { Services } from './Services/Services';
import { Prices } from './Prices/Prices';
import { Footer } from './Footer/Footer';
import { Project } from './Project/Project';

function App() {
  useScrollToTop();
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

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
                    <ProjectList headerHeight={headerHeight} />
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
