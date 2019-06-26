/**
 * @author WMXPY
 * @namespace BWNL
 * @description Spinner
 */

import { Classes } from "jss";
import * as React from "react";
import { mergeClasses } from "./style/decorator";
import { LoadingStyle } from "./style/loading";

export type LoadingProps = {

    readonly duration?: number;
    readonly loading?: boolean;
    readonly outerColor?: string;
    readonly innerColor?: string;
    readonly style?: React.CSSProperties;
    readonly className?: string;
};

export type LoadingStates = {

    readonly spinning: boolean;
};

export class Loading extends React.Component<LoadingProps, LoadingStates> {

    public readonly state: LoadingStates = {

        spinning: this.props.loading,
    };

    private _timer: any;
    private readonly _loadingStyle: Classes = LoadingStyle.use();

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

            const duration: number = this.props.duration ? Math.floor(this.props.duration / 3) : 1000;
            this._timer = setTimeout(() => this.setState({
                spinning: false,
            }), duration);
        }
    }

    public render(): JSX.Element {

        return (<div
            style={this.props.style}
            className={mergeClasses(this._loadingStyle.loading, this.props.className)}
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

        const result: React.CSSProperties = {};
        if (this.props.loading) {

            const color: string = this.props.outerColor || '#001F3F';
            result.outline = `0.5rem solid ${color}`;
        } else {

            result.outline = `0.8rem solid transparent`;
        }

        if (this.state.spinning) {

            const duration: number = this.props.duration || 3000;
            result.animation = `bwnl-loading-rotate ${duration}ms infinite`;
        }

        return result;
    }

    private _backStyle(): React.CSSProperties {

        const result: React.CSSProperties = {};
        if (this.props.loading) {

            const color: string = this.props.innerColor || '#01FF70';
            result.outline = `0.5rem solid ${color}`;
        } else {

            result.outline = `0.8rem solid transparent`;
        }

        if (this.state.spinning) {

            const duration: number = this.props.duration ? Math.floor(this.props.duration / 2) : 1500;
            result.animation = `bwnl-loading-rotate ${duration}ms infinite`;
        }

        return result;
    }
}
