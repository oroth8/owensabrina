import Footer from "./Footer";



type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
