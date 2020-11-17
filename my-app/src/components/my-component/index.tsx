import React from "react";

export type MyComponentProps = {
  name: string;
  payload?: {
    name?: string;
    onClick: (name: string) => void;
  };
};

const MyComponent = (props: MyComponentProps) => {
  return <div>{props.name}</div>;
};

export default MyComponent;
