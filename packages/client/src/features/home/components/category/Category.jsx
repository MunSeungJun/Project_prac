import React from 'react';
import { Link } from 'react-router-dom';
import styles from './category.module.css'

const Category = () => {
  return (
    <div className={`${styles.snb_wrap}`}>
      <ul className={`${styles.category_list} d-flex flex-column gap-1`}>
        <li>
          <Link>Woman's Fashion</Link>
        </li>
        <li>
          <Link>Mens's Fashion</Link>
        </li>
        <li>
          <Link>Electronics</Link>
        </li>
        <li>
          <Link>Home & Lifestyle</Link>
        </li>
        <li>
          <Link>Medicine</Link>
        </li>
        <li>
          <Link>Sports & Outdoor</Link>
        </li>
        <li>
          <Link>Baby's & Toys</Link>
        </li>
        <li>
          <Link>Groceries & Pets</Link>
        </li>
        <li>
          <Link>Health & Beauty</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
