export function RemoveAttrsFromSelector() {
  return function (target: any, key: string, descriptor: any) {
    const originalMethod: Function = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const Renderer = this.Renderer;
      const Ref = this._elRef;
      if (Ref && Renderer) {
        const attributes = Object.getOwnPropertyNames(this);
        for (let i = 0; i < attributes.length; i++) {
          this.Renderer.removeAttribute(
            this._elRef.nativeElement,
            attributes[i],
          );
        }
      } else {
        console.error(
          'Ref o Renderer no definidos, asegurate que el componente utiliza ElementRef y Renderer2',
        );
      }

      originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
