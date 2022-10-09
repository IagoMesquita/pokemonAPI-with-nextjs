import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp){
  return (
    <>
      <Navbar/>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}
