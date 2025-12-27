interface ChaiCardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProp) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>⭐</span>}
      </h2>

      <p>{price}</p>
    </article>
  );
}
