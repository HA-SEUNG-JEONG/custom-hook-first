//이 곳에 input custom hook을 만들어 보세요.
//return 해야 하는 값은 배열 형태의 값이어야 합니다.

import { useState } from "react";

function useInput() {
  const [name, setName] = useState("");
  console.log(name);
  const handleInputChange = (inputEvent) => {
    setName(inputEvent.target.value);
  };
  return [name, handleInputChange];
}

export default useInput;
