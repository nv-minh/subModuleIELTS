import { GetStaticProps } from 'next';
import { Props } from 'next/script';
import { getServerTranslations } from '@/lib/i18n/getServerTranslations';
import MainLayout from '../components/MainLayout';
import RootLayout from '@/components/Layout';
import Writing from '@/components/Writing';

// @ts-ignore
export const getStaticProps: GetStaticProps<Props> = async context => {
  const { locale } = context;
  return {
    props: {
      // @ts-ignore
      ...(await getServerTranslations(locale, ['common'])),
    },
  };
};

export default function Home() {
  return (<RootLayout>
    <MainLayout /> </RootLayout>);
}
