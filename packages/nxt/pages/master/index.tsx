import React, {Component} from 'react';
import Head from "next/head";
import {MasterLayout} from "../../app/bundle/master/comps";
import {configs} from "../../app/core/providers";
import {ProjectCreator, ProjectMenu} from "../../app/bundle/master/project";

class Index extends Component<any, any> {
    render() {
        return (
            <MasterLayout>
                <Head>
                    <title>InMarketify - Master Dashboard</title>
                </Head>
                <div className="grid-c-1-a h-expand">
                    <section className="pad">
                        <ProjectCreator {...this.props}/>
                    </section>
                    <ProjectMenu/>
                </div>
            </MasterLayout>
        );
    }
}

export default Index;

export const getServerSideProps = async (ctx: any) => {
    const c = configs(ctx)
    return {
        props: {
            ...c
        }
    }
}