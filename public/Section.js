export class Section {
    constructor({ items, renderer }, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }
    renderItems() {
        for (const item of this.items) {
            this.renderer(item);
        }
    }
    addItem(element) {
        this.container.prepend(element);
    }
}
