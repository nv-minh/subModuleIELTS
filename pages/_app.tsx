import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import { ChakraProvider } from '@chakra-ui/react';
import { DevSupport } from '@react-buddy/ide-toolbox-next';
import { ComponentPreviews, useInitial } from '@/components/dev';


// @ts-ignore
function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <Component {...pageProps} />
      </DevSupport>;
    </ChakraProvider>
  );
}

// @ts-ignore
export default appWithTranslation(App, nextI18NextConfig);
