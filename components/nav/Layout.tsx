type Props = {
    children?: React.ReactNode;
  };


export default function Layout({ children }: Props) { 
  return (
    <>
    <nav>
    </nav>
      <main>{children}</main>
    </>
  )
}