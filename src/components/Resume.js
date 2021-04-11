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
                    <p class="font-weight-bold">(WARNING: Display of resume does not work with mobile devices, must be viewed on desktop or be downloaded)</p>
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
        </>
    )
}

export default ResumePage;