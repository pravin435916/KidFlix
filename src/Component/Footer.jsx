import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-yellow-200 to-yellow-400 p-4 text-center">
      <p className="text-lg font-semibold">KidFlix - Your Kids' Movie Paradise</p>
      <p className="text-sm text-gray-700 mt-2">
        © {new Date().getFullYear()} All rights reserved. | Pravin Nandankar
      </p>
    </footer>
  );
}

export default Footer;
