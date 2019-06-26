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
    width: '3rem',
    height: '3rem',
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
        margin: '1.5rem',
        width: '3rem',
        height: '3rem',
    },
    disable: {
        outline: `0.8rem solid transparent`,
    },
    enableFront: {
        outline: `0.5rem solid #001F3F`,
    },
    enableBack: {
        outline: `0.5rem solid #01FF70`,
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
    spinningFront: {
        animation: 'bwnl-loading-rotate 3s infinite',
    },
    spinningBack: {
        animation: 'bwnl-loading-rotate 1.5s infinite',
    },
    '@global': {
        '@keyframes bwnl-loading-rotate': keyframes,
    },
};

export const LoadingStyle: StyleManager = StyleManager.create(LoadingStyleBase, 'Loading');
