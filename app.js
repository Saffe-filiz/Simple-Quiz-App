

var app = new Vue({

  el: '#contanier',

  data: {
    questions: [
      {
      	question: '666 - 333',
        suggestions: [
            {suggestion: '223'},
            {suggestion: '333', currect: true},
            {suggestion: '444'},
            {suggestion: '555'},
        ]
    },
     {
      	question: '25234 - 2334',
        suggestions: [
            {suggestion: '22.400'},
            {suggestion: '21.521'},
            {suggestion: '16.362'},
            {suggestion: '22.900', currect: true},
        ]
      },
       {
      	question: '5 * 10',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      }
    ],
    start: false,
    answer: false,
    selection: false,
    score: 0,
    a: 0,
    b: 1,
    result: false,
  },

   methods: {
      next_question () {

        if(this.answer){
            this.score++;
            this.selection = false;
            this.value = false;
            this.a++;
            this.b++;
        }
        else{
            this.selection = false;
            this.value = false;
            this.a++;
            this.b++;
          }
        },

      selected_answer (value) {
          this.answer = value;
        }
    },

    watch: {
      a (value) {
        if(value >= this.questions.length){
            this.result = true;
            this.start = false;
            this.score = 0;
            this.a = 0;
            this.b = 1;
        }
      }
    }

})
