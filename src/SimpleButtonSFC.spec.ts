import SimpleButtonSFCComp from './SimpleButtonSFCComp.vue';

describe('SimpleButtonSFCComp.vue', () => {

  describe('View', () => {
    it('should be a "button"', () => {
      const simpleButtonSFC = new SimpleButtonSFCComp().$mount(document.body);
      console.log('should be "button" by default---->');
      expect(simpleButtonSFC.$el.attributes).toBeTruthy();
    });
  });
});
