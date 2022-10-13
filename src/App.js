import create from "zustand";
import { css, jsx } from "@emotion/react";
import Test from "./Test";
import MuiTest from "./MuiTest";
import SignUpExam from "./SignUpExam"
// set method로 상태 변경 가능
const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  setThree: (input) => set({ count: input }),
}));

function App() {
  const { count, increaseCount, setThree } = useStore();
  return (
    // <div>
    //   <MuiTest></MuiTest>
    //   <div className="App">
    //     <div>Zustand ! {count}</div>
    //     <button onClick={increaseCount}>+1</button>
    //     <button onClick={() => setThree(3)}>set3</button>
    //     {/* <div
    //       css={css({
    //         color: "yellow",
    //       })}
    //     >
    //       123123
    //     </div> */}
    //     <div
    //       css={css({
    //         backgroundcolor: "yellow",
    //         width: "1000px",
    //       })}
    //     >
    //       노란색 영역
    //     </div>
    //     <div
    //       css={css`
    //         background-color: yellow;
    //       `}
    //     >
    //       노란색 영역
    //     </div>
    //   </div>
    //   <Test></Test>
    // </div>
    <SignUpExam/>
  );
}

export default App;
