new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe: 'ClasseExemplo',
		classe2: 'classeExemplo2',
		boolClasse2: true,
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque'
			}, 5000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = valor + '%';
				if(valor==100) clearInterval(temporizador)
			}, 1000)
		},
		setBoolClasse2(event) {
			if (event.target.value === 'true') {
				this.boolClasse2 = true;
			} else if (event.target.value === 'false') {
				this.boolClasse2 = false;
			}
		},
	}
})
