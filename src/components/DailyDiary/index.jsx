import React from "react";
import Article from "../../common/components/Article";
import { DailyDiaryImage } from "../../images";
import SubTitle from "../../common/components/SubTitle";
import { ImageContainer } from "./style";
import Paragraph from "../../common/components/Paragraph";

const DailyDiary = () => {
  return (
    <Article isCenter>
      <ImageContainer>
        <img src={DailyDiaryImage} width={"216px"} />
      </ImageContainer>
      <SubTitle title={"Coming soon: Nanny Share Daily Diary!"} />
      <Paragraph align={"center"}>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </Paragraph>
    </Article>
  );
};

export default DailyDiary;
