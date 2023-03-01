import DepartmentCard from "./DepartmentCard";

export default {
  title: "intro/DepartmentCard",
  component: DepartmentCard,
};

const Template = (args) => <DepartmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //constuser: {
  //     name: "Jane Doe",
  //   },
};
