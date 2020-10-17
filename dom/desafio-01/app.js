new Vue({
  el: "#desafio",
  data: {
    nome: "Danilo Jose",
    idade: 21,
    imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg",
  },
  methods: {
    idadeX3: function () {
      return this.idade * 3;
    },
    random() {
      return Math.random();
    },
  },
});
