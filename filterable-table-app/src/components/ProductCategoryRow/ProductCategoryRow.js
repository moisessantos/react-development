import React, { memo } from 'react';

const ProductCategoryRow = ({ category }) => (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );

ProductCategoryRow.displayName = 'ProductCategoryRow';

export default memo(ProductCategoryRow);