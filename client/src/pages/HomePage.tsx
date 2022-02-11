import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import HomeLayout from "./HomeLayout";
import LoginForm from "../components/menu/LoginForm";
import Logo from "../components/Logo";
import ThemeToggler from "../components/ThemeToggler";

const HomePage = () => {
  return (
    <HomeLayout>
      <Logo />
    </HomeLayout>
  );
};

export default HomePage;
