import Head from 'next/head';
import Header from './Components/Header';
import Input from './Components/input';

const index = () => {
  return (
    <>
      <Head>
        <title>TAS TODO</title>
      </Head>
      <Header/>
      <Input/>
    </>
  );
}

export default index;