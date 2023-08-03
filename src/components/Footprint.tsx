import * as S from "./Footprint.styled";
import Sputnik from "../assets/Sputnik.png";
import Skylab from "../assets/Skylab.png";
import Nuri from "../assets/Nuri.jpg";
import Hubble from "../assets/Hubble.png";

interface IValue {
  nickname?: string;
  armlength?: number;
  degree?: number;
  design: number;
}
function Footprint({ nickname, armlength, degree, design }: IValue) {
  const pictureList = [Sputnik, Skylab, Nuri, Hubble];
  return (
    <S.FootprintCircle
      style={{
        left: `calc((-90vw * ${armlength} * 4 / 300 ) - 250px)`,
        height: `calc((90vw * ${armlength} * 4 / 300) * 2 + 500px)`,
        width: `calc((90vw * ${armlength} * 4 / 300 ) * 2 + 500px)`,
        borderRadius: `calc((90vw * ${armlength} * 4 / 300 ) + 250px)`,
        transform: `rotate(${degree}deg)`,
      }}
    >
      <S.FootprintImage
        style={{
          backgroundImage: `url(${pictureList[design - 1]})`,
        }}
      >
        <S.Textarea
          style={{
            fontSize: `calc(min(100px / ${nickname?.length}, 20px))`,
            marginBottom: `calc((min(100px / ${nickname?.length}, 20px))/(${nickname?.length}))`,
          }}
        >
          {nickname}
        </S.Textarea>
      </S.FootprintImage>
    </S.FootprintCircle>
  );
}
export default Footprint;
