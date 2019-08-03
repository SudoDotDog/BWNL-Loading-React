/**
 * @author WMXPY
 * @namespace Loading
 * @description Indicator
 */

import * as React from "react";
import { LoadingView, LoadingViewProps } from "./view";

export type LoadingIndicatorProps = {

    readonly loading?: boolean;
    readonly children?: any;

    readonly view?: LoadingViewProps;
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = (props: LoadingIndicatorProps) => {

    if (props.loading) {
        return <LoadingView
            {...props.view}
        />;
    }

    return props.children;
};
