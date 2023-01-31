import React from 'react';
import styled from 'styled-components';

type MessagesPropsType = {
    messages: Array<string>
}
const MessagesWrapper = styled.div`
  margin-top: 20px;
`
const Messages = ({messages}: MessagesPropsType) => {

    const messagesList = messages.map((message: string, index: number) => <div key={index}>{message}</div>)
    return (
        <MessagesWrapper>
            {messagesList}
        </MessagesWrapper>
    );
};

export default Messages;