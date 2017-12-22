class UIComponent {
  constructor (ctx) {
    // UI 组件层级
    this.layer = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.context = context;
    this.visible = true;
  }
}

export default UIComponent;