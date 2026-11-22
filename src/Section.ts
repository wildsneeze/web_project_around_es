export type RendererFunction<T> = (item: T) => void;

export class Section<T> {
  private items: T[];
  private renderer: RendererFunction<T>;
  private container: HTMLElement;

  constructor(
    { items, renderer }: { items: T[]; renderer: RendererFunction<T> },
    containerSelector: string,
  ) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector) as HTMLElement;
  }

  public renderItems(): void {
    for (const item of this.items) {
      this.renderer(item);
    }
  }

  public addItem(element: HTMLElement): void {
    this.container.prepend(element);
  }
}
