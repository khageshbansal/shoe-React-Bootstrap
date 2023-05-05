import React, { useContext } from 'react';

import Table from 'react-bootstrap/Table';
import { MyContext } from './ProductsContext';
function ShowProduct() {
  let ProductContextObj = useContext(MyContext);

  return (
    <>
      <h1>Products Available</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Shoename</th>
            <th>Description</th>
            <th>Price</th>
            <th>Buy Small</th>
            <th>Buy Medium</th>
            <th>Buy Large</th>
          </tr>
        </thead>
        <tbody>
          {ProductContextObj.items.map((item) => {
            console.log(item);
            return (
              <tr>
                <td>{item.shoeName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm">
                    buy Small {item.quantitySmall}
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm">
                    buy Medium {item.quantityMedium}
                  </button>
                </td>{' '}
                <td>
                  <button type="button" class="btn btn-primary btn-sm">
                    buy Large {item.quantityLarge}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ShowProduct;
