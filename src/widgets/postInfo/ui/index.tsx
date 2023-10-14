import {FC} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {useFetchAllPostsQuery, useFetchPostByIdQuery} from "../../postsList";

import {PostValues} from "../../../shared/ui/postValues";
import {Button} from "../../../shared/ui/button";

import {Loading} from "../../../entities/loading";
import {ErrorComponent} from "../../../entities/error";

import styles from "./styles.module.scss";

export type ParamsType = {
  postId: string;
};

export const PostInfo: FC = () => {
  const navigate = useNavigate();
  const {postId} = useParams<ParamsType>();
  const {
    data: post,
    isLoading,
    isError,
  } = useFetchPostByIdQuery(Number(postId));
  const handleBack = () => {
    navigate("/posts");
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorComponent />;
  }
  return (
    <div className={styles.container}>
      <Button handleClick={handleBack}>Назад</Button>
      <div className={styles.wrapper}>
        <PostValues post={post} />
      </div>
    </div>
  );
};
