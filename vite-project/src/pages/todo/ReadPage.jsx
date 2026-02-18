import { useParams } from "react-router-dom";

import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

  const {tno} = useParams()  //  {  tno : "100"}

  return(
    <div className="font-extrabold w-full bg-white mt-6">

      <div className="text-2xl">
        Toto Read Page Component  {tno}
      </div>

        <ReadComponent tno={tno}></ReadComponent>
    </div>
  )
}

export default ReadPage;