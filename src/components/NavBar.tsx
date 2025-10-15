import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import CreateGroupPage from "./pages/CreateGroupPage";
import { Modal } from "./Modal";
import useOutsideClick from "../hooks/useOutsideClick";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const ref = useOutsideClick<HTMLDivElement>(() => setShowMenu(false));

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Groups", href: "/groups", current: false },
    { name: "Analytics", href: "/analytics", current: false },
  ];

  const handleFormOpen = () => {
    setIsFormOpen(true);
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="relative w-full px-2 h-16 flex items-center justify-between sm:px-6 lg:px-8">
        {/*  Mobile hamburger / close icon */}
        <div className="sm:hidden">
          <i
            onClick={() => setShowMenu((s) => !s)}
            className={`fa fa-2x ${showMenu ? "fa-window-close" : "fa-bars"}`}
            aria-label={showMenu ? "close menu" : "Open menu"}
            role="button"
            tabIndex={0}
          />
        </div>

        {/* Logo / brand (desktop) */}
        <div className="hidden sm:block">
          <div className="flex items-center hover:text-gray-900 hover:cursor-pointer">
            <span className="h-8 w-8">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <h2 className="ml-4 font-medium">Splitit</h2>
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => {
                  const base =
                    "rounded-xl px-3 py-1.5 font-medium transition-all duration-500 ease-in-out";
                  const active = "bg-gray-300";
                  const inactive = "hover:bg-gray-100";
                  const custom =
                    "bg-primary text-secondary-txt hover:bg-sky-500";

                  if (item.current) {
                    return `${base} ${custom}`;
                  }

                  return `${base} ${isActive ? active : inactive}`;
                }}
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              name="New Group"
              isPrimary={true}
              type="button"
              onClick={handleFormOpen}
            />
          </div>
        </div>
      </div>
      {/* mobile menu (only show on small screens) */}
      <div
        ref={ref}
        className={`absolute left-0 z-10 p-2 mx-2 border bg-background ${
          showMenu ? "block" : "hidden"
        } sm:hidden`}
      >
        <div className="flex flex-col space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              onClick={() => setShowMenu(false)}
              to={item.href}
              className={({ isActive }) => {
                const base =
                  "rounded-xl px-3 py-1.5 font-medium transition-all duration-500 ease-in-out";
                const active = "bg-gray-300";
                const inactive = "hover:bg-gray-100";
                const custom = "bg-primary text-secondary-txt hover:bg-sky-500";

                if (item.current) {
                  return `${base} ${custom}`;
                }

                return `${base} ${isActive ? active : inactive}`;
              }}
            >
              {item.name}
            </NavLink>
          ))}
          <Button
            name="New Group"
            isPrimary={true}
            type="button"
            onClick={handleFormOpen}
          />
        </div>
      </div>

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
        }}
      >
        <CreateGroupPage onClose={() => setIsFormOpen(false)} />
      </Modal>
    </nav>
  );
};

export default NavBar;
