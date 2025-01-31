import style from "./BottomMenu.module.scss";
import { Home, ShoppingCart, User, Layers3, Heart } from "lucide-react";
import cn from "classnames";
import { useState } from "react";

export const BottomMenu: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState("Home");

  //   const handleSelect = (name: string) => {};

  const icons = [
    { name: "Home", component: Home },
    { name: "Category", component: Layers3 },
    { name: "Profile", component: User },
    { name: "Cart", component: ShoppingCart },
    { name: "Favourites", component: Heart },
  ];

  return (
    <div
      className={`flex box-border justify-center w-[80%] mt-16 gap-1 h-10 bg-[var(--color-primary)] p-3 relative rounded-full`}
    >
      <div className="w-full z-10 flex h-fit justify-between pr-1 pl-1 gap-1 text-sm">
        {icons.map(({ component: Icon, name }) => (
          <div
            key={name}
            className={cn('flex flex-col relative gap-0.5', {
                [style.icon_after]: selectedIcon === name
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

      <div className="w-[calc(100%-15px)] h-[40px] [clip-path:ellipse(50%_40%_at_50%_50%)] bg-inherit absolute bottom-0 transform -translate-y-[14px]" />
    </div>
  );
};
