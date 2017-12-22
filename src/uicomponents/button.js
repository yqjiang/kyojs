import UIComponent from '../core/UIComponent';

class Button extends UIComponent{
  constructor (ctx) {
    super(ctx);
    this.hover = null;
    this.visited = null;
    this.active = null;
  }
}

export default Button;