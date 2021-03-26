import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import PDF from '../PDF/Kyle Gates_Resume_2020.pdf'

function ResumePage() {
    return(
        <>
             <section class="container">
            <section class="row">
                <section class="col">
                    <h1 class="font-weight-bold">Resume</h1>
                    <hr/>
                </section>
            </section>

            <section class="row">
                <section class="col">

                    <iframe title="Resume" src={PDF} width="100%" height="500px"></iframe>

                    <hr/>

                    <a href={PDF} download="KyleGatesPDF">Download The PDF</a>

                </section>
                
            </section>
        
        </section>

        <footer class="footer">

            <section class="footercontainer">

                <span class="text-muted">
                    Kyle Gates © 2020
                </span>

            </section>
        </footer>
        </>
    )
}

export default ResumePage;