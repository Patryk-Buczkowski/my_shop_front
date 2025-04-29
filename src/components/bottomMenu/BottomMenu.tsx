import style from "./BottomMenu.module.scss";
import { Home, ShoppingCart, User, Layers3, Heart } from "lucide-react";
import cn from "classnames";
import { useState } from "react";

export const BottomMenu: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");

  const icons = [
    { name: "Home", component: Home },
    { name: "Category", component: Layers3 },
    { name: "Profile", component: User },
    { name: "Cart", component: ShoppingCart },
    { name: "Favourites", component: Heart },
  ];

  return (
    <div
      className={`relative mt-3 box-border flex h-10 w-[80%] justify-center gap-1 rounded-full bg-[var(--color-primary)] p-3`}
    >
      <div className="z-10 m-auto flex h-fit w-fit gap-5 text-sm">
        {icons.map(({ component: Icon, name }) => (
          <div
            key={name}
            className={cn("relative flex flex-col gap-0.5", {
              [style.icon_after]: selectedIcon === name,
            })}
            onClick={() => setSelectedIcon(name)}
          >
            <Icon
              className="m-auto"
              size={selectedIcon === name ? 12 : 10}
              color="black"
            />
            <span
              className={cn("text-[0.5rem]", {
                "font-bold": selectedIcon === name,
              })}
            >
              {name}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 h-[40px] w-[calc(100%-15px)] -translate-y-[14px] transform bg-inherit [clip-path:ellipse(50%_40%_at_50%_50%)]" />
    </div>
  );
};
