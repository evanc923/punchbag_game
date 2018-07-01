new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
        injured: false
    },
    methods: {
        punch: function(){
            this.health -= 10;
            if (this.health <=30){
              this.injured = true;
            }
            if ( this.health <= 0 ){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
            this.injured = false;
        }
    },
    computed: {

    }
});
