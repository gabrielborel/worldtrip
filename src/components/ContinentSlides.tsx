import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

export const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.9,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface ContinentSlidesProps {
  continentsData: Continent[];
}

interface Continent {
  id: number;
  slug: string;
  name: string;
  text: string;
}

export const ContinentSlides = ({ continentsData }: ContinentSlidesProps) => {
  return (
    <Box>
      <Box
        as={motion.div}
        variants={container}
        initial='hidden'
        animate='visible'
        minHeight='108px'
        mx='auto'
        width='fit-content'
        textAlign='center'
        fontWeight='500'
        fontSize={{ base: '20px', md: '36px' }}
      >
        <Text as={motion.p} variants={item}>
          Vamos nessa?
        </Text>
        <Text as={motion.p} variants={item}>
          Então escolha seu continente
        </Text>
      </Box>

      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 2.2 },
        }}
        width='100%'
        mx='auto'
        my={6}
        height='450px'
        maxW={{ base: '100%', md: '90%', lg: '85%' }}
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {continentsData &&
            continentsData.map((continent) => (
              <SwiperSlide key={continent.id}>
                <Link passHref href={`/${continent.slug.toLocaleLowerCase()}`}>
                  <a>
                    <Box
                      bgImage="url('/images/continent.png')"
                      bgSize='cover'
                      bgRepeat='no-repeat'
                      width='100%'
                      height='450px'
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Text color='white' fontWeight={700} fontSize={48}>
                        {continent.name}
                      </Text>
                      <Text color='white' fontSize={20}>
                        {continent.text}
                      </Text>
                    </Box>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
};
