
export default function CardProducts({ product: { title, condition, thumbnail, price, shipping, attributes }}) {
    const maxLength = 25;
  return (
    <div className="flex flex-col items-center rounded-3xl w-80 shadow-xl m-2 pt-14 bg-base-300">
      <figure><img src={ thumbnail } alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {
          title.length > maxLength ? (
            title.slice(0, maxLength) + '...'
          ) : title
          }
          <div className="badge bg-[#0e142f]">{ condition }</div>
        </h2>
        <p>{ attributes[0].value_name }</p>
        <div className="card-actions justify-end">
        <div className="badge badge-outline">{ `R$ ${price}`}</div>
        {
          shipping.free_shipping ? (
            <div className="badge badge-outline">🚚 Frete grátis</div>
          ) : ''
        }
        </div>
      </div>
    </div>
  );
}
