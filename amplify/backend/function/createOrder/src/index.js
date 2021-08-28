const { v4: uuidv4 } = require("uuid")
const AWS = require("aws-sdk")
const documentClient = new AWS.DynamoDB.DocumentClient()

// ORDER_TABLE and VIDEO_ORDER_TABLE ids are found at Amplify UI API section
const ORDER_TABLE = "Order-6tne7pva45hcpcqswxr5x6lcva-staging"
const ORDER_TYPE = "Order"
const VIDEO_ORDER_TABLE = "VideoOrder-6tne7pva45hcpcqswxr5x6lcva-staging"
const VIDEO_ORDER_TYPE = "VideoOrder"

const createOrder = async (payload) => {
  const { order_id, username, email, total } = payload
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: order_id,
      __typename: ORDER_TYPE,
      customer: email,
      user: username,
      total: total,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  }
  console.log(params)
  await documentClient.put(params).promise()
}

const createVideoOrder = async (payload) => {
  let videoOrders = []
  for (i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i]
    videoOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: VIDEO_ORDER_TYPE,
          video_id: cartItem.id,
          order_id: payload.order_id,
          customer: payload.email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    })
  }
  let params = {
    RequestItems: {},
  }
  params["RequestItems"][VIDEO_ORDER_TABLE] = videoOrders
  console.log(params)
  await documentClient.batchWrite(params).promise()
}

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link videos to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result
    payload.order_id = uuidv4()

    // create a new order
    await createOrder(payload)

    // links books with the order
    await createBookOrder(payload)

    // Note - You may add another function to email the invoice to the user

    return "SUCCESS"
  } catch (err) {
    console.log(err)
    return new Error(err)
  }
}

/*
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
*/