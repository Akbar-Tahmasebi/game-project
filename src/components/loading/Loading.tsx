import styled from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styled.boxLoading}>
      <div className={`${styled.loader} dark:text-neutral-100`}></div>
    </div>
  );
}
