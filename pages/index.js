// pages/Home.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import axios from 'axios';
import Button from '@/components/Button';

const IndexPage = ({ states }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState(1)

  const handleSelectChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleShowPromotions = () => {
    setIsLoading(true);

    router.push({
      pathname: '/home',
      query: { state: selectedState },
    });
  }

  return (
    <div className="container flex flex-col items-center justify-center h-screen p-4 mx-auto">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="mb-4 text-2xl font-bold">Selecciona un estado:</h1>
      <select
        onChange={handleSelectChange}
        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
      >
        {
          states.map((state) => (
            <option key={state.id} value={state.id}>{state.url}</option>
          ))
        }
      </select>

      <div className='w-full mt-5'>
        <Button text={'Ver Promociones'} type={'button'} onClick={handleShowPromotions} />
      </div>

      {isLoading && (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-3 bg-gray-800 bg-opacity-50">
          <div className="w-5 h-5 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          <span className="ml-2 text-lg font-semibold text-white">Cargando promociones...</span>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps (context) {

  const { query } = context;
  const state = query.state;

  const urls = [
    `https://api-dev.cuponerapp.com/v2/estados`
  ];

  const headers = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRjNTE0Y2ZhYWFlMzM3MmQ0NzQ2OGU3YWVlNWEzMDc4ZDZhNDZhMjk4ZWFiYzk5MDg3NmMwYzI0NzljY2NlMTY2ZTE1YTIzMzAxMzM0NmQyIn0.eyJhdWQiOiIxIiwianRpIjoiNGM1MTRjZmFhYWUzMzcyZDQ3NDY4ZTdhZWU1YTMwNzhkNmE0NmEyOThlYWJjOTkwODc2YzBjMjQ3OWNjY2UxNjZlMTVhMjMzMDEzMzQ2ZDIiLCJpYXQiOjE3MDEzODY2NDgsIm5iZiI6MTcwMTM4NjY0OCwiZXhwIjoxNzMzMDA5MDQ4LCJzdWIiOiI0Nzg1MzQiLCJzY29wZXMiOltdfQ.VBa9_eOARZsYDqBTIlWKatj31tpP1MF8xvx5nsYOzwSzxSZcbczFalrgCzzuEG31000A3imbjW-NEu8aYQ3xkR3YtuU8L0Q9UL6eSoyuBqT7cl90QhSevHKSQ0et_K7GymwZl8LnV67gtNoInHat_M1PYJR6NG8Re7xAzLnbJMGPoai8_yw62Q9oL7luV7wT5RVPe70RfyQ1yu64QLRbtn-3CT-quwuXQjHDJXP87BFnuBXmx2tq2ppBUp_QiZFtkLIKiy7QsUeIUkuBTJAdXMr0zfKTwiCj-BeGTIhO1FsrXy48k_Ya3C9QxD0E9mlEVYg6yl-kNrrNcLZBGbXRSZ63cGTkgDAhWJEnQKeKc4ZWFWlpKsvJR7ZWK9uyVFqRQa3z4soTEbDFTZfyyM3qa2Iz7gVrBuGluJyiHCQm9IeeWDAecvofVSLMTPk4RBwhRst7iB9lkd8nsleY2LmXi7ZJs9zxldoErvSLUOy0HHw_bTwIxXRbHg0HOIVOSp2xq3oJJjPkOEkn5YckRoT-y2FMZBOMFVBDidC_RmVX8T8l9XWJRPvCESJsuh379mMw--xZ0OBS1PIpfF-oM0EHN3TExORc0B8woq3edNcGdc6IXIXnbzwo4YzLAc4JtkdA1E10OGaSRv3-PSQ2j_hwq2NFK8UmfNvjL7LaJNhsrrE',
  };

  const requests = urls.map(url => axios.get(url, { headers }));

  try {
    const responses = await Promise.all(requests);

    const states = responses[0].data;

    return {
      props: {
        states,
      },
    };
  } catch (error) {
    console.error('Error', error.message);

    return {
      props: {},
    };
  }
}

export default IndexPage;
