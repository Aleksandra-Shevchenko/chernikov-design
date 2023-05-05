import React, { useState } from 'react';
// import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import { Header } from '../Header/Header';
import { ProjectList } from '../ProjectList/ProjectList';
import { AboutMe } from '../AboutMe/AboutMe';
import { Services } from '../Services/Services';
import { Prices } from '../Prices/Prices';

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
];

function App() {
  // const [projectList, setProjectList] = useState();
  // const [projectContent, setProjectContent] = useState();
  const [projectDecription] = useState({
    name: '',
  });

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

  return (
    <div className="template">
      <div className="max-w-7xl w-full">
        <Header />
        <ProjectList projects={mockList} />
        <AboutMe />
        <Services />
        <Prices />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img
          src="https://storage.yandexcloud.net/test-sh/project/Screenshot at Mar 29 09-17-04.png"
          className="w-48"
          alt="test"
        />
        <p className="text-black">{projectDecription?.name}</p>
      </div>
    </div>
  );
}

export default App;
