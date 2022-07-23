import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import { api } from '../services/api';

interface Continent {
  id: number;
  slug: string;
  name: string;
  text: string;
}

interface ContinentProps {
  continentData: Continent;
}

export default function Continent({ continentData }: ContinentProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Worldtrip | {continentData.name}</title>
      </Head>

      <main>
        <>
          <IconButton
            ml={{ base: 6, md: 14, lg: 32 }}
            position='absolute'
            top={8}
            height='fit-content'
            aria-label='Voltar para home'
            icon={<ChevronLeftIcon height='30px' width='30px' />}
            onClick={() => router.push('/')}
          />

          <Header />
        </>

        <Box
          bgImage="url('/images/continent-bg.png')"
          bgSize='cover'
          bgRepeat='no-repeat'
          height='500px'
          display='flex'
        >
          <Text
            fontSize={48}
            fontWeight={600}
            color='white'
            ml={{ base: 6, md: 14, lg: 32 }}
            mt='auto'
            mb={14}
          >
            {continentData.name}
          </Text>
        </Box>

        <Flex dir='row' mx={{ base: 6, md: 14, lg: 32 }} mt={20} gap='120px'>
          <Text maxW='600px' fontSize={24} lineHeight={9} textAlign='justify'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            inventore at ipsa qui perferendis tempora deleniti officiis
            repudiandae iure sapiente nobis, ad autem quasi laudantium quaerat
            modi reiciendis non tenetur.
          </Text>

          <HStack spacing={50} fontSize={24} fontWeight={600} lineHeight={9}>
            <Box>
              <Text color='yellow' textAlign='center' fontSize={48} mb={2}>
                50
              </Text>
              <Text>países</Text>
            </Box>

            <Box>
              <Text color='yellow' textAlign='center' fontSize={48} mb={2}>
                60
              </Text>
              <Text>línguas</Text>
            </Box>

            <Box>
              <Text color='yellow' textAlign='center' fontSize={48} mb={2}>
                27
              </Text>
              <Text>cidades +100</Text>
            </Box>
          </HStack>
        </Flex>

        <Box mx={{ base: 6, md: 14, lg: 32 }} mt={28} mb={20}>
          <Text fontSize={36} lineHeight={10} fontWeight={500}>
            Cidades +100
          </Text>

          <Stack direction='row' mt={16} wrap='wrap' spacing='0' gap={10}>
            <Box>
              <Image
                src='/images/mini.png'
                alt='london'
                borderTopRightRadius={2}
                borderTopLeftRadius={2}
              />
              <Flex
                gap={20}
                dir='row'
                align='center'
                width='100%'
                borderLeft='1px solid yellow'
                borderRight='1px solid yellow'
                borderBottom='1px solid yellow'
                borderRadius={8}
                padding={6}
              >
                <Box display='inline-block'>
                  <Text fontWeight={600} fontSize={20}>
                    Londres
                  </Text>
                  <Text color='gray'>Reino Unido</Text>
                </Box>

                <Image
                  height='30px'
                  display='inline-block'
                  src='/images/bandeira.png'
                  alt='London'
                />
              </Flex>
            </Box>
            <Box>
              <Image
                src='/images/mini.png'
                alt='london'
                borderTopRightRadius={2}
                borderTopLeftRadius={2}
              />
              <Flex
                gap={20}
                dir='row'
                align='center'
                width='100%'
                borderLeft='1px solid yellow'
                borderRight='1px solid yellow'
                borderBottom='1px solid yellow'
                borderRadius={8}
                padding={6}
              >
                <Box display='inline-block'>
                  <Text fontWeight={600} fontSize={20}>
                    Londres
                  </Text>
                  <Text color='gray'>Reino Unido</Text>
                </Box>

                <Image
                  height='30px'
                  display='inline-block'
                  src='/images/bandeira.png'
                  alt='London'
                />
              </Flex>
            </Box>
            <Box>
              <Image
                src='/images/mini.png'
                alt='london'
                borderTopRightRadius={2}
                borderTopLeftRadius={2}
              />
              <Flex
                gap={20}
                dir='row'
                align='center'
                width='100%'
                borderLeft='1px solid yellow'
                borderRight='1px solid yellow'
                borderBottom='1px solid yellow'
                borderRadius={8}
                padding={6}
              >
                <Box display='inline-block'>
                  <Text fontWeight={600} fontSize={20}>
                    Londres
                  </Text>
                  <Text color='gray'>Reino Unido</Text>
                </Box>

                <Image
                  height='30px'
                  display='inline-block'
                  src='/images/bandeira.png'
                  alt='London'
                />
              </Flex>
            </Box>
            <Box>
              <Image
                src='/images/mini.png'
                alt='london'
                borderTopRightRadius={2}
                borderTopLeftRadius={2}
              />
              <Flex
                gap={20}
                dir='row'
                align='center'
                width='100%'
                borderLeft='1px solid yellow'
                borderRight='1px solid yellow'
                borderBottom='1px solid yellow'
                borderRadius={8}
                padding={6}
              >
                <Box display='inline-block'>
                  <Text fontWeight={600} fontSize={20}>
                    Londres
                  </Text>
                  <Text color='gray'>Reino Unido</Text>
                </Box>

                <Image
                  height='30px'
                  display='inline-block'
                  src='/images/bandeira.png'
                  alt='London'
                />
              </Flex>
            </Box>
            <Box>
              <Image
                src='/images/mini.png'
                alt='london'
                borderTopRightRadius={2}
                borderTopLeftRadius={2}
              />
              <Flex
                gap={20}
                dir='row'
                align='center'
                width='100%'
                borderLeft='1px solid yellow'
                borderRight='1px solid yellow'
                borderBottom='1px solid yellow'
                borderRadius={8}
                padding={6}
              >
                <Box display='inline-block'>
                  <Text fontWeight={600} fontSize={20}>
                    Londres
                  </Text>
                  <Text color='gray'>Reino Unido</Text>
                </Box>

                <Image
                  height='30px'
                  display='inline-block'
                  src='/images/bandeira.png'
                  alt='London'
                />
              </Flex>
            </Box>
            <Box>
              <Image
                src='/images/mini.png'
                alt='london'
                borderTopRightRadius={2}
                borderTopLeftRadius={2}
              />
              <Flex
                gap={20}
                dir='row'
                align='center'
                width='100%'
                borderLeft='1px solid yellow'
                borderRight='1px solid yellow'
                borderBottom='1px solid yellow'
                borderRadius={8}
                padding={6}
              >
                <Box display='inline-block'>
                  <Text fontWeight={600} fontSize={20}>
                    Londres
                  </Text>
                  <Text color='gray'>Reino Unido</Text>
                </Box>

                <Image
                  height='30px'
                  display='inline-block'
                  src='/images/bandeira.png'
                  alt='London'
                />
              </Flex>
            </Box>
          </Stack>
        </Box>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('continents');

  const paths = response.data.map((data: Continent) => ({
    params: {
      slug: data.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (req) => {
  const { slug } = req.params;
  const response = await api.get(`continents`);

  const [continentData] = response.data.filter(
    (continent: Continent) => continent.slug === slug
  );

  return {
    props: { continentData },
    revalidate: 60 * 60 * 24,
  };
};
