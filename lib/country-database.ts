export interface Country {
  id: string;
  name: string;
  code: string;
  flagUrl: string;
  region: string;
  capital: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const countries: Country[] = [
  {
    id: "afghanistan",
    name: "Afghanistan",
    code: "AF",
    flagUrl: "https://flagcdn.com/w320/af.png",
    region: "Asia",
    capital: "Kabul",
    population: 40218234,
    coordinates: { lat: 33.9391, lng: 67.7100 }
  },
  {
    id: "albania",
    name: "Albania",
    code: "AL",
    flagUrl: "https://flagcdn.com/w320/al.png",
    region: "Europe",
    capital: "Tirana",
    population: 2837743,
    coordinates: { lat: 41.1533, lng: 20.1683 }
  },
  {
    id: "algeria",
    name: "Algeria",
    code: "DZ",
    flagUrl: "https://flagcdn.com/w320/dz.png",
    region: "Africa",
    capital: "Algiers",
    population: 44616624,
    coordinates: { lat: 28.0339, lng: 1.6596 }
  },
  {
    id: "andorra",
    name: "Andorra",
    code: "AD",
    flagUrl: "https://flagcdn.com/w320/ad.png",
    region: "Europe",
    capital: "Andorra la Vella",
    population: 77265,
    coordinates: { lat: 42.5, lng: 1.5 }
  },
  {
    id: "angola",
    name: "Angola",
    code: "AO",
    flagUrl: "https://flagcdn.com/w320/ao.png",
    region: "Africa",
    capital: "Luanda",
    population: 32866268,
    coordinates: { lat: -11.2027, lng: 17.8739 }
  },
  {
    id: "antigua-and-barbuda",
    name: "Antigua and Barbuda",
    code: "AG",
    flagUrl: "https://flagcdn.com/w320/ag.png",
    region: "Americas",
    capital: "Saint John's",
    population: 97928,
    coordinates: { lat: 17.0608, lng: -61.7964 }
  },
  {
    id: "argentina",
    name: "Argentina",
    code: "AR",
    flagUrl: "https://flagcdn.com/w320/ar.png",
    region: "Americas",
    capital: "Buenos Aires",
    population: 45376763,
    coordinates: { lat: -38.4161, lng: -63.6167 }
  },
  {
    id: "armenia",
    name: "Armenia",
    code: "AM",
    flagUrl: "https://flagcdn.com/w320/am.png",
    region: "Asia",
    capital: "Yerevan",
    population: 2963234,
    coordinates: { lat: 40.0691, lng: 45.0382 }
  },
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flagUrl: "https://flagcdn.com/w320/au.png",
    region: "Oceania",
    capital: "Canberra",
    population: 25687041,
    coordinates: { lat: -25.2744, lng: 133.7751 }
  },
  {
    id: "austria",
    name: "Austria",
    code: "AT",
    flagUrl: "https://flagcdn.com/w320/at.png",
    region: "Europe",
    capital: "Vienna",
    population: 9006398,
    coordinates: { lat: 47.5162, lng: 14.5501 }
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    code: "AZ",
    flagUrl: "https://flagcdn.com/w320/az.png",
    region: "Asia",
    capital: "Baku",
    population: 10110116,
    coordinates: { lat: 40.1431, lng: 47.5769 }
  },
  {
    id: "bahamas",
    name: "Bahamas",
    code: "BS",
    flagUrl: "https://flagcdn.com/w320/bs.png",
    region: "Americas",
    capital: "Nassau",
    population: 393248,
    coordinates: { lat: 24.25, lng: -76.0 }
  },
  {
    id: "bahrain",
    name: "Bahrain",
    code: "BH",
    flagUrl: "https://flagcdn.com/w320/bh.png",
    region: "Asia",
    capital: "Manama",
    population: 1701583,
    coordinates: { lat: 26.0667, lng: 50.5577 }
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    code: "BD",
    flagUrl: "https://flagcdn.com/w320/bd.png",
    region: "Asia",
    capital: "Dhaka",
    population: 164689383,
    coordinates: { lat: 23.6850, lng: 90.3563 }
  },
  {
    id: "barbados",
    name: "Barbados",
    code: "BB",
    flagUrl: "https://flagcdn.com/w320/bb.png",
    region: "Americas",
    capital: "Bridgetown",
    population: 287371,
    coordinates: { lat: 13.1939, lng: -59.5432 }
  },
  {
    id: "belarus",
    name: "Belarus",
    code: "BY",
    flagUrl: "https://flagcdn.com/w320/by.png",
    region: "Europe",
    capital: "Minsk",
    population: 9398861,
    coordinates: { lat: 53.7098, lng: 27.9534 }
  },
  {
    id: "belgium",
    name: "Belgium",
    code: "BE",
    flagUrl: "https://flagcdn.com/w320/be.png",
    region: "Europe",
    capital: "Brussels",
    population: 11555997,
    coordinates: { lat: 50.8503, lng: 4.3517 }
  },
  {
    id: "belize",
    name: "Belize",
    code: "BZ",
    flagUrl: "https://flagcdn.com/w320/bz.png",
    region: "Americas",
    capital: "Belmopan",
    population: 397628,
    coordinates: { lat: 17.1899, lng: -88.4976 }
  },
  {
    id: "benin",
    name: "Benin",
    code: "BJ",
    flagUrl: "https://flagcdn.com/w320/bj.png",
    region: "Africa",
    capital: "Porto-Novo",
    population: 12123198,
    coordinates: { lat: 9.3077, lng: 2.3158 }
  },
  {
    id: "bhutan",
    name: "Bhutan",
    code: "BT",
    flagUrl: "https://flagcdn.com/w320/bt.png",
    region: "Asia",
    capital: "Thimphu",
    population: 771608,
    coordinates: { lat: 27.5142, lng: 90.4336 }
  },
  {
    id: "bolivia",
    name: "Bolivia",
    code: "BO",
    flagUrl: "https://flagcdn.com/w320/bo.png",
    region: "Americas",
    capital: "Sucre",
    population: 11673029,
    coordinates: { lat: -16.2902, lng: -63.5887 }
  },
  {
    id: "bosnia-and-herzegovina",
    name: "Bosnia and Herzegovina",
    code: "BA",
    flagUrl: "https://flagcdn.com/w320/ba.png",
    region: "Europe",
    capital: "Sarajevo",
    population: 3280815,
    coordinates: { lat: 43.9159, lng: 17.6791 }
  },
  {
    id: "botswana",
    name: "Botswana",
    code: "BW",
    flagUrl: "https://flagcdn.com/w320/bw.png",
    region: "Africa",
    capital: "Gaborone",
    population: 2351627,
    coordinates: { lat: -22.3285, lng: 24.6849 }
  },
  {
    id: "brazil",
    name: "Brazil",
    code: "BR",
    flagUrl: "https://flagcdn.com/w320/br.png",
    region: "Americas",
    capital: "Brasília",
    population: 212559409,
    coordinates: { lat: -14.2350, lng: -51.9253 }
  },
  {
    id: "brunei",
    name: "Brunei",
    code: "BN",
    flagUrl: "https://flagcdn.com/w320/bn.png",
    region: "Asia",
    capital: "Bandar Seri Begawan",
    population: 437483,
    coordinates: { lat: 4.5353, lng: 114.7277 }
  },
  {
    id: "bulgaria",
    name: "Bulgaria",
    code: "BG",
    flagUrl: "https://flagcdn.com/w320/bg.png",
    region: "Europe",
    capital: "Sofia",
    population: 6927288,
    coordinates: { lat: 42.7339, lng: 25.4858 }
  },
  {
    id: "burkina-faso",
    name: "Burkina Faso",
    code: "BF",
    flagUrl: "https://flagcdn.com/w320/bf.png",
    region: "Africa",
    capital: "Ouagadougou",
    population: 20903278,
    coordinates: { lat: 12.2383, lng: -1.5616 }
  },
  {
    id: "burundi",
    name: "Burundi",
    code: "BI",
    flagUrl: "https://flagcdn.com/w320/bi.png",
    region: "Africa",
    capital: "Gitega",
    population: 11890781,
    coordinates: { lat: -3.3731, lng: 29.9189 }
  },
  {
    id: "cambodia",
    name: "Cambodia",
    code: "KH",
    flagUrl: "https://flagcdn.com/w320/kh.png",
    region: "Asia",
    capital: "Phnom Penh",
    population: 16718965,
    coordinates: { lat: 12.5657, lng: 104.9910 }
  },
  {
    id: "cameroon",
    name: "Cameroon",
    code: "CM",
    flagUrl: "https://flagcdn.com/w320/cm.png",
    region: "Africa",
    capital: "Yaoundé",
    population: 26545863,
    coordinates: { lat: 7.3697, lng: 12.3547 }
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flagUrl: "https://flagcdn.com/w320/ca.png",
    region: "Americas",
    capital: "Ottawa",
    population: 37742154,
    coordinates: { lat: 56.1304, lng: -106.3468 }
  },
  {
    id: "cape-verde",
    name: "Cape Verde",
    code: "CV",
    flagUrl: "https://flagcdn.com/w320/cv.png",
    region: "Africa",
    capital: "Praia",
    population: 555988,
    coordinates: { lat: 16.0021, lng: -24.0132 }
  },
  {
    id: "central-african-republic",
    name: "Central African Republic",
    code: "CF",
    flagUrl: "https://flagcdn.com/w320/cf.png",
    region: "Africa",
    capital: "Bangui",
    population: 4829764,
    coordinates: { lat: 6.6111, lng: 20.9394 }
  },
  {
    id: "chad",
    name: "Chad",
    code: "TD",
    flagUrl: "https://flagcdn.com/w320/td.png",
    region: "Africa",
    capital: "N'Djamena",
    population: 16425859,
    coordinates: { lat: 15.4542, lng: 18.7322 }
  },
  {
    id: "chile",
    name: "Chile",
    code: "CL",
    flagUrl: "https://flagcdn.com/w320/cl.png",
    region: "Americas",
    capital: "Santiago",
    population: 19116209,
    coordinates: { lat: -35.6751, lng: -71.5430 }
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    flagUrl: "https://flagcdn.com/w320/cn.png",
    region: "Asia",
    capital: "Beijing",
    population: 1402112000,
    coordinates: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: "colombia",
    name: "Colombia",
    code: "CO",
    flagUrl: "https://flagcdn.com/w320/co.png",
    region: "Americas",
    capital: "Bogotá",
    population: 50882884,
    coordinates: { lat: 4.5709, lng: -74.2973 }
  },
  {
    id: "comoros",
    name: "Comoros",
    code: "KM",
    flagUrl: "https://flagcdn.com/w320/km.png",
    region: "Africa",
    capital: "Moroni",
    population: 869601,
    coordinates: { lat: -11.6455, lng: 43.3333 }
  },
  {
    id: "congo",
    name: "Congo",
    code: "CG",
    flagUrl: "https://flagcdn.com/w320/cg.png",
    region: "Africa",
    capital: "Brazzaville",
    population: 5657000,
    coordinates: { lat: -0.2280, lng: 15.8277 }
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    code: "CR",
    flagUrl: "https://flagcdn.com/w320/cr.png",
    region: "Americas",
    capital: "San José",
    population: 5094114,
    coordinates: { lat: 9.9281, lng: -84.0907 }
  },
  {
    id: "croatia",
    name: "Croatia",
    code: "HR",
    flagUrl: "https://flagcdn.com/w320/hr.png",
    region: "Europe",
    capital: "Zagreb",
    population: 4047200,
    coordinates: { lat: 45.1, lng: 15.2 }
  },
  {
    id: "cuba",
    name: "Cuba",
    code: "CU",
    flagUrl: "https://flagcdn.com/w320/cu.png",
    region: "Americas",
    capital: "Havana",
    population: 11326616,
    coordinates: { lat: 21.5218, lng: -77.7812 }
  },
  {
    id: "cyprus",
    name: "Cyprus",
    code: "CY",
    flagUrl: "https://flagcdn.com/w320/cy.png",
    region: "Europe",
    capital: "Nicosia",
    population: 1207361,
    coordinates: { lat: 35.1264, lng: 33.4299 }
  },
  {
    id: "czech-republic",
    name: "Czech Republic",
    code: "CZ",
    flagUrl: "https://flagcdn.com/w320/cz.png",
    region: "Europe",
    capital: "Prague",
    population: 10698896,
    coordinates: { lat: 49.8175, lng: 15.4730 }
  },
  {
    id: "denmark",
    name: "Denmark",
    code: "DK",
    flagUrl: "https://flagcdn.com/w320/dk.png",
    region: "Europe",
    capital: "Copenhagen",
    population: 5930000,
    coordinates: { lat: 56.2639, lng: 9.5018 }
  },
  {
    id: "egypt",
    name: "Egypt",
    code: "EG",
    flagUrl: "https://flagcdn.com/w320/eg.png",
    region: "Africa",
    capital: "Cairo",
    population: 112700000,
    coordinates: { lat: 26.8206, lng: 30.8025 }
  },
  {
    id: "ecuador",
    name: "Ecuador",
    code: "EC",
    flagUrl: "https://flagcdn.com/w320/ec.png",
    region: "Americas",
    capital: "Quito",
    population: 17800000,
    coordinates: { lat: -1.8312, lng: -78.1834 }
  },
  {
    id: "el-salvador",
    name: "El Salvador",
    code: "SV",
    flagUrl: "https://flagcdn.com/w320/sv.png",
    region: "Americas",
    capital: "San Salvador",
    population: 6350000,
    coordinates: { lat: 13.7942, lng: -88.8965 }
  },
  {
    id: "equatorial-guinea",
    name: "Equatorial Guinea",
    code: "GQ",
    flagUrl: "https://flagcdn.com/w320/gq.png",
    region: "Africa",
    capital: "Malabo",
    population: 1700000,
    coordinates: { lat: 1.6508, lng: 10.2679 }
  },
  {
    id: "eritrea",
    name: "Eritrea",
    code: "ER",
    flagUrl: "https://flagcdn.com/w320/er.png",
    region: "Africa",
    capital: "Asmara",
    population: 3607000,
    coordinates: { lat: 15.1794, lng: 39.7823 }
  },
  {
    id: "estonia",
    name: "Estonia",
    code: "EE",
    flagUrl: "https://flagcdn.com/w320/ee.png",
    region: "Europe",
    capital: "Tallinn",
    population: 1330000,
    coordinates: { lat: 58.5953, lng: 25.0136 }
  },
  {
    id: "eswatini",
    name: "Eswatini",
    code: "SZ",
    flagUrl: "https://flagcdn.com/w320/sz.png",
    region: "Africa",
    capital: "Mbabane",
    population: 1210000,
    coordinates: { lat: -26.5225, lng: 31.4659 }
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    code: "ET",
    flagUrl: "https://flagcdn.com/w320/et.png",
    region: "Africa",
    capital: "Addis Ababa",
    population: 126500000,
    coordinates: { lat: 9.145, lng: 40.4897 }
  },
  {
    id: "fiji",
    name: "Fiji",
    code: "FJ",
    flagUrl: "https://flagcdn.com/w320/fj.png",
    region: "Oceania",
    capital: "Suva",
    population: 936000,
    coordinates: { lat: -17.7134, lng: 178.0650 }
  },
  {
    id: "finland",
    name: "Finland",
    code: "FI",
    flagUrl: "https://flagcdn.com/w320/fi.png",
    region: "Europe",
    capital: "Helsinki",
    population: 5563000,
    coordinates: { lat: 61.9241, lng: 25.7482 }
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flagUrl: "https://flagcdn.com/w320/fr.png",
    region: "Europe",
    capital: "Paris",
    population: 67750000,
    coordinates: { lat: 46.2276, lng: 2.2137 }
  },
  {
    id: "gabon",
    name: "Gabon",
    code: "GA",
    flagUrl: "https://flagcdn.com/w320/ga.png",
    region: "Africa",
    capital: "Libreville",
    population: 2410000,
    coordinates: { lat: -0.8037, lng: 11.6094 }
  },
  {
    id: "gambia",
    name: "Gambia",
    code: "GM",
    flagUrl: "https://flagcdn.com/w320/gm.png",
    region: "Africa",
    capital: "Banjul",
    population: 2780000,
    coordinates: { lat: 13.4432, lng: -15.3101 }
  },
  {
    id: "georgia",
    name: "Georgia",
    code: "GE",
    flagUrl: "https://flagcdn.com/w320/ge.png",
    region: "Asia",
    capital: "Tbilisi",
    population: 3806000,
    coordinates: { lat: 42.3154, lng: 43.3569 }
  },
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flagUrl: "https://flagcdn.com/w320/de.png",
    region: "Europe",
    capital: "Berlin",
    population: 83130000,
    coordinates: { lat: 51.1657, lng: 10.4515 }
  },
  {
    id: "ghana",
    name: "Ghana",
    code: "GH",
    flagUrl: "https://flagcdn.com/w320/gh.png",
    region: "Africa",
    capital: "Accra",
    population: 34570000,
    coordinates: { lat: 7.9465, lng: -1.0232 }
  },
  {
    id: "greece",
    name: "Greece",
    code: "GR",
    flagUrl: "https://flagcdn.com/w320/gr.png",
    region: "Europe",
    capital: "Athens",
    population: 10430000,
    coordinates: { lat: 39.0742, lng: 21.8243 }
  },
  {
    id: "grenada",
    name: "Grenada",
    code: "GD",
    flagUrl: "https://flagcdn.com/w320/gd.png",
    region: "Americas",
    capital: "St. George's",
    population: 126000,
    coordinates: { lat: 12.1165, lng: -61.6790 }
  },
  {
    id: "guatemala",
    name: "Guatemala",
    code: "GT",
    flagUrl: "https://flagcdn.com/w320/gt.png",
    region: "Americas",
    capital: "Guatemala City",
    population: 18600000,
    coordinates: { lat: 15.7835, lng: -90.2308 }
  },
  {
    id: "guinea",
    name: "Guinea",
    code: "GN",
    flagUrl: "https://flagcdn.com/w320/gn.png",
    region: "Africa",
    capital: "Conakry",
    population: 14590000,
    coordinates: { lat: 9.9456, lng: -9.6966 }
  },
  {
    id: "guinea-bissau",
    name: "Guinea-Bissau",
    code: "GW",
    flagUrl: "https://flagcdn.com/w320/gw.png",
    region: "Africa",
    capital: "Bissau",
    population: 2146000,
    coordinates: { lat: 11.8037, lng: -15.1804 }
  },
  {
    id: "guyana",
    name: "Guyana",
    code: "GY",
    flagUrl: "https://flagcdn.com/w320/gy.png",
    region: "Americas",
    capital: "Georgetown",
    population: 813000,
    coordinates: { lat: 4.8604, lng: -58.9302 }
  },
  {
    id: "haiti",
    name: "Haiti",
    code: "HT",
    flagUrl: "https://flagcdn.com/w320/ht.png",
    region: "Americas",
    capital: "Port-au-Prince",
    population: 11500000,
    coordinates: { lat: 18.9712, lng: -72.2852 }
  },
  {
    id: "honduras",
    name: "Honduras",
    code: "HN",
    flagUrl: "https://flagcdn.com/w320/hn.png",
    region: "Americas",
    capital: "Tegucigalpa",
    population: 10670000,
    coordinates: { lat: 15.1999, lng: -86.2419 }
  },
  {
    id: "hungary",
    name: "Hungary",
    code: "HU",
    flagUrl: "https://flagcdn.com/w320/hu.png",
    region: "Europe",
    capital: "Budapest",
    population: 9730000,
    coordinates: { lat: 47.1625, lng: 19.5033 }
  },
  {
    id: "iceland",
    name: "Iceland",
    code: "IS",
    flagUrl: "https://flagcdn.com/w320/is.png",
    region: "Europe",
    capital: "Reykjavik",
    population: 387000,
    coordinates: { lat: 64.9631, lng: -19.0208 }
  },
  {
    id: "india",
    name: "India",
    code: "IN",
    flagUrl: "https://flagcdn.com/w320/in.png",
    region: "Asia",
    capital: "New Delhi",
    population: 1428000000,
    coordinates: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: "indonesia",
    name: "Indonesia",
    code: "ID",
    flagUrl: "https://flagcdn.com/w320/id.png",
    region: "Asia",
    capital: "Jakarta",
    population: 277500000,
    coordinates: { lat: -0.7893, lng: 113.9213 }
  },
  {
    id: "iran",
    name: "Iran",
    code: "IR",
    flagUrl: "https://flagcdn.com/w320/ir.png",
    region: "Asia",
    capital: "Tehran",
    population: 89100000,
    coordinates: { lat: 32.4279, lng: 53.6880 }
  },
  {
    id: "iraq",
    name: "Iraq",
    code: "IQ",
    flagUrl: "https://flagcdn.com/w320/iq.png",
    region: "Asia",
    capital: "Baghdad",
    population: 45570000,
    coordinates: { lat: 33.2232, lng: 43.6793 }
  },
  {
    id: "ireland",
    name: "Ireland",
    code: "IE",
    flagUrl: "https://flagcdn.com/w320/ie.png",
    region: "Europe",
    capital: "Dublin",
    population: 5308000,
    coordinates: { lat: 53.4129, lng: -8.2439 }
  },
  {
    id: "israel",
    name: "Israel",
    code: "IL",
    flagUrl: "https://flagcdn.com/w320/il.png",
    region: "Asia",
    capital: "Jerusalem",
    population: 9610000,
    coordinates: { lat: 31.0461, lng: 34.8516 }
  },
  {
    id: "italy",
    name: "Italy",
    code: "IT",
    flagUrl: "https://flagcdn.com/w320/it.png",
    region: "Europe",
    capital: "Rome",
    population: 58850000,
    coordinates: { lat: 41.8719, lng: 12.5674 }
  },
  {
    id: "jamaica",
    name: "Jamaica",
    code: "JM",
    flagUrl: "https://flagcdn.com/w320/jm.png",
    region: "Americas",
    capital: "Kingston",
    population: 2820000,
    coordinates: { lat: 18.1096, lng: -77.2975 }
  },
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flagUrl: "https://flagcdn.com/w320/jp.png",
    region: "Asia",
    capital: "Tokyo",
    population: 123300000,
    coordinates: { lat: 36.2048, lng: 138.2529 }
  },
  {
    id: "jordan",
    name: "Jordan",
    code: "JO",
    flagUrl: "https://flagcdn.com/w320/jo.png",
    region: "Asia",
    capital: "Amman",
    population: 11360000,
    coordinates: { lat: 30.5852, lng: 36.2384 }
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    code: "KZ",
    flagUrl: "https://flagcdn.com/w320/kz.png",
    region: "Asia",
    capital: "Astana",
    population: 19600000,
    coordinates: { lat: 48.0196, lng: 66.9237 }
  },
  {
    id: "kenya",
    name: "Kenya",
    code: "KE",
    flagUrl: "https://flagcdn.com/w320/ke.png",
    region: "Africa",
    capital: "Nairobi",
    population: 55500000,
    coordinates: { lat: -0.0236, lng: 37.9062 }
  },
  {
    id: "kiribati",
    name: "Kiribati",
    code: "KI",
    flagUrl: "https://flagcdn.com/w320/ki.png",
    region: "Oceania",
    capital: "Tarawa",
    population: 134000,
    coordinates: { lat: -3.3704, lng: -168.7340 }
  },
  {
    id: "kuwait",
    name: "Kuwait",
    code: "KW",
    flagUrl: "https://flagcdn.com/w320/kw.png",
    region: "Asia",
    capital: "Kuwait City",
    population: 4400000,
    coordinates: { lat: 29.3117, lng: 47.4818 }
  },
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    code: "KG",
    flagUrl: "https://flagcdn.com/w320/kg.png",
    region: "Asia",
    capital: "Bishkek",
    population: 6700000,
    coordinates: { lat: 41.2044, lng: 74.7661 }
  },
  {
    id: "laos",
    name: "Laos",
    code: "LA",
    flagUrl: "https://flagcdn.com/w320/la.png",
    region: "Asia",
    capital: "Vientiane",
    population: 7500000,
    coordinates: { lat: 19.8563, lng: 102.4955 }
  },
  {
    id: "latvia",
    name: "Latvia",
    code: "LV",
    flagUrl: "https://flagcdn.com/w320/lv.png",
    region: "Europe",
    capital: "Riga",
    population: 1900000,
    coordinates: { lat: 56.8796, lng: 24.6032 }
  },
  {
    id: "lebanon",
    name: "Lebanon",
    code: "LB",
    flagUrl: "https://flagcdn.com/w320/lb.png",
    region: "Asia",
    capital: "Beirut",
    population: 6800000,
    coordinates: { lat: 33.8547, lng: 35.8623 }
  },
  {
    id: "lesotho",
    name: "Lesotho",
    code: "LS",
    flagUrl: "https://flagcdn.com/w320/ls.png",
    region: "Africa",
    capital: "Maseru",
    population: 2200000,
    coordinates: { lat: -29.6099, lng: 28.2336 }
  },
  {
    id: "liberia",
    name: "Liberia",
    code: "LR",
    flagUrl: "https://flagcdn.com/w320/lr.png",
    region: "Africa",
    capital: "Monrovia",
    population: 5300000,
    coordinates: { lat: 6.4281, lng: -9.4295 }
  },
  {
    id: "libya",
    name: "Libya",
    code: "LY",
    flagUrl: "https://flagcdn.com/w320/ly.png",
    region: "Africa",
    capital: "Tripoli",
    population: 6900000,
    coordinates: { lat: 26.3351, lng: 17.2283 }
  },
  {
    id: "liechtenstein",
    name: "Liechtenstein",
    code: "LI",
    flagUrl: "https://flagcdn.com/w320/li.png",
    region: "Europe",
    capital: "Vaduz",
    population: 39000,
    coordinates: { lat: 47.166, lng: 9.5554 }
  },
  {
    id: "lithuania",
    name: "Lithuania",
    code: "LT",
    flagUrl: "https://flagcdn.com/w320/lt.png",
    region: "Europe",
    capital: "Vilnius",
    population: 2800000,
    coordinates: { lat: 55.1694, lng: 23.8813 }
  },
  {
    id: "luxembourg",
    name: "Luxembourg",
    code: "LU",
    flagUrl: "https://flagcdn.com/w320/lu.png",
    region: "Europe",
    capital: "Luxembourg City",
    population: 640000,
    coordinates: { lat: 49.8153, lng: 6.1296 }
  },
  {
    id: "madagascar",
    name: "Madagascar",
    code: "MG",
    flagUrl: "https://flagcdn.com/w320/mg.png",
    region: "Africa",
    capital: "Antananarivo",
    population: 28000000,
    coordinates: { lat: -18.7669, lng: 46.8691 }
  },
  {
    id: "malawi",
    name: "Malawi",
    code: "MW",
    flagUrl: "https://flagcdn.com/w320/mw.png",
    region: "Africa",
    capital: "Lilongwe",
    population: 20000000,
    coordinates: { lat: -13.2543, lng: 34.3015 }
  },
  {
    id: "malaysia",
    name: "Malaysia",
    code: "MY",
    flagUrl: "https://flagcdn.com/w320/my.png",
    region: "Asia",
    capital: "Kuala Lumpur",
    population: 33000000,
    coordinates: { lat: 4.2105, lng: 108.9758 }
  },
  {
    id: "maldives",
    name: "Maldives",
    code: "MV",
    flagUrl: "https://flagcdn.com/w320/mv.png",
    region: "Asia",
    capital: "Malé",
    population: 540000,
    coordinates: { lat: 3.2028, lng: 73.2207 }
  },
  {
    id: "mali",
    name: "Mali",
    code: "ML",
    flagUrl: "https://flagcdn.com/w320/ml.png",
    region: "Africa",
    capital: "Bamako",
    population: 21000000,
    coordinates: { lat: 17.5707, lng: -3.9962 }
  },
  {
    id: "malta",
    name: "Malta",
    code: "MT",
    flagUrl: "https://flagcdn.com/w320/mt.png",
    region: "Europe",
    capital: "Valletta",
    population: 520000,
    coordinates: { lat: 35.9375, lng: 14.3754 }
  },
  {
    id: "marshall-islands",
    name: "Marshall Islands",
    code: "MH",
    flagUrl: "https://flagcdn.com/w320/mh.png",
    region: "Oceania",
    capital: "Majuro",
    population: 59000,
    coordinates: { lat: 7.1315, lng: 171.1845 }
  },
  {
    id: "mauritania",
    name: "Mauritania",
    code: "MR",
    flagUrl: "https://flagcdn.com/w320/mr.png",
    region: "Africa",
    capital: "Nouakchott",
    population: 4800000,
    coordinates: { lat: 21.0079, lng: -10.9408 }
  },
  {
    id: "mauritius",
    name: "Mauritius",
    code: "MU",
    flagUrl: "https://flagcdn.com/w320/mu.png",
    region: "Africa",
    capital: "Port Louis",
    population: 1300000,
    coordinates: { lat: -20.3484, lng: 57.5522 }
  },
  {
    id: "mexico",
    name: "Mexico",
    code: "MX",
    flagUrl: "https://flagcdn.com/w320/mx.png",
    region: "Americas",
    capital: "Mexico City",
    population: 130000000,
    coordinates: { lat: 23.6345, lng: -102.5528 }
  },
  {
    id: "micronesia",
    name: "Micronesia",
    code: "FM",
    flagUrl: "https://flagcdn.com/w320/fm.png",
    region: "Oceania",
    capital: "Palikir",
    population: 115000,
    coordinates: { lat: 7.4256, lng: 150.5508 }
  },
  {
    id: "moldova",
    name: "Moldova",
    code: "MD",
    flagUrl: "https://flagcdn.com/w320/md.png",
    region: "Europe",
    capital: "Chișinău",
    population: 2600000,
    coordinates: { lat: 47.4116, lng: 28.3699 }
  },
  {
    id: "monaco",
    name: "Monaco",
    code: "MC",
    flagUrl: "https://flagcdn.com/w320/mc.png",
    region: "Europe",
    capital: "Monaco City",
    population: 39000,
    coordinates: { lat: 43.7384, lng: 7.4246 }
  },
  {
    id: "mongolia",
    name: "Mongolia",
    code: "MN",
    flagUrl: "https://flagcdn.com/w320/mn.png",
    region: "Asia",
    capital: "Ulaanbaatar",
    population: 3300000,
    coordinates: { lat: 46.8625, lng: 103.8467 }
  },
  {
    id: "montenegro",
    name: "Montenegro",
    code: "ME",
    flagUrl: "https://flagcdn.com/w320/me.png",
    region: "Europe",
    capital: "Podgorica",
    population: 620000,
    coordinates: { lat: 42.7087, lng: 19.3744 }
  },
  {
    id: "morocco",
    name: "Morocco",
    code: "MA",
    flagUrl: "https://flagcdn.com/w320/ma.png",
    region: "Africa",
    capital: "Rabat",
    population: 37000000,
    coordinates: { lat: 31.7917, lng: -7.0926 }
  },
  {
    id: "mozambique",
    name: "Mozambique",
    code: "MZ",
    flagUrl: "https://flagcdn.com/w320/mz.png",
    region: "Africa",
    capital: "Maputo",
    population: 32000000,
    coordinates: { lat: -18.6657, lng: 35.5296 }
  },
  {
    id: "myanmar",
    name: "Myanmar",
    code: "MM",
    flagUrl: "https://flagcdn.com/w320/mm.png",
    region: "Asia",
    capital: "Naypyidaw",
    population: 55000000,
    coordinates: { lat: 21.9162, lng: 95.9560 }
  },
  {
    id: "namibia",
    name: "Namibia",
    code: "NA",
    flagUrl: "https://flagcdn.com/w320/na.png",
    region: "Africa",
    capital: "Windhoek",
    population: 2600000,
    coordinates: { lat: -22.9576, lng: 18.4904 }
  },
  {
    id: "nauru",
    name: "Nauru",
    code: "NR",
    flagUrl: "https://flagcdn.com/w320/nr.png",
    region: "Oceania",
    capital: "Yaren District",
    population: 13000,
    coordinates: { lat: -0.5228, lng: 166.9315 }
  },
  {
    id: "nepal",
    name: "Nepal",
    code: "NP",
    flagUrl: "https://flagcdn.com/w320/np.png",
    region: "Asia",
    capital: "Kathmandu",
    population: 30000000,
    coordinates: { lat: 28.3949, lng: 84.1240 }
  },
  {
    id: "netherlands",
    name: "Netherlands",
    code: "NL",
    flagUrl: "https://flagcdn.com/w320/nl.png",
    region: "Europe",
    capital: "Amsterdam",
    population: 17500000,
    coordinates: { lat: 52.1326, lng: 5.2913 }
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    flagUrl: "https://flagcdn.com/w320/nz.png",
    region: "Oceania",
    capital: "Wellington",
    population: 5100000,
    coordinates: { lat: -40.9006, lng: 174.8860 }
  },
  {
    id: "nicaragua",
    name: "Nicaragua",
    code: "NI",
    flagUrl: "https://flagcdn.com/w320/ni.png",
    region: "Americas",
    capital: "Managua",
    population: 6800000,
    coordinates: { lat: 12.8654, lng: -85.2072 }
  },
  {
    id: "niger",
    name: "Niger",
    code: "NE",
    flagUrl: "https://flagcdn.com/w320/ne.png",
    region: "Africa",
    capital: "Niamey",
    population: 25000000,
    coordinates: { lat: 17.6078, lng: 8.0817 }
  },
  {
    id: "nigeria",
    name: "Nigeria",
    code: "NG",
    flagUrl: "https://flagcdn.com/w320/ng.png",
    region: "Africa",
    capital: "Abuja",
    population: 220000000,
    coordinates: { lat: 9.0820, lng: 8.6753 }
  },
  {
    id: "north-korea",
    name: "North Korea",
    code: "KP",
    flagUrl: "https://flagcdn.com/w320/kp.png",
    region: "Asia",
    capital: "Pyongyang",
    population: 26000000,
    coordinates: { lat: 40.3399, lng: 127.5101 }
  },
  {
    id: "north-macedonia",
    name: "North Macedonia",
    code: "MK",
    flagUrl: "https://flagcdn.com/w320/mk.png",
    region: "Europe",
    capital: "Skopje",
    population: 2100000,
    coordinates: { lat: 41.6086, lng: 21.7453 }
  },
  {
    id: "norway",
    name: "Norway",
    code: "NO",
    flagUrl: "https://flagcdn.com/w320/no.png",
    region: "Europe",
    capital: "Oslo",
    population: 5400000,
    coordinates: { lat: 60.4720, lng: 8.4689 }
  },
  {
    id: "oman",
    name: "Oman",
    code: "OM",
    flagUrl: "https://flagcdn.com/w320/om.png",
    region: "Asia",
    capital: "Muscat",
    population: 5200000,
    coordinates: { lat: 21.4735, lng: 55.9754 }
  },
  {
    id: "pakistan",
    name: "Pakistan",
    code: "PK",
    flagUrl: "https://flagcdn.com/w320/pk.png",
    region: "Asia",
    capital: "Islamabad",
    population: 230000000,
    coordinates: { lat: 30.3753, lng: 69.3451 }
  },
  {
    id: "palau",
    name: "Palau",
    code: "PW",
    flagUrl: "https://flagcdn.com/w320/pw.png",
    region: "Oceania",
    capital: "Ngerulmud",
    population: 18000,
    coordinates: { lat: 7.5150, lng: 134.5825 }
  },
  {
    id: "panama",
    name: "Panama",
    code: "PA",
    flagUrl: "https://flagcdn.com/w320/pa.png",
    region: "Americas",
    capital: "Panama City",
    population: 4400000,
    coordinates: { lat: 8.5380, lng: -80.7821 }
  },
  {
    id: "papua-new-guinea",
    name: "Papua New Guinea",
    code: "PG",
    flagUrl: "https://flagcdn.com/w320/pg.png",
    region: "Oceania",
    capital: "Port Moresby",
    population: 10000000,
    coordinates: { lat: -6.3150, lng: 143.9555 }
  },
  {
    id: "paraguay",
    name: "Paraguay",
    code: "PY",
    flagUrl: "https://flagcdn.com/w320/py.png",
    region: "Americas",
    capital: "Asunción",
    population: 7200000,
    coordinates: { lat: -23.4425, lng: -58.4438 }
  },
  {
    id: "peru",
    name: "Peru",
    code: "PE",
    flagUrl: "https://flagcdn.com/w320/pe.png",
    region: "Americas",
    capital: "Lima",
    population: 34000000,
    coordinates: { lat: -9.1900, lng: -75.0152 }
  },
  {
    id: "philippines",
    name: "Philippines",
    code: "PH",
    flagUrl: "https://flagcdn.com/w320/ph.png",
    region: "Asia",
    capital: "Manila",
    population: 115000000,
    coordinates: { lat: 12.8797, lng: 121.7740 }
  },
  {
    id: "poland",
    name: "Poland",
    code: "PL",
    flagUrl: "https://flagcdn.com/w320/pl.png",
    region: "Europe",
    capital: "Warsaw",
    population: 38000000,
    coordinates: { lat: 51.9194, lng: 19.1451 }
  },
  {
    id: "portugal",
    name: "Portugal",
    code: "PT",
    flagUrl: "https://flagcdn.com/w320/pt.png",
    region: "Europe",
    capital: "Lisbon",
    population: 10300000,
    coordinates: { lat: 39.3999, lng: -8.2245 }
  },
  {
    id: "qatar",
    name: "Qatar",
    code: "QA",
    flagUrl: "https://flagcdn.com/w320/qa.png",
    region: "Asia",
    capital: "Doha",
    population: 2900000,
    coordinates: { lat: 25.3548, lng: 51.1839 }
  },
  {
    id: "romania",
    name: "Romania",
    code: "RO",
    flagUrl: "https://flagcdn.com/w320/ro.png",
    region: "Europe",
    capital: "Bucharest",
    population: 19000000,
    coordinates: { lat: 45.9432, lng: 24.9668 }
  },
  {
    id: "russia",
    name: "Russia",
    code: "RU",
    flagUrl: "https://flagcdn.com/w320/ru.png",
    region: "Europe",
    capital: "Moscow",
    population: 144000000,
    coordinates: { lat: 61.5240, lng: 105.3188 }
  },
  {
    id: "rwanda",
    name: "Rwanda",
    code: "RW",
    flagUrl: "https://flagcdn.com/w320/rw.png",
    region: "Africa",
    capital: "Kigali",
    population: 14000000,
    coordinates: { lat: -1.9403, lng: 29.8739 }
  },
  {
    id: "saint-kitts-and-nevis",
    name: "Saint Kitts and Nevis",
    code: "KN",
    flagUrl: "https://flagcdn.com/w320/kn.png",
    region: "Americas",
    capital: "Basseterre",
    population: 55000,
    coordinates: { lat: 17.3578, lng: -62.7830 }
  },
  {
    id: "saint-lucia",
    name: "Saint Lucia",
    code: "LC",
    flagUrl: "https://flagcdn.com/w320/lc.png",
    region: "Americas",
    capital: "Castries",
    population: 180000,
    coordinates: { lat: 13.9094, lng: -60.9789 }
  },
  {
    id: "saint-vincent-and-the-grenadines",
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    flagUrl: "https://flagcdn.com/w320/vc.png",
    region: "Americas",
    capital: "Kingstown",
    population: 110000,
    coordinates: { lat: 12.9843, lng: -61.2872 }
  },
  {
    id: "samoa",
    name: "Samoa",
    code: "WS",
    flagUrl: "https://flagcdn.com/w320/ws.png",
    region: "Oceania",
    capital: "Apia",
    population: 200000,
    coordinates: { lat: -13.7590, lng: -172.1046 }
  },
  {
    id: "san-marino",
    name: "San Marino",
    code: "SM",
    flagUrl: "https://flagcdn.com/w320/sm.png",
    region: "Europe",
    capital: "San Marino City",
    population: 34000,
    coordinates: { lat: 43.9424, lng: 12.4578 }
  },
  {
    id: "sao-tome-and-principe",
    name: "São Tomé and Príncipe",
    code: "ST",
    flagUrl: "https://flagcdn.com/w320/st.png",
    region: "Africa",
    capital: "São Tomé",
    population: 220000,
    coordinates: { lat: 0.1864, lng: 6.6131 }
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    flagUrl: "https://flagcdn.com/w320/sa.png",
    region: "Asia",
    capital: "Riyadh",
    population: 36000000,
    coordinates: { lat: 23.8859, lng: 45.0792 }
  },
  {
    id: "senegal",
    name: "Senegal",
    code: "SN",
    flagUrl: "https://flagcdn.com/w320/sn.png",
    region: "Africa",
    capital: "Dakar",
    population: 17000000,
    coordinates: { lat: 14.4974, lng: -14.4524 }
  },
  {
    id: "serbia",
    name: "Serbia",
    code: "RS",
    flagUrl: "https://flagcdn.com/w320/rs.png",
    region: "Europe",
    capital: "Belgrade",
    population: 8700000,
    coordinates: { lat: 44.0165, lng: 21.0059 }
  },
  {
    id: "seychelles",
    name: "Seychelles",
    code: "SC",
    flagUrl: "https://flagcdn.com/w320/sc.png",
    region: "Africa",
    capital: "Victoria",
    population: 100000,
    coordinates: { lat: -4.6796, lng: 55.4920 }
  },
  {
    id: "sierra-leone",
    name: "Sierra Leone",
    code: "SL",
    flagUrl: "https://flagcdn.com/w320/sl.png",
    region: "Africa",
    capital: "Freetown",
    population: 8000000,
    coordinates: { lat: 8.4606, lng: -11.7799 }
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flagUrl: "https://flagcdn.com/w320/sg.png",
    region: "Asia",
    capital: "Singapore City",
    population: 5900000,
    coordinates: { lat: 1.3521, lng: 103.8198 }
  },
  {
    id: "slovakia",
    name: "Slovakia",
    code: "SK",
    flagUrl: "https://flagcdn.com/w320/sk.png",
    region: "Europe",
    capital: "Bratislava",
    population: 5500000,
    coordinates: { lat: 48.6690, lng: 19.6990 }
  },
  {
    id: "slovenia",
    name: "Slovenia",
    code: "SI",
    flagUrl: "https://flagcdn.com/w320/si.png",
    region: "Europe",
    capital: "Ljubljana",
    population: 2100000,
    coordinates: { lat: 46.0569, lng: 14.5058 }
  },
  {
    id: "solomon-islands",
    name: "Solomon Islands",
    code: "SB",
    flagUrl: "https://flagcdn.com/w320/sb.png",
    region: "Oceania",
    capital: "Honiara",
    population: 700000,
    coordinates: { lat: -9.6457, lng: 160.1562 }
  },
  {
    id: "somalia",
    name: "Somalia",
    code: "SO",
    flagUrl: "https://flagcdn.com/w320/so.png",
    region: "Africa",
    capital: "Mogadishu",
    population: 17000000,
    coordinates: { lat: 5.1521, lng: 46.1996 }
  },
  {
    id: "south-africa",
    name: "South Africa",
    code: "ZA",
    flagUrl: "https://flagcdn.com/w320/za.png",
    region: "Africa",
    capital: "Pretoria",
    population: 60000000,
    coordinates: { lat: -30.5595, lng: 22.9375 }
  },
  {
    id: "south-korea",
    name: "South Korea",
    code: "KR",
    flagUrl: "https://flagcdn.com/w320/kr.png",
    region: "Asia",
    capital: "Seoul",
    population: 52000000,
    coordinates: { lat: 35.9078, lng: 127.7669 }
  },
  {
    id: "south-sudan",
    name: "South Sudan",
    code: "SS",
    flagUrl: "https://flagcdn.com/w320/ss.png",
    region: "Africa",
    capital: "Juba",
    population: 12000000,
    coordinates: { lat: 6.8770, lng: 31.3070 }
  },
  {
    id: "spain",
    name: "Spain",
    code: "ES",
    flagUrl: "https://flagcdn.com/w320/es.png",
    region: "Europe",
    capital: "Madrid",
    population: 47000000,
    coordinates: { lat: 40.4637, lng: -3.7492 }
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    flagUrl: "https://flagcdn.com/w320/lk.png",
    region: "Asia",
    capital: "Sri Jayawardenepura Kotte",
    population: 22000000,
    coordinates: { lat: 7.8731, lng: 80.7718 }
  },
  {
    id: "sudan",
    name: "Sudan",
    code: "SD",
    flagUrl: "https://flagcdn.com/w320/sd.png",
    region: "Africa",
    capital: "Khartoum",
    population: 45000000,
    coordinates: { lat: 12.8628, lng: 30.2176 }
  },
  {
    id: "suriname",
    name: "Suriname",
    code: "SR",
    flagUrl: "https://flagcdn.com/w320/sr.png",
    region: "Americas",
    capital: "Paramaribo",
    population: 600000,
    coordinates: { lat: 3.9193, lng: -56.0278 }
  },
  {
    id: "sweden",
    name: "Sweden",
    code: "SE",
    flagUrl: "https://flagcdn.com/w320/se.png",
    region: "Europe",
    capital: "Stockholm",
    population: 10000000,
    coordinates: { lat: 60.1282, lng: 18.6435 }
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    region: "Europe",
    capital: "Bern",
    population: 8700000,
    coordinates: { lat: 46.8182, lng: 8.2275 }
  },
  {
    id: "syria",
    name: "Syria",
    code: "SY",
    flagUrl: "https://flagcdn.com/w320/sy.png",
    region: "Asia",
    capital: "Damascus",
    population: 18000000,
    coordinates: { lat: 34.8021, lng: 38.9968 }
  },
  {
    id: "tajikistan",
    name: "Tajikistan",
    code: "TJ",
    flagUrl: "https://flagcdn.com/w320/tj.png",
    region: "Asia",
    capital: "Dushanbe",
    population: 10000000,
    coordinates: { lat: 38.5358, lng: 71.0965 }
  },
  {
    id: "tanzania",
    name: "Tanzania",
    code: "TZ",
    flagUrl: "https://flagcdn.com/w320/tz.png",
    region: "Africa",
    capital: "Dodoma",
    population: 65000000,
    coordinates: { lat: -6.3690, lng: 34.8888 }
  },
  {
    id: "thailand",
    name: "Thailand",
    code: "TH",
    flagUrl: "https://flagcdn.com/w320/th.png",
    region: "Asia",
    capital: "Bangkok",
    population: 70000000,
    coordinates: { lat: 15.8700, lng: 100.9925 }
  },
  {
    id: "timor-leste",
    name: "Timor-Leste",
    code: "TL",
    flagUrl: "https://flagcdn.com/w320/tl.png",
    region: "Asia",
    capital: "Dili",
    population: 1400000,
    coordinates: { lat: -8.8742, lng: 125.7275 }
  },
  {
    id: "togo",
    name: "Togo",
    code: "TG",
    flagUrl: "https://flagcdn.com/w320/tg.png",
    region: "Africa",
    capital: "Lomé",
    population: 9000000,
    coordinates: { lat: 8.6195, lng: 0.8248 }
  },
  {
    id: "tonga",
    name: "Tonga",
    code: "TO",
    flagUrl: "https://flagcdn.com/w320/to.png",
    region: "Oceania",
    capital: "Nuku'alofa",
    population: 110000,
    coordinates: { lat: -21.1790, lng: -175.1982 }
  },
  {
    id: "trinidad-and-tobago",
    name: "Trinidad and Tobago",
    code: "TT",
    flagUrl: "https://flagcdn.com/w320/tt.png",
    region: "Americas",
    capital: "Port of Spain",
    population: 1400000,
    coordinates: { lat: 10.6598, lng: -61.5190 }
  },
  {
    id: "tunisia",
    name: "Tunisia",
    code: "TN",
    flagUrl: "https://flagcdn.com/w320/tn.png",
    region: "Africa",
    capital: "Tunis",
    population: 12000000,
    coordinates: { lat: 33.8869, lng: 9.5375 }
  },
  {
    id: "turkey",
    name: "Turkey",
    code: "TR",
    flagUrl: "https://flagcdn.com/w320/tr.png",
    region: "Asia",
    capital: "Ankara",
    population: 85000000,
    coordinates: { lat: 38.9637, lng: 35.2433 }
  },
  {
    id: "turkmenistan",
    name: "Turkmenistan",
    code: "TM",
    flagUrl: "https://flagcdn.com/w320/tm.png",
    region: "Asia",
    capital: "Ashgabat",
    population: 6000000,
    coordinates: { lat: 38.9697, lng: 59.5563 }
  },
  {
    id: "tuvalu",
    name: "Tuvalu",
    code: "TV",
    flagUrl: "https://flagcdn.com/w320/tv.png",
    region: "Oceania",
    capital: "Funafuti",
    population: 12000,
    coordinates: { lat: -7.1095, lng: 177.6493 }
  },
  {
    id: "uganda",
    name: "Uganda",
    code: "UG",
    flagUrl: "https://flagcdn.com/w320/ug.png",
    region: "Africa",
    capital: "Kampala",
    population: 48000000,
    coordinates: { lat: 1.3733, lng: 32.2903 }
  },
  {
    id: "ukraine",
    name: "Ukraine",
    code: "UA",
    flagUrl: "https://flagcdn.com/w320/ua.png",
    region: "Europe",
    capital: "Kyiv",
    population: 44000000,
    coordinates: { lat: 48.3794, lng: 31.1656 }
  },
  {
    id: "united-arab-emirates",
    name: "United Arab Emirates",
    code: "AE",
    flagUrl: "https://flagcdn.com/w320/ae.png",
    region: "Asia",
    capital: "Abu Dhabi",
    population: 10000000,
    coordinates: { lat: 24.0002, lng: 54.0000 }
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    region: "Europe",
    capital: "London",
    population: 67000000,
    coordinates: { lat: 55.3781, lng: -3.4360 }
  },
  {
    id: "united-states",
    name: "United States",
    code: "US",
    flagUrl: "https://flagcdn.com/w320/us.png",
    region: "Americas",
    capital: "Washington, D.C.",
    population: 340000000,
    coordinates: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: "uruguay",
    name: "Uruguay",
    code: "UY",
    flagUrl: "https://flagcdn.com/w320/uy.png",
    region: "Americas",
    capital: "Montevideo",
    population: 3500000,
    coordinates: { lat: -32.5228, lng: -55.7658 }
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    code: "UZ",
    flagUrl: "https://flagcdn.com/w320/uz.png",
    region: "Asia",
    capital: "Tashkent",
    population: 35000000,
    coordinates: { lat: 41.3775, lng: 64.5853 }
  },
  {
    id: "vanuatu",
    name: "Vanuatu",
    code: "VU",
    flagUrl: "https://flagcdn.com/w320/vu.png",
    region: "Oceania",
    capital: "Port Vila",
    population: 320000,
    coordinates: { lat: -15.3767, lng: 166.9592 }
  },
  {
    id: "vatican-city",
    name: "Vatican City",
    code: "VA",
    flagUrl: "https://flagcdn.com/w320/va.png",
    region: "Europe",
    capital: "Vatican City",
    population: 825,
    coordinates: { lat: 41.9029, lng: 12.4534 }
  },
  {
    id: "venezuela",
    name: "Venezuela",
    code: "VE",
    flagUrl: "https://flagcdn.com/w320/ve.png",
    region: "Americas",
    capital: "Caracas",
    population: 28000000,
    coordinates: { lat: 6.4238, lng: -66.5897 }
  },
  {
    id: "vietnam",
    name: "Vietnam",
    code: "VN",
    flagUrl: "https://flagcdn.com/w320/vn.png",
    region: "Asia",
    capital: "Hanoi",
    population: 98000000,
    coordinates: { lat: 14.0583, lng: 108.2772 }
  },
  {
    id: "yemen",
    name: "Yemen",
    code: "YE",
    flagUrl: "https://flagcdn.com/w320/ye.png",
    region: "Asia",
    capital: "Sana'a",
    population: 33000000,
    coordinates: { lat: 15.5527, lng: 48.5164 }
  },
  {
    id: "zambia",
    name: "Zambia",
    code: "ZM",
    flagUrl: "https://flagcdn.com/w320/zm.png",
    region: "Africa",
    capital: "Lusaka",
    population: 19000000,
    coordinates: { lat: -13.1339, lng: 27.8493 }
  },
  {
    id: "zimbabwe",
    name: "Zimbabwe",
    code: "ZW",
    flagUrl: "https://flagcdn.com/w320/zw.png",
    region: "Africa",
    capital: "Harare",
    population: 16000000,
    coordinates: { lat: -19.0154, lng: 29.1549 }
  },
  {
    id: "taiwan",
    name: "Taiwan",
    code: "TW",
    flagUrl: "https://flagcdn.com/w320/tw.png",
    region: "Asia",
    capital: "Taipei",
    population: 23580000,
    coordinates: { lat: 23.6978, lng: 120.9605 }
  },
  {
    id: "kosovo",
    name: "Kosovo",
    code: "XK",
    flagUrl: "https://flagcdn.com/w320/xk.png",
    region: "Europe",
    capital: "Pristina",
    population: 1831000,
    coordinates: { lat: 42.6026, lng: 20.9026 }
  },
  {
    id: "palestine",
    name: "Palestine",
    code: "PS",
    flagUrl: "https://flagcdn.com/w320/ps.png",
    region: "Asia",
    capital: "Ramallah",
    population: 5220000,
    coordinates: { lat: 31.9522, lng: 35.2332 }
  }
];

export function getCountryById(id: string): Country | undefined {
  return countries.find(country => country.id === id);
}

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(country => country.code === code);
}

export function getRandomCountry(): Country {
  return countries[Math.floor(Math.random() * countries.length)];
}

export function getDailyCountry(date: Date): Country {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  return countries[dayOfYear % countries.length];
} 