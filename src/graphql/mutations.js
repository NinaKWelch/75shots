/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      imgUrl
      title
      director
      description
      categories {
        id
        label
        value
        createdAt
        updatedAt
      }
      pricePerView
      orders {
        items {
          id
          video_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      imgUrl
      title
      director
      description
      categories {
        id
        label
        value
        createdAt
        updatedAt
      }
      pricePerView
      orders {
        items {
          id
          video_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      imgUrl
      title
      director
      description
      categories {
        id
        label
        value
        createdAt
        updatedAt
      }
      pricePerView
      orders {
        items {
          id
          video_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createVideoOrder = /* GraphQL */ `
  mutation CreateVideoOrder(
    $input: CreateVideoOrderInput!
    $condition: ModelVideoOrderConditionInput
  ) {
    createVideoOrder(input: $input, condition: $condition) {
      id
      video_id
      order_id
      order {
        id
        user
        date
        total
        videos {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      video {
        id
        imgUrl
        title
        director
        description
        categories {
          id
          label
          value
          createdAt
          updatedAt
        }
        pricePerView
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updateVideoOrder = /* GraphQL */ `
  mutation UpdateVideoOrder(
    $input: UpdateVideoOrderInput!
    $condition: ModelVideoOrderConditionInput
  ) {
    updateVideoOrder(input: $input, condition: $condition) {
      id
      video_id
      order_id
      order {
        id
        user
        date
        total
        videos {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      video {
        id
        imgUrl
        title
        director
        description
        categories {
          id
          label
          value
          createdAt
          updatedAt
        }
        pricePerView
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deleteVideoOrder = /* GraphQL */ `
  mutation DeleteVideoOrder(
    $input: DeleteVideoOrderInput!
    $condition: ModelVideoOrderConditionInput
  ) {
    deleteVideoOrder(input: $input, condition: $condition) {
      id
      video_id
      order_id
      order {
        id
        user
        date
        total
        videos {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      video {
        id
        imgUrl
        title
        director
        description
        categories {
          id
          label
          value
          createdAt
          updatedAt
        }
        pricePerView
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      videos {
        items {
          id
          video_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      videos {
        items {
          id
          video_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      videos {
        items {
          id
          video_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
