import React, { useState } from "react";
import { Header, TabListItem, TubButton, Content } from "./styles";

function Tabs({ tabsList = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TubButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    },
                  })}
            >
              {tab.title}
            </TubButton>
          </TabListItem>
        ))}
      </Header>
      <Content maxContentHeight={maxContentHeight}>
        {tabsList[selectIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;
