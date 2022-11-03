import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStore } from "stores/store";
import styled from "styled-components";
import ChatMessagesItem from "./ChatMessagesItem";

const ChatMessages = () => {
  const { messages, hasMore, loadMore } = useStore().messageStore;

  return (
    <StyledContainer>
      <InfiniteScroll
        dataLength={messages.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
        inverse
        scrollableTarget="scrollableDiv"
      >
        {messages.map((message) => (
          <ChatMessagesItem key={message.id} message={message} />
        ))}
      </InfiniteScroll>
    </StyledContainer>
  );
};

export default observer(ChatMessages);

const StyledContainer = styled("div")({
  paddingTop: "4rem",
  paddingBottom: "10rem",

  "&::-webkit-scrollbar": {
    display: "none",
  },
  "&-ms-overflow-style": "none" /* IE and Edge */,
  "&scrollbar-width": "none" /* Firefox */,
});
