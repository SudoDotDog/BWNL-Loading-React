/**
 * @author WMXPY
 * @namespace Style
 * @description Loading
 */

import { JSSStyle } from "./decorator";
import { StyleManager } from "./style";

const commonFrontBackStyle = {

    transition: '0.8s all ease-in-out',
    pointerEvents: 'none',
    position: 'absolute',
    opacity: 1,

    '&.disable': {
        border: '0px solid red',
    },
};

const keyframes = {

    '100%': 'transform: rotate(360deg)',
};

const LoadingStyleBase: JSSStyle = {

    loading: {
        position: 'relative',
        transition: '0.5s all ease-in-out',
    },
    outer: {
        transition: '0.5s all ease-in-out',
        position: 'absolute',
    },
    front: {
        zIndex: 1,
        ...commonFrontBackStyle,
    },
    back: {
        ...commonFrontBackStyle,
    },
    '@global': {
        '@keyframes bwnl-loading-rotate': keyframes,
    },
};

export const LoadingStyle: StyleManager = StyleManager.create(LoadingStyleBase, 'Loading');
