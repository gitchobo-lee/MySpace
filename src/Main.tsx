import * as S from "./Main.styled";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { IForm, SaveDataAtom, StatusAtom } from "./store/atoms";
import Footprint from "./components/Footprint";
import Modal from "./components/Modal";

function Main() {
  const [status, setStatus] = useRecoilState(StatusAtom);
  const [saveData, setSaveData] = useRecoilState(SaveDataAtom);
  let Bigarray: number[] = [];
  let Smallarray: number[] = [];
  useEffect(() => {
    console.log(status);
  }, [status]);
  function Toggle() {
    status.code === 1 ? setStatus({ code: 2 }) : setStatus({ code: 1 });
  }

  function useReset() {
    setSaveData([]);
  }

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
      <S.Sun />
      {saveData.map((value) => {
        return (
          <Footprint
            nickname={value.nickname}
            armlength={value.armlength}
            degree={value.degree}
            design={value.design as number}
          />
        );
      })}
      {Bigarray.map((number) => (
        <>
          <S.VerticalCircle
            style={{
              left: `calc((-90vw * ${number} / 3) - 200px)`,
              height: `calc((90vw * ${number} / 3)*2 + 400px)`,
              width: `calc((90vw * ${number} / 3)*2 + 400px)`,
              borderRadius: `calc((90vw * ${number} / 3) + 200px)`,
              borderWidth: "5px",
            }}
          />
          <S.MeterText
            style={{
              left: `calc((90vw * ${number} / 3) + 165px)`,
              top: "35vh",
            }}
          >
            {`${number}`}M
          </S.MeterText>
        </>
      ))}
      {Smallarray.map((number) => (
        <S.VerticalCircle
          style={{
            left: `calc((-90vw * ${number} / 30) - 200px)`,
            height: `calc((90vw * ${number} / 30)*2 + 400px)`,
            width: `calc((90vw * ${number} / 30)*2 + 400px)`,
            borderRadius: `calc((90vw * ${number} / 30) + 200px)`,
            borderWidth: "1px",
          }}
        />
      ))}
      <S.Button onClick={Toggle}>내 위성 발사하러 가기</S.Button>
      <S.Button
        onClick={() => setSaveData([])}
        style={{ top: "30px", left: "93vw" }}
      >
        초기화
      </S.Button>
      {status.code === 2 ? <Modal /> : null}
    </S.Background>
  );
}

export default Main;
