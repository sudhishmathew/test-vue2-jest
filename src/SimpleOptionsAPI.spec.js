import SimpleOptionsAPIComp from "./SimpleOptionsAPIComp";
import Vue from "vue";

describe('SimpleOptionsAPIComp.vue', () => {
  let cmp, vm;
  it('should render', () => {
    cmp = Vue.extend(SimpleOptionsAPIComp)
    vm = new cmp({
      props: {
        // Replace data value with this fake data
        msg: "test"
      }
    }).$mount(); // Instances and mounts the component
    console.log('should render---->');
    expect(vm.msg).toEqual('test');
  });
});
