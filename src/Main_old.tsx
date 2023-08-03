import * as S from "./Main_old.styled";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { IForm, SaveDataAtom } from "./store/atoms";
import Footprint from "./components/Footprint";
const fs = require("fs");

function Main_old() {
  const [saveData, setSaveData] = useRecoilState(SaveDataAtom);
  let Bigarray: number[] = [];
  let Smallarray: number[] = [];
  const txtHeader = "nickname,armlength\n";
  let result = txtHeader;
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IForm>({
    mode: "onSubmit",
  });

  const onValid = (input: IForm) => {
    // 제출버튼 누를 시 실행되는 부분
    setSaveData((current) => {
      return current[0]
        ? [
            ...current,
            {
              nickname: input.nickname,
              armlength: input.armlength,
              degree: Math.random() * (300 - 240) + 240,
              vertical: (Math.random() - 0.5) * 200,
            },
          ]
        : [
            {
              nickname: input.nickname,
              armlength: input.armlength,
              degree: Math.random() * (300 - 240) + 240,
              vertical: (Math.random() - 0.5) * 200,
            },
          ];
    });
  };

  for (let i = 1; i <= 2; i++) {
    Bigarray.push(i);
  }
  for (let j = 1; j <= 30; j++) {
    if (j % 10 === 0) {
      continue;
    }
    Smallarray.push(j);
  }
  return (
    <S.Background>
      <S.CenterLine />

      {saveData.map((value) => {
        return (
          <Footprint
            nickname={value.nickname}
            armlength={value.armlength}
            degree={value.degree}
            design={1}
          />
        );
      })}

      {Bigarray.map((number) => (
        <>
          <S.VerticalLine
            style={{ left: `calc((100vw * ${number} / 3) + 15px)` }}
          />
          <S.MeterText
            style={{
              left: `calc((100vw * ${number} / 3) - 15px)`,
              top: "35vh",
            }}
          >
            {`${number}`}M
          </S.MeterText>
        </>
      ))}
      {Smallarray.map((number) => (
        <S.VerticalLine
          style={{
            left: `calc((100vw * ${number} / 30) + 15px)`,
            width: "1px",
            height: "30px",
            top: "calc((100vh - 30px) / 2)",
          }}
        />
      ))}
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.Pair>
          <S.Explanation style={{ top: "60px" }}>닉네임:</S.Explanation>
          <S.Input
            style={{ top: "60px", left: "70px" }}
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
        <S.ErrorSpan>{errors?.armlength?.message}</S.ErrorSpan>

        <S.SubmitButton>등록</S.SubmitButton>
      </S.Form>
    </S.Background>
  );
}

export default Main_old;
