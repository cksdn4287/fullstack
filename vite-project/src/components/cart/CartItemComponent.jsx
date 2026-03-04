import {API_SERVER_HOST} from "../../api/todoApi"

const host = API_SERVER_HOST

const CartItemComponent = ( {cino, pname, price, pno, qty, imageFile , changeCart , email}) => {

  const handleClickQty = (amount) => {

    changeCart({email, cino, pno, qty:qty + amount})
  }

  const handleClickDelete = () => {
  // x 버튼용: 수량을 0으로 보내서 서버에서 삭제 로직이 타게 함
  if(window.confirm("장바구니에서 삭제하시겠습니까?")) {

    console.log("삭제 요청 데이터 확인 : " , {email , cino, pno, qty:0})
    changeCart({ email, cino, pno, qty: 0 }); 
  }
};
  return(
  <li key={cino} className="border-2">
    <div className="w-full border-2">
      <div className="m-1 p-1">
        <img src={`${host}/api/products/view/s_${imageFile}`}></img>
      </div>

      <div className="justify-center p-2 text-xl">
        <div className="justify-end w-full"></div>

        <div>Cart ITem No : {cino}</div>
        <div>Pno : {pno}</div>
        <div>Name: {pname}</div>
        <div>Price: {price}</div>

        <div className="flex">
          <div className="w-2/3">
          Qty: {qty}
          </div>

        <div>
          <button className="m-1 p-1 text-2xl bg-orange-500 w-8 rounded-lg"
          onClick={ () => handleClickQty(1)}>
            +
          </button>

          <button className="m-1 p-1 text-2xl bg-orange-500 w-8 rounded-lg"
          onClick={ () => handleClickQty(-1)}>
            -
          </button>
        </div>
        </div>

        <div className="flex text-white font-bold p-2 justify-center">
          <button className="m-1 p-1 text-xl text-white bg-red-500 w-8 rounded-lg"
          onClick={handleClickDelete}>
            x
          </button>
        </div>

        <div className='font-extrabold border-t-2 text-right m-2 pr-4'>
            {qty * price} 원
        </div>
      </div>

    </div>

  </li>
  
  )
}
 
export default CartItemComponent;