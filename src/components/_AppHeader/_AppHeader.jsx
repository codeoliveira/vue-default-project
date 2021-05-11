export default {

    data() {
        return {
            title: 'Agenor Oliveira'
        }
    },

    methods: {
        changeMe() {
            const title = this.title;
            this.title = this.title === 'Agenor Oliveira' ? title : this.title;
        }
    }

}