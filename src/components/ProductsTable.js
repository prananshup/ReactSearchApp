

const ProductsTable = (props) => {
    let productsByCategory = groupByCategory(props.products);
    let filterText = props.filterProductsText;

    return (
        <div>
            <table>
                <thead>
                    <tr><th>Name</th><th>Price</th>
                    </tr></thead>
                <tbody>
                    {Object.entries(productsByCategory).map(([k, v]) => {
                        return (
                            <>
                                <tr> <th>{k}</th></tr>
                                {
                                    v.filter(pro => pro.name.toLowerCase().includes(filterText.toLowerCase()) &&
                                                    (!props.hideStockedProduct || pro.stocked))
                                        .map(pro => {
                                        return (
                                            <tr> <td style={!pro.stocked ? {color: "red"} : {}}>{pro.name}</td>
                                                <td>{pro.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </>
                        )
                    }

                    )

                    }

                </tbody>
            </table>
            
        </div>
    );

};

function groupByCategory(products) {
    const productsByCategory = {};
    for (const { category, ...product } of products) {
        if (productsByCategory[category]) {
            productsByCategory[category].push(product)
        } else {
            productsByCategory[category] = [];
            productsByCategory[category].push(product)
        }
    }
    return productsByCategory;
}

export default ProductsTable