import React from "react";

import { Image } from "antd";

function ProductItem({ image, title, subtitle }) {
  return (
    <div className="d-flex align-items-center align-content-center">
      <div className="rounded overflow-hidden">
        <Image width={60} src={image} />
      </div>
      <div className="ml-2 d-flex h-100 flex-column justify-content-center">
        <p className="font-weight-bold p-0 m-0"> {title} </p>
        <small className="text-muted font-weight-bold"> {subtitle} </small>
      </div>
    </div>
  );
}

export default ProductItem;
