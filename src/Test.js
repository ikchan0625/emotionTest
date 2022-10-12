import styled from "@emotion/styled";

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
export default function Test() {
  return (
    <>
      <div>이거 잘 받아감? </div>

      <DivStyle>sdfsdfsdf</DivStyle>
    </>
  );
}
