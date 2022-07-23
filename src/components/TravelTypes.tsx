import {
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface travelTypeItemProps {
  children: ReactNode;
  image: string;
  alt: string;
}

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
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

const TravelTypeItem = ({ children, image, alt }: travelTypeItemProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as={motion.div}
      variants={item}
      minHeight='145px'
      flexDirection={{ sm: 'row', md: 'row', lg: 'column' }}
      align='center'
      gap={{ base: 2, lg: 0 }}
    >
      {!isWideVersion ? (
        <Icon viewBox='0 0 200 200' color='yellow'>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      ) : (
        <Image src={`/images/${image}.svg`} alt={alt} mx='auto' mb={6} />
      )}
      <Text
        fontWeight='600'
        fontSize={{ base: '18px', sm: '20px', lg: '24px' }}
      >
        {children}
      </Text>
    </Flex>
  );
};

export const TravelTypes = () => {
  return (
    <Stack
      as={motion.div}
      variants={container}
      initial='hidden'
      animate='visible'
      direction='row'
      wrap='wrap'
      justifyContent={{ base: 'space-evenly', lg: 'space-between' }}
      alignItems='center'
      maxW={{ sm: '95%', md: '90%', lg: '85%' }}
      mx='auto'
      mt={{ base: 12, md: 24 }}
      justify='space-between'
      gap={{ base: 6, lg: 0 }}
    >
      <TravelTypeItem image='cocktail' alt='Cocktail logo'>
        vida noturna
      </TravelTypeItem>
      <TravelTypeItem image='surf' alt='Surf logo'>
        praia
      </TravelTypeItem>
      <TravelTypeItem image='building' alt='Building logo'>
        moderno
      </TravelTypeItem>
      <TravelTypeItem image='museum' alt='Museum logo'>
        clássico
      </TravelTypeItem>
      <TravelTypeItem image='earth' alt='Earth logo'>
        e mais ...
      </TravelTypeItem>
    </Stack>
  );
};
