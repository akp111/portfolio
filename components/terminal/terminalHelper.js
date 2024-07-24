import { SimpleGrid, Box } from "@chakra-ui/react"
import GLOBAL_CONSTANTS from "../../constants/gloablConstants"

export const HelpResponse = (setCommandResponse) => {
    setCommandResponse(
        <SimpleGrid columns={1} spacing={2}>
            {Object.keys(GLOBAL_CONSTANTS.COMMAND_LIST).map((item, i) => {
                return (
                    <Box key={i}>
                        <h3 >{item} ---&gt; {GLOBAL_CONSTANTS.COMMAND_LIST[item]}</h3>
                    </Box>)
            })}
        </SimpleGrid>
    )
}

export const ClearResponse = (states) => {
    states.setAllCommandResponse([])
    states.setAllCommands([])
    states.setCommand("")
    states.setCommandResponse("")
}

export const ErrorResponse = (setCommandResponse) => {
    setCommandResponse(GLOBAL_CONSTANTS.COMMAND_NOT_FOUND_MESSAGE)
}

export const ListResponse = (inputData) => {
    return inputData.map((item, i) => { return (<b key={i}>{item}{i == inputData.length - 1 ? "." : ","} </b>) })
}

export const LineByLineResponse = (inputData) => {
    return inputData.map((item, i) => { return (<div>
        <a href={item.cta} target="_blank"> <b>Title: {item.name}</b></a>
        <p>{item.description}</p>
        <p>-----------------------------------------------</p>
    </div>) })
}

export const AboutResponse = (setCommandResponse) => {
    const response =
        (<SimpleGrid columns={1} spacing={2}>
            <p>Heya! Ashis this side. I work as developer at Push Protocol.</p>
            <p>I spend most of my time exploring <span>{ListResponse(GLOBAL_CONSTANTS.ABOUT_DABBLE)}</span></p>
            <p>The tech stack I love working on are <span>{ListResponse(GLOBAL_CONSTANTS.ABOUT_LANGUAGE)}</span></p>
            <p>In my spare time I love to <span>{ListResponse(GLOBAL_CONSTANTS.ABOUT_HOBBIES)}</span></p>
            <p>Here are some of the projects I have build (Solo as well as with team)</p>
            <div>
                {LineByLineResponse(GLOBAL_CONSTANTS.PROJECTS)}
            </div>
            <div><a href={GLOBAL_CONSTANTS.RESUME_LINK} target="_blank">Link to my resume</a></div>
        </SimpleGrid>);

    setCommandResponse(response);
}