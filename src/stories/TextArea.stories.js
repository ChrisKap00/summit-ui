import { TextArea } from "../components/TextArea/TextArea";

export default {
  title: "Summit/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
    theme: { control: { type: "radio" }, options: ["dark", "light"] },
  },
};

export const Default = {
  args: {
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
};
