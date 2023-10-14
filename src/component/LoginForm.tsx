/** @jsxImportSource @emotion/react */

import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";
import { FormInput } from "../style/component/formInput";
import { useNavigate } from "react-router-dom";
interface LoginFormValue {
  id: string;
  pw: string;
}

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormValue>();
  const onLoginFormSubmitHandler: SubmitHandler<LoginFormValue> = async (
    data
  ) => {
    console.log(data);
  };
  const onsignUpBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate({ pathname: "/signup" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onLoginFormSubmitHandler)}>
        <label htmlFor="id">ID</label>
        <input
          css={FormInput}
          autoComplete="off"
          type="text"
          {...register("id", { required: true })}
        />
        <label htmlFor="pw">PASSWORD</label>
        <input
          css={FormInput}
          autoComplete="off"
          type="password"
          {...register("pw", { required: true })}
        />
        <div>
          <button type="submit">ログイン</button>
          <button onClick={onsignUpBtnClickHandler}>新規登録</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
