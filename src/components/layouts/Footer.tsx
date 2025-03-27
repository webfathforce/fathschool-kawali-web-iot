import React from "react";

const Footer = () => {
  return (
    <footer className="container py-4 border-t text-center">
      <p className="text-gray-600 dark:text-gray-300">
        Copyright &copy; FathSchool {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
