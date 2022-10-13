import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
// import { FormControlLabel,Checkbox } from "@mui/material";

const DivStyle = styled.div`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;
const divStyle2 = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;
const P = (props) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "sans-serif",
      color: "blue",
    }}
    {...props}
  />
);

const ArticleText = (props) => (
  <P
    css={{
      fontSize: 20,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props}
  />
);

export default function Test() {
  return (
    <>
      <div>이거 잘 받아감? </div>
      sdfsf
      <div css={divStyle2}>Hover to change color.</div>
      <DivStyle>sdfsdfsdf</DivStyle>
      <P>Using P component</P>
     
    </>
  );
}
//왜 css 는 동작을 안할가? 에러코드도 딱히 안뜨는데 ..
// 해결 ==>react v.17 엔진이 emotion 과 충돌하는 이슈가 있다고 함.
// 해결 방법 : /** @jsxImportSource @emotion/react */ 을 추가해주면 된다.
// import {css} from "@emotion/react" ;


