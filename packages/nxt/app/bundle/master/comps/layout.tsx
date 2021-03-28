import React, {Component} from 'react';
import Head from "next/head";
import AppBar from './appBar';
import MainMenu from "./mainMenu";
import SideContent from "./sideContent";

class MasterLayout extends Component<any, any> {
    render() {
        return (
            <div id="master-layout" className="grid-c-1-a h-expand">
                <Head>
                    <title>InMarketify - Master</title>
                </Head>
                <section className="grid-r-a-1">
                    <AppBar {...this.props}/>
                    <section className="grid-c-a-1">
                        <MainMenu {...this.props}/>
                        <section>{this.props.children}</section>
                    </section>
                </section>
                <aside className="w-300 wire-l">
                    <SideContent {...this.props}/>
                </aside>
            </div>
        );
    }
}

export default MasterLayout;