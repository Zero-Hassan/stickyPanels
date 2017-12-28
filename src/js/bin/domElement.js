class DomElement{
    constructor(idElement){
        this.element=document.getElementById(idElement);
        this.firstStyle=this.element.style;
        this.firstRect=this.element.getBoundingClientRect();
    }
    initialRect(sel){
        return this.firstRect[sel];
    }
    width(w=null){
        if(w==null)  return this.element.getBoundingClientRect().width;
        this.element.style.width=w;
        return this;
    }
    height(h=null){
        if(h==null)  return this.element.getBoundingClientRect().height;
        this.element.style.height=h;
        return this; 
    }
    top(t=null){
        if(t==null)  return this.element.getBoundingClientRect().top;
        this.element.style.top=t;
        return this;
    }
    bottom(b=null){
        if(b==null)  return this.element.getBoundingClientRect().bottom;
        this.element.style.bottom=b;
        return this;
    }
    right(r=null){
        if(r==null)  return this.element.getBoundingClientRect().right;
        this.element.style.right=r;
        return this; 
    }
    left(l=null){
        if(l==null)  return this.element.getBoundingClientRect().left;
        this.element.style.left=l;
        return this; 
    }
    _x(x=null){
        if(x==null)  return this.element.getBoundingClientRect().x;
        this.element.style.transform=`translateX(${x})`;
        return this;
    }
    _y(y=null){
        if(y==null)  return this.element.getBoundingClientRect().y;
        this.element.style.transform=`translateY(${y})`;
        return this;
    }
    addClass(clas){
    this.element.classList.add(clas);
    }
    removeClass(clas){
        this.element.classList.remove(clas);
        }
    set_css(selector,value){
        this.element.style[selector]=value;
    }
    get_css(selector){
        return this.element.style[selector];
    }
    restoreStyle(){
        this.element.style=this.firstStyle;
    }
    addLast(element){
        this.element.appendChild(element);
    }
    addFirst(element){
        let first = this.element.firstChild;
        this.element.insertBefore(element,first);
    }
    toggleClass(_class){
        this.element.classList.toggle(_class);
    }
    hassClass(_class){
        return this.element.classList.contains(_class);
    }

}

export default DomElement;