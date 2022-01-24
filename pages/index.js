import Head from 'next/head';
import Header from './Components/Header';
import Input from './Components/Input';
import List from './Components/List';

const index = () => {
  return (
    <>
      <Head>
        <title>TAS TODO</title>
      </Head>
      <Header/>
      <Input/>
      <List/>
    </>
  );
}

export default index;