import React from "react";
import Link from "next/link";

export default function Breadcrumb({ current }) {
  return (
    <div className="my-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {current}
          </li>
        </ol>
      </nav>
    </div>
  );
}
