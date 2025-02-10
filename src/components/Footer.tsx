import React from "react";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col md:flex-row bg-teal-600 text-center py-2 text-white justify-center gap-2">
      <p className="text-base">
        SQL Online Editor - Copyright © {currentYear} | Created by{" "}
        <Button variant="link" className="text-white p-0">janvi01</Button>
      </p>
      <p>
        | Found an issue? Report it{" "}
        <a
          href="https://github.com/janvi01/sql-editor/issues/new/choose"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here.
        </a>
      </p>
    </div>
  );
};

export default Footer;