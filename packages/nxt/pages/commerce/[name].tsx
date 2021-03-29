import {configs} from "../../app/core/providers"
import {initializeRestHttp} from "../../app/core/providers/rest";
import {RestHttp} from "../../app/core/net";
import {isArray} from "lodash"


const Project = (props) => {

    return (
        <div className="pad">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos maiores possimus saepe
                veritatis?
                Accusamus corporis dolore et libero nam nostrum officia officiis perferendis quae, quod repellat
                sapiente
                sint ullam.
            </div>
        </div>
    )
}

export default Project

export const getStaticPaths = async (ctx) => {
    const c = configs(ctx)
    let paths = []
    let rest: RestHttp = initializeRestHttp(c.rest)
    const data = await rest.get("/api/projects", {headers: {Accept: "application/json", "im-project-tag": "master"}})
    paths = isArray(data) && data.map((o) => ({params: {name: o.name}}))
    return {
        paths: paths,
        fallback: false
    }
}
export const getStaticProps = async (ctx) => {
    const c = configs(ctx)
    return {
        props: {
            ...c
        }
    }
}