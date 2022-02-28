const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0
        }
    },
    methods: {
        mountCount(instruccion = "add", limit = 1) {
            if (instruccion === 'dis')
                this.count -= limit;
            else
                this.count += limit;
        }
    }

})