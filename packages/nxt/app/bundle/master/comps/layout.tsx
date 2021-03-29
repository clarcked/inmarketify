import React, {Component} from 'react';
import Head from "next/head";
import AppBar from './appBar';
import MainMenu from "./mainMenu";
import SideContent from "./sideContent";

class MasterLayout extends Component<any, any> {
    render() {
        return (
            <div id="master-layout" className="grid-c-1-a h-expand flow-hidden">
                <Head>
                    <title>InMarketify - Master</title>
                </Head>
                <section className="grid-r-a-1 flow-hidden">
                    <AppBar {...this.props}/>
                    <section className="grid-c-a-1 h-expand flow-hidden">
                        <MainMenu {...this.props}/>
                        <section id="content" className="flow-hidden">{this.props.children}</section>
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