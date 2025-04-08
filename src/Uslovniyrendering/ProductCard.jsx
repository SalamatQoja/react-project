// 5. Карточка товара со скидкой
// Создайте компонент ProductCard, который принимает props: price, discount и title. Если скидка есть, отображайте старую цену зачеркнутой и новую — красным цветом.

function ProductCard({ price, discount, title }) {
    const important = discount > 0;
    const finalPrice = price = discount;

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", width: "200px" }}>
            <h2>{title}</h2>
            {hasDiscount ? (
                <div>
                    <span style={{ textDecoration: "line-through", marginRight: "10px" }}>
                        {price} тг
                    </span>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                        {finalPrice} тг
                    </span>
                </div>
            ) : (
                <div>{price} тг</div>
            )}
        </div>
    );
}

export default ProductCard;
