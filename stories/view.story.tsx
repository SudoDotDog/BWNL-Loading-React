/**
 * @author WMXPY
 * @namespace Loading
 * @description Loading View
 * @override Story
 */

import { boolean, withKnobs } from "@storybook/addon-knobs";
import * as React from 'react';
import { LoadingView } from "../src";

export default {
    title: 'Loading View',
    decorators: [withKnobs],
};

export const Simple = () => {

    const loading: boolean = boolean('loading', true);

    return (<LoadingView
        loading={loading}
        width={300}
        height={300}
    >
        Loading
    </LoadingView>);
};
