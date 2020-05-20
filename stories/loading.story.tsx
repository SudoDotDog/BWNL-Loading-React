/**
 * @author WMXPY
 * @namespace Loading
 * @description Loading
 * @override Story
 */

import * as React from 'react';
import { Loading } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Loading',
};

export const Simple = () => {

    return (<Loading
        loading={true}
        duration={3000}
        size={3}
        unit="rem"
        outerColor={undefined}
        innerColor={undefined}
    />);
};
