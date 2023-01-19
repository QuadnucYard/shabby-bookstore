export interface BookInfo {
  bid: number;
  name: string;
  desc: string;
  author: string;
  publisher: string;
  publishDate: string;
  rating: number;
  numComments: number;
  price: number;
  originalPrice: number;
  cover: string;
}

interface QueryOptions {
  keyword?: string;
  name?: string;
  author?: string;
  publisher?: string;
  desc?: string;
}

export function getBookList(page: number, options: QueryOptions): BookInfo[] {
  return Array(5).fill({
    bid: 1,
    name: "东野圭吾新作：魔力的胎动",
    desc: "喜欢《解忧杂货店》，就一定要读这本书。珍藏印签。有了想要守护的东西，生命就会变得有力量。悲凉的人生、千疮百孔的命运、一桩桩悲剧的发生与救赎，读来令人喟叹不已。",
    author: "东野圭吾",
    publisher: "北京联合出版有限公司",
    publishDate: "2019年12月",
    rating: 4.8,
    numComments: 19909,
    price: 32.4,
    originalPrice: 45.0,
    cover: "https://img3m4.ddimg.cn/68/35/28484744-5_u_15.jpg",
  });
}
