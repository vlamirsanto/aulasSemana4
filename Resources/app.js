// criando uma window
var win = Ti.UI.createWindow({
	backgroundColor: "#ffffff",
	orientationModes: [Ti.UI.PORTRAIT] // travando a rotação da tela
});

// criando as linhas da tabela
var persons = {
	"Superman" : {
		"imagem" : "liga_da_justica/superman.jpg",
		"url" : "http://pt.wikipedia.org/wiki/Superman"
	},
	"Batman" : {
		"imagem" : "liga_da_justica/batman.jpg",
		"url" : "http://pt.wikipedia.org/wiki/Batman"
	},
	"Mulher Maravilha" : {
		"imagem" : "liga_da_justica/mulher_maravilha.jpg",
		"url" : "http://pt.wikipedia.org/wiki/Mulher-Maravilha"
	},
	"Flash" : {
		"imagem" : "liga_da_justica/flash.jpg",
		"url" : "http://pt.wikipedia.org/wiki/Flash_%28DC_Comics%29"
	},
	"Lanterna Verde" : {
		"imagem" : "liga_da_justica/lanterna_verde.png",
		"url" : "http://pt.wikipedia.org/wiki/Lanterna_Verde"
	}
};

var dadosTabela = [];

for ( var personagens in persons ){
	var personagem = persons[personagens];

	var linha = Ti.UI.createTableViewRow({
		size: 20,
		height:60,
		valor: personagem.url
	});
	
	var imagem1 = Ti.UI.createImageView({
		image: personagem.imagem,
		width: 50,
		height: 50,
		left: 10
	});

	var label = Ti.UI.createLabel({
		text: personagens,
		size: 20
	});

	linha.add(label);
	linha.add(imagem1);
	dadosTabela.push(linha);
}

// criando a tabela
var tabela = Ti.UI.createTableView({
	backgroundColor: "#ffffff",
	top:20,
	headerTitle: "Selecione o seu personagem favorito"
});
tabela.setData(dadosTabela);

// evento do click nas linhas da tabela
tabela.addEventListener('click', tabelaClicada);
function tabelaClicada(e){
	var wikiPersonagem = require('wikiPersonagem')(e.rowData.valor);
	wikiPersonagem.open();
}

win.add(tabela);
win.open();
