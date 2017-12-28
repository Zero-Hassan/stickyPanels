class Scroll{
 constructor()
 {
    this.events=[];
    this.init();
 }
 init(){
     this.y1=0;
     this.y2=0;
     this.x1=0;
     this.x2=0;
     this.events['after']=(point)=>{
       this.isAfter(point);
     };
 }
 on(callBack){
  document.addEventListener('scroll',(e)=>{
      this.y2=window.scrollY;
      this.x2=window.scrollX;
      if (typeof callBack=='function') callBack(e);
      this.y1=this.y2;
      this.x1=this.x2;
  });
 }

 isDown(){
     return (this.y2 - this.y1 > 0);
 }
 isUp(){
    return (this.y2 - this.y1 <= 0);
}
isLeft(){
    return (this.x2 - this.x1 <= 0);
}
isRight(){
    return (this.x2 - this.x1 > 0);
}
isSmallScreen(){
    return (window.innerWidth <= 768); 
}

isBeforeY(point){
    return (window.scrollY - point <= 0);
}
isAfterY(point){
    return (window.scrollY - point > 0);
}
isBeforeX(point){
    return (window.scrollX - point <= 0);
}
isAfterX(point){
    return (window.scrollX - point > 0);
}
disable(){
    document.body.style.overflow = "hidden";
}
enable(){
    document.body.style.overflow = "scroll";
}
}

export default Scroll;