import 'regenerator-runtime/runtime';

import React from 'react';

import ConversionIdea from './ConversionIdea';
import MessageBox from './MessageBox';
import TalkButton from './TalkButton';
import { useCallManager } from './CallManager';
import Image from 'next/image';
import hero from '@/public/assets/hero-image.png';

export default function CallBob() {
  const {
    userCall,
    userSpeak,
    userStopSpeaking,
    listening,
    isCalling,
    endCall,
    handleSend,
    messages,
    isChatbotSpeaking,
  } = useCallManager();
  const HERO_IMAGE_SCALE = 2;
  return (
    <div className="flex lg:flex-row lg:items-center lg:justify-center xxs:h-full flex-col items-center justify-end overflow-auto">
      <Image
        className="rounded-full"
        src={hero}
        alt="hero-image"
        width={HERO_IMAGE_SCALE * 300}
        height={HERO_IMAGE_SCALE * 200}
      />
      <div className="flex justify-center flex-col items-center lg:w-[calc(100%-600px)] w-full xxs:h-full">
        <MessageBox message={messages[messages.length - 1].message} />
        <div className="mb-8 flex justify-center flex-col items-center">
          <TalkButton
            userCall={userCall}
            userSpeak={userSpeak}
            userStopSpeaking={userStopSpeaking}
            listening={listening}
            isCalling={isCalling}
            endCall={endCall}
            isChatbotSpeaking={isChatbotSpeaking}
          />
          <ConversionIdea onSelect={handleSend} />
        </div>
      </div>
    </div>
  );
}
