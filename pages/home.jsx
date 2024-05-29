import { SpeakingRoom } from '../modules/SpeakingRoom';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react';
import { Layout } from 'antd';

export default function HomePage() {
  return (
    <Fragment>
      <Layout className="h-screen w-screen lg:pr-15 ">
        <div className="landing-container w-full">
          <TabGroup>
            <div className="logo">YourLogo</div>
            <TabList className="flex justify-between py-10">
              <Tab>
                <button className={'details-button'}>Home</button>
              </Tab>
              <Tab>
                <button className={'details-button'}>Speaking Room</button>
              </Tab>
              <Tab>
                <button className={'details-button'}>Writing Room</button>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel></TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </Layout>
    </Fragment>
  );
}