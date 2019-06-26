/**
 * @author WMXPY
 * @namespace Style
 * @description Style
 */

import jss, { Classes, StyleSheet } from "jss";
import { JSSStyle } from "./decorator";

export class StyleManager {

    public static create(base: JSSStyle, meta: string) {

        return new StyleManager(base, meta);
    }

    private readonly _base: JSSStyle;
    private readonly _meta: string;

    private _sheet: StyleSheet | null;

    private constructor(base: JSSStyle, meta: string) {

        this._base = base;
        this._meta = meta;
        this._sheet = null;
    }

    public use(): Classes {

        const sheet: StyleSheet = this._getAttached();
        return sheet.classes;
    }

    public keyframe(): Classes {

        const sheet: StyleSheet = this._getAttached();
        return sheet.keyframes;
    }

    public sheet(): StyleSheet {

        return this._getAttached();
    }

    private _getAttached(): StyleSheet {

        if (this._sheet) {
            return this._sheet;
        }

        this._sheet = jss.createStyleSheet(this._base, {
            meta: `BWNL-LR-${this._meta}`,
        }).attach();
        return this._sheet;
    }
}
