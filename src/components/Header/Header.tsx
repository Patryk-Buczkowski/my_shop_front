import { CirclePower, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mobileMenuLinks } from "../../data/mobileMenuLinks";
import { useLoggedStore } from "../../zustand/useLogged";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedUser: logged, setLoggedUser: setLogged } = useLoggedStore();

  const handlerLink = (linkName: string) => {
    setIsOpen(false);
    if (linkName === "📴 Log out") {
      setLogged({ _id: "", email: "", imgLink: "", name: "", role: "" });
      return;
    }
  };

  // for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // get user
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  return (
    <div className="flex justify-between">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex gap-2 select-none active:text-[var(--color-primary-light)]"
      >
        <Menu size={25} />
        <p>Open menu</p>
      </div>

      {logged.name !== "" && (
        <img
          className="h-13 rounded-full"
          src={logged.imgLink}
          alt="profile image"
        />
      )}

      <motion.nav
        initial={{ y: "-100%", x: "100%" }}
        animate={{ y: isOpen ? "0%" : "-100%", x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 80, damping: isOpen ? 5 : 10 }}
        className="absolute z-20 top-0 left-0 right-0 bottom-0 bg-[var(--color-secondary)] text-white p-4 flex flex-col gap-3"
      >
        <div
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="flex gap-2 active:text-[var(--color-primary-light)]"
        >
          <CirclePower
            className="self-end active:rounded-full active:border-2 active:border-[var(--color-primary-light)]"
            size={25}
          />

          <p className="select-none ">Close menu</p>
        </div>

        <div className="flex flex-col gap-2">
          {mobileMenuLinks.map((link) => {
            if (link.name === "📴 Log out" && logged.name === "") return null;

            return (
              <Link
                key={link.link}
                onClick={() => handlerLink(link.name)}
                className="border-2 text-center select-none rounded-full p-1 active:border-[var(--color-primary-light)]"
                to={link.link}
              >
                {" "}
                {link.name}{" "}
              </Link>
            );
          })}
        </div>

        <img
          className="h-45 select-none m-auto rounded-full"
          src="./logo/Shop_logo14.jpg"
          alt="logo"
        />
      </motion.nav>
    </div>
  );
};
