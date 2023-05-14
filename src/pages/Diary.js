import { useParams } from "react-router";
const Diary = () => {
  return (<div>
    const {id}=useParams();

    <h1>Diary</h1>
    <p>이곳은 일기 상세 페이지 입니다.</p>
  </div>
  );
};

export default Diary;