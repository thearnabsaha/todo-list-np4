import Head from 'next/head';
import Header from './Components/Header';
import Input from './Components/Input';
import List from './Components/List';
import Footer from './Components/Footer';

const index = () => {
  return (
    <>
      <Head>
        <title>TAS TODO</title>
      </Head>
      <Header/>
      <Input/>
      <List/>
      <Footer/>
    </>
  );
}

export default index;