declare const enUS: {
    locale: string;
    common: {
        confirm: string;
        cancel: string;
        loading: string;
    };
    Calendar: {
        markItems: string[];
        renderYearAndMonth: (year: number, month: number) => string;
    };
    Cascader: {
        placeholder: string;
    };
    Dialog: {
        ok: string;
    };
    ErrorBlock: {
        default: {
            title: string;
            description: string;
        };
        busy: {
            title: string;
            description: string;
        };
        disconnected: {
            title: string;
            description: string;
        };
        empty: {
            title: string;
            description: string;
        };
    };
    Form: {
        required: string;
        optional: string;
        defaultValidateMessages: {
            default: string;
            required: string;
            enum: string;
            whitespace: string;
            date: {
                format: string;
                parse: string;
                invalid: string;
            };
            types: {
                string: string;
                method: string;
                array: string;
                object: string;
                number: string;
                date: string;
                boolean: string;
                integer: string;
                float: string;
                regexp: string;
                email: string;
                url: string;
                hex: string;
            };
            string: {
                len: string;
                min: string;
                max: string;
                range: string;
            };
            number: {
                len: string;
                min: string;
                max: string;
                range: string;
            };
            array: {
                len: string;
                min: string;
                max: string;
                range: string;
            };
            pattern: {
                mismatch: string;
            };
        };
    };
    ImageUploader: {
        uploading: string;
        upload: string;
    };
    InfiniteScroll: {
        noMore: string;
        failedToLoad: string;
        retry: string;
    };
    Mask: {
        name: string;
    };
    Modal: {
        ok: string;
    };
    PullToRefresh: {
        pulling: string;
        canRelease: string;
        complete: string;
    };
    Slider: {
        name: string;
    };
    Stepper: {
        decrease: string;
        increase: string;
    };
    Switch: {
        name: string;
    };
};
export default enUS;
