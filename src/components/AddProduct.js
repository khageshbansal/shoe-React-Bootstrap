import React, { useRef, useContext } from 'react';

import Table from 'react-bootstrap/Table';
import { MyContext } from './ProductsContext';
function AddProduct() {
  let ProductContextObj = useContext(MyContext);

  let shoeName = useRef();
  let description = useRef();
  let price = useRef();
  let quantitySmall = useRef();
  let quantityMedium = useRef();
  let quantityLarge = useRef();

  function addProductButtonHandeler() {
    let obj = {
      shoeName: shoeName.current.value,
      description: description.current.value,
      price: price.current.value,
      quantitySmall: quantitySmall.current.value,
      quantityMedium: quantityMedium.current.value,
      quantityLarge: quantityLarge.current.value,
    };

    if (
      shoeName.current.value == '' ||
      description.current.value == '' ||
      price.current.value == '' ||
      quantitySmall.current.value == '' ||
      quantityMedium.current.value == '' ||
      quantityLarge.current.value == ''
    )
      alert('fill all values');

    ProductContextObj.addItem(obj);

    shoeName.current.value = '';
    description.current.value = '';
    price.current.value = '';
    quantitySmall.current.value = '';
    quantityMedium.current.value = '';
    quantityLarge.current.value = '';
  }
  return (
    <>
      <h1>Add Product</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Shoename</th>
            <th>Description</th>
            <th>Price</th>
            <th>Q Small</th>
            <th>Q Medium</th>
            <th>Q Large</th>
            <th>Add Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="input-group mb-3">
                <input
                  ref={shoeName}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </td>
            <td>
              <div class="input-group mb-3">
                <input
                  ref={description}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </td>{' '}
            <td>
              <div class="input-group mb-3">
                <input
                  type="number"
                  ref={price}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </td>{' '}
            <td>
              <div class="input-group mb-3">
                <input
                  type="number"
                  ref={quantitySmall}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </td>{' '}
            <td>
              <div class="input-group mb-3">
                <input
                  type="number"
                  ref={quantityMedium}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </td>{' '}
            <td>
              <div class="input-group mb-3">
                <input
                  type="number"
                  ref={quantityLarge}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </td>{' '}
            <td>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                onClick={addProductButtonHandeler}
              >
                Add Shoe
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default AddProduct;
