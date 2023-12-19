import Navbar from "@/components/Navbar";

type PageProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: PageProps) => {
  return (
    <>
      <Navbar />

      <main className="flex justify-center items-center h-[calc(100vh-44px)]">
        {children}
      </main>
    </>
  );
};

export default Layout;
