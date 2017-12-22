class UIController {
  constructor(ctx) {
    this.components = [];
    this.context = ctx;
  }

  addComponent(component) {
    if(!(component typeof UIComponent)) {
      return false;
    }

    let len = this.components.length;

    if(len < 1) {
      this.components.push(component);
    } else {
      for(let i = 0; i<len; i++) {
        if(component.layer < this.components[i]) {

        }


      }
    }
    
  }
}