
import create from 'zustand';


// set method로 상태 변경 가능
const useStore = create(set => ({
  count: 0,
  increaseCount: () => set(state => ({ count: state.count + 1 })),
  setThree: (input) => set({ count: input }),
}));

function App() {
  const { count, increaseCount, setThree } = useStore();
  return (
  <div>
  <div className='App'>
      <div>Zustand ! {count}</div>
      <button onClick={increaseCount}>+1</button>
      <button onClick={() => setThree(3)}>set3</button>
    </div>
  </div>
  );
}

export default App;
