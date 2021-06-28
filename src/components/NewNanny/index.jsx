import React from "react";
import SubTitle from "../../common/components/SubTitle";
import { SendContainer } from "./styles";
import Input from "../../common/components/Input";
import ButtonLink from "../../common/components/ButtonLink";
import { useForm } from "react-hook-form";
import Article from "../../common/components/Article";
import Paragraph from "../../common/components/Paragraph";

const NewNanny = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Article isCenter>
      <SubTitle
        title={"Are you a parent without a nanny and looking to share?"}
        font={"22px"}
        center
      />
      <Paragraph fontSize={"18px"} align={"center"}>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <SendContainer>
          <Input ref={register} placeHolder={"Your Name"} type={"text"} />
          <Input ref={register} placeHolder={"Your Email"} type={"email"} />
          <ButtonLink title={"Send"} heightButton={"48px"} />
        </SendContainer>
      </form>
    </Article>
  );
};

export default NewNanny;
