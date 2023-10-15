import {FC, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

import {ShortPost} from "../../../entities/shortPost";

import {useFetchAllPostsQuery} from "../models";

import {Loading} from "../../../entities/loading";
import {ErrorComponent} from "../../../entities/error";

import styles from "./styles.module.scss";

interface PostsListProps {}

export const PostsList: FC<PostsListProps> = () => {
  const {inView: inViewFirst, ref: refFirst} = useInView();
  const {inView: inViewLast, ref: refLast} = useInView();
  const [startValue, setStartValue] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const {isLoading, isError, isSuccess, data} = useFetchAllPostsQuery({
    limit: 10,
    start: startValue,
  });
  const [heightFirst, setHeightFirst] = useState(0);
  const [heightLast, setHeightLast] = useState(NaN);

  useEffect(() => {
    if(isSuccess && data.meta && isNaN(heightLast)) {
      setHeightLast(data.meta * 140);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (inViewFirst && startValue) {
      setHeightFirst(heightFirst - 150);
      setStartValue(startValue - 1);
      setHeightLast(heightLast + 150);
    }
    function viewBottom() {
      if (inViewLast && data?.meta && startValue + 11 <= data.meta) {
        setHeightFirst(heightFirst + 150);
        setStartValue(startValue + 1);
        setHeightLast(pr => startValue + 11 === (data.meta - 1) ? 0 : pr - 150);
      }
    }
    if(!isEnd) {
      const timer = setTimeout(() => {
        viewBottom();
        if(startValue + 11 === data?.meta) {
          setIsEnd(true);
        }
      }, 250);
      return () => clearTimeout(timer);
    }
    if(isEnd) {
      viewBottom();
    }
  }, [inViewFirst, inViewLast, startValue]);
  if (isError) {
    return <ErrorComponent />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <div style={{height: heightFirst}} ref={refFirst} />
      {data?.posts.map((post) => (
        <ShortPost
          key={post.id}
          post={post}
        />
      ))}
      <div style={{height: isNaN(heightLast) ? 0 : heightLast}} ref={refLast} />
    </div>
  );
};
