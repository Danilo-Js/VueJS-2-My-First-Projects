new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta() {
      alert("Alerta exibido com sucesso");
    },
    armazenaValorDown(e) {
      this.valor = e.target.value;
    },
  },
});
