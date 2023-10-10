export declare const FzCountTo: import("@fallen-zero/utils").SFCWithInstall<import("vue").DefineComponent<{
    startVal: {
        type: import("vue").PropType<number>;
        default: number;
    };
    endVal: {
        type: import("vue").PropType<number>;
        default: number;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    autoplay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    decimals: {
        type: import("vue").PropType<number>;
        default: number;
    };
    decimal: {
        type: import("vue").PropType<string>;
        default: string;
    };
    separator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    prefix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    suffix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    useEasing: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    easingFn: {
        type: import("vue").PropType<(_t: number, _b: number, _c: number, _d: number) => number>;
        default: (t: any, b: any, c: any, d: any) => any;
    };
}, {
    pauseResume: () => void;
    pause: () => void;
    reset: () => void;
    resume: () => void;
    start: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: unknown[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    startVal: {
        type: import("vue").PropType<number>;
        default: number;
    };
    endVal: {
        type: import("vue").PropType<number>;
        default: number;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    autoplay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    decimals: {
        type: import("vue").PropType<number>;
        default: number;
    };
    decimal: {
        type: import("vue").PropType<string>;
        default: string;
    };
    separator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    prefix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    suffix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    useEasing: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    easingFn: {
        type: import("vue").PropType<(_t: number, _b: number, _c: number, _d: number) => number>;
        default: (t: any, b: any, c: any, d: any) => any;
    };
}>>, {
    startVal: number;
    endVal: number;
    duration: number;
    autoplay: boolean;
    decimals: number;
    decimal: string;
    separator: string;
    prefix: string;
    suffix: string;
    useEasing: boolean;
    easingFn: (_t: number, _b: number, _c: number, _d: number) => number;
}, {}>> & Record<string, any>;
export default FzCountTo;
