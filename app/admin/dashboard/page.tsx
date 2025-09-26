     /* <div className="w-full flex flex-col justify-center items-start p-4 gap-4 ">
            <div className="w-full flext relative max-w-[500px] h-[200px] sm:h-[300px] border-2 border-blackk/50 rounded-2xl ">
                <Image
                    src={product.image}
                    fill
                    alt={product.name}
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col gap-2">
                <DetailRow label="Name" value={product.name} />
                <DetailRow label="Brand" value={product.brand} />
                <DetailRow label="Descripion" value={product.description} />
                <DetailRow label="Price:" value={`₦${product.price}`} />
                <DetailRow label="Initial Price:" value={`₦${product.initialPrice}`} />
                <DetailRow label="Category:" value={product.category.name}  />
                <DetailRow label="Stock:" value={String(product.stock)} />
                <DetailRow label="Available:" value={product.available} />
            </div>
            <div className="flex gap-2 justify-start items-center flex-wrap">
                <IncrementAndDecrementButton
                    stock={product.stock}
                    initialCount={quantity}
                    onChange={(val) => setQuantity(val)}
                />
                <p>[{quantity} item(s) added]</p>

            </div>
        </div> */