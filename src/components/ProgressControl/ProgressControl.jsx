import './ProgressControl.scss'

export default function ProgressControl() {

  const nextPage = () => {
    return (
      <section className="button-group" data-phase="shipping">
        <button className="prev">
          <object data="./public/icons/left-arrow.svg" className="cursor-point">
          </object>
          上一步
        </button>
        <button className="next">
          下一步
          <object data="./public/icons/right-arrow.svg" className="cursor-point">
          </object>
        </button>
      </section>
    )
  }

  const endPage = () => {
    return (
      <section className="button-group" data-phase="credit-card">
        <button className="prev">
          <object data="./public/icons/left-arrow.svg" className="cursor-point">
          </object>
          上一步
        </button>
        <button className="next">
          確認下單
        </button>
      </section>
    )
  }

  return (
    <section className="progress-control-container">
      <section className="button-group" data-phase="address">
        <button className="next">
          下一步
          <object data="../../../public/icons/right-arrow.svg" className="cursor-point">
          </object>
        </button>
      </section>
    </section>
  );
}
