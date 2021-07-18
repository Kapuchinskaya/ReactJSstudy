import Header from "../Components/Header_footer/Header";
import Footer from "../Components/Header_footer/Footer";
import { ArrowFunctionElementWithProps } from "../Components/Common/types";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: ArrowFunctionElementWithProps = ({ children }: LayoutProps) => {
  return (
    <div>             
      <Header />      
      {children}
      <Footer />          
    </div>
  );
};

export default Layout;
