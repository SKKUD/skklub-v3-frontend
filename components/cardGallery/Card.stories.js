import React from "react";
import { Card } from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "skklub/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "성균 서도회",
  category: "평면예술 / 서예",
};

export const PrimaryLiked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryLiked.args = {
  title: "성균 서도회",
  category: "평면예술 / 서예",
  like: true,
};

export const Hover = Template.bind({});
Hover.args = {
  title: "성균 서도회",
  category: "평면예술 / 서예",
  hover: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "성균 서도회",
  category: "평면예술 / 서예",
  color: "#FFCE50",
};
