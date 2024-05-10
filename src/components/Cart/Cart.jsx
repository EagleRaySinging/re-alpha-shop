import './Cart.scss'

export default function Cart() {
  return (
    <section className="cart-wrapper">
      <h3 className="cart-title cart-col">購物籃</h3>
      <section className="product-list cart-col" data-total-price="0">
        <div className="product-container" data-count="0" data-price="3999">
          <img className="img-container" src="/images/product-1.jpg" />
          <div className="product-info">
            <div className="product-name">破壞補丁修身牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <object data="/icons/minus.svg" className="product-action minus">
                </object>
                <span className="product-count">1</span>
                <object data="/icons/plus.svg" className="product-action plus">
                </object>
              </div>
            </div>
            <div className="price">$3,999</div>
          </div>
        </div>
        <div className="product-container" data-count="0" data-price="1299">
          <img className="img-container" src="/images/product-2.jpg" />
          <div className="product-info">
            <div className="product-name">刷色直筒牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <object data="/icons/minus.svg" className="product-action minus">
                </object>
                <span className="product-count">1</span>
                <object data="/icons/plus.svg" className="product-action plus">
                </object>
              </div>
            </div>
            <div className="price">$1,299</div>
          </div>
        </div>
      </section>
      <section className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total">
        <div className="text">小計</div>
        <div className="price">$5,298</div>
      </section>
    </section>
  )
}