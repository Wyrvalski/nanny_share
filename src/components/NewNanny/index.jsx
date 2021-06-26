import React from "react";
import SubTitle from "../../common/components/SubTitle";
import { NewNannyContainer, SendContainer } from "./styles";
import Input from "../../common/components/Input";
import ButtonLink from "../../common/components/ButtonLink";
import { useForm } from "react-hook-form";

const NewNanny = () => {
  const { register, handleSubmit } = useForm();
  return (
    <NewNannyContainer>
      <SubTitle
        title={"Are you a parent without a nanny and looking to share?"}
        font={"22px"}
        center
      />
      <p>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>
      <form onSubmit={handleSubmit}>
        <SendContainer>
          <Input ref={register} placeHolder={"Your Name"} type={"text"} />
          <Input ref={register} placeHolder={"Your Email"} type={"email"} />
          <ButtonLink title={"Send"} heightButton={"48px"} />
        </SendContainer>
      </form>
    </NewNannyContainer>
  );
};

export default NewNanny;
