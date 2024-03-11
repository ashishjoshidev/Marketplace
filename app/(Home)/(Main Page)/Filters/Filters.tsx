'use client'
import { type ReactElement,  useState, useEffect } from "react";
import Image from "next/image";
import css from "./Filters.module.css";
import Link from "next/link";
import filter1 from "../../../../public/assets/filter1.svg"
import filter2 from "../../../../public/assets/filter2.svg"
import filter3 from "../../../../public/assets/filter3.svg"

export function Filters(): ReactElement {

  return (
    <div className={css.filtersBox}>      
      <div className={css.filter}>
        <div className={css.filter__name}>
        <Image
                src={filter1}
                alt="N"
                width="18"
                height="18"
                className={css.filter__name_image}
          />
          <p>Property Type</p>

        </div>
        <select className={css.filter__option}>
          <option value="">All property types</option>
        </select>

      </div>
      <div className={css.filter}>
        <div className={css.filter__name}>
        <Image
                src={filter2}
                alt="N"
                width="18"
                height="18"
                className={css.filter__name_image}
          />
          <p>Location</p>

        </div>
        <select className={css.filter__option}>
          <option value="">Worldwide</option>
        </select>

      </div>
      <div className={css.filter}>
        <div className={css.filter__name}>
        <Image
                src={filter3}
                alt="N"
                width="18"
                height="18"
                className={css.filter__name_image}
          />
          <p>Rental Yield</p>

        </div>
        <select className={css.filter__option}>
          <option value="">Up to 10%</option>
        </select>

      </div>      
      <div className={css.buttonSearch}>
        Search Properties
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M10 16C8.18333 16 6.646 15.3707 5.388 14.112C4.13 12.8533 3.50067 11.316 3.5 9.5C3.5 7.68333 4.12933 6.146 5.388 4.888C6.64667 3.63 8.184 3.00067 10 3C11.8167 3 13.3543 3.62933 14.613 4.888C15.8717 6.14667 16.5007 7.684 16.5 9.5C16.5 10.2333 16.3833 10.925 16.15 11.575C15.9167 12.225 15.6 12.8 15.2 13.3L20.8 18.9C20.9833 19.0833 21.075 19.3167 21.075 19.6C21.075 19.8833 20.9833 20.1167 20.8 20.3C20.6167 20.4833 20.3833 20.575 20.1 20.575C19.8167 20.575 19.5833 20.4833 19.4 20.3L13.8 14.7C13.3 15.1 12.725 15.4167 12.075 15.65C11.425 15.8833 10.7333 16 10 16ZM10 14C11.25 14 12.3127 13.5627 13.188 12.688C14.0633 11.8133 14.5007 10.7507 14.5 9.5C14.5 8.25 14.0627 7.18767 13.188 6.313C12.3133 5.43833 11.2507 5.00067 10 5C8.75 5 7.68767 5.43767 6.813 6.313C5.93833 7.18833 5.50067 8.25067 5.5 9.5C5.5 10.75 5.93767 11.8127 6.813 12.688C7.68833 13.5633 8.75067 14.0007 10 14Z" fill="#F0F0F0"/>
        </svg>
      </div>
    </div>
  )
}