const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(evt){
            if(evt.isAdd){
                this.cart.push(evt.id);                
            }else{
                const index = this.cart.indexOf(evt.id)
                if(index > -1){
                    this.cart.splice(index, 1)
                }
            }
        },
    },
    computed: {
    }
})
