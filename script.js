var app = new Vue ({
    el: '#app',
    data: {
        name: 'Temitope',
        address: 'Mile50 Abakaliki, Ebonyi State',
        occupation: 'Software Dev.',
        favFoods: [
            'Yam and Egg',
            'Plantain',
            'Bread',
            'Rice'
        ],
        favCountries: [
            'Ireland',
            'Finland',
            'Luxembourg',
            'Canada'
        ], 
        formData: {
            name: '',
            username: '',
            email: '',
            phone: ''
        },
        listData: [],
        greeting: '',
        currentTime: new Date().getHours(),
        fullTime: new Date().getHours() + ":" + new Date().getMinutes(),
        greetings: null
    }, 
    methods : {
        submit() {
            this.listData.push({...this.formData})
            console.log(this.formData)
        }
    }
})