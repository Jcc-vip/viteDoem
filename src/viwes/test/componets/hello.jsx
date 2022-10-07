import { ref, defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup(props) {
    const render = () => {
      return <div> Hello {props.name}</div>;
    };
    return render;
  },
});
