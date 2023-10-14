import React, {FC, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useInView} from "react-intersection-observer";

import {IPost} from "../../../widgets/postsList";

import {Button} from "../../../shared/ui/button";
import {PostValues} from "../../../shared/ui/postValues";

import styles from "./styles.module.scss";

interface ShortPostProps {
  post: IPost;
}

export const ShortPost: FC<ShortPostProps> = React.memo(({
  post,
}) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`${post.id}`);
  }, [post.id]);
  return <div className={styles.container}>
    <PostValues post={post} bodyStyles={styles.description} />
    <Button handleClick={handleClick}>
      Просмотр
    </Button>
  </div>;
});

