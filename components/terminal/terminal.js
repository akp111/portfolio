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
        return (
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

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getCommandResponse(command)
            // setAllCommands(state => [...state, command])
            // setAllCommandResponse(state => [...state, commandResponse])
        }
    }

    const handleCommandInput = (e) => {
        setCommand(e.currentTarget.value)
    }

    const getCommandResponse = (input) => {
        switch (input && input.toLowerCase()) {
            case GLOBAL_CONSTANTS.HELP_COMMAND:
                setCommandResponse(<HelpResponse />)
                break;
            case GLOBAL_CONSTANTS.CLEAR_COMMAND:
                console.log("clear typed")
                break;
            default:
                console.log(GLOBAL_CONSTANTS.COMMAND_NOT_FOUND_MESSAGE)
        }
    }
    return (
        <Container>
            {allCommands.map(((item, i) =>
                <>
                    <Flex key={i}>{"> "}{item}</Flex>
                    <Flex key={i}>{allCommandResponse[i]}</Flex>
                </>
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