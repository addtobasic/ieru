import { styled } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useStore } from "stores/store";

import ChatMessagesItem from "./ChatMessagesItem";

const ChatMessages = () => {
  const { messages, hasMore, loadMore } = useStore().messageStore;
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "auto" });
  });

  return (
    <StyledContainer
      id="scrollableDiv"
      style={{
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
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
  "": {
    paddingTop: "4rem",
    paddingBottom: "10rem",
  },
});
