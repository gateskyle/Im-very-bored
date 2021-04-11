import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
    
export function ProjectPages(props) {
    return (
        <>
        <section class="container">
            <section class="row">
                <section class="col-sm">
                    <h1 class="font-weight-bold">Project: {props.title}</h1>
                    <hr/>
                </section>
            </section>

            <section class="row no-gutters">
                <article class="col">
                    <img src={props.pic} alt="The Entertainment List webpage" class="img-fluid"></img>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-md">
                    <p>{props.desc}</p>
                </article>
            </section>

            <section class="row no-gutters">
                <article class="col-sm">
                    <h1>Links:</h1>
                        <ul>
                            <li>
                                <a href={props.repo}>Repository</a>
                            </li>
                            <li>
                                <a href={props.webpage}>{props.webtitle}</a>
                            </li>
                        </ul>
                </article>
            </section>
        </section>
        </>
    )
}