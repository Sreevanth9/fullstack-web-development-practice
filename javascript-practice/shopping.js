function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Boss" });
    }, 1000);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Orders fetched");
      resolve([100, 200, 300]);
    }, 1000);
  });
}

function calculateTotal(orders) {
  return orders.reduce((sum, price) => sum + price, 0);
}

function applyDiscount(total) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const afterDiscount = total - total * 0.10;
      console.log("After Discount:", afterDiscount);
      resolve(afterDiscount);
    }, 1000);
  });
}

function addTax(afterDiscount) {
  return afterDiscount + afterDiscount * 0.18;
}

async function processOrder() {
  try {
    const user = await getUser();
    const orders = await getOrders(user);
    const total = calculateTotal(orders);
    const afterDiscount = await applyDiscount(total);
    const final = addTax(afterDiscount);

    console.log("Final Amount:", final);
  } catch (err) {
    console.error(err);
  }
}

processOrder();