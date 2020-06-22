console.log("=== carrosCtrl ===");
function carros($scope) {

	$scope.inserir = function() {

		var userData = {
			fabricante: $scope.fabricante
			,modelo: $scope.modelo
			,ano: $scope.ano
		};

		if (localStorage) {
			
			var lista;
			
			if (localStorage.loja) {
				lista = JSON.parse(localStorage.loja);
			} else {	
				lista = [];
			}

			lista.push(userData);
			localStorage.loja = JSON.stringify(lista);

			$scope.montarLista();
		}		
	}

	$scope.atualizar = function() {

		var userData = {
			fabricante: $scope.fabricante
			,modelo: $scope.modelo
			,ano: $scope.ano
		};

		var lista = JSON.parse(localStorage.loja);
		lista[$scope.itemCorrente] = userData;

		localStorage.loja = JSON.stringify(lista);

		$scope.btatualizar = false;
		$scope.btinserir = true;

		$scope.montarLista();
	}

	$scope.excluir = function(id,e) {
		
		e.preventDefault();

		var lista = JSON.parse(localStorage.loja);
		lista.splice(id,1);

		localStorage.loja = JSON.stringify(lista);

		$scope.montarLista();
	}

	$scope.editar = function(id,e) {
		e.preventDefault();

		$scope.fabricante = $scope.listaCarros[id].fabricante;		
		$scope.modelo = $scope.listaCarros[id].modelo;		
		$scope.ano = $scope.listaCarros[id].ano;
		$scope.itemCorrente = id;		

		$scope.btatualizar = true;
		$scope.btinserir = false;
	}

	$scope.montarLista = function() {
		$scope.limparCampos();

		if (localStorage && localStorage.loja) {
			$scope.listaCarros = JSON.parse(localStorage.loja);
		}
	}

	$scope.limparCampos = function() {

		$scope.fabricante = "";
		$scope.modelo = "";
		$scope.ano = "";

	}

	$scope.init = function() {
		$scope.loja = "Caltabiano";
		$scope.btinserir = true;
		$scope.btatualizar = false;
		$scope.montarLista();
	}();
}