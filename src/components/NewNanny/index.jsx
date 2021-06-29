import React from "react";
import SubTitle from "../../common/components/SubTitle";
import { SendContainer } from "./styles";
import ButtonLink from "../../common/components/ButtonLink";
import { useForm } from "react-hook-form";
import Article from "../../common/components/Article";
import Paragraph from "../../common/components/Paragraph";
import Input from "../../common/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { saveInfo } from "../../sagas/actions/submitForm";

const NewNanny = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const info = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(errors, "ggggggggggg");
  const onSubmit = (userData) => {
    console.log(userData, "aaaaaaaaaaaaa");
    const user = userData;
    dispatch(saveInfo(user));
  };
  return (
    <Article isCenter>
      <SubTitle
        id="browse"
        title={"Are you a parent without a nanny and looking to share?"}
        font={"22px"}
        center
      />
      <Paragraph fontSize={"18px"} align={"center"}>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </Paragraph>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SendContainer>
          <div className={"input-container"}>
            <Input
              name={"name"}
              inputRef={register("name", {
                required: { value: true, message: "This field is required" },
              })}
              placeHolder={"Your Name"}
              type={"text"}
            />
            {errors?.name?.message && <span>{errors?.name?.message}</span>}
          </div>
          <div className={"input-container"}>
            <Input
              name={"email"}
              inputRef={register("email", {
                required: { value: true, message: "This field is required" },
              })}
              placeHolder={"Your Email"}
              type={"email"}
            />
            {errors?.email?.message && <span>{errors?.email?.message}</span>}
          </div>

          <ButtonLink
            isLoading={info?.isLoading}
            title={"Send"}
            heightButton={"48px"}
          />
        </SendContainer>
      </form>
    </Article>
  );
};

export default NewNanny;
