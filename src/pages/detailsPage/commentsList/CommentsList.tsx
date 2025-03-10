import { CommentType } from "../../../types/productType";
import { Comment } from "../comment/Comment";

type Props = {
  comments: CommentType[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="flex flex-col gap-2.5">
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};
