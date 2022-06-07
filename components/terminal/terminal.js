import { Container, Flex } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import GLOBAL_CONSTANTS from "../../constants/gloablConstants"
import { HelpResponse, ClearResponse, AboutResponse, ErrorResponse } from "./terminalHelper"
export default function Terminal() {
    //To set the command input by user
    const [command, setCommand] = useState(null);
    //To set all the command entered by the user
    const [allCommands, setAllCommands] = useState([]);
    //To set all the responses entered by user
    const [allCommandResponse, setAllCommandResponse] = useState([]);
    //To set command response
    const [commandResponse, setCommandResponse] = useState()
    //For each render, set the states
    useEffect(() => {
        setAllCommands(state => [...state, command])
        setAllCommandResponse(state => [...state, commandResponse])
        setCommand("")
        setCommandResponse("")
    }, [commandResponse])

    //On enter, call the getCommandResponse which will set the response 
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getCommandResponse(command)
        }
    }
    //To set the command entered by user
    const handleCommandInput = (e) => {
        setCommand(e.currentTarget.value)
    }

    // switch case to get appropriate response as per the input
    const getCommandResponse = (input) => {
        switch (input && input.toLowerCase()) {
            case GLOBAL_CONSTANTS.HELP_COMMAND:
                HelpResponse(setCommandResponse)
                break;
            case GLOBAL_CONSTANTS.CLEAR_COMMAND:
                const states = { setCommandResponse, setAllCommands, setCommand, setAllCommandResponse }
                ClearResponse(states)
                break;
            case GLOBAL_CONSTANTS.ABOUT_COMMAND:
                AboutResponse(setCommandResponse)
                break;
            default:
                ErrorResponse(setCommandResponse)
        }
    }

    return (
        <Container>
            {allCommands.map(((item, i) =>
                item != "" ? (
                    <>
                        <Flex key={i}>{"> "}{item}</Flex>
                        <Flex key={i}>{allCommandResponse[i]}</Flex>
                    </>) : (null)
            )
            )}
            <Flex>
                {commandResponse}
            </Flex>
            <Flex>
                <p>{GLOBAL_CONSTANTS.TERMINAL_PROMT} </p>
                <Input value={command} variant='unstyled'
                    onChange={(e) => { handleCommandInput(e) }}
                    onKeyDown={(e) => { handleEnter(e) }}
                />
            </Flex>
        </Container>

    )
}