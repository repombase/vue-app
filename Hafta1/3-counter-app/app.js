const app = Vue.createApp({
    data() {
        return {
            counter:0,
            counter2:0
        }
    },
    methods: {
        getCounterResult(){
            console.log('Counter 1 çalıştı')
            return this.counter>5 ? 'BÜYÜK' :'KÜÇÜK'
        },       
        getCounterResult2(){
            console.log('Counter 2 çalıştı')
            return this.counter2>5 ? 'BÜYÜK' :'KÜÇÜK'
        },       
    },
}).mount('#app')