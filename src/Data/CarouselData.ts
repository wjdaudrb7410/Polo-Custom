const first_img: string =
  "https://media.istockphoto.com/id/1398610798/ko/%EC%82%AC%EC%A7%84/%EB%A6%B0%EB%84%A8-%EC%85%94%EC%B8%A0-%EB%B0%98%EB%B0%94%EC%A7%80-%EB%B0%8F-%ED%95%98%EC%9D%B4%ED%9E%90%EC%9D%84-%EC%9E%85%EC%9D%80-%EC%A0%8A%EC%9D%80-%EC%97%AC%EC%84%B1%EC%9D%B4-%EC%98%86%EA%B5%AC%EB%A6%AC%EB%A5%BC-%EA%B0%80%EB%A6%AC%ED%82%A4%EA%B3%A0-%EC%9D%B4%EC%95%BC%EA%B8%B0%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=MyGdsRi-DwbPyjVY0ic_MdYA4RJ0OsXM36x8FyrxENc=";
const second_img: string =
  "https://media.istockphoto.com/id/1363627613/ko/%EC%82%AC%EC%A7%84/%EC%95%BC%EC%99%B8%EC%97%90%EC%84%9C-%EC%9C%A0%EB%8C%80%EA%B0%90%EC%9D%84-%EC%8C%93%EB%8A%94-%EC%A0%8A%EC%9D%80-%EC%B9%9C%EA%B5%AC%EB%93%A4%EC%9D%98-%EB%8B%A4%EC%9D%B8%EC%A2%85-%EA%B7%B8%EB%A3%B9.jpg?s=612x612&w=0&k=20&c=2AA5yEy_Q01A8OvJ5YfusmbbJGNU-9L5cok-k40TC7A=";
export const Tennis_img: string =
  "https://img.freepik.com/premium-photo/whole-blue-tennis-court-synthetic-rubber-lawn_942686-1970.jpg";
export type C_Data = {
  id: number;
  src: string;
  alt: string;
  Title: string;
  Desc: string;
};

export const C_Data_real: Array<C_Data> = [
  {
    src: first_img,
    alt: "노란옷을 입은 여자",
    Title: "Girl Wear Yellow OnePiece",
    Desc: "노란옷을 입은 여자",
    id: 98800,
  },
  {
    src: second_img,
    alt: "모여있는 사람",
    Title: "Sevaral People",
    Desc: "여러장의 옷",
    id: 77975,
  },
];
