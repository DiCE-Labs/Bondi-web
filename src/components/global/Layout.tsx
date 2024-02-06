import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="w-full mx-auto maw-w-7xl justify-center items-center flex flex-col">
      <Navbar />
      <main className="min-h-screen w-full">{children}</main>
    </section>
  );
};

export default Layout;
