import CallBob from './CallBob';
import LanguageDropdown from './LanguageDropdown';
import {Layout} from 'antd';
import LanguageManager from './LanguageManager';
import {Fragment, useState} from 'react';
import {CallHistory} from './CallHistory';
import {GithubLink} from './GithubLink';
import ConversionIdeasModal from './ConversationIdeasModal';
import CallManager from './CallManager';
// import {Select} from "@chakra-ui/react";
import Writing from "@/components/Writing";
import {Field, Select} from '@headlessui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";
import clsx from "clsx";

const {Header, Content} = Layout;
export default function MainLayout() {
    const [state, setState] = useState('speaking');
    return (
        <Fragment>
            <Layout className="h-screen w-screen bg-[#45badd] bg-white lg:p-10 p-5 pt-0 lg:pr-15 ">
                <LanguageManager>
                    <div className="w-full max-w-md px-4">
                        <Field>
                            <div className="relative">
                                <Select
                                    className={clsx(
                                        'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                        '*:text-black'
                                    )}
                                >
                                    <option value="writing" onSelect={() => setState('writing')}>Writing with AI
                                    </option>
                                    <option value="speaking" onSelect={() => setState('speaking')}>Speaking with AI
                                    </option>
                                </Select>
                                <ChevronDownIcon
                                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                    aria-hidden="true"
                                />
                            </div>
                        </Field>
                    </div>
                    {state !== 'speaking' ? <CallManager>
                        <Header className="flex bg-[#45badd] items-center h-12 flex-row px-0 justify-between">
                            <div className="flex items-center">
                                <ConversionIdeasModal/>
                                <CallHistory/>
                                <LanguageDropdown/>
                            </div>
                            <GithubLink/>
                        </Header>
                        <Content>
                            <CallBob/>
                        </Content>
                    </CallManager> : <Writing/>}
                </LanguageManager>
            </Layout>
        </Fragment>
    );
}
