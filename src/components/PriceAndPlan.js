const PriceAndPlan = ({ plans }) => {
  const { type, price, features, duration, additionalBenefits } = plans;
  return (
    <div className="price-plans px-2 py-3 border-2 border-black text-center text-xl min-w-96 max-w-96">
      <h1 className="text-4xl mb-4">Price And Plans</h1>
      <p>{type ?? null}</p>
      <p>{price ?? null}</p>
      <p>{duration ?? null}</p>
      <p>{additionalBenefits ?? null}</p>

      <div>
        {features
          ? features.map((feature, index) => {
              return <p key={index}>{feature} </p>;
            })
          : null}
      </div>
    </div>
  );
};

export default PriceAndPlan;
