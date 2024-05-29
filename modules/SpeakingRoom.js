import LanguageManager from '../components/LanguageManager';
import CallManager from '../components/CallManager';
import { GithubLink } from '../components/GithubLink';
import ConversionIdeasModal from '../components/ConversationIdeasModal';
import { CallHistory } from '../components/CallHistory';
import LanguageDropdown from '../components/LanguageDropdown';
import CallBob from '../components/CallBob';
import { Layout } from 'antd';

export const SpeakingRoom = props => {

  const { Header, Content } = Layout;
  return (
    <>
      <LanguageManager>
        <CallManager>
          <Header className="flex bg-[#45badd] items-center h-12 flex-row px-0 justify-between">
            <GithubLink />
            <div className="flex items-center">
              <ConversionIdeasModal />
              <CallHistory />
              <LanguageDropdown />
            </div>
          </Header>
          <Content>
            <CallBob />
          </Content>
        </CallManager>
      </LanguageManager>
    </>
  );
};

{/*<div className="landing-container w-full">*/}
{/*  <TabGroup>*/}
{/*    <div className="logo">YourLogo</div>*/}
{/*    <TabList className="flex justify-between py-10">*/}
{/*      <Tab>*/}
{/*        <button className={'details-button'}>Home</button>*/}
{/*      </Tab>*/}
{/*      <Tab>*/}
{/*        <button className={'details-button'}>Speaking Room</button>*/}
{/*      </Tab>*/}
{/*      <Tab>*/}
{/*        <button className={'details-button'}>Writing Room</button>*/}
{/*      </Tab>*/}
{/*    </TabList>*/}
{/*    <TabPanels>*/}
{/*      /!*<TabPanel><Home /></TabPanel>*!/!*!/}
{/!*      <TabPanel><SpeakingRoom /></TabPanel>*!/}
{/!*      /!*<TabPanel><WritingRoom/></TabPanel>*!/!*!/}
{/!*    </TabPanels>*!/}
{/!*  </TabGroup>*!/}
{/!*</div>*/}
