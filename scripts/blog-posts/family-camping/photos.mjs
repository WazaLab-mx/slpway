// Photos for the family-camping post. Commons files were resized (and the
// Valle de los Fantasmas one cropped to 4:3); credits follow each license.
const DIR = '/images/blog/family-camping-slp';

const commons = (file, artist, license, licenseUrl, page) => ({ src: `${DIR}/${file}`, artist, license, licenseUrl, page });

export const HERO = commons('media-luna-hero.jpg', 'Uriel Del Toro', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0', 'https://commons.wikimedia.org/wiki/File:Laguna_Media_Luna.jpg');

export const PHOTOS = {
  mediaLunaLagoon: commons('media-luna-lagoon.jpg', 'Pure360x', 'Public domain', null, 'https://commons.wikimedia.org/wiki/File:Lagunadelamedialuna.JPG'),
  mediaLunaPool: { src: '/images/outdoors/media-luna-pool.jpg' },
  armadillo: { src: '/images/outdoors/armadillo.jpg' },
  valle: commons('valle-de-los-fantasmas.jpg', 'Felipe Alfonso Castillo Vázquez', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0', 'https://commons.wikimedia.org/wiki/File:SIERRA_DE_ALAVAREZ_SAN_LUIS_POTOSI_MEXICO.JPG'),
  valleRocks: commons('valle-de-los-fantasmas-rocks.jpg', 'Amante Darmanin', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0', 'https://commons.wikimedia.org/wiki/File:Agave_species_(5757399513).jpg'),
  guadalcazar: commons('guadalcazar-landscape.jpg', 'Amante Darmanin', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0', 'https://commons.wikimedia.org/wiki/File:Guadalcazar_2,_San_Luis_Potosi_(5765515765).jpg'),
  guadalcazarWater: commons('guadalcazar-tanque.jpg', 'josma', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0', 'https://commons.wikimedia.org/wiki/File:Tanque_el_Oro_en_Guadalcazar,_S.L.P._-_panoramio.jpg'),
  cold: { src: '/images/outdoors/camping-detail.jpg' },
};
