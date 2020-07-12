/**
 * @author WMXPY
 * @namespace Loading
 * @description Loading View
 * @override Story
 */

import * as React from 'react';
import { LoadingView } from "../src";

export default {
    title: 'Loading View',
};

export const Simple = () => {

    return (<LoadingView
        loading={true}
        width={300}
        height={300}
    >
        Loading
    </LoadingView>);
};
