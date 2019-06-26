/**
 * @author WMXPY
 * @namespace BWNL
 * @description Spinner
 */

import { Classes } from "jss";
import * as React from "react";
import { assertIfTrue, mergeClasses } from "./style/decorator";
import { LoadingStyle } from "./style/loading";

export type LoadingProps = {

    readonly loading: boolean;
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

            this._timer = setTimeout(() => this.setState({
                spinning: false,
            }), 1000);
        }
    }

    public render(): JSX.Element {

        return (<div className={this._loadingStyle.loading}>
            <div className={this._loadingStyle.outer} >
                <div className={this._frontClass()} />
                <div className={this._backClass()} />
            </div>
        </div>);
    }

    private _frontClass(): string | undefined {

        return mergeClasses(
            this._loadingStyle.front,
            this.props.loading ? this._loadingStyle.enableFront : this._loadingStyle.disable,
            assertIfTrue(this.state.spinning, this._loadingStyle.spinningFront),
        );
    }

    private _backClass(): string | undefined {

        return mergeClasses(
            this._loadingStyle.back,
            this.props.loading ? this._loadingStyle.enableBack : this._loadingStyle.disable,
            assertIfTrue(this.state.spinning, this._loadingStyle.spinningBack),
        );
    }
}
