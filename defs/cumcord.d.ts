declare module "@cumcord" {
  export function uninject(): void;
  export function cum(cockSize?: number, cumshotStrength?: number): string | Promise<string>;
  namespace dev {
    export function showSettings(): void;
    export function toggleDevMode(): void;
  }
  namespace modules {
    namespace webpack {
      export const modules: Object;
      export function find(filter: Function): undefined | Object | Function;
      export function findAll(filter: Function): Array<any | Function>;
      export function findByProps(...propNames: Array<String>): undefined | Object | Function;
      export function findByPropsAll(...propNames: Array<String>): Array<any | Object | Function>;
      export function findByPrototypes(...protoNames: Array<String>): Array<any | Object | Function>;
      export function findByDisplayName(displayName: String): any;
      export function findByStrings(...searchStrings: Array<String>): undefined | Object | Function;
      export function findByKeywordAll(...searchStrings: Array<String>): Array<any | Object | Function>;
    }
    namespace common {
      export const constants: Object;
      export const channels: Object;
      export const Flux: Object;
      export const FluxDispatcher: Object;
      export const i18n: Object;
      export const React: Object;
      export const ReactDOM: Object;
      export const Redux: Object;
      export const zustand: Function;
      export const highlightjs: Object;
      namespace uuid {
        export function v4(): string;
      }
    }
    namespace internal {
      namespace idbKeyval {
        export function get(path: string): Promise<any>;
        export function set(path: string, value: any): Promise<void>;
      }
      namespace nests {
        export const Events: Record<string, string>;
        export function make(obj: any): Object;
      }
    }
  }
  namespace plugins {
    export function importPlugin(baseUrl: string): Promise<void>;
    export function removePlugin(pluginId: string): void;
    export function togglePlugin(pluginId: string): void;
    export const installed: Object;
    export const loaded: Object;
  }
  namespace patcher {
    export function before(functionName: string, functionParent: Object | Function, callback: (arguments: Array<any | Object | Function>) => any): () => boolean;
    export function after(functionName: string, functionParent: Object | Function, callback: (arguments: Array<any | Object | Function>, returnValue: any) => any): () => boolean;
    export function instead(functionName: string, functionParent: Object | Function, callback: (arguments: Array<any | Object | Function>) => any): () => boolean;
    export function injectCSS(newCss?: string): void;
  }
  namespace utils {
    export function findInTree(tree: Array<any> | Object, searchFilter: string | ((object: Array<any> | Object) => boolean), settings: { walkable?: Array<any>, ignore: Array<any>, limit?: number }): any;
    export function findInReactTree(tree: Array<any> | Object, searchFilter: string | ((object: Array<any> | Object) => boolean)): any;
    export function copyText(text: string): void;
    export function getOwnerInstance(elem: any): any;
    export function getReactInstance(elem: any): Object;
    namespace logger {
      export function log(...args: Array<any>): void;
      export function warn(...args: Array<any>): void;
      export function error(...args: Array<any>): void;
    }
    export function useNest(nest: Object): void;
  }
  namespace ui {
    namespace modals {
      export function showConfirmationModal(data: {header?: string, confirmText?: string, cancelText?: string, content?: string, type?: string}, callback?: (boolean) => void): Promise<boolean>;
    }
    namespace toasts {
      export function showToast(data: {title: string, content?: string, onClick?: Function, className?: string, duration?: number}): void;
    }
  }
}

declare module "@cumcord/dev" {
  export function showSettings(): void;
  export function toggleDevMode(): void;
}

declare module "@cumcord/modules" {
  namespace webpack {
    export const modules: Object;
    export function find(filter: Function): undefined | Object | Function;
    export function findAll(filter: Function): Array<any | Function>;
    export function findByProps(...propNames: Array<String>): undefined | Object | Function;
    export function findByPropsAll(...propNames: Array<String>): Array<any | Object | Function>;
    export function findByPrototypes(...protoNames: Array<String>): Array<any | Object | Function>;
    export function findByDisplayName(displayName: String): any;
    export function findByStrings(...searchStrings: Array<String>): undefined | Object | Function;
    export function findByKeywordAll(...searchStrings: Array<String>): Array<any | Object | Function>;
  }
  namespace common {
    export const constants: Object;
    export const channels: Object;
    export const Flux: Object;
    export const FluxDispatcher: Object;
    export const i18n: Object;
    export const React: Object;
    export const ReactDOM: Object;
    export const Redux: Object;
    export const zustand: Function;
    export const highlightjs: Object;
    namespace uuid {
      export function v4(): string;
    }
  }
  namespace internal {
    namespace idbKeyval {
      export function get(path: string): Promise<any>;
      export function set(path: string, value: any): Promise<void>;
    }
    namespace nests {
      export const Events: Record<string, string>;
      export function make(obj: any): Object;
    }
  }
}

declare module "@cumcord/modules/webpack" {
  export const modules: Object;
  export function find(filter: Function): undefined | Object | Function;
  export function findAll(filter: Function): Array<any | Function>;
  export function findByProps(...propNames: Array<String>): undefined | Object | Function;
  export function findByPropsAll(...propNames: Array<String>): Array<any | Object | Function>;
  export function findByPrototypes(...protoNames: Array<String>): Array<any | Object | Function>;
  export function findByDisplayName(displayName: String): any;
  export function findByStrings(...searchStrings: Array<String>): undefined | Object | Function;
  export function findByKeywordAll(...searchStrings: Array<String>): Array<any | Object | Function>;
}

declare module "@cumcord/modules/common" {
  export const constants: Object;
  export const channels: Object;
  export const Flux: Object;
  export const FluxDispatcher: Object;
  export const i18n: Object;
  export const React: Object;
  export const ReactDOM: Object;
  export const Redux: Object;
  export const zustand: Function;
  export const highlightjs: Object;
  namespace uuid {
    export function v4(): string;
  }
}

declare module "@cumcord/modules/common/uuid" {
  export function v4(): string;
}

declare module "@cumcord/modules/internal" {
  namespace idbKeyval {
    export function get(path: string): Promise<any>;
    export function set(path: string, value: any): Promise<void>;
  }
  namespace nests {
    export const Events: Record<string, string>;
    export function make(obj: any): Object;
  }
}

declare module "@cumcord/modules/internal/idbKeyval" {
  export function get(path: string): Promise<any>;
  export function set(path: string, value: any): Promise<void>;
}

declare module "@cumcord/modules/internal/nests" {
  export const Events: Record<string, string>;
  export function make(obj: any): Object;
}

declare module "@cumcord/plugins" {
  export function importPlugin(baseUrl: string): Promise<void>;
  export function removePlugin(pluginId: string): void;
  export function togglePlugin(pluginId: string): void;
  export const installed: Object;
  export const loaded: Object;
}

declare module "@cumcord/patcher" {
  export function before(functionName: string, functionParent: Object | Function, callback: (arguments: Array<any | Object | Function>) => any): () => boolean;
  export function after(functionName: string, functionParent: Object | Function, callback: (arguments: Array<any | Object | Function>, returnValue: any) => any): () => boolean;
  export function instead(functionName: string, functionParent: Object | Function, callback: (arguments: Array<any | Object | Function>) => any): () => boolean;
  export function injectCSS(newCss?: string): void;
}

declare module "@cumcord/utils" {
  export function findInTree(tree: Array<any> | Object, searchFilter: string | ((object: Array<any> | Object) => boolean), settings: { walkable?: Array<any>, ignore: Array<any>, limit?: number }): any;
  export function findInReactTree(tree: Array<any> | Object, searchFilter: string | ((object: Array<any> | Object) => boolean)): any;
  export function copyText(text: string): void;
  export function getOwnerInstance(elem: any): any;
  export function getReactInstance(elem: any): Object;
  namespace logger {
    export function log(...args: Array<any>): void;
    export function warn(...args: Array<any>): void;
    export function error(...args: Array<any>): void;
  }
  export function useNest(nest: Object): void;
}

declare module "@cumcord/utils/logger" {
  export function log(...args: Array<any>): void;
  export function warn(...args: Array<any>): void;
  export function error(...args: Array<any>): void;
}

declare module "@cumcord/ui" {
  namespace modals {
    export function showConfirmationModal(data: {header?: string, confirmText?: string, cancelText?: string, content?: string, type?: string}, callback?: (boolean) => void): Promise<boolean>;
  }
  namespace toasts {
    export function showToast(data: {title: string, content?: string, onClick?: Function, className?: string, duration?: number}): void;
  }
}

declare module "@cumcord/ui/modals" {
  export function showConfirmationModal(data: {header?: string, confirmText?: string, cancelText?: string, content?: string, type?: string}, callback?: (boolean) => void): Promise<boolean>;
}

declare module "@cumcord/ui/toasts" {
  export function showToast(data: {title: string, content?: string, onClick?: Function, className?: string, duration?: number}): void;
}
