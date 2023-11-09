import axios from "axios";

export async function getListSeminarNonMember() {
  try {
    const response = await axios.get(
      "https://new-admin.importir.com/api/home/get-list-org-schedule",
      {
        next: {
          revalidate: 0,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("ERROR NON MEMBER SEMINAR LIST:", error);
  }
}

export async function getListSeminarMember() {
  try {
    const response = await axios.get(
      "https://new-apiv2.importir.com/api/home/get-list-seminar-member",
      {
        next: {
          revalidate: 0,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log("ERROR MEMBER SEMINAR LIST:", error);
  }
}

export async function getProdukNatal() {
  try {
    const response = await axios.get(
      "https://new-apiv2.importir.com/api/catalog-custom/list-produk-rekomendasi-natal",
      {
        next: {
          revalidate: 0,
        },
      }
    );
    const { slug, info, categories } = response.data.data;
    const products = categories[0].products;
    const detailProductIds = products.map((product) => product.product_id);

    return { slug, info, products, detailProductIds };
  } catch (error) {
    console.log("ERROR PRODUK NATAL:", error);
    return { slug: "", info: "", products: [], detailProduct: [] };
  }
}

export async function getProdukUnderSeratus() {
  try {
    const response = await axios.get(
      "https://new-apiv2.importir.com/api/catalog-custom/list-produk-under-100k",
      {
        next: {
          revalidate: 0,
        },
      }
    );
    const { slug, info, categories } = response.data.data;
    const products = categories[0].products;

    return { slug, info, products };
  } catch (error) {
    console.log("ERROR PRODUK UNDER SERATUS:", error);
  }
}

export async function getBannerCarousel() {
  try {
    const response = await axios.get(
      "https://new-apiv2.importir.com/api/home/main-banner?country=nl",
      {
        next: {
          revalidate: 0,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log("ERROR BANNER CAROUSEL:", error);
  }
}

export async function getNews() {
  try {
    const response = await axios.get(
      "https://new-apiv2.importir.com/api/news",
      {
        next: {
          revalidate: 0,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("ERROR NEWS:", error);
  }
}

export const getNewss = async () => {
  try {
    const response = await axios.get("https://new-apiv2.importir.com/api/news");
    return response.data;
  } catch (error) {
    console.log("ERROR NEWS:", error);
  }
};
