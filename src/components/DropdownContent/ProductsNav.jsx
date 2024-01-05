import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const ProductsNav = () => {
  const productsData = [
    {
      title: "Payments",
      subtitle: "Online payments",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Payments</title>

          <path
            d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
            fill="url(#product-icon-payments-ProductNav-a)"
          ></path>
          <path
            d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
            fill="#96F"
          ></path>
          <path
            d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
            fill="url(#product-icon-payments-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-payments-ProductNav-a"
              x1="20"
              y1="4.13"
              x2="20"
              y2="21.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-payments-ProductNav-b"
              x1="35"
              y1="11.28"
              x2="35"
              y2="28.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset="1" stopColor="#9B66FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Billing",
      subtitle: "Subscription management",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Billing</title>

          <path
            d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z"
            fill="url(#product-icon-billing-ProductNav-a)"
          ></path>
          <path
            d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z"
            fill="#00D924"
          ></path>
          <path
            d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z"
            fill="url(#product-icon-billing-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-billing-ProductNav-a"
              x1="13"
              y1="6.35"
              x2="13"
              y2="35.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset="1" stopColor="#FFC148"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-billing-ProductNav-b"
              x1="19.5"
              y1="12.01"
              x2="19.5"
              y2="30.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A600"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Checkout",
      subtitle: "Prebuilt payment form",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Checkout</title>

          <path
            d="M31.54 4h-19.7c-.84 0-1.63.43-2.09 1.14a2.52 2.52 0 0 0-.18 2.39l5.1 11.46c.3.64.3 1.38 0 2.02L8 36h23.54c.97 0 1.86-.58 2.26-1.48l5.98-13.5c.3-.65.3-1.39 0-2.04L33.8 5.48A2.48 2.48 0 0 0 31.54 4z"
            fill="#96F"
          ></path>
          <path
            d="M7.23 36a2.3 2.3 0 0 1-.98-.22h.04a2.43 2.43 0 0 1-1.23-1.23L.22 23.53a2.54 2.54 0 0 1 .17-2.38A2.45 2.45 0 0 1 2.46 20h19.5c.97 0 1.84.57 2.23 1.46l4.8 10.85.68 1.53c.1.22.23.42.38.6.49.64 1.2 1.3 1.98 1.51-.11.03-.3.05-.55.05H7.22z"
            fill="url(#product-icon-checkout-ProductHeroCaption-a)"
          ></path>
          <path
            d="M21.97 20c.9 0 1.72.5 2.14 1.3l.08.16 4.8 10.85.68 1.53a4.43 4.43 0 0 0 2.3 2.01l.18.07c-.2.05-.4.08-.61.08H8L14.67 21c.15-.32.22-.66.22-1.01h7.08z"
            fill="url(#product-icon-checkout-ProductHeroCaption-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-checkout-ProductHeroCaption-a"
              x1="16.01"
              y1="35.59"
              x2="16.01"
              y2="21.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#21CFE0"></stop>
              <stop offset=".17" stopColor="#20D1E0"></stop>
              <stop offset=".38" stopColor="#18E2E2"></stop>
              <stop offset=".61" stopColor="#13ECE3"></stop>
              <stop offset="1" stopColor="#11EFE3"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-checkout-ProductHeroCaption-b"
              x1="21.07"
              y1="43"
              x2="21.07"
              y2="14.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset="1" stopColor="#9B66FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Invoicing",
      subtitle: "Online invoices",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Invoicing</title>

          <path
            d="M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z"
            fill="#00D924"
          ></path>
          <path
            d="M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z"
            fill="url(#product-icon-invoicing-ProductNav-a)"
          ></path>
          <path
            d="M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z"
            fill="url(#product-icon-invoicing-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-invoicing-ProductNav-a"
              x1="17.3897"
              y1="20.25"
              x2="17.3893"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset="1" stopColor="#FFC148"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-invoicing-ProductNav-b"
              x1="21.5889"
              y1="12.7122"
              x2="21.5881"
              y2="38.6633"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A600"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Elements",
      subtitle: "Customizable payments UIs",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Elements</title>

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 10.02c0-.95.5-1.83 1.33-2.3L16.08.36a2.66 2.66 0 0 1 2.66 0l12.75 7.36a2.66 2.66 0 0 1 1.33 2.3v6l-5-2.89a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21L3.33 27.05A2.66 2.66 0 0 1 2 24.75V10.02z"
            fill="url(#product-icon-elements-ProductHeroCaption-a)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 34.07l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72l4.47 2.58a2.66 2.66 0 0 1 1.33 2.3v10.95c0 .95-.5 1.83-1.33 2.3l-9.48 5.48c-.82.48-1.83.48-2.65 0l-9.51-5.47-.15-.1z"
            fill="#96F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.82 16.03l-5-2.9a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72z"
            fill="url(#product-icon-elements-ProductHeroCaption-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-elements-ProductHeroCaption-a"
              x1="17.41"
              y1="2.24"
              x2="17"
              y2="32.18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-elements-ProductHeroCaption-b"
              x1="21.95"
              y1="40.81"
              x2="30.59"
              y2="9.56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset=".64" stopColor="#625AF5"></stop>
              <stop offset="1" stopColor="#8A62FC"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Terminal",
      subtitle: "In-person payments",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Terminal</title>

          <path
            d="M36.98 14.05l-6.31 1.36L9.33 20l-7.35 1.58A2.52 2.52 0 0 0 0 24.05v13.42C0 38.87 1.12 40 2.5 40h35c1.38 0 2.5-1.13 2.5-2.53V16.53c0-.77-.34-1.49-.93-1.97a2.48 2.48 0 0 0-2.09-.5z"
            fill="#9B66FF"
          ></path>
          <path
            d="M28.59 0H11.58A2.54 2.54 0 0 0 9 2.5v25c0 1.38 1.15 2.5 2.58 2.5h16.84A2.54 2.54 0 0 0 31 27.5v-25A2.5 2.5 0 0 0 28.59 0z"
            fill="url(#product-icon-terminal-ProductNav-a)"
          ></path>
          <path
            d="M31 15.34V27.5c0 1.38-1.15 2.5-2.58 2.5H11.58A2.54 2.54 0 0 1 9 27.5v-7.43l.33-.07 21.34-4.59.33-.07z"
            fill="url(#product-icon-terminal-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-terminal-ProductNav-a"
              x1="20"
              y1="1.97"
              x2="20"
              y2="17.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-terminal-ProductNav-b"
              x1="31"
              y1="22.67"
              x2="5.34"
              y2="22.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset=".64" stopColor="#625AF5"></stop>
              <stop offset="1" stopColor="#8A62FC"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },

    {
      title: "Payment Links",
      subtitle: "No-code payments",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5603 16.2116c-.3287-.8362.2877-1.7409 1.1862-1.7409h15.7828c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818c0-.1582-.0295-.3165-.0884-.4663l-3.6421-9.2635Z"
            fill="url(#product-icon-payment-links-ProductHeroCaption-a)"
          ></path>
          <path
            d="M.0896108 4.74087C-.239137 3.90471.377287 3 1.27575 3H14.6995c.0185 0 .0369.00039.0552.00117.0258-.00078.0517-.00117.0777-.00117h7.6402c1.0478 0 1.9889.6412 2.3723 1.61636l3.5076 8.92164c.1179.2998.1768.6162.1768.9327H12.7465c-.8985 0-1.5149.9047-1.1862 1.7409l3.6421 9.2635c.0589.1498.0884.3081.0884.4663H1.27575c-.898464 0-1.514886-.9047-1.1861386-1.7408L3.73167 14.9371c.11784-.2998.11784-.633 0-.9327L.0896108 4.74087Z"
            fill="url(#product-icon-payment-links-ProductHeroCaption-b)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2908 25.9414c0 .1583-.0295.3165-.0884.4664l-3.6421 9.2635c-.3287.8361.2877 1.7408 1.1862 1.7408h21.1968c1.0478 0 1.9889-.6412 2.3723-1.6163l3.5076-8.9217c.2357-.5995.2357-1.2659 0-1.8654l-3.5076-8.9216c-.3834-.9752-1.3245-1.6164-2.3723-1.6164h-5.414c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818Z"
            fill="#96F"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-payment-links-ProductHeroCaption-a"
              x1="14.0622"
              y1="24.6669"
              x2="29.3565"
              y2="12.5589"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048E5"></stop>
              <stop offset=".63979" stopColor="#625AF5"></stop>
              <stop offset="1" stopColor="#8A62FC"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-payment-links-ProductHeroCaption-b"
              x1="14.2646"
              y1="4.50656"
              x2="14.0622"
              y2="24.6669"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Financial Connections",
      subtitle: "Linked financial account data",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0001 9.66675 27.57 18.3579c.8197.9412.8197 2.3428 0 3.2839l-7.5699 8.6912-7.5699-8.6912c-.8197-.9411-.8197-2.3427 0-3.2839l7.5699-8.69115Z"
            fill="url(#product-icon-financial-connections-ProductNav-a)"
          ></path>
          <path
            d="m20 30.3331 4.1884 4.8089c.4748.5451 1.1623.858 1.8852.858H34.5c1.3807 0 2.5-1.1193 2.5-2.5v-27C37 5.11929 35.8807 4 34.5 4h-8.4264c-.7229 0-1.4104.31291-1.8852.85803L20 9.66688l7.5699 8.69112c.8197.9412.8197 2.3428 0 3.284L20 30.3331Z"
            fill="#00D924"
          ></path>
          <path
            d="M20 9.66688 12.4301 18.358c-.8197.9412-.8197 2.3428 0 3.284L20 30.3331l-4.1884 4.8089c-.4748.5451-1.1623.858-1.8852.858H5.5C4.11929 36 3 34.8807 3 33.5v-27C3 5.11929 4.11929 4 5.5 4h8.4264c.7229 0 1.4104.31291 1.8852.85803L20 9.66688Z"
            fill="url(#product-icon-financial-connections-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-financial-connections-ProductNav-a"
              x1="4.00012"
              y1="19.4999"
              x2="41.0001"
              y2="19.4999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D924"></stop>
              <stop offset="1" stopColor="#00A600"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-financial-connections-ProductNav-b"
              x1="27.5"
              y1="20"
              x2=".010181"
              y2="19.4718"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Radar",
      subtitle: "Fraud & risk management",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Radar</title>

          <path
            d="M24.87 4.46a1.26 1.26 0 0 0-1.8.2l-4.6 5.82L3.42 29.45c.27.22.54.45.78.7a9.42 9.42 0 0 1 1.13 1.32l.1.13a9.15 9.15 0 0 1 .8 1.43c.29.62.5 1.28.65 1.95a2.5 2.5 0 0 0 2.45 1.93H38.7a1.27 1.27 0 0 0 1.27-1.3 42.43 42.43 0 0 0-15.1-31.15z"
            fill="#9A66FF"
          ></path>
          <path
            d="M27.8 21.98A33.82 33.82 0 0 0 5.95 4.28a1.29 1.29 0 0 0-1.56.98L.1 25.4a2.54 2.54 0 0 0 1.4 2.88 9.48 9.48 0 0 1 2.72 1.87l.17.17c.35.36.67.74.96 1.15l.1.13a9.15 9.15 0 0 1 .8 1.43l20.94-9.31a1.29 1.29 0 0 0 .62-1.74z"
            fill="url(#product-icon-radar-ProductNav-a)"
          ></path>
          <path
            d="M18.46 10.48l.47.38a33.82 33.82 0 0 1 8.87 11.12 1.29 1.29 0 0 1-.62 1.74L6.25 33.03a9.15 9.15 0 0 0-.8-1.43l-.1-.13-.23-.3c-.23-.3-.47-.58-.74-.85a9.7 9.7 0 0 0-.95-.86l15.03-18.98z"
            fill="url(#product-icon-radar-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-radar-ProductNav-a"
              x1="13.98"
              y1="4.24"
              x2="13.98"
              y2="33.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".26" stopColor="#FF5091"></stop>
              <stop offset=".91" stopColor="#E03071"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-radar-ProductNav-b"
              x1="15.68"
              y1="10.48"
              x2="15.68"
              y2="33.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E00F5"></stop>
              <stop offset="1" stopColor="#9860FE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Identity",
      subtitle: "Online identity verification",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Identity</title>

          <path
            d="M13.9 5.93A3.87 3.87 0 0 1 17.54 3h19.99c1.66 0 2.72 1.31 2.38 2.93l-6.2 29.11A2.58 2.58 0 0 1 31.3 37H7.32L13.9 5.93z"
            fill="url(#product-icon-identity-ProductNav-a)"
          ></path>
          <path
            d="M.1 21.93C-.24 20.31.82 19 2.48 19h19.99a3.87 3.87 0 0 1 3.62 2.93l2.79 13.11A2.58 2.58 0 0 0 31.29 37H5.31c-1.1 0-2.19-.88-2.42-1.96L.1 21.94z"
            fill="#9A66FF"
          ></path>
          <path
            d="M31.3 37c-1.11 0-2.2-.88-2.42-1.96l-2.79-13.1A3.87 3.87 0 0 0 22.47 19H11.14L7.33 37h23.96z"
            fill="url(#product-icon-identity-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-identity-ProductNav-a"
              x1="23.65"
              y1="2.99"
              x2="23.65"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5091"></stop>
              <stop offset="1" stopColor="#E03071"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-identity-ProductNav-b"
              x1="19.31"
              y1="19"
              x2="19.31"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E00F5"></stop>
              <stop offset="1" stopColor="#9860FE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Connect",
      subtitle: "Payments for platforms",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Connect</title>

          <path
            d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
            fill="url(#product-icon-connect-ProductNav-a)"
          ></path>
          <path
            d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
            fill="#0073E6"
          ></path>
          <path
            d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
            fill="url(#product-icon-connect-ProductNav-b)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-connect-ProductNav-a"
              x1="13"
              y1="1.71"
              x2="13"
              y2="15.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11EFE3"></stop>
              <stop offset=".33" stopColor="#15E8E2"></stop>
              <stop offset=".74" stopColor="#1FD3E0"></stop>
              <stop offset="1" stopColor="#21CFE0"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-connect-ProductNav-b"
              x1="20"
              y1="15.72"
              x2="20"
              y2="27.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00299C"></stop>
              <stop offset="1" stopColor="#0073E6"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },

    {
      title: "Climate",
      subtitle: "Carbon removal",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Climate</title>

          <path
            d="M33.24 21.09c-4.28 0-9.09-2.96-13.24-5.81-4.4-3.04-9.24-7.05-13.24-7.05C2.68 8.23 0 11.96 0 15.28v.28a20 20 0 1 0 40 0c-.13 2.68-2.03 5.53-6.76 5.53z"
            fill="url(#product-icon-climate-ProductNav-a)"
          ></path>
          <path
            d="M33.24 8.24c-4 0-8.84 4-13.24 7.04-4.15 2.85-8.96 5.8-13.24 5.8-4.73 0-6.63-2.84-6.76-5.52a20 20 0 1 0 40 0v-.28c0-3.32-2.67-7.05-6.76-7.04z"
            fill="url(#product-icon-climate-ProductNav-b)"
          ></path>
          <path
            d="M20 15.28c4.15 2.85 8.96 5.8 13.24 5.8 4.73 0 6.63-2.84 6.76-5.52a20 20 0 1 1-40 0c.13 2.68 2.03 5.53 6.76 5.53 4.28 0 9.09-2.96 13.24-5.81z"
            fill="url(#product-icon-climate-ProductNav-c)"
          ></path>
          <defs>
            <linearGradient
              id="product-icon-climate-ProductNav-a"
              x1="20"
              y1="20.63"
              x2="20"
              y2="9.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD748"></stop>
              <stop offset=".21" stopColor="#FFD644"></stop>
              <stop offset=".33" stopColor="#FFD438"></stop>
              <stop offset=".45" stopColor="#FFD024"></stop>
              <stop offset=".57" stopColor="#FFCB09"></stop>
              <stop offset="1" stopColor="#FFC900"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-climate-ProductNav-b"
              x1="20"
              y1="9.56"
              x2="20"
              y2="21.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009C00"></stop>
              <stop offset="1" stopColor="#00BA18"></stop>
            </linearGradient>
            <linearGradient
              id="product-icon-climate-ProductNav-c"
              x1="20"
              y1="35.28"
              x2="20"
              y2="15.28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".13" stopColor="#00CB1B"></stop>
              <stop offset="1" stopColor="#00D924"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  // hover icon
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pr-5 pb-10">
      {productsData.map((product, index) => (
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className=" flex items-center gap-4 cursor-pointer"
          key={index}
        >
          {product?.svg}
          <div className="text-gray-500 hover:text-gray-800">
            <h1 className=" text-[15px] text-gray-800 flex items-center gap-1">
              {product.title}{" "}
              <span>{hoveredIndex === index && <IoArrowForward />}</span>{" "}
            </h1>
            <p className=" text-[13px] ">{product.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsNav;
