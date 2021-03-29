import React, {Component} from 'react';
import Head from "next/head";
import {configs} from "../../../app/core/providers";
import {ProjectCreator, ProjectMenu} from "../../../app/bundle/master/project";
import {MasterLayout} from "../../../app/bundle/master/comps";

class Create extends Component<any, any> {
    render() {
        return (
            <MasterLayout>
                <Head>
                    <title>InMarketify - Master Dashboard</title>
                </Head>
                <div className="grid-c-1-a h-expand flow-hidden">
                    <section className="grid-c-a-1 h-expand flow-hidden">
                        <ProjectCreator {...this.props} name="projects"/>
                    </section>
                    <ProjectMenu/>
                </div>
            </MasterLayout>
        );
    }
}

export default Create;

export const getServerSideProps = async (ctx: any) => {
    const c = configs(ctx)
    return {
        props: {
            ...c
        }
    }
}