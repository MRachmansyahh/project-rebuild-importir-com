import { NextResponse } from "next/server";

const productCategories = [
  {
    id: 1,
    image: "https://img.alicdn.com/tfs/TB1rq3mh3HqK1RjSZFkXXX.WFXa-130-130.jpg",
    category: "Women",
    subcategory: ["Subcategory 1", "Subcategory 2"],
  },
  {
    id: 2,
    image:
      "https://img.alicdn.com/imgextra/i1/O1CN01PBdyqp1dwRkREBdiG_!!6000000003800-0-tps-240-240.jpg",
    category: "Men",
    subcategory: ["Subcategory A", "Subcategory B", "Subcategory C"],
  },
  {
    id: 3,
    image: "https://img.alicdn.com/tfs/TB1qpmXDcbpK1RjSZFyXXX_qFXa-130-130.png",
    category: "Accessories",
    subcategory: ["Subcategory X", "Subcategory Y", "Subcategory Z"],
  },
  {
    id: 4,
    image:
      "https://img.alicdn.com/imgextra/i3/O1CN01i2s1S01H36KMh7MZ4_!!6000000000701-0-tps-240-240.jpg",
    category: "Shoes",
    subcategory: ["Subcategory I", "Subcategory II"],
  },
  {
    id: 5,
    image: "https://img.alicdn.com/tfs/TB1rLQSaoT1gK0jSZFrXXcNCXXa-240-240.jpg",
    category: "Bag",
    subcategory: ["Subcategory M", "Subcategory N"],
  },
  {
    id: 6,
    image: "https://img.alicdn.com/tfs/TB12y6Rh8LoK1RjSZFuXXXn0XXa-130-130.jpg",
    category: "Toy",
    subcategory: ["Subcategory X1", "Subcategory Y1", "Subcategory Z1"],
  },
  {
    id: 7,
    image:
      "https://img.alicdn.com/imgextra/i2/O1CN010toL8E1K1Dc0l0pNH_!!6000000001103-0-tps-240-240.jpg",
    category: "Children",
    subcategory: ["Subcategory K1", "Subcategory L1"],
  },
  {
    id: 8,
    image: "	https://img.alicdn.com/tfs/TB19Y5niUD1gK0jSZFGXXbd3FXa-240-240.jpg",
    category: "Mother Baby",
    subcategory: ["Subcategory M2", "Subcategory N2"],
  },
  {
    id: 9,
    image: "https://img.alicdn.com/tfs/TB1MBoYh3HqK1RjSZFgXXa7JXXa-130-130.jpg",
    category: "Home Textile",
    subcategory: ["Subcategory X3", "Subcategory Y3"],
  },
  {
    id: 10,
    image: "https://gw.alicdn.com/tfs/TB1VHhtiAvoK1RjSZFDXXXY3pXa-130-130.jpg",
    category: "Makeup",
    subcategory: ["Subcategory A1", "Subcategory B1", "Subcategory C1"],
  },
  {
    id: 11,
    image: "https://gw.alicdn.com/tfs/TB1dLrADiLaK1RjSZFxXXamPFXa-130-130.png",
    category: "Sports",
    subcategory: ["Subcategory 123", "Subcategory 456", "Subcategory 789"],
  },
  {
    id: 12,
    image: "https://gw.alicdn.com/tfs/TB1aTawqHPpK1RjSZFFXXa5PpXa-130-130.jpg",
    category: "Sportswear",
    subcategory: ["Subcategory SP1", "Subcategory SP2"],
  },
  {
    id: 13,
    image: "https://img.alicdn.com/tfs/TB1eajwCIbpK1RjSZFyXXX_qFXa-130-130.png",
    category: "Digital",
    subcategory: ["Subcategory D1", "Subcategory D2"],
  },
  {
    id: 14,
    image:
      "https://cbu01.alicdn.com/cms/upload/2019/310/076/12670013_1400522054.png",
    category: "Electronic",
    subcategory: ["Subcategory E1", "Subcategory E2"],
  },
  {
    id: 15,
    image: "https://gw.alicdn.com/tfs/TB1SD7lDhTpK1RjSZR0XXbEwXXa-130-130.png",
    category: "Electrics",
    subcategory: ["Subcategory EL1", "Subcategory EL2"],
  },
  {
    id: 16,
    image: "https://img.alicdn.com/tfs/TB1FY2SCMDqK1RjSZSyXXaxEVXa-240-240.jpg",
    category: "Auto",
    subcategory: ["Subcategory A1", "Subcategory A2"],
  },
  {
    id: 17,
    image: "https://img.alicdn.com/tfs/TB1jnNNC5LaK1RjSZFxXXamPFXa-130-130.png",
    category: "Home",
    subcategory: ["Subcategory H1", "Subcategory H2"],
  },
  {
    id: 18,
    image: "https://img.alicdn.com/tfs/TB1xfL5vuH2gK0jSZJnXXaT1FXa-240-240.png",
    category: "Lighting",
    subcategory: ["Subcategory L1", "Subcategory L2"],
  },
  {
    id: 19,
    image: "https://img.alicdn.com/tfs/TB1c_zgbG67gK0jSZFHXXa9jVXa-220-220.jpg",
    category: "Packaging",
    subcategory: ["Subcategory P1", "Subcategory P2"],
  },
  {
    id: 20,
    image:
      "https://img.alicdn.com/imgextra/i4/O1CN01nBADBa1lHF721EgNx_!!6000000004793-0-tps-800-800.jpg",
    category: "Security",
    subcategory: ["Subcategory S1", "Subcategory S2"],
  },
  {
    id: 21,
    image: "https://img.alicdn.com/tfs/TB1YzixDgHqK1RjSZFgXXa7JXXa-130-130.jpg",
    category: "Hardware",
    subcategory: ["Subcategory H1", "Subcategory H2"],
  },
];

export async function GET() {
  return NextResponse.json(productCategories);
}
