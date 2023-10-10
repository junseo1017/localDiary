import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormValue {
  id: string;
  pw: string;
}

const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<LoginFormValue>();
  const onLoginFormSubmitHandler: SubmitHandler<LoginFormValue> = async (
    data
  ) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onLoginFormSubmitHandler)}>
      <label htmlFor="id">ID</label>
      <input
        autoComplete="off"
        type="text"
        {...register("id", { required: true })}
      />
      <label htmlFor="pw">PASSWORD</label>
      <input
        autoComplete="off"
        type="password"
        {...register("pw", { required: true })}
      />
      <div>
        <button>ログイン</button>
        <button>新規登録</button>
      </div>
    </form>
  );
};

export default LoginForm;
