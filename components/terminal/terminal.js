import { Container, Flex, SimpleGrid, Box } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import GLOBAL_CONSTANTS from "../../constants/gloablConstants"
export default function Terminal() {
    //To set the command input by user
    const [command, setCommand] = useState(null);
    const [allCommands, setAllCommands] = useState([]);
    const [allCommandResponse, setAllCommandResponse] = useState([]);
    const [commandResponse, setCommandResponse] = useState()
    useEffect(() => {
        setAllCommands(state => [...state, command])
        setAllCommandResponse(state => [...state, commandResponse])
        setCommand("")
        setCommandResponse("")
    }, [commandResponse])

    const HelpResponse = () => {
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

    const ClearResponse = () => {
        setAllCommandResponse([])
        setAllCommands([])
        setCommand("")
        setCommandResponse("")
    }

    const ListResponse = (inputData) => {
        return inputData.map((item, i) => { return (<b key={i}>{item}{i == inputData.length - 1 ? "." : ","} </b>) })
    }

    const AboutResponse = () => {
        const response =
            (<SimpleGrid columns={1} spacing={2}>
                <p>Heya! Ashis this side. I work as developer at Ethereum Push Notification Service (aka EPNS 🔔).</p>
                <p>I spend most of my time exploring <span>{ListResponse(GLOBAL_CONSTANTS.ABOUT_DABBLE)}</span></p>
                <p>The tech stack I love working on are <span>{ListResponse(GLOBAL_CONSTANTS.ABOUT_LANGUAGE)}</span></p>
                <p>In my spare time I love to <span>{ListResponse(GLOBAL_CONSTANTS.ABOUT_HOBBIES)}</span></p>
            </SimpleGrid>);

        setCommandResponse(response);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getCommandResponse(command)
        }
    }

    const handleCommandInput = (e) => {
        setCommand(e.currentTarget.value)
    }

    const getCommandResponse = (input) => {
        switch (input && input.toLowerCase()) {
            case GLOBAL_CONSTANTS.HELP_COMMAND:
                HelpResponse()
                break;
            case GLOBAL_CONSTANTS.CLEAR_COMMAND:
                ClearResponse()
                break;
            case GLOBAL_CONSTANTS.ABOUT_COMMAND:
                AboutResponse()
                break;
            default:
                setCommandResponse(GLOBAL_CONSTANTS.COMMAND_NOT_FOUND_MESSAGE)
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