import { useEffect } from "react";

const Even = () => {
  useEffect(()=>{

    // 클린업, 정리함수 = useEffect가 종료될 시점에서 실행됨
    return () => {
      console.log("unmount");
    };

  }, []);

  return <div>짝수입니다.😆</div>

}

export default Even;
