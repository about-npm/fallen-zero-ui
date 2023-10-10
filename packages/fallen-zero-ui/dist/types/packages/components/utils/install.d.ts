import type { AppContext, Plugin, Directive } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
export declare const withInstallDirective: <T extends Directive>(directive: T, name: string) => SFCWithInstall<T>;
