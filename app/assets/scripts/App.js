var $=require('jquery');
//var Person=require('./modules/Person.js');
//import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from'./modules/RevealOnScroll.js';


var mobileMenu=new MobileMenu();
//var revealOnScroll=new RevealOnScroll();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonials"),"60%");
