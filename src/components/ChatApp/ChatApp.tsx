import React, {useState} from 'react';
import InputBlock from './InputBlock';
import Button from './Button';
import Messages from './Messages';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 100px auto 0 auto;
  background-color: antiquewhite;
`
const LimitMessage = styled.span`
  color: red;
  font-weight: 700;
  margin-bottom: 10px;
`

const ChatApp = () => {
    const [messages, setMessages] = useState<Array<string>>([])
    const isLimit = messages.length === 5
    const addMessage = (message: string) => {
        if (isLimit || !message.trim()) return
        setMessages([message, ...messages])
    }
    const deleteLastMessage = () => setMessages(messages.slice(1))
    let limitMessage = (isLimit) ? 'Limit of messages exceeded.' : ''
    return (
        <MainWrapper>
            <LimitMessage>{limitMessage}</LimitMessage>
            <InputBlock addMessage={addMessage} isLimit={isLimit}/>
            <Button name="Delete last message" onClick={deleteLastMessage}/>
            <Messages messages={messages}/>
        </MainWrapper>
    );
};

export default ChatApp;