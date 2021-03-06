import React, {Component} from 'react';
import Head from "next/head";
import {ProjectMenu} from "../../../app/bundle/master/project";
import {MasterLayout} from "../../../app/bundle/master/comps";
import {configs} from "../../../app/core/providers";
import {UserCreator} from "../../../app/bundle/master/user";

class Create extends Component {
    render() {
        return (
            <MasterLayout>
                <Head>
                    <title>InMarketify - Master Dashboard</title>
                </Head>
                <div className="grid-c-1-a h-expand">
                    <section className="grid-c-a-1">
                        <UserCreator {...this.props} name={"users"}/>
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