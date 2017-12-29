import DomElement from './domElement';
import Scroll from './scroll';

class HeaderNav{
    constructor(){
      this.init();
      this.listen();  
    }
    init(){
        this.header=new DomElement("header");
        this.brand=new DomElement("header-brand");
        this.menu=new DomElement("header-menu");
        this.leftPanel= new DomElement("left-panel");
        this.scroll=new Scroll();
    }
    listen(){
        this.onMobile();
    }
    onMobile(){
        if (!this.scroll.isSmallScreen()) return;
        this.onScroll();
        this.addNewItem("menu 0");
       
    }
    onScroll(){
        this.scroll.on((e)=>{
            if(this.scroll.isDown()) this.header._y(-this.brand.height()+"px");
            if(this.scroll.isUp()) this.header._y(0);
        });
    }
    addNewItem(title){
        let li=document.createElement("li");
        let a=document.createElement("a");
        a.innerHTML='<i class="fa fa-ellipsis-v"></i>';
        li.appendChild(a);
        li.addEventListener('click',(e)=>{
            this.toggleLeftPanel();
        });
        this.menu.addFirst(li);
    }

    toggleLeftPanel(){
        
        this.leftPanel.toggleClass('left-panel__is-open');
        if(this.leftPanel.hassClass('left-panel__is-open')){
            this.scroll.disable();
            this.leftPanel.top(this.header.bottom()+"px");
        }else {
            this.scroll.enable();
        }
    }
}
export default HeaderNav;