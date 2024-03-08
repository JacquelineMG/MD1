// given sales tax rates by province and company sales data
// calculateSalesTax calculates the total sales and total tax, grouped by company

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData1 = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  const resultOb = {};

  for (const salesD of salesData) {
    const salesTotal = salesD.sales.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const taxTotal = salesTotal * (taxRates[salesD.province]);

    if (resultOb[salesD.name]) {
      resultOb[salesD.name].totalSales += salesTotal;
      resultOb[salesD.name].totalTaxes += taxTotal;

    } else {
      if (!resultOb[salesD.name]) {
        resultOb[salesD.name] = {
          totalSales: salesTotal,
          totalTaxes: taxTotal
        };
      }
    }
  }
  return resultOb;
};


console.log(calculateSalesTax(companySalesData1, salesTaxRates));
