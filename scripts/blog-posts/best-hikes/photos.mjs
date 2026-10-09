// Photos for the best-hikes post. Commons files were resized; credits follow each license.
const DIR = '/images/blog/best-hikes-slp';

const commons = (src, artist, license, licenseUrl, page) => ({ src, artist, license, licenseUrl, page });
const BY_SA_4 = 'https://creativecommons.org/licenses/by-sa/4.0';

export const HERO = commons(`${DIR}/cerro-de-san-pedro-hero.jpg`, 'Sixto Emmanuel Picones', 'CC BY-SA 4.0', BY_SA_4, 'https://commons.wikimedia.org/wiki/File:Panoramica_en_el_cerro_de_san_pedro.jpg');

export const PHOTOS = {
  tangamangaLake: commons(`${DIR}/tangamanga-lake.jpg`, 'Alexllo0498', 'CC BY-SA 4.0', BY_SA_4, 'https://commons.wikimedia.org/wiki/File:Lago_Mayor_Parque_Tangamanga_2018.jpg'),
  tangamangaTrees: commons(`${DIR}/tangamanga-trees.jpg`, 'Juan Carlos Fonseca Mata', 'CC BY-SA 4.0', BY_SA_4, 'https://commons.wikimedia.org/wiki/File:Parque_Tangamanga_en_atardecer,_San_Luis_Potos%C3%AD.jpg'),
  santaMaria: commons(`${DIR}/santa-maria-del-rio-peak.jpg`, 'AlejandroLinaresGarcia', 'CC BY-SA 4.0', BY_SA_4, 'https://commons.wikimedia.org/wiki/File:SantaMariadelRio027.jpg'),
  alvarez: commons('/images/blog/family-camping-slp/valle-de-los-fantasmas.jpg', 'Felipe Alfonso Castillo Vázquez', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0', 'https://commons.wikimedia.org/wiki/File:SIERRA_DE_ALAVAREZ_SAN_LUIS_POTOSI_MEXICO.JPG'),
  sanPedroStreet: commons(`${DIR}/cerro-de-san-pedro-street.jpg`, 'Nadia Cisneros', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/', 'https://commons.wikimedia.org/wiki/File:Cerro_de_San_Pedro_SLP.jpg'),
  sanPedroMine: { src: '/images/outdoors/cerro-san-pedro.jpg' },
  arch: { src: '/images/outdoors/hiking-detail.jpg' },
  snow: commons(`${DIR}/cerro-de-san-pedro-snow.jpg`, 'ferdee2', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0', 'https://commons.wikimedia.org/wiki/File:Cerro_de_San_Pedro_nevado_-_panoramio.jpg'),
  quemado: commons(`${DIR}/cerro-del-quemado.jpg`, 'Daniel PZV', 'CC BY-SA 4.0', BY_SA_4, 'https://commons.wikimedia.org/wiki/File:Paisaje_y_Artesania_Wixarika.jpg'),
};
