var propMenu = {
	dbz_menu: document.getElementById('dbz-menu'),
	slideMenu : document.getElementById('slideMenu'),
	menuActivo: false,
	elem_menu : document.querySelectorAll('#slideMenu .menu-principal a'),
}

var metMenu = {
	inicio : function(){
		propMenu.dbz_menu.addEventListener('click', metMenu.toogleMenu);
		for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}
	},

	toogleMenu: function(){
		if (propMenu.menuActivo == false) {
			propMenu.menuActivo = true;
			propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';

		}else{
			propMenu.menuActivo = false;
			propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active','');
		}
	},

	ocultarMenu: function(){
		propMenu.menuActivo = false;
		propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active','');
	}
}

metMenu.inicio();