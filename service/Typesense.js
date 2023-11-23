import { getProdukNatal, getProdukUnderSeratus } from "./api";

const Typesense = require("typesense");

// Initialize Typesense client

const API = "VaYsadlVM56PWkGw08dyYeO2upaFMSXL"
export const clientTypesense = new Typesense.Client({
  nodes: [
    {
      host: "a4sl8ior5gzhp2fwp-1.a1.typesense.net", 
      port: "443", 
      protocol: "https", 
    },
  ],
  apiKey: API
});

//CREATING SCHEMA TO CLOUD
// const schema = {
//   name: "products",
//   fields: [
//     {
//       name: "link",
//       type: "string"
//     },
//     {
//       name: "title",
//       type: "string"
//     },
//     {
//       name: "price",
//       type: "string"
//     },
//     {
//       name: "image",
//       type: "string"
//     },
//     {
//       name: "product_id",
//       type: "string"
//     },
//     {
//       name: "flag",
//       type: "string"
//     }
//   ],
//   "default_sorting_field": "title",
//   "enable_nested_fields": true
// };

// clientTypesense.collections().create(schema)
//   .then(function (data) {
//     console.log(data)
//   })

//FINISHED CREATING SCHEMA (COLLECTING HAS BEEN CREATED!!)

//CREATING DATA TO CLOUD

// const { products: christmasProducts } = await getProdukNatal();
// const { products: underSeratusProducts } = await getProdukUnderSeratus();

// const products = [...christmasProducts, ...underSeratusProducts];

// const documents = products.map((product) => {
//   return {
//     link: product.link,
//     title: product.title,
//     price: product.price,
//     image: product.image,
//     product_id: product.product_id,
//     flag: product.flag
//   };
// });

// clientTypesense.collections("products").documents().import(documents)
//   .then(function (data) {
//     console.log(data)
//   })

//FINISHED CREATING DATA

// CREATE SEARCH FUNCTION

// let searchParameters = {
//   q: keyword,
//   query_by: ["product_id", "title", "link"]
// }

// clientTypesense.collections("products")
//   .documents()
//   .search(searchParameters)
//   .then(function (data) {
//     console.log(data)
//   })

export async function searchProducts(keyword) {
  try {
    const searchResults = await clientTypesense
      .collections("products")
      .documents()
      .search({
        q: keyword,
        query_by: "title",
      });

    const products = searchResults.hits.map((hit) => hit.document);

    return { products };
  } catch (error) {
    console.error("Error searching products:", error);
    return { products: [] };
  }
}

//FINISHED SEARCH FUNCTION
