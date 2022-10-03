import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "../../navLinks";
import { useRouter } from "next/router";

const Nav = () => {
  const { asPath } = useRouter();
  return (
    <div className="border-b-2 border-green-primary mb-8 font-display">
      <div className="flex justify-center items-center uppercase my-8 text-green-dark text-3xl flex-col sm:flex-row sm:mx-auto sm:max-w-2xl">
        <h1>Sabrina Carlins</h1>
        <div className="mx-auto w-16 my-2">
          <Image
            src="/images/root.png"
            alt="flowers"
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
        <h1>Owen Roth</h1>
      </div>
      <nav
        className="flex flex-wrap justify-center uppercase my-8 text-green-primary "
        aria-label="Navigation"
      >
        {navigation.main.map((item) => (
          <div
            key={item.name}
            className={
              item.href === asPath
                ? "text-green-dark px-5 py-2"
                : "hover:text-green-dark px-5 py-2"
            }
          >
            <Link href={item.href}>{item.name}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
