/**
 * @author WMXPY
 * @namespace Loading
 * @description Spinner
 */

import { mergeClasses } from "@sudoo/jss";
import { TIME_IN_MILLISECONDS } from "@sudoo/magic";
import * as React from "react";
import { LoadingStyle } from "./style/loading";

export type LoadingProps = {

    readonly duration?: number;
    readonly loading?: boolean;
    readonly size?: number;
    readonly unit?: string;
    readonly outerColor?: string;
    readonly innerColor?: string;
    readonly style?: React.CSSProperties;
    readonly className?: string;
};

export type LoadingStates = {

    readonly spinning: boolean;
};

// tslint:disable: no-magic-numbers
export class Loading extends React.Component<LoadingProps, LoadingStates> {

    public readonly state: LoadingStates = {

        spinning: this.props.loading || false,
    };

    private _timer: any;
    private readonly _loadingStyle = LoadingStyle.use();

    public constructor(props: LoadingProps) {

        super(props);

        this._timer = undefined;
    }

    public componentWillReceiveProps(nextProps: LoadingProps) {

        clearTimeout(this._timer);

        if (nextProps.loading) {

            this.setState({
                spinning: true,
            });
        } else {

            const duration: number = this.props.duration ? Math.floor(this.props.duration / 3) : TIME_IN_MILLISECONDS.SECOND;
            this._timer = setTimeout(() => this.setState({
                spinning: false,
            }), duration);
        }
    }

    public render(): JSX.Element {

        return (<div
            style={{
                width: this._getSize(),
                height: this._getSize(),
                margin: this._getSize(0.5),
                ...this.props.style,
            }}
            className={mergeClasses(
                this._loadingStyle.loading,
                this.props.className,
            )}
        >
            <div
                className={this._loadingStyle.outer}
            >
                <div
                    style={this._fontStyle()}
                    className={this._loadingStyle.front}
                />
                <div
                    style={this._backStyle()}
                    className={this._loadingStyle.back}
                />
            </div>
        </div>);
    }

    private _fontStyle(): React.CSSProperties {

        const result: React.CSSProperties = {
            width: this._getSize(),
            height: this._getSize(),
        };
        if (this.props.loading) {

            const color: string = this.props.outerColor || '#001F3F';
            result.outline = `${this._getSize(0.2)} solid ${color}`;
        } else {

            result.outline = `${this._getSize(0.3)} solid transparent`;
        }

        if (this.state.spinning) {

            const duration: number = this.props.duration || 3000;
            result.animation = `bwnl-loading-rotate ${duration}ms infinite`;
        }

        return result;
    }

    private _backStyle(): React.CSSProperties {

        const result: React.CSSProperties = {
            width: this._getSize(),
            height: this._getSize(),
        };
        if (this.props.loading) {

            const color: string = this.props.innerColor || '#01FF70';
            result.outline = `${this._getSize(0.2)} solid ${color}`;
        } else {

            result.outline = `${this._getSize(0.3)} solid transparent`;
        }

        if (this.state.spinning) {

            const duration: number = this.props.duration ? Math.floor(this.props.duration / 2) : 1500;
            result.animation = `bwnl-loading-rotate ${duration}ms infinite`;
        }

        return result;
    }

    private _getSize(times: number = 1): string {

        const size: number = this.props.size || 3;
        const unit: string = this.props.unit || 'rem';
        const numeric: number = Math.round((size * times) * 10) / 10;
        return `${numeric}${unit}`;
    }
}
// tslint:enable: no-magic-numbers
