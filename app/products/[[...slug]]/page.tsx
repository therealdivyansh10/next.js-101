import React from 'react'

interface Props {
    params: {
        slug: string[];
    };
    searchParams: {
      sortOrder: string;
    }
}

const ProductPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <div>
      ProductsPage {slug} {sortOrder}
    </div>
  )
}

interface Props {
    params: {slug: string[]}
}

export default ProductPage
