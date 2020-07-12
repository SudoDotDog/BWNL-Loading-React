/**
 * @author WMXPY
 * @namespace Loading
 * @description Loading
 * @override Story
 */

import { boolean, withKnobs } from "@storybook/addon-knobs";
import * as React from 'react';
import { Loading } from "../src";

export default {
    title: 'Loading',
    decorators: [withKnobs],
};

export const Simple = () => {

    const loading: boolean = boolean('loading', true);

    return (<Loading
        loading={loading}
        duration={3000}
        size={3}
        unit="rem"
        outerColor={undefined}
        innerColor={undefined}
    />);
};
