import * as S from "./Modal.styled";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IForm, SaveDataAtom, StatusAtom } from "../store/atoms";
import { useState, useEffect } from "react";
import Sputnik from "../assets/Sputnik.png";
import Skylab from "../assets/Skylab.png";
import Nuri from "../assets/Nuri.jpg";
import Hubble from "../assets/Hubble.png";

function Modal() {
  const [status, setStatus] = useRecoilState(StatusAtom);
  const [saveData, setSaveData] = useRecoilState(SaveDataAtom);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<IForm>({
    mode: "onChange",
  });
  const [picture, setPicture] = useState<number>(0);
  const pictureList = [
    { url: Sputnik, name: "Sputnik" },
    { url: Skylab, name: "Skylab" },
    { url: Nuri, name: "Nuri" },
    { url: Hubble, name: "Hubble" },
  ];
  function offModal() {
    setStatus({ code: 1 });
    setPicture(0);
  }

  useEffect(() => {
    console.log(picture);
  }, [picture]);

  function onValidWithPicture(input: IForm) {
    offModal();
    setSaveData((current) => {
      console.log(input);
      return current[0]
        ? [
            ...current,
            {
              nickname: input.nickname,
              armlength: input.armlength,
              design: picture,
              degree: Math.random() * 30 - 15,
            },
          ]
        : [
            {
              nickname: input.nickname,
              armlength: input.armlength,
              design: picture,
              degree: Math.random() * 30 - 15,
            },
          ];
    });
  }

  const onValid = (input: IForm) => {
    // 제출버튼 누를 시 실행되는 부분
    picture !== 0
      ? onValidWithPicture(input)
      : setError("extraError", { message: "인공위성을 골라 주세요" });
  };

  return (
    <S.Message>
      <S.Off onClick={offModal} />
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.Pair>
          <S.Explanation style={{}}>닉네임:</S.Explanation>
          <S.Input
            style={{ marginLeft: "5px" }}
            {...register("nickname", {})}
          ></S.Input>
        </S.Pair>
        <S.Pair>
          <S.Explanation style={{ top: "90px" }}>팔 길이:</S.Explanation>
          <S.Input
            style={{ top: "90px", left: "70px" }}
            {...register("armlength", {
              pattern: {
                value: /^([0-9]?|)\d{1}$/,
                message: "2자리 이내 숫자로만 입력해 주세요",
              },
              validate: {
                nozero: (value) =>
                  Number(value) === Number(0) || value === undefined
                    ? "올바른 값을 입력해주세요"
                    : true,
              },
            })}
          ></S.Input>
        </S.Pair>
        <S.ErrorSpan>
          {errors?.armlength?.message}{" "}
          {errors?.extraError?.message
            ? String(errors?.extraError?.message)
            : null}
        </S.ErrorSpan>

        <S.SelectBox>
          {pictureList.map((content, index) => {
            return (
              <S.Pill
                onClick={() => {
                  setPicture(index + 1);
                  clearErrors();
                }}
                style={
                  picture === index + 1
                    ? {
                        backgroundColor: "black",
                        color: "white",
                      }
                    : {
                        backgroundColor: "white",
                        color: "black",
                      }
                }
              >
                <S.PictureCircle
                  style={{ backgroundImage: `url(${content.url})` }}
                />
                {content.name}
              </S.Pill>
            );
          })}
        </S.SelectBox>
        <S.SubmitButton>등록</S.SubmitButton>
      </S.Form>
    </S.Message>
  );
}

export default Modal;
