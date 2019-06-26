/**
 * @author WMXPY
 * @namespace BWNL
 * @description View
 */

import * as React from 'react';
import { Loading, LoadingProps } from './loading';

export type LoadingViewProps = {

    readonly width?: number | string;
    readonly height?: number | string;
    readonly flex?: number;
    readonly loadingStyle?: React.CSSProperties;
    readonly loadingClassName?: string;
    readonly style?: React.CSSProperties;
    readonly className?: string;
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
            {this.props.children}
        </div>);
    }

    public _getViewStyle(): React.CSSProperties {

        return {
            display: 'flex',
            width: this.props.width,
            height: this.props.height,
            flex: this.props.flex,
            justifyContent: 'center',
            alignItems: 'center',
            ...this.props.style,
        };
    }
}
