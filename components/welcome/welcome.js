import { Container, Flex } from "@chakra-ui/react"
import WELCOME_CONSTANTS from "./welcomeConst.js"
export default function Welcome() {
    return (
        <Container>
            <Flex minWidth='max-content' align="left" justify="center">
                {WELCOME_CONSTANTS.TERMS_CONDITION}
            </Flex>
            <Flex minWidth='max-content' align="left" justify="left">
                {WELCOME_CONSTANTS.WELCOME_MESSAGE}
            </Flex>
            <Flex>
                Type &#34;about&#34; to get details about me or &#34;help&#34; to list the commands and have fun! (Note: WIP)
            </Flex>
        </Container>

    )
}