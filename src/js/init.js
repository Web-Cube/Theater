import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { swiper } from "./modules/swiper";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	modals.init();
	swiper.init();

	config.log('app init')
	
};

export { App };