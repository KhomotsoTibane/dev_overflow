import React from "react";
import { Decorator } from "@storybook/react";


export const withMaxWidth: Decorator = (StoryFn, context) => {
    console.log({context})
  return (
    <div style={{maxWidth: 400, margin: 'auto', border:' 1px solid red'}}>
      <StoryFn />
    </div>
  );
};


export const globalDecorators = []