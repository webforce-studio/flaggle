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