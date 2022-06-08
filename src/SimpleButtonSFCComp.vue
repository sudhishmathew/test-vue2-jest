<template>
  <form>
    <input type="number">
    <input type="number">
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'SimpleButtonSFC',
})
export default class SimpleButtonSFC extends Vue {

  public mounted() {
    console.log('mounted---->');
  }
}
</script>
