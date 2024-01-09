declare const _default: <T>(__VLS_props: {
    wheel?: boolean | undefined;
    "onUpdate:modelValue"?: ((args_0: boolean) => any) | undefined;
    list: T[];
    step?: number | undefined;
    modelValue?: boolean | undefined;
    hover?: boolean | undefined;
    delay?: number | undefined;
    waitTime?: number | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        default?(_: {
            index: number;
            data: T;
        }): any;
    };
    emit: (evt: "update:modelValue", args_0: boolean) => void;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        wheel?: boolean | undefined;
        "onUpdate:modelValue"?: ((args_0: boolean) => any) | undefined;
        list: T[];
        step?: number | undefined;
        modelValue?: boolean | undefined;
        hover?: boolean | undefined;
        delay?: number | undefined;
        waitTime?: number | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {
            index: number;
            data: T;
        }): any;
    };
    emit: (evt: "update:modelValue", args_0: boolean) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            wheel?: boolean | undefined;
            "onUpdate:modelValue"?: ((args_0: boolean) => any) | undefined;
            list: T[];
            step?: number | undefined;
            modelValue?: boolean | undefined;
            hover?: boolean | undefined;
            delay?: number | undefined;
            waitTime?: number | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {
                index: number;
                data: T;
            }): any;
        };
        emit: (evt: "update:modelValue", args_0: boolean) => void;
    } | undefined;
};
export default _default;
