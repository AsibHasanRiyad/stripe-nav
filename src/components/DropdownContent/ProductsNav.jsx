const ProductsNav = () => {
  const productsData = [
    {
      title: "Payments",
      subtitle: "Online payments",
      image: "ImgBB-1X",
    },
    {
      title: "Checkout",
      subtitle: "Prebuilt payment form",
      image: "ChatGPT",
    },
    {
      title: "Elements",
      subtitle: "Customizable payments UIs",
      image: "Payment Links",
    },
    {
      title: "Payment Links",
      subtitle: "No-code payments",
      image: "Connect",
    },
    {
      title: "Radar",
      subtitle: "Fraud & risk management",
      image: "How to Cre X",
    },
    {
      title: "Connect",
      subtitle: "Payments for platforms",
      image: "ChatGPT",
    },
    {
      title: "Billing",
      subtitle: "Subscription management",
      image: "shakilahmedatik/st...",
    },
    {
      title: "",
      subtitle: "Invoicing",
      image: "Online invoices",
    },
    {
      title: "Terminal",
      subtitle: "In-person payments",
      image: "",
    },
    {
      title: "Financial Connections",
      subtitle: "Linked financial account data",
      image: "",
    },
    {
      title: "Identity",
      subtitle: "Online identity verification",
      image: null,
    },
    {
      title: "Climate",
      subtitle: "Carbon removal",
      image: null,
    },
  ];

  return (
    <div className=" grid grid-cols-2 gap-5">
      {productsData.map((product, index) => (
        <div key={index}>
          <h1 className=" text-base text-gray-800">{product.title} </h1>
          <p className=" text-sm text-gray-600">{product.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsNav;
