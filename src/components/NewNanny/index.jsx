import React, { useEffect, useState } from "react";
import SubTitle from "../../common/components/SubTitle";
import { SendContainer } from "./styles";
import ButtonLink from "../../common/components/ButtonLink";
import { useForm } from "react-hook-form";
import Article from "../../common/components/Article";
import Paragraph from "../../common/components/Paragraph";
import Input from "../../common/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { saveInfo } from "../../sagas/actions/submitForm";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function AlertSuccess(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NewNanny = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const info = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpenSuccess(info?.success);
    info?.error?.error && setOpenError(true);
  }, [info]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
    setOpenSuccess(false);
  };
  const onSubmit = (userData) => {
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
              inputRef={register("name")}
              placeHolder={"Your Name"}
              type={"text"}
            />
            {(errors?.name?.message || info?.error?.name) && (
              <Alert severity="error">
                {errors?.name?.message || info?.error?.name}
              </Alert>
            )}
          </div>
          <div className={"input-container"}>
            <Input
              name={"email"}
              inputRef={register("email")}
              placeHolder={"Your Email"}
              type={"email"}
            />
            {(errors?.email?.message || info?.error?.email) && (
              <Alert severity="error">
                {errors?.email?.message || info?.error?.email}
              </Alert>
            )}
          </div>

          <ButtonLink
            isLoading={info?.isLoading}
            title={"Send"}
            heightButton={"42px"}
          />
        </SendContainer>
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <AlertSuccess onClose={handleClose} severity="success">
            Hello {info?.name}, your email {info?.email} has been successfully
            registered.
          </AlertSuccess>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <AlertSuccess onClose={handleClose} severity="error">
            {info?.error?.error}
          </AlertSuccess>
        </Snackbar>
      </form>
    </Article>
  );
};

export default NewNanny;
