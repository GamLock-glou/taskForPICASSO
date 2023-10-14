import {FC} from "react";

import {IPost} from "../../../widgets/postsList";

interface PostValuesProps {
  post: IPost | undefined;
  postIdStyles?: string;
  titleStyles?: string;
  bodyStyles?: string;
}

export const PostValues: FC<PostValuesProps> = ({
  post,
  postIdStyles,
  titleStyles,
  bodyStyles,
}) => {
  return <>
    <h3 className={postIdStyles}>PostId: {post?.id}</h3>
    <div className={titleStyles}>Загаловок: {post?.title}</div>
    <div className={bodyStyles}>Текст: {post?.body}</div>
  </>;
};
