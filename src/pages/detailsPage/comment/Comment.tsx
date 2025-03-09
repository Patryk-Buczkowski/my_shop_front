import { CommentType } from "../../../types/productType";
type Props = {
  comment: CommentType;
};

export const Comment: React.FC<Props> = ({ comment }) => {
  
  return (
    <>
      <p>author: {comment.userId.name}</p>
      <p>comment: {comment.comment}</p>
    </>
  );
};
