import { CommentType } from "../../../types/productType";
import cn from "classnames";
import {
  useBreakpointListener,
  useBreakpointStore,
} from "../../../zustand/useBreakPoint";
import { useLoggedStore } from "../../../zustand/useLogged";
type Props = {
  comment: CommentType;
};

export const Comment: React.FC<Props> = ({ comment }) => {
  const { isTablet, isPhone, isDesktop } = useBreakpointStore();
  const { isEdited, setIsEdited, logged } = useLoggedStore();

  useBreakpointListener();

  return (
    <div
      onClick={() =>
        ["moderator", "admin"].includes(logged.role)
          ? setIsEdited(comment._id)
          : console.log("become crew member")
      }
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-md border border-[var(--color-secondary)] shadow-lg",
        {
          "text-sm": isPhone,
          "text-md": isTablet,
          "text-lg": isDesktop,
        }
      )}
    >

      <p className="mb-1 tracking-widest font-extrabold text-[var(--color-secondary)] uppercase bg-[var(--color-primary-light)] px-2 rounded-md">
        Author:
      </p>
      <p className="text-[var(--color-primary-light)]">{comment.userId.name}</p>

      <p className="mb-1 tracking-widest font-extrabold text-[var(--color-secondary)] uppercase bg-[var(--color-primary-light)] px-2 rounded-md">
        Comment:
      </p>
      <p className="text-[var(--color-primary-light)]">{comment.comment}</p>
    </div>
  );
};
