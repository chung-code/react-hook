import React, {useState, useEffect} from 'react'

const useFetch = (callback, url) => {  //customhook을 use를 시작으로하는 이름으로 정의한다면 lifecycle 적용하는 로직 생성

    const [loading, setLoading] = useState(false);
  
    const fetchInitialData = async() => {
      setLoading(true);
      const response = await fetch(url); //미리 만들어놓은 api 서버
      const initialData = await response.json();
      callback(initialData);
      setLoading(false);
    }
  
    useEffect( () => {
      fetchInitialData(); //비동기에 대한 적절한 처리를 위해서 콜백함수 안에 직접 비동기함수를 넣지 말라
    }, []) //무한 반복 loop로 인하여 null 값을 명시하여 로딩 타임 처음 한번만 실행
  
    return loading;
  }

  export default useFetch;