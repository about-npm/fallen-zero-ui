import type { App, Plugin } from 'vue';
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
