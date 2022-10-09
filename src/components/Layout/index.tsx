import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp){
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar/>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}
