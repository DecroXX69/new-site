import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FAQs = () => {
    useEffect(() => {
        document.title = "Learnedge - FAQ's"
        window.scrollTo(0, 0)
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <h1 className="h1 text-center ftext-col">FAQ's</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Is there any difference in a degree earned through an online MBA program compared to the on-campus program?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                No, a degree earned through an online MBA program is the same as that of the on-campus program. There is no distinction in the value or recognition of the degree based on the mode of study.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                What career support services are available to online MBA graduates?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Our career services team assists online MBA graduates with job placement, career counseling, resume building, interview preparation, and networking opportunities to enhance their career prospects.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Can I work while pursuing an online MBA?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Yes, one of the key benefits of our online MBA programs is their flexibility, allowing not only students but working professionals to also balance their studies with work and other commitments.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                Why get an online MBA than a regular MBA?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                In India, over 1,00,000 students are enrolled in online MBA programs, and the number is growing rapidly. The average cost of an online MBA program in India is also significantly lower than the cost of a regular MBA program.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                Which renowned universities have partnered with your company to offer their online MBA programs, and how does this collaboration benefit the students?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Learnedge has partnered with prestigious universities such as Amity Online, DY Patil University, NMIMS, Savitribai Phule University, Chandigarh University and many more to offer their online MBA programs. This collaboration benefits students by providing access to top-tier education, esteemed faculty, diverse specializations, and networking opportunities.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                What services does Learnedge offer?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Learnedge offers a wide range of educational consulting services, including college admissions counseling, academic tutoring, test preparation, and career counseling. We also provide guidance and resources to help students and families make informed decisions about college and beyond.
                            </div>
                        </div>
                    </div>
                </div>
                <ContactSection>
                    <h3>Still have questions?</h3>
                    <p>Feel free to <Link to="/contact" className="contact-link text-primary">contact us</Link> or call us at <a href="tel:+918669166575">+918669166575</a>.</p>
                </ContactSection>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .accordion-button {
        background-color: #f6c298;
    }
    .accordion-button:not(.collapsed) {
        background-color: #f6c298;
    }
    .accordion-button:focus {
        box-shadow: none;
    }
    .accordion-body {
        background-color: #f9f9f9;
    }
`

const ContactSection = styled.div`
    text-align: center;
    margin-top: 50px;
    h3 {
        font-size: 24px;
        color: #021f55;
    }
    p {
        font-size: 18px;
        color: #333;
    }
    .contact-link {
        color: #021f55;
        text-decoration: none;
    }
    .contact-link:hover {
        text-decoration: underline;
    }
`

export default FAQs
