import Reuse from './component/reuseComponent'
import RenderOnlyChange from './component/renderOnlyChange'
import UseEffectHook from './component/useEffectHook'
import UseProps from './component/renderProps'
import UpdateTime from './component/updateTime'

function App() {
  return (
    // for component reuse
    // <div className="App">
    //   <Reuse />
    //   <Reuse />
    //   <Reuse />
    //   <Reuse />
    //   <Reuse/>
    // </div>

    // for render only change
    // <RenderOnlyChange />

    // useEffectHook
    // <UseEffectHook />

    // renderProps
    // <UseProps element="orange" />

    // updateTime
    <UpdateTime />
  );
}

export default App;
