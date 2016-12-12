declare var SHORT_REVISION: string;
declare var _rollbarConfig: {
    accessToken: string;
    captureUncaught: boolean;
    payload: {
        client: {
            javascript: {
                source_map_enabled: boolean;
                code_version: string;
                guess_uncaught_frames: boolean;
            };
        };
        environment: string;
    };
};
