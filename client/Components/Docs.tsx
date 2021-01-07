import { React } from '../../deps.ts';

import Overview from './DocPages/Overview.tsx';
import Polling from './DocPages/Advanced/Polling.tsx';

import BasicsErrors from './DocPages/Basics/Errors.tsx';
import GettingStarted from './DocPages/Basics/GettingStarted.tsx';

import Mutations from './DocPages/Basics/Mutations.tsx';
import Queries from './DocPages/Basics/Queries.tsx';
import ServerSideRendering from './DocPages/Basics/ServerSideRendering.tsx';

import Client from './DocPages/Caching/Client.tsx';
import CachingErrors from './DocPages/Caching/Errors.tsx';

import Server from './DocPages/Caching/Server.tsx';

import Strategies from './DocPages/Caching/Strategies.tsx';
import Philosophy from './DocPages/Philosophy.tsx';
import QuickStart from './DocPages/QuickStart.tsx';

import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const Docs = (props: any) => {
  const [docsPage, setDocsPage] = (React as any).useState('QuickStart');

  let curDocsPage;
  if (docsPage === 'QuickStart') curDocsPage = <QuickStart />;
  if (docsPage === 'Overview') curDocsPage = <Overview />;
  if (docsPage === 'Philosophy') curDocsPage = <Philosophy />;

  if (docsPage === 'Polling') curDocsPage = <Polling />;

  if (docsPage === 'BasicsErrors')
    curDocsPage = <BasicsErrors setDocsPage={setDocsPage} />;
  if (docsPage === 'GettingStarted')
    curDocsPage = <GettingStarted setDocsPage={setDocsPage} />;
  if (docsPage === 'Mutations')
    curDocsPage = <Mutations setDocsPage={setDocsPage} />;
  if (docsPage === 'Queries')
    curDocsPage = <Queries setDocsPage={setDocsPage} />;
  if (docsPage === 'ServerSideRendering') curDocsPage = <ServerSideRendering />;

  if (docsPage === 'Client') curDocsPage = <Client setDocsPage={setDocsPage} />;
  if (docsPage === 'CachingErrors') curDocsPage = <CachingErrors />;
  if (docsPage === 'Server') curDocsPage = <Server />;
  if (docsPage === 'Strategies')
    curDocsPage = <Strategies setDocsPage={setDocsPage} />;

  return (
    <>
      <div className="mainContainer pinkATags">
        <div style={{ height: '100%' }}>{curDocsPage}</div>
      </div>
      <SideBar
        page={props.page}
        docsPage={docsPage}
        setDocsPage={setDocsPage}
      />
    </>
  );
};

export default Docs;
