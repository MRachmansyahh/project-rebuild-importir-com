const Typesense = require("typesense");

// const adminApiKey = 'VmOR1atcevfP1szB8Rt4r6GKqAEaIeRR';
const searchOnlyApiKey = "VaYsadlVM56PWkGw08dyYeO2upaFMSXL";

// Initialize Typesense client
export const clientTypesense = new Typesense.Client({
  nodes: [
    {
      host: "a4sl8ior5gzhp2fwp-1.a1.typesense.net",
      port: "443",
      protocol: "https",
    },
  ],
  apiKey: searchOnlyApiKey,
});

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
