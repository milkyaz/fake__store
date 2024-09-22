import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothign here</h3>;
  }

  return (
    <div>
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
