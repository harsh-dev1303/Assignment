// Calculate the profit or loss based on cost price and selling price. 
function calculateProfitOrLoss(costPrice, sellingPrice) {
    if (sellingPrice > costPrice) {
      return `Profit: ${sellingPrice - costPrice}`;
    } else if (sellingPrice < costPrice) {
      return `Loss: ${costPrice - sellingPrice}`;
    } else {
      return 'No profit, no loss';
    }
  }
  
  console.log(calculateProfitOrLoss(100, 150));
  console.log(calculateProfitOrLoss(200, 150));
  console.log(calculateProfitOrLoss(100, 100));
  