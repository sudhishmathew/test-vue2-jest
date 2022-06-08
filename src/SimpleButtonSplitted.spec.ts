import SimpleButtonSplittedComp from "./SimpleButtonSplittedComp.vue";

describe('SimpleButtonSplittedComp.vue', () => {
  describe('View', () => {
    it('should be a "button"', () => {
      const simpleButtonSFC = new SimpleButtonSplittedComp().$mount(document.body);
      console.log('should be "button" by default---->');
      expect(simpleButtonSFC.$el.attributes).toBeTruthy();
    });
  });
});
