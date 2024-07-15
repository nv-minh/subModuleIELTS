import CallBob from './CallBob';
import LanguageDropdown from './LanguageDropdown';
import { Layout } from 'antd';
import LanguageManager from './LanguageManager';
import { Fragment, useState } from 'react';
import { CallHistory } from './CallHistory';
import { GithubLink } from './GithubLink';
import ConversionIdeasModal from './ConversationIdeasModal';
import CallManager from './CallManager';
// import {Select} from "@chakra-ui/react";
import Writing from '@/components/Writing';
import { Field, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import clsx from 'clsx';

const { Header, Content } = Layout;
export default function MainLayout() {
  return (
      <LanguageManager>
        <CallManager>
          <Header className="flex bg-gray-100 items-center h-12 flex-row px-0 justify-between">
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
  );
}
