import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Banner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgImage="url('/images/banner.png')"
      bgSize='cover'
      bgRepeat='no-repeat'
      height={{ base: '250px', md: '320px' }}
      pt={{ base: 12, md: 20 }}
      px={{ base: 6, md: 14, lg: 32 }}
    >
      <Box
        color='white'
        fontWeight='500'
        maxW='524px'
        as={motion.div}
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <Text
          fontSize={{ base: 24, sm: 30, lg: 36 }}
          mb={6}
          as={motion.p}
          variants={item}
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text
          fontWeight='300'
          fontSize={{ base: 14, sm: 16, lg: 20 }}
          color='lightGray'
          as={motion.p}
          variants={item}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {isWideVersion && (
        <Image
          alt='Worldtrip logo'
          ml='auto'
          src='/images/airplane.svg'
          w='360px'
          h='280px'
          as={motion.img}
          initial={{ x: 1000 }}
          animate={{ x: 0, transition: { duration: 1 } }}
        />
      )}
    </Flex>
  );
};
