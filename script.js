var app = new Vue ({
    el: '#app',
    data: {
        name: 'Temitope',
        address: 'Abakaliki, Ebonyi State',
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
        fullTime: new Date().getHours() + ":" + new Date().getMinutes()
    }, 
    computed: {
        
    },
    methods : {
        submit() {
            this.listData.push({...this.formData})
            this.clearform()
        },

        clearform() {
            this.formData.name = '',
            this.formData.username = '',
            this.formData.email = '',
            this.formData.phone = ''
        }
    }
})