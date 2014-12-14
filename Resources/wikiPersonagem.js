function wikiPersonagem( link ){

	var win  = Ti.UI.createWindow({
		backgroundColor: "#ffffff"
	});

	var webview = Ti.UI.createWebView({
		url: link
	});
	
	var view = Ti.UI.createView({
		top: 60,
		width: 300,
		height:480
	});
	
	var voltar = Ti.UI.createButton({
		title: "Voltar",
		top: 25,
		left: 10
	});
	
	voltar.addEventListener('click', fechar);
	function fechar(e){
		win.close();
	}
	
	view.add(webview);
	win.add(voltar);
	win.add(view);
	return win;
}

module.exports = wikiPersonagem;