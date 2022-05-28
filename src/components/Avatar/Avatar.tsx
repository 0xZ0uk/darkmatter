import React, { memo } from "react";
import { css } from "@emotion/css";

export interface IAvatar {
  alt?: string;
  src?: string;
  label?: string;
  icon?: string;
  width?: string | number;
}

interface IAvatarStyles {
  width: string;
}

const createStyles = ({ width }: IAvatarStyles) => {
  return {
    container: css`
      border-radius: 100%;
      width: ${width};
    `,
  };
};

const Avatar = ({ width = "25px" }: IAvatar) => {
  let parseWidth = typeof width == "string" ? width : `${width}px`;

  const styles = createStyles({ width: parseWidth });

  return <div className={styles.container}></div>;
};

export default memo(Avatar);
