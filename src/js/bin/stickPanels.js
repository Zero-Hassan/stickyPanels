import DomElement from './domElement'; 
import Scroll from './scroll';

class StickPanels {
constructor() {

    this.init(); 
    this.listen(); 

}
init() {

    this.nav_bar = new DomElement("nav-bar"); 

    this.left_panel = new DomElement("left-panel"); 

    this.right_panel = new DomElement("right-panel"); 

    this.scroll = new Scroll();

}
listen() {
   if(this.scroll.isSmallScreen()) return;
    this.scroll.on((e)=>{
        if(this.scroll.isAfterY(this.nav_bar.initialRect('height'))) this.stickOnLeft();
        if(this.scroll.isBeforeY(this.nav_bar.initialRect('height'))) this.restore();
        if(this.scroll.isAfterY((this.right_panel.bottom() - window.innerHeight))) this.stickRight();
        if(this.scroll.isBeforeY((this.right_panel.bottom() - window.innerHeight))) this.right_panel.restoreStyle(); 
    });
  

}
stickOnLeft() {

    this.nav_bar.addClass("header__nav-bar--fixed-left"); 
    this.nav_bar.left(this.left_panel.left() + "px"); 
    this.nav_bar.width(this.left_panel.width() + "px"); 
    this.left_panel.set_css("marginTop", (this.nav_bar.height() + window.scrollY + 5) + "px"); 

}
stickRight(){
    let b=this.right_panel.height()-window.innerHeight-this.right_panel.initialRect('top');
    if(b > 0) this.right_panel.set_css('marginTop',(window.scrollY-b)+"px");
    if(b<=0) this.right_panel.set_css('marginTop',window.scrollY +"px");
}
restore() {

    this.nav_bar.removeClass("header__nav-bar--fixed-left"); 
    this.nav_bar.restoreStyle(); 
    this.left_panel.restoreStyle(); 

}
}

export default StickPanels; 