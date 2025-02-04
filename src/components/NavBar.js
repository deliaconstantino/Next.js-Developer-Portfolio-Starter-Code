import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition=[width] ease duration-30
        ${router.asPath === href ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </Link>
  );
};

const MotionLink = ({ href, icon }) => {
  return(
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3">
      {icon}
    </motion.a>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <MotionLink href="https://twitter.com" icon={<TwitterIcon />} />
        <MotionLink href="https://twitter.com" icon={<GithubIcon />} />
        <MotionLink href="https://twitter.com" icon={<LinkedInIcon />} />
        <MotionLink href="https://twitter.com" icon={<PinterestIcon />} />
        <MotionLink href="https://twitter.com" icon={<DribbbleIcon />} />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
