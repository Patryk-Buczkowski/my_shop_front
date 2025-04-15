import { CommentType } from "../../../types/productType";
import cn from "classnames";
import {
  useBreakpointListener,
  useBreakpointStore,
} from "../../../zustand/useBreakPoint";
import { useLoggedStore } from "../../../zustand/useLogged";
import { useNavigate } from "react-router-dom";
type Props = {
  comment: CommentType;
};

export const Comment: React.FC<Props> = ({ comment }) => {
  const { isTablet, isPhone, isDesktop } = useBreakpointStore();
  const { loggedUser, setIsEdited, fetchProductData, isEdited, deleteComment } =
    useLoggedStore();

  const navigate = useNavigate();

  const deleteCommentHandler = async (commentId: string) => {
    await deleteComment(commentId)
      .then(() => fetchProductData())
      .then((data) => {
        console.log("data", data);
         navigate("/details", { state: data });
      })
      .catch(() => console.error("error in fetch prouct after delete comment"));
  };

  useBreakpointListener();

  return (
    <div
      onClick={() =>
        ["moderator", "admin"].includes(loggedUser.role)
          ? setIsEdited(true)
          : console.log("become crew member")
      }
      className={cn(
        "flex relative flex-col items-center gap-1 p-2 rounded-md border border-[var(--color-secondary)] shadow-lg",
        {
          "text-sm": isPhone,
          "text-md": isTablet,
          "text-lg": isDesktop,
        }
      )}
    >
      {["admin"].includes(loggedUser.role) && isEdited && (
        <div
          className="absolute right-0.5 top-0.5"
          onClick={() => deleteCommentHandler(comment._id)}
        >
          ❌
        </div>
      )}

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
