declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    wheel: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    list: {
        type: import("vue").PropType<any[]>;
        required: true;
    };
    hover: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    delay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    waitTime: {
        type: import("vue").PropType<number>;
        default: number;
    };
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (_val: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    wheel: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    list: {
        type: import("vue").PropType<any[]>;
        required: true;
    };
    hover: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    delay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    waitTime: {
        type: import("vue").PropType<number>;
        default: number;
    };
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((_val: boolean) => any) | undefined;
}, {
    wheel: boolean;
    modelValue: boolean;
    hover: boolean;
    delay: number;
    waitTime: number;
    step: number;
}, {}>, {
    default?(_: {
        index: number;
        data: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
