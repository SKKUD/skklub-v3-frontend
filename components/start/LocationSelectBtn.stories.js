import LocationSelectBtn from "./LocationSelectBtn";

export default {
  title: "LocationSelectBtn",
  component: LocationSelectBtn,
};

const Template = (args) => <LocationSelectBtn {...args} />;

export const SeoulSelectBtn = Template.bind({});
SeoulSelectBtn.args = {
  label: "명륜",
  hoverColor: "#80A4FF",
};
