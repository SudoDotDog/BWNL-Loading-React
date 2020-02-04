/**
 * @author WMXPY
 * @namespace Loading
 * @description View
 */

import * as React from 'react';
import { Loading, LoadingProps } from './loading';

export type LoadingViewProps = {

    readonly width?: number | string;
    readonly height?: number | string;

    readonly flex?: number;

    readonly style?: React.CSSProperties;
    readonly loadingStyle?: React.CSSProperties;

    readonly className?: string;
    readonly loadingClassName?: string;
} & LoadingProps;

export class LoadingView extends React.Component<LoadingViewProps> {

    public render() {

        return (<div
            style={this._getViewStyle()}
            className={this.props.className}
        >
            <Loading
                duration={this.props.duration}
                loading={this.props.loading}
                innerColor={this.props.innerColor}
                outerColor={this.props.outerColor}
                style={this.props.loadingStyle}
                className={this.props.loadingClassName}
                size={this.props.size}
                unit={this.props.unit}
            />
            <div>
                {this.props.children}
            </div>
        </div>);
    }

    public _getViewStyle(): React.CSSProperties {

        return {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: this.props.flex || 1,

            width: this.props.width || 'auto',
            height: this.props.height || 'auto',

            ...this.props.style,
        };
    }
}
