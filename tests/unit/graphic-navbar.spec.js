import { shallowMount } from "@vue/test-utils";
import GraphicNavBar from "@/components/GraphicNavBar.vue";

describe("GraphicNavBar.vue", () => {
  it("checking nav if exist", () => {
    const wrapper = shallowMount(GraphicNavBar);
    // nav bar exist ?
    expect(wrapper.find("nav").exists()).toBe(true);
  });

  it("renders props.title when passed", () => {
    const title = "new title";
    const wrapper = shallowMount(GraphicNavBar, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
