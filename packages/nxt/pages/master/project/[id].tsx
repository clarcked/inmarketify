import React, {Component} from 'react';
import Head from "next/head";
import {List, ProjectMenu} from "../../../app/bundle/master/project";
import {MasterLayout} from "../../../app/bundle/master/comps";
import {configs} from "../../../app/core/providers";

class Project extends Component<any, any> {
    render() {
        return (
            <MasterLayout>
                <Head>
                    <title>InMarketify - Master Dashboard</title>
                </Head>
                <div className="grid-c-1-a h-expand">
                    <section className="pad">
                        <List/>
                    </section>
                    <ProjectMenu/>
                </div>
            </MasterLayout>
        );
    }
}

export default Project;


export const getServerSideProps = async (ctx: any) => {
    const c = configs(ctx)
    return {
        props: {
            ...c
        }
    }
}