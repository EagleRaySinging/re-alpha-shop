import './Cart.scss'
import minusIcon from '/icons/minus.svg'
import plusIcon from '/icons/plus.svg'

const products = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

// eslint-disable-next-line react/prop-types
function ProductList({ name, price, img, quantity }) {
  return (
    <div className="product-container" data-count="0" data-price={price}>
      <img className="img-container" src={img} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <object data={minusIcon} className="product-action minus">
            </object>
            <span className="product-count">{quantity}</span>
            <object data={plusIcon} className="product-action plus">
            </object>
          </div>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  )
}


export default function Cart() {
  return (
    <section className="cart-wrapper">
      <h3 className="cart-title cart-col">購物籃</h3>
      <section className="product-list cart-col" data-total-price="0">
        {products.map(product => <ProductList {...product} key={product.id} />)}
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