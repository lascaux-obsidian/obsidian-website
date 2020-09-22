import { React } from '../../deps.ts';

import QuickStart from './DocPages/QuickStart.tsx';
import Philosophy from './DocPages/Philosophy.tsx';
import Overview from './DocPages/Overview.tsx';

import Persistence from './DocPages/Advanced/Persistence.tsx';
import Polling from './DocPages/Advanced/Polling.tsx';
import Subscriptions from './DocPages/Advanced/Subscriptions.tsx';

import BasicsErrors from './DocPages/Basics/Errors.tsx';
import GettingStarted from './DocPages/Basics/GettingStarted.tsx';
import Mutations from './DocPages/Basics/Mutations.tsx';
import Queries from './DocPages/Basics/Queries.tsx';
import ServerSideRendering from './DocPages/Basics/ServerSideRendering.tsx';

import Client from './DocPages/Caching/Client.tsx';
import CachingErrors from './DocPages/Caching/Errors.tsx';
import Server from './DocPages/Caching/Server.tsx';
import Strategies from './DocPages/Caching/Strategies.tsx';

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

  if (docsPage === 'Persistence') curDocsPage = <Persistence />;
  if (docsPage === 'Polling') curDocsPage = <Polling />;
  if (docsPage === 'Subscriptions') curDocsPage = <Subscriptions />;

  if (docsPage === 'BasicsErrors') curDocsPage = <BasicsErrors />;
  if (docsPage === 'GettingStarted') curDocsPage = <GettingStarted />;
  if (docsPage === 'Mutations') curDocsPage = <Mutations />;
  if (docsPage === 'Queries') curDocsPage = <Queries />;
  if (docsPage === 'ServerSideRendering') curDocsPage = <ServerSideRendering />;

  if (docsPage === 'Client') curDocsPage = <Client />;
  if (docsPage === 'CachingErrors') curDocsPage = <CachingErrors />;
  if (docsPage === 'Server') curDocsPage = <Server />;
  if (docsPage === 'Strategies') curDocsPage = <Strategies />;

  return (
    <>
      <div className='mainContainer pinkATags'>
        <div style={{height: "100%"}}>
          {curDocsPage}
        </div>
      </div>
      <SideBar page={props.page} docsPage={docsPage} setDocsPage={setDocsPage} />
    </>
  );
};

export default Docs;
