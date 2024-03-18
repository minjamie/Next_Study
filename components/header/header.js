import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import HeaderBackground from "@/components/header/header-background";
import classes from "./header.module.css";
import NavLink from "./nav-link";
export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo img" priority></Image>
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
