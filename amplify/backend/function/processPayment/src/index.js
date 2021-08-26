const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
// User pool id is found in src/aws-exports
const USER_POOL_ID = "eu-west-2_00Ja9vXn3";
// stripe private key
const stripe = require("stripe")("sk_test_51JRGLAG5Nk1zwS78QYbG9MLSSadtaP6dGlV4zHyPw1wVKuwfUy9ZSMfhKBWnWBtjgCkKMnHw0QjtF2Tx12ahd4dl00gMTRMqi2");

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username
  };
  const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { id, cart, total, token, address } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    await stripe.charges.create({
      amount: total * 100,
      currency: "cad",
      source: token,
      description: `Order ${new Date()} by ${username} with ${email} email`
    });
    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};

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