import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: 'SimpleButtonSplitted',
})
export class SimpleButtonSplitted extends Vue {

    public mounted() {
        console.log('mounted---->');
    }
}
