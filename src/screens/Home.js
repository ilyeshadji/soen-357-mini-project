import React, {useEffect, useRef} from 'react'
import OldHappyImg from "../assets/old-happy-people.jpeg";
import MarketTrendsImg from '../assets/MarketImage.png'
import LuminosityLogoImg from '../assets/LuminosityLogo.png'
import PillboxieLogoImg from '../assets/PillboxieLogo.png'
import CharlesPersona from '../assets/Charles_Persona_-_Final.png'
import PeggyPersona from '../assets/Peggy.png'
import RajPersona from '../assets/raj_2.png'
import SilverSneakersLogoImg from '../assets/SilverSneakersLogo.png'
import Graph1 from '../assets/graph1.png'
import Graph2 from '../assets/graph2.png'
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
    const location = useLocation();

    const understandingTheProblemRef = useRef()
    const researchRef = useRef()
    const userResearchRef = useRef()

    useEffect(() => {
        if (location.state?.section === 'UNDERSTANDING_THE_PROBLEM') {
            window.scrollTo({top: understandingTheProblemRef.current.offsetTop - 150, behavior: 'smooth'});
        }

        if (location.state?.section === 'RESEARCH') {
            window.scrollTo({top: researchRef.current.offsetTop - 150, behavior: 'smooth'});
        }

        if (location.state?.section === 'USER_RESEARCH') {
            window.scrollTo({top: userResearchRef.current.offsetTop - 150, behavior: 'smooth'});
        }
    }, [location])

    return (
        <Container>
            <InfoContainer>
                <OldHappyImageContainer>
                    <OldHappyImage src={OldHappyImg}/>
                </OldHappyImageContainer>

                <Infos>
                    <BigTitle>Designing for the elderly</BigTitle>
                    <StudentName>Ilyes Hadji - 40102183</StudentName>
                    <StudentName>Petru-Andrei Vrabie - 40113236</StudentName>
                    <StudentName>Matin Tavakkoli - 40088759</StudentName>
                </Infos>
            </InfoContainer>

            <div style={{marginTop: '120px'}}></div>

            <SectionContainer>
                <SectionTitle>Introduction</SectionTitle>

                <SectionText>
                    In the wake of the COVID-19 pandemic, elderly individuals face unprecedented challenges, from
                    increased health risks to prolonged isolation, illustrating the need for supportive technologies.
                    Research has shown that this demographic is particularly vulnerable, not just to the virus, but to
                    the mental and physical strain of extended stay-at-home measures.
                    Our aim is to develop an app that enhances mental, physical, and social well-being, tailored to the
                    unique needs of older adults.

                </SectionText>
            </SectionContainer>

            <SectionContainer>
                <SectionTitle ref={understandingTheProblemRef}>Understanding the problem</SectionTitle>

                <SectionText>
                    The main objective is to develop an application that supports the physical and mental well-being of
                    elderly users. This demographic involves unique challenges, particularly aggravated by the COVID-19
                    pandemic, including severe health complications, increased mortality rates, and heightened mental
                    health concerns due to extended isolation. The application must be accessible to users with varying
                    levels of technological skills, physical, and cognitive abilities, enhancing their independence,
                    social engagement, and access to essential health resources.

                </SectionText>

                <ComponentsToExamine>
                    <Card>
                        <CardSubtitle>
                            User Diversity and Technological Proficiency
                        </CardSubtitle>

                        <CardText>
                            It is important to recognize the wide spectrum of technological proficiency among the
                            elderly.
                            The
                            varying skill level among this population influences their interactions with technology in
                            general
                            and their openness to adopting new applications.
                        </CardText>
                    </Card>

                    <Card>
                        <CardSubtitle>
                            Physical and Cognitive Limitations
                        </CardSubtitle>

                        <CardText>
                            The application’s design must take into account the elderly’s physical and cognitive
                            limitations in order to ensure its usability and accessibility. This can include anything
                            from periodic reminders to minimalistic navigation requirements throughout the app. Overall,
                            the design considerations should facilitate the ease of use for users with various potential
                            impairments
                        </CardText>
                    </Card>

                    <Card>
                        <CardSubtitle>
                            Social Engagement and Mental Well-being
                        </CardSubtitle>

                        <CardText>
                            It is important to promote social connections and support mental health, particularly during
                            isolation periods. The application would ideally include features that promote communication
                            and allow participation in activities that permits users to stimulate mental health and
                            physical activity.
                        </CardText>
                    </Card>

                    <Card>
                        <CardSubtitle>
                            Health and Mobility Support
                        </CardSubtitle>

                        <CardText>
                            The application should offer functionalities that help with the maintenance of physical or
                            mental health, exercise guidance, reminders to take medication, or access to telehealth
                            services. As well, features that promote safety as well as independence are also important.
                        </CardText>
                    </Card>

                    <Card>
                        <CardSubtitle>
                            Accessibility and Usability
                        </CardSubtitle>

                        <CardText>
                            It is important to make sure that the application’s interface tends to the needs of the
                            elderly. This can include the optimization of text size, color contrast, size of buttons, as
                            well as the simplification of navigation to promote user-friendliness.
                        </CardText>
                    </Card>
                </ComponentsToExamine>

                <SectionSubtitle>
                    Selected and Prioritized Information
                </SectionSubtitle>

                <SectionText>
                    In order to select and prioritize the information appropriate for solving the problem or the concept
                    defined, it is important to conduct extensive research in order to develop a detailed set of user
                    personas that reflect the varying preferences of the elderly population as well as their proficiency
                    with technology. We need to conduct a competitive analysis of already existing applications which
                    target elderly users in order to identify gaps as well as new opportunities for an application which
                    has not yet been created. Furthermore, we need to gather information on the best practices that need
                    to be taken into account in order to mold our application in such a way that it will improve
                    usability as well as accessibility for the elderly. It is also important to identify barriers with
                    technology that elderly users face and explore recent technologies that are attempting to solve
                    these challenges. Last but not least, it is crucial to collect feedback from elderly users via
                    prototype testing in order to improve the final product according to their needs.

                </SectionText>

            </SectionContainer>

            <SectionContainer ref={researchRef}>
                <SectionTitle>Research</SectionTitle>

                <SectionText withoutIndent={true}>
                    In order to inform the design choices for an application which is targeted towards improving the
                    well-being of elderly users, it was important to examine market trends, already existing
                    applications, as well as to examine user preferences.
                </SectionText>

                <MarketTrendsContainer>
                    <MarketTrendsImage src={MarketTrendsImg}/>

                    <MarketTrendsInfo>
                        <SectionSubtitle margin={'0'}>
                            Market trends
                        </SectionSubtitle>

                        <SectionText>
                            Through researching market trends, it is evident that the adoption of technology in the
                            elderly population has increased significantly. This particularly challenges a common
                            stereotype that the elderly are resistant to adopting new technologies. A study conducted by
                            the Pew Research Center notes that there has been a significant increase in internet usage
                            as well as smartphone usage within the population of adults that are aged 65 and older. This
                            specific trend shows that there is potential for digital solutions to enhance the well-being
                            of the elderly population and that the probability of product adoption would be good. This
                            would trend particularly positively in areas which are related to social connectivity,
                            well-being, and health.
                        </SectionText>
                    </MarketTrendsInfo>
                </MarketTrendsContainer>

                <SectionSubtitle>
                    Competition
                </SectionSubtitle>

                <CompetitionContainer>
                    <CompetitionItem>
                        <CompetitionLogo src={PillboxieLogoImg}/>

                        <CompetitionInfo>
                            <CardSubtitle>Pillboxie</CardSubtitle>
                            <CardText>
                                Pillboxie is an application that allows a user to manage their medication with visual
                                aids to assist users by reminding them to take their medication. We determined that the
                                application is of use to elderly users that might be handling a multitude of
                                subscriptions which can help them to prevent missing doses. From a design perspective,
                                it has a straightforward drag and drop interface that makes it easy for users who are
                                not technically proficient. While this application is useful, it doesn’t offer any
                                additional features beyond this.
                            </CardText>
                        </CompetitionInfo>
                    </CompetitionItem>

                    <CompetitionItem>
                        <CompetitionLogo src={LuminosityLogoImg}/>

                        <CompetitionInfo>
                            <CardSubtitle>Lumosity</CardSubtitle>
                            <CardText>
                                This application is focused on training a user’s cognitive abilities. Some specific
                                abilities that can be trained include but are not limited to problem-solving, attention,
                                and memory retention. For the purposes of the research for this project, the application
                                has exercises not only for the general population and a wide variety of ages, but also
                                notably exercises which are specifically targeted towards seniors. However, it does not
                                offer any additional features beyond this.

                            </CardText>
                        </CompetitionInfo>
                    </CompetitionItem>

                    <CompetitionItem>
                        <CompetitionLogo src={SilverSneakersLogoImg}/>

                        <CompetitionInfo>
                            <CardSubtitle>SilverSneakers</CardSubtitle>
                            <CardText>
                                This application is designed specifically for seniors. It offers several physical
                                activities targeted specifically to older adults. It makes it simple to stay active with
                                custom physical exercises as well as instructions that are easy to follow. It addresses
                                the physical health aspect which is paramount for this particular demographic. However,
                                it is not integrated with social networking features and does not specifically address
                                the mental health aspect either.

                            </CardText>
                        </CompetitionInfo>
                    </CompetitionItem>
                </CompetitionContainer>

                <SectionSubtitle>Insights and Design Considerations</SectionSubtitle>

                <SectionText>
                    The analysis of currently existing applications as well as market trends revealed a multitude of
                    insights. From the perspective of general well-being, there seems to be a need for an application
                    that integrates physical fitness, mental health, and social connectivity. A solution that would
                    combine all of the above would be effective in meeting most needs of the elderly population. From a
                    user-friendly design perspective, applications must prioritize how easy and straightforward they are
                    to use. It needs to have clear instructions and a navigation which has a natural flow. Overall,
                    features that can help users with different levels of proficiency with technology and/or physical
                    capabilities can include adjustable text sizes, larger buttons, and voice-enabled commands. From
                    adaptability as well as a personalization perspective, having the ability to customize features from
                    an individual’s specific preferences point of view as well as their abilities is important.
                </SectionText>
            </SectionContainer>

            <SectionContainer ref={userResearchRef}>
                <SectionTitle>User Research</SectionTitle>

                <SectionText>
                    In order to properly take into account the challenges associated with the design and creation of an
                    application for the elderly population, our methodology involved extensive methods for user
                    research. The overall scope of this research was to understand the physical, cognitive, as well as
                    social aspects of our targeted market, specifically, the elderly. The findings obtained helped us to
                    inform our design decisions and ensured that the application was aligned with our targeted markets’s
                    needs.
                </SectionText>

                <SectionSubtitle>
                    User Interviews: Coming up with Questions / Obtaining Insights
                </SectionSubtitle>

                <SectionText>
                    Our objective was to come up with a way to explore what our targeted user’s routines would be, their
                    level of technology use, and overall desires. We wanted to explore a variety of different ways to
                    obtain information, and our first approach was to ask some open-ended questions in order to
                    encourage detailed responses. We also made sure that the questions were respectful and
                    understandable. Some of the questions that we asked included the following:
                </SectionText>

                <SectionSubtitle little margin={'20px'} color={'black'}>
                    1. “Could you please describe to me the primary challenges that you face when you are using your
                    smartphone or any other piece of technology?”
                </SectionSubtitle>

                <SectionSubtitle little margin={'20px'} color={'black'}>
                    2. “Would you be able to please walk me through your average day, and point out any particular
                    moments where you are using any piece of technology?”
                </SectionSubtitle>

                <SectionSubtitle little margin={'20px'} color={'black'}>
                    3. “Could you please tell me how you choose to typically stay in contact with your friends and
                    family?”
                </SectionSubtitle>

                <SectionSubtitle little margin={'20px'} color={'black'}>
                    4. “Would there be any particular features that you would desire to be more readily available or
                    accessible in the applications that you use?”
                </SectionSubtitle>

                <SectionSubtitle>
                    User responses
                </SectionSubtitle>

                <CompetitionItem margin={'20px 0 0 0'}>
                    <SectionSubtitle little margin={'20px'} color={'black'}>
                        “I am always struggling to properly read the small font sizes in the text on my phone. It
                        doesn’t even help if I am wearing my glasses.”

                    </SectionSubtitle>
                </CompetitionItem>

                <CompetitionItem margin={'20px 0 0 0'}>
                    <SectionSubtitle little margin={'20px'} color={'black'}>
                        “I would love to stay active but I really find that all these applications are really too
                        complicated.”
                    </SectionSubtitle>
                </CompetitionItem>

                <SectionSubtitle>
                    Surveys: User Preferences drawn from Quantitative Data
                </SectionSubtitle>

                <SectionText>
                    To further supplement our interviews conducted above, we also conducted surveys that focused on
                    technological preferences, the importance of certain features, as well as concerns with usability
                    among our target population. These questions included scales with ratings, as well as questions with
                    multiple choice options in order to promote that the survey is easy to complete and clear. Some of
                    our notable survey questions included the following:
                </SectionText>

                <SurveyQuestionsContainer>
                    <Card width={'750px'}>
                        <CardSubtitle>
                            “How comfortable are you in general when you use applications on your
                            smartphone?”: (Select one option only):
                        </CardSubtitle>

                        <CardText margin={'25px'} fontWeight={'bold'}>(5 - Very Comfortable)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(4 - Comfortable)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(3 - Somewhat Comfortable)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(2 - Not comfortable)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(1 - Not Very Comfortable)</CardText>
                    </Card>

                    <Card width={'750px'}>
                        <CardSubtitle>
                            “What features would you consider that are necessary for an application that is designed for
                            your particular age group?” (Select one or more options):
                        </CardSubtitle>

                        <CardText margin={'25px'} fontWeight={'bold'}>(It is easy to navigate throughout the
                            application.)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(It helps me to track my health.)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(It helps me to stay in touch with my friends or
                            family)</CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(It helps me to engage in physical activity.)
                        </CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(It helps to stimulate me mentally.)
                        </CardText>
                        <CardText margin={'25px'} fontWeight={'bold'}>(It helps to stimulate me cognitively.)
                        </CardText>
                    </Card>
                </SurveyQuestionsContainer>

                <SectionText withoutIndent>
                    In general, the results of our survey indicated that there was a strong preference for a navigation
                    that is straightforward, simple to use, and that has text which is large and clear. One notable
                    trend we noticed from our results is that 83% of our respondents classified “It is easy to navigate
                    throughout the application.” as necessary for question #2 above.
                </SectionText>

                <SectionSubtitle>Journey Mapping and User Personas</SectionSubtitle>

                <SectionText>
                    From the insights obtained from interviews and surveys that we conducted, we were able to improve
                    and update the user personas that were initially developed based on the user feedback which allow us
                    to more accurately represent the various preferences and needs of the elderly population. The user
                    personas helped us to have a better idea of our users and further guided the design process towards
                    solutions that tend to particular desires and challenges.
                </SectionText>

                <SectionText>
                    For example, one persona that we created was based on “Michael, the retiree who is an active social
                    butterfly”. This persona represents an individual who would like to be socially connected and active
                    at the same time to not feel isolated. Another persona we created was based on “Joanne, the
                    tech-scared retiree”. This persona represents
                    an individual who needs to have clear and simple instructions when using an application.
                </SectionText>

                <PersonaImage src={CharlesPersona}/>
                <PersonaImage src={PeggyPersona}/>
                <PersonaImage src={RajPersona}/>

                <SectionSubtitle>Ethical Guidelines</SectionSubtitle>

                <SectionText>
                    During the research portion of our project, we made sure to strictly follow the outlined guidelines
                    from an ethics point of view. We made sure that our participants provided us with their informed
                    consent, understood the purpose of the study, how their data would be protected and used, as well as
                    their rights. The signed ethics form is included in the appendix of the . PDF version of the website
                    on Moodle.
                </SectionText>

                <SectionSubtitle>Informed by Research: Design Decisions</SectionSubtitle>

                <SectionText>
                    The insights we obtained from our user research helped us to shape the design of our application. As
                    an example, it helped us to acknowledge that small text sizes should be avoided and to make sure
                    that the font sizes in our application are large and easily adjustable. The navigation of our
                    application was made simple to minimize cognitive load and to make sure that features which are
                    often used are easily accessible from the main screen.
                </SectionText>

                <SectionText>
                    Through our research, we identified several key considerations to make sure that the application is
                    not only accessible but also engaging for elderly users. Our research is based on insights from
                    reputable sources, which helped us to inform the development process in order to effectively address
                    the specific needs associated with an elderly demographic. It was important to ensure that we design
                    simply and clearly. In order to prevent cognitive
                    overload, an approach involving minimal design must be adopted. It was important to avoid irrelevant
                    content on the screen, give the users clear instructions for ease of use, and ensure that the
                    incorporated features are relevant to the demographic. In essence, the overall navigation needed to
                    be straightforward to be attractive to our senior users. When designing an application for the
                    elderly, it is important to consider the importance of
                    repetitive learning due to the additional amount of time it can take to adapt to a new routine as
                    well as the cognitive challenges associated with remembering certain elements.
                </SectionText>

                <GraphContainer>
                    <GraphImage src={Graph1}/>

                    <GraphImage src={Graph2}/>
                </GraphContainer>

                <SectionText>
                    In order to implement this, we focused on ease of use, provided significant attention to the
                    interface design as well as the navigation best practices for elderly users. Overall, this involved
                    the creation of a user interface with large and easily readable fonts, and clear labels/indicators
                    for menus as well as buttons. We also made sure to include high contrast and thoughtfully make use
                    of colours in order to improve the user orientation as well as the readability of the application.
                    We also made sure to include technologies such as voice-controlled commands, screen readers, as well
                    as interfaces with customizable options to further enhance accessibility for users that have varying
                    abilities.
                </SectionText>

                <SectionText>
                    Overall, the application was designed with a thorough understanding of the specific challenges and
                    desires of the elderly population and ensured that it was informed and backed by detailed research.
                    The design process ensured that it followed standards of simplicity, functionality, as well as
                    empathy, to ensure that the final product notably improves the lives of its elderly users daily.
                </SectionText>
            </SectionContainer>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  padding: 0 0 200px 0;
`

const OldHappyImageContainer = styled.div`
  display: flex;
  margin: 0 0 0 120px;
  border-radius: 30px;
  height: 400px;
  width: 800px;
`

const OldHappyImage = styled.img`
  object-fit: fill;
  width: 100%;
  border-radius: 30px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 150px;
  justify-content: space-between;
`

const Infos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BigTitle = styled.p`
  font-weight: bold;
  font-size: 60px;
`

const StudentName = styled.p`
  font-size: 20px;
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 150px 0 150px;

`

const SectionTitle = styled.p`
  font-weight: bold;
  font-size: 35px;
`

const SectionSubtitle = styled.p`
  font-weight: bold;
  color: ${props => props.color ? props.color : 'grey'};
  font-size: ${props => props.little ? '20px' : '25px'};
  font-style: italic;
  margin-top: 80px;
  margin: ${props => props.margin || ''};
`

const SectionText = styled.p`
  font-size: 20px;
  text-indent: ${props => props.withoutIndent ? '' : '100px'};
  line-height: 40px;
  text-align: justify;
`

const CardSubtitle = styled.p`
  font-weight: bold;
  color: grey;
  font-size: 20px;
  font-style: italic;
  padding: 20px;
`

const CardText = styled.p`
  font-size: 20px;
  line-height: 25px;
  padding: 20px;
  margin: ${props => props.margin ? props.margin : ''};
  font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
`

const ComponentsToExamine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MarketTrendsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  margin: 100px 0 0 0;
`

const MarketTrendsImage = styled.img`
  object-fit: contain;
  border-radius: 30px;
  width: 250px;
  margin: 0 200px 0 0;
`

const MarketTrendsInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const CompetitionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CompetitionItem = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  border-radius: 30px;
  padding: 20px;
  margin: ${props => props.margin ? props.margin : '0 0 70px 0'};
  cursor: pointer;

  transition: box-shadow 0.2s ease-in-out;


  &:hover {
    box-shadow: 1px 2px 9px dodgerblue;
    border: none;
  }
`

const CompetitionLogo = styled.img`
  object-fit: fill;
  border-radius: 40px;
  width: 300px;
  margin: 0 100px 0 0;
`

const CompetitionInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const SurveyQuestionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PersonaImage = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 30px;
`

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const GraphImage = styled.img`
  width: 100%;
`
