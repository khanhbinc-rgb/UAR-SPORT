// 1. IMPORT TẤT CẢ CÁC BIẾN ẢNH TỪ THƯ MỤC ASSETS
import fullcr7 from "../assets/Full CR7.png"; 
import fullmessi from "../assets/Full Messi.png";
import fullmanchesterunited from "../assets/Full Manchester United.png";
import fullchelsea from "../assets/Full Chelsea.png";
import fullliverpool from "../assets/Full Liverpool.png";
import fullzidane from "../assets/Full Zidane.png";
import fullrealmadrid from "../assets/Full Real Madrid.png";
import fullkaka from "../assets/Full Kaka.png";
import ur5acmilan from "../assets/UR5 AC Milan.png";
import ur5manchesterunited from "../assets/UR5 Manchester United.png";
import ur5realmadrid from "../assets/UR5 Real Madrid.png";
import ur5barcelona from "../assets/UR5 Barcelona.png";
import ur5arsenal from "../assets/UR5 Arsenal.png";
import ur5tottenham from "../assets/UR5 Tottenham.png";
import ur5manchestercity from "../assets/UR5 Manchester City.png";
import ur5liverpool from "../assets/UR5 Liverpool.png";
import ur5bayern from "../assets/UR5 Bayern.png";
import ur5chelsea from "../assets/UR5 Chealsea.png";
import ur1acmilanc1seria from "../assets/UR1 AC Milan C1 Seria.png";
import ur1acmilanc1 from "../assets/UR1 AC Milan C1.png";
import ur1acmilanspc from "../assets/UR1 AC Milan SPC.png";
import ur1argentinawc from "../assets/UR1 Argentina WC.png";
import ur1arsenalnha from "../assets/UR1 Arsenal  NHA.png"; // 2 dấu cách trước NHA
import ur1bayernc1 from "../assets/UR1 Bayern C1.png";
import ur1chelseac1 from "../assets/UR1 Chelsea C1.png";
import ur1chelseac2 from "../assets/UR1 Chelsea C2.png";
import ur1chelseac3 from "../assets/UR1 Chelsea C3.png";
import ur1chelseafa from "../assets/UR1 Chelsea FA.png";
import ur1chelseafifaclub2025 from "../assets/UR1 Chelsea Fifa Club 2025.png";
import ur1chelseanha from "../assets/UR1 Chelsea NHA.png";
import ur1chelseaspc from "../assets/UR1 Chelsea SPC.png";
import ur1germanywc from "../assets/UR1 Germany WC.png";
import ur1intermilanc1 from "../assets/UR1 Inter Milan C1.png";
import ur1mancchestercitynha from "../assets/UR1 Mancchester City NHA.png"; // c kép và vần "or"
import ur1manchestercityc1 from "../assets/UR1 Manchester City C1.png";
import ur1manchesterunitedc1 from "../assets/UR1 Manchester United C1.png";
import ur1manchesterunitedfa from "../assets/UR1 Manchester United FA.png";
import ur1manchesterunitednha from "../assets/UR1 Manchester United NHA.png";
import ur1manchesterunitedspc from "../assets/UR1 Manchester United SPC.png";
import ur1portugaleuro from "../assets/UR1 Portugal Euro.png";
import ur1portugalnations from "../assets/UR1 Portugal Nations.png";
import ur1tottenhamc2 from "../assets/UR1 Tottenham C2.png";
import bongvang from "../assets/Mẫu Bóng Vàng.png";
import c1_1 from "../assets/Mẫu C1 (1).png";
import c1 from "../assets/Mẫu C1.png";
import c2 from "../assets/Mẫu C2.png";
import c3 from "../assets/Mẫu C3.png";
import carabao from "../assets/Mẫu Carabao.png";
import cupnhavua from "../assets/Mẫu Cúp Nhà Vua.png";
import euro from "../assets/Mẫu Euro.png";
import facup from "../assets/Mẫu FA Cup.png";
import fifaclub2025 from "../assets/Mẫu Fifa Club 2025.png";
import fifaclubwc from "../assets/Mẫu Fifa Club WC.png";
import laliga from "../assets/Mẫu Laliga.png";
import nations from "../assets/Mẫu Nations.png";
import premierluegue from "../assets/Mẫu Premier Luegue.png"; 
import sieucupanh from "../assets/Mẫu Siêu Cúp Anh.png";
import supercopa from "../assets/Mẫu Super Copa.png";
import suppercup from "../assets/Mẫu Supper Cup.png"; 
import wc from "../assets/Mẫu WC.png";
import winnerscup from "../assets/Mẫu Winner's Cup.png";


// (Giả định bạn dùng tạm các biến ảnh trên để test, khi nào có ảnh thật bạn chỉ cần đổi tên biến ảnh ở dưới)

export const products = [
  // ==========================================
  // LUỒNG 1: BỘ URF
  // ==========================================
  {
    id: 1,
    name: "URF - CR7", 
    price: "999.000đ", 
    image: fullcr7, 
    category: "URF"
  },
  {
    id: 2,
    name: "URF - Messi",
    price: "999.000đ",
    image: fullmessi,
    category: "URF"
  },
  {
    id: 3,
    name: "URF - Manchester United",
    price: "1.099.000đ",
    image: fullmanchesterunited,
    category: "URF"
  },
  {
    id: 4,
    name: "URF - Chelsea",
    price: "1.200.000đ",
    image: fullchelsea,
    category: "URF"
  },
  {
    id: 5,
    name: "URF - Liverpool",
    price: "1.090.000đ",
    image: fullliverpool,
    category: "URF"
  },
    {
    id: 6,
    name: "URF - Zidane",
    price: "799.000đ",
    image: fullzidane,
    category: "URF"
  },
        {
    id: 7,
    name: "URF - Kaka",
    price: "850.000đ",
    image: fullkaka,
    category: "URF"
  },
      {
    id: 8,
    name: "URF - Real Madrid",
    price: "799.000đ",
    image: fullrealmadrid,
    category: "URF"
  },

  // ==========================================
  // LUỒNG 2: BỘ UR5
  // ==========================================
  {
    id: 9,
    name: "UR5 - Manchester United",
    price: "650.000đ",
    image: ur5manchesterunited,
    category: "UR5"
  },
  {
    id: 10,
    name: "UR5 - Chelsea",
    price: "650.000đ",
    image: ur5chelsea, 
    category: "UR5"
  },
  {
    id: 11,
    name: "UR5 - Liverpool",
    price: "650.000đ",
    image: ur5liverpool, 
    category: "UR5"
  },
    {
    id: 13,
    name: "UR5 - Arsenal",
    price: "650.000đ",
    image: ur5arsenal, 
    category: "UR5"
  },
   {
    id: 14,
    name: "UR5 - Tottenham",
    price: "650.000đ",
    image: ur5tottenham, 
    category: "UR5"
  },
    {
    id: 15,
    name: "UR5 - Real Madrid",
    price: "650.000đ",
    image: ur5realmadrid, 
    category: "UR5"
  },
    {
    id: 16,
    name: "UR5 - Barcelona",
    price: "650.000đ",
    image: ur5barcelona, 
    category: "UR5"
  },
    {
    id: 17,
    name: "UR5 - Manchester City",
    price: "650.000đ",
    image: ur5manchestercity, 
    category: "UR5"
  },
   {
    id: 18,
    name: "UR5 - AC Milan",
    price: "650.000đ",
    image: ur5acmilan, 
    category: "UR5"
  },
   {
    id: 19,
    name: "UR5 - Bayern Munich",
    price: "650.000đ",
    image: ur5bayern, 
    category: "UR5"
  },
  

  // ==========================================
  // LUỒNG 3: BỘ UR1
  // ==========================================
{
    id: 20,
    name: "AC Milan + C1 Seria",
    price: "250.000đ",
    image: ur1acmilanc1seria,
    category: "UR1"
  },
  {
    id: 21,
    name: "AC Milan + C1",
    price: "250.000đ",
    image: ur1acmilanc1,
    category: "UR1"
  },
  {
    id: 22,
    name: "AC Milan + SPC",
    price: "250.000đ",
    image: ur1acmilanspc,
    category: "UR1"
  },
  {
    id: 23,
    name: "Argentina + WC",
    price: "250.000đ",
    image: ur1argentinawc,
    category: "UR1"
  },
  {
    id: 24,
    name: "Arsenal + NHA",
    price: "250.000đ",
    image: ur1arsenalnha,
    category: "UR1"
  },
  {
    id: 25,
    name: "Bayern + C1",
    price: "250.000đ",
    image: ur1bayernc1,
    category: "UR1"
  },
  {
    id: 26,
    name: "Chelsea + C1",
    price: "250.000đ",
    image: ur1chelseac1,
    category: "UR1"
  },
  {
    id: 27,
    name: "Chelsea + C2",
    price: "250.000đ",
    image: ur1chelseac2,
    category: "UR1"
  },
  {
    id: 28,
    name: "Chelsea + C3",
    price: "250.000đ",
    image: ur1chelseac3,
    category: "UR1"
  },
  {
    id: 29,
    name: "Chelsea + FA",
    price: "250.000đ",
    image: ur1chelseafa,
    category: "UR1"
  },
  {
    id: 30,
    name: "Chelsea + Fifa Club 2025",
    price: "250.000đ",
    image: ur1chelseafifaclub2025,
    category: "UR1"
  },
  {
    id: 31,
    name: "Chelsea + NHA",
    price: "250.000đ",
    image: ur1chelseanha,
    category: "UR1"
  },
  {
    id: 32,
    name: "Chelsea + SPC",
    price: "250.000đ",
    image: ur1chelseaspc,
    category: "UR1"
  },
  {
    id: 33,
    name: "Germany + WC",
    price: "250.000đ",
    image: ur1germanywc,
    category: "UR1"
  },
  {
    id: 34,
    name: "Inter Milan + C1",
    price: "250.000đ",
    image: ur1intermilanc1,
    category: "UR1"
  },
  {
    id: 35,
    name: "Manchester City + NHA",
    price: "250.000đ",
    image: ur1mancchestercitynha,
    category: "UR1"
  },
  {
    id: 36,
    name: "Manchester City + C1",
    price: "250.000đ",
    image: ur1manchestercityc1,
    category: "UR1"
  },
  {
    id: 37,
    name: "Manchester United + C1",
    price: "250.000đ",
    image: ur1manchesterunitedc1,
    category: "UR1"
  },
  {
    id: 38,
    name: "Manchester United + FA",
    price: "250.000đ",
    image: ur1manchesterunitedfa,
    category: "UR1"
  },
  {
    id: 39,
    name: "Manchester United + NHA",
    price: "250.000đ",
    image: ur1manchesterunitednha,
    category: "UR1"
  },
  {
    id: 40,
    name: "Manchester United + SPC",
    price: "250.000đ",
    image: ur1manchesterunitedspc,
    category: "UR1"
  },
  {
    id: 41,
    name: "Portugal + Euro",
    price: "250.000đ",
    image: ur1portugaleuro,
    category: "UR1"
  },
  {
    id: 42,
    name: "Portugal + Nations",
    price: "250.000đ",
    image: ur1portugalnations,
    category: "UR1"
  },
  {
    id: 43,
    name: "Tottenham + C2",
    price: "250.000đ",
    image: ur1tottenhamc2,
    category: "UR1"
  },  

  // ==========================================
  // LUỒNG 4: CÚP LẺ
  // ==========================================
  {
    id: 69,
    name: "Fifa Club WC 2025",
    price: "350.000đ",
    image: fifaclub2025,
    category: "Cúp lẻ"
  },
  {
    id: 70,
    name: "Fifa Club WC",
    price: "250.000đ",
    image: fifaclubwc,
    category: "Cúp lẻ"
  },
  {
    id: 64,
    name: "Conference League",
    price: "250.000đ",
    image: c3,
    category: "Cúp lẻ"
  },
  {
    id: 74,
    name: "FA Community Shield",
    price: "250.000đ",
    image: sieucupanh,
    category: "Cúp lẻ"
  },
  {
    id: 78,
    name: "Winner's Cup",
    price: "250.000đ",
    image: winnerscup,
    category: "Cúp lẻ"
  },
    {
    id: 75,
    name: "Super Copa",
    price: "350.000đ",
    image: supercopa,
    category: "Cúp lẻ"
  },
    {
    id: 61,
    name: "Champions League",
    price: "150.000đ",
    image: c1_1,
    category: "Cúp lẻ"
  },
    {
    id: 73,
    name: "Premier League",
    price: "150.000đ",
    image: premierluegue,
    category: "Cúp lẻ"
  },
    {
    id: 77,
    name: "Fifa World Cup",
    price: "150.000đ",
    image: wc,
    category: "Cúp lẻ"
  },
    {
    id: 66,
    name: "Cúp Nhà Vua",
    price: "150.000đ",
    image: cupnhavua,
    category: "Cúp lẻ"
  },
  {
    id: 44,
    name: "Balon D'or",
    price: "150.000đ",
    image: bongvang,
    category: "Cúp lẻ"
  },
  {
    id: 63,
    name: "Europa League",
    price: "150.000đ",
    image: c2,
    category: "Cúp lẻ"
  },
  {
    id: 65,
    name: "Carabao",
    price: "150.000đ",
    image: carabao,
    category: "Cúp lẻ"
  },
  {
    id: 67,
    name: "Euro",
    price: "150.000đ",
    image: euro,
    category: "Cúp lẻ"
  },
  {
    id: 68,
    name: "FA Cup",
    price: "150.000đ",
    image: facup,
    category: "Cúp lẻ"
  },
  {
    id: 71,
    name: "Laliga",
    price: "150.000đ",
    image: laliga,
    category: "Cúp lẻ"
  },
  {
    id: 72,
    name: "Nations League",
    price: "150.000đ",
    image: nations,
    category: "Cúp lẻ"
  },
  {
    id: 76,
    name: "Super Cup",
    price: "150.000đ",
    image: suppercup,
    category: "Cúp lẻ"
  },
  
];