import Head from 'next/head';
import { Divider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentSlides } from '../components/ContinentSlides';
import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { motion } from 'framer-motion';

type Continent = {
  id: number;
  slug: string;
  name: string;
  text: string;
};

interface HomeProps {
  continentsData: Continent[];
}

export default function Home({ continentsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: 20, opacity: 0, transition: { duration: 0.4 } }}
      >
        <Header />

        <Banner />

        <TravelTypes />

        <Divider
          width='100px'
          mx='auto'
          my={{ base: 10, md: 16 }}
          height='4px'
        />

        <ContinentSlides continentsData={continentsData} />
      </motion.main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: continentsData } = await api.get('continents');

  return { props: { continentsData }, revalidate: 60 * 60 * 24 };
};
