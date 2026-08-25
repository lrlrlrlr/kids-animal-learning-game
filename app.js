const animals = [
  { id:'beagle', category:'dog', name:'Beagle', clue:'I have long floppy ears and a white-tipped tail.', fact:'Beagles have an excellent sense of smell and love following interesting scents.', colors:['#b86b32','#fff7e7','#2b2825'], trait:'floppy', pattern:'patch' },
  { id:'dalmatian', category:'dog', name:'Dalmatian', clue:'My white coat is covered in lots of dark spots.', fact:'Every Dalmatian has its own special pattern of spots, just like a fingerprint.', colors:['#f9f6e9','#292a2a','#d7d4c8'], trait:'floppy', pattern:'spots' },
  { id:'shepherd', category:'dog', name:'German Shepherd', clue:'My ears stand tall and I often have a dark saddle on my back.', fact:'German Shepherds are clever workers who often help police and rescue teams.', colors:['#b87b3f','#252b2a','#e5b76e'], trait:'upright', pattern:'mask' },
  { id:'golden', category:'dog', name:'Golden Retriever', clue:'I have a long, soft, golden coat and a friendly smile.', fact:'Golden Retrievers are gentle dogs that enjoy carrying things carefully.', colors:['#d99b43','#f4c775','#71492a'], trait:'fluffy', pattern:'plain' },
  { id:'collie', category:'dog', name:'Border Collie', clue:'My coat is usually black and white, and I love to herd.', fact:'Border Collies are amazing sheep herders and learn new signals very quickly.', colors:['#242a29','#fff9e8','#b5b2aa'], trait:'upright', pattern:'blaze' },
  { id:'cattledog', category:'dog', name:'Australian Cattle Dog', clue:'My short coat is covered in tiny blue or red speckles.', fact:'Australian Cattle Dog puppies are born mostly white, and their speckled colour appears as they grow.' },
  { id:'kelpie', category:'dog', name:'Australian Kelpie', clue:'I have pointed ears, a fox-like face and a short, weatherproof coat.', fact:'Australian Kelpies are alert sheepdogs with the energy and stamina to work across wide open spaces.' },
  { id:'aussieshepherd', category:'dog', name:'Australian Shepherd', clue:'My fluffy coat may have a patchy merle pattern, and my eyes can be different colours.', fact:'Australian Shepherds are intelligent herding dogs, and the breed was developed in the United States.' },
  { id:'bassethound', category:'dog', name:'Basset Hound', clue:'I have a long body, very short legs and long, velvety ears.', fact:'A Basset Hound’s long ears help stir scents from the ground towards its powerful nose.' },
  { id:'bernese', category:'dog', name:'Bernese Mountain Dog', clue:'I am a big, fluffy dog with black, white and rich brown markings.', fact:'Bernese Mountain Dogs were Swiss farm dogs that guarded farms, pulled carts and moved cattle.' },
  { id:'bichon', category:'dog', name:'Bichon Frise', clue:'I am a small white dog covered in soft corkscrew curls.', fact:'The Bichon Frise is a lively, happy toy dog that stands less than 30 centimetres tall.' },
  { id:'bloodhound', category:'dog', name:'Bloodhound', clue:'I have loose, wrinkly skin, droopy eyes and very long ears.', fact:'Bloodhounds are powerful scent hounds with exceptionally strong noses.' },
  { id:'borzoi', category:'dog', name:'Borzoi', clue:'I am very tall and graceful with a long, narrow head and silky coat.', fact:'The elegant Borzoi is a fast coursing hound with a sensitive and alert nature.' },
  { id:'boston', category:'dog', name:'Boston Terrier', clue:'I am small and square-shaped with a short face and black-and-white tuxedo markings.', fact:'Boston Terriers are friendly, lively dogs known for their neat white markings.' },
  { id:'malamute', category:'dog', name:'Alaskan Malamute', clue:'I am large and powerful with a thick coat, face mask and plumed tail.', fact:'Alaskan Malamutes are Arctic sled dogs built for strength and endurance rather than racing speed.' },

  { id:'siamese', category:'cat', name:'Siamese', clue:'I have a pale body, dark face and bright blue eyes.', fact:'Siamese cats are famous for being chatty and enjoying company.', colors:['#e8d6ad','#493a34','#63bce8'], trait:'large', pattern:'points' },
  { id:'persian', category:'cat', name:'Persian', clue:'I have a very fluffy coat and a small, flat-looking face.', fact:'Persian cats have long fur that needs gentle brushing every day.', colors:['#eee8dc','#a59d8f','#82a68d'], trait:'round', pattern:'fluffy' },
  { id:'mainecoon', category:'cat', name:'Maine Coon', clue:'I am a big, shaggy cat with tufts on the tips of my ears.', fact:'Maine Coons are one of the largest pet cat breeds and have wonderfully bushy tails.', colors:['#8a6044','#3f342d','#d4b28c'], trait:'tufted', pattern:'tabby' },
  { id:'bengal', category:'cat', name:'Bengal', clue:'My golden coat has dark rosettes like a tiny leopard.', fact:'Bengal cats are active climbers with a coat patterned like a wild cat.', colors:['#d5963d','#563721','#9ac76c'], trait:'small', pattern:'rosettes' },
  { id:'british', category:'cat', name:'British Shorthair', clue:'I have a round face, chubby cheeks and a thick short coat.', fact:'British Shorthairs are calm cats with dense, plush fur.', colors:['#79878d','#f0c761','#ccd5d8'], trait:'round', pattern:'plain' },
  { id:'sphynx', category:'cat', name:'Sphynx', clue:'I look almost hairless, with wrinkly skin and very large ears.', fact:'The Sphynx\'s hairlessness comes from a naturally occurring gene change.' },
  { id:'ragdoll', category:'cat', name:'Ragdoll', clue:'I am a large, fluffy colourpoint cat with bright blue eyes.', fact:'Ragdolls are named for how relaxed some become when gently picked up.' },
  { id:'scottishfold', category:'cat', name:'Scottish Fold', clue:'My small ears fold forward and down over my round face.', fact:'The gene that folds a Scottish Fold\'s ears also affects cartilage throughout its body.' },
  { id:'abyssinian', category:'cat', name:'Abyssinian', clue:'I am slim with big ears and a warm ticked coat made of banded hairs.', fact:'Abyssinians are active, social cats that enjoy exploring and playing.' },
  { id:'norwegianforest', category:'cat', name:'Norwegian Forest Cat', clue:'I am a large, shaggy cat with a thick neck ruff and long coat.', fact:'Its glossy topcoat and woolly undercoat help it stay warm in cold northern climates.' },
  { id:'russianblue', category:'cat', name:'Russian Blue', clue:'My short blue-grey coat has a silver shine, and my eyes are bright green.', fact:'Russian Blues have a dense double coat that feels plush.' },
  { id:'manx', category:'cat', name:'Manx', clue:'I have a round body, long back legs and little or no tail.', fact:'Manx cats come from the Isle of Man, and many have only a short tail stub or no tail.' },
  { id:'devonrex', category:'cat', name:'Devon Rex', clue:'I have huge ears, large eyes and a very short, wavy coat.', fact:'The Devon Rex emerged in England in the late 1950s.' },
  { id:'turkishvan', category:'cat', name:'Turkish Van', clue:'Most of my body is white, with colour mainly on my head and fluffy tail.', fact:'Turkish Vans may have blue eyes, orange eyes, or one of each.' },
  { id:'egyptianmau', category:'cat', name:'Egyptian Mau', clue:'My silver or bronze coat has natural dark spots and my eyes are light green.', fact:'The Egyptian Mau is one of the few naturally spotted domestic cat breeds.' },

  { id:'budgie', category:'bird', name:'Budgerigar', clue:'I am a tiny parrot, often green or blue, with wavy head markings.', fact:'Budgerigars, or budgies, can learn to copy words and cheerful whistles.', colors:['#86c84b','#f4e45d','#2b3937'], trait:'small', pattern:'waves' },
  { id:'cockatiel', category:'bird', name:'Cockatiel', clue:'I have a tall yellow crest and bright orange cheek patches.', fact:'A cockatiel raises its head crest when it feels excited or curious.', colors:['#8e9290','#f1d453','#ef7e3b'], trait:'crest', pattern:'cheeks' },
  { id:'lorikeet', category:'bird', name:'Rainbow Lorikeet', clue:'My feathers are a rainbow of blue, green, red and yellow.', fact:'Rainbow Lorikeets use brush-shaped tongues to sip sweet flower nectar.', colors:['#3c9a57','#356eb5','#ef5a42'], trait:'medium', pattern:'rainbow' },
  { id:'finch', category:'bird', name:'Gouldian Finch', clue:'I am very small with bright blocks of purple, green and yellow.', fact:'Gouldian Finches are colourful Australian birds that live in grassy woodlands.', colors:['#5baf61','#7c55a3','#f0c94b'], trait:'small', pattern:'blocks' },
  { id:'canary', category:'bird', name:'Canary', clue:'I am a small, sunny-yellow bird known for my lovely song.', fact:'Canaries can learn complicated songs made of many notes and trills.', colors:['#f0d83e','#e7b827','#493f2a'], trait:'small', pattern:'plain' },
  { id:'kookaburra', category:'bird', name:'Laughing Kookaburra', clue:'I have a big head, a long beak and a call that sounds like laughter.', fact:'The Laughing Kookaburra is the world’s heaviest kingfisher and hunts on dry land.' },
  { id:'fairywren', category:'bird', name:'Superb Fairy-wren', clue:'I am tiny, and the male has brilliant blue and black feathers.', fact:'Superb Fairy-wrens search through low bushes and the ground for insects.' },
  { id:'magpie', category:'bird', name:'Australian Magpie', clue:'I am black and white with a strong pale beak and a beautiful warbling song.', fact:'Australian Magpies do well in open farmland, parks and other wide grassy spaces.' },
  { id:'pelican', category:'bird', name:'Australian Pelican', clue:'I am a large waterbird with an enormous pink bill and stretchy throat pouch.', fact:'Australian Pelicans scoop fish with their oversized bills at beaches, lagoons and lakes.' },
  { id:'blackswan', category:'bird', name:'Black Swan', clue:'My feathers are black, but my beak is bright red with a white tip.', fact:'Black Swans live around rivers, inland lakes, wetlands and coastal lagoons.' },
  { id:'cockatoo', category:'bird', name:'Sulphur-crested Cockatoo', clue:'I am a big white parrot with a bright yellow crest.', fact:'Sulphur-crested Cockatoos eat berries, seeds, nuts and roots, and their bills can chew wood.' },
  { id:'galah', category:'bird', name:'Galah', clue:'My chest and face are rosy pink, while my wings are soft grey.', fact:'Galahs are found across Australia and often feed on seeds and spilled grain.' },
  { id:'rosella', category:'bird', name:'Eastern Rosella', clue:'I have white cheeks, a red head, a yellow belly and colourful wings.', fact:'Eastern Rosellas live in south-eastern woodlands and often feed on seeds on the ground.' },
  { id:'redrobin', category:'bird', name:'Red-capped Robin', clue:'The male has a bright red cap and chest on a black-and-white body.', fact:'Red-capped Robins watch from low perches for insects in dry woodlands.' },
  { id:'wedgetail', category:'bird', name:'Wedge-tailed Eagle', clue:'I am a huge dark eagle with a long, wedge-shaped tail.', fact:'The Wedge-tailed Eagle is Australia’s largest bird of prey.' },
  { id:'emu', category:'bird', name:'Emu', clue:'I am a very tall, shaggy brown bird with long legs and tiny wings.', fact:'Emus can grow nearly two metres tall, making them Australia’s largest birds.' },
  { id:'beeeater', category:'bird', name:'Rainbow Bee-eater', clue:'I have green wings, a golden head, a black eye stripe and a long curved bill.', fact:'Rainbow Bee-eaters catch flying insects in the air, then return to a perch.' },
  { id:'kingparrot', category:'bird', name:'Australian King Parrot', clue:'The male has a scarlet head and chest with bright green wings.', fact:'Australian King Parrots live in eastern forests and feed on seeds and fruit.' },
  { id:'brolga', category:'bird', name:'Brolga', clue:'I am a tall grey crane with long legs and a red patch on my head.', fact:'Brolgas wade through wetlands and are famous for their lively dancing displays.' },
  { id:'jacana', category:'bird', name:'Comb-crested Jacana', clue:'My extremely long toes help me walk across floating lily pads.', fact:'Comb-crested Jacanas search lily pads for insects and plant food.' },

  { id:'clownfish', category:'fish', name:'Clownfish', clue:'I am orange with three wide white stripes.', fact:'Clownfish live safely among sea anemones and help keep them clean.', colors:['#ee713b','#fff8e5','#2d302e'], trait:'oval', pattern:'stripes' },
  { id:'betta', category:'fish', name:'Betta', clue:'I have long, flowing fins that look like a colourful cape.', fact:'Betta fish breathe at the water surface as well as through their gills.', colors:['#3866b3','#6eb9db','#e85273'], trait:'flowing', pattern:'gradient' },
  { id:'guppy', category:'fish', name:'Guppy', clue:'I am tiny, but my fan-shaped tail is big and colourful.', fact:'Guppies are small freshwater fish whose tails come in many colours and patterns.', colors:['#62b5a0','#f2b64c','#4c6ba8'], trait:'fan', pattern:'dots' },
  { id:'angelfish', category:'fish', name:'Angelfish', clue:'My body is tall and flat, with long fins pointing up and down.', fact:'Freshwater Angelfish glide through slow water using their tall, graceful fins.', colors:['#d9d4be','#333839','#e0a642'], trait:'tall', pattern:'bars' },
  { id:'goldfish', category:'fish', name:'Goldfish', clue:'I am bright orange with a rounded body and flowing tail.', fact:'Goldfish can recognise familiar people and can learn simple routines.', colors:['#efa33d','#ffd67b','#9f572a'], trait:'round', pattern:'plain' },
  { id:'bluetang', category:'fish', name:'Blue Tang', clue:'My body is royal blue with a black curved pattern and a bright yellow tail.', fact:'Blue Tangs are surgeonfish with a small sharp spine near each side of the tail.' },
  { id:'lionfish', category:'fish', name:'Lionfish', clue:'I have red-and-white stripes and long fins that spread like a feathery fan.', fact:'A Lionfish’s venomous spines help protect it from predators.' },
  { id:'discus', category:'fish', name:'Discus', clue:'My colourful body is almost round and very flat from side to side.', fact:'Discus are freshwater fish from slow-moving waters in the Amazon region.' },
  { id:'seahorse', category:'fish', name:'Seahorse', clue:'My head looks a little like a horse and my tail curls around plants.', fact:'In seahorses, the father carries the developing babies in a special pouch.' },
  { id:'moorishidol', category:'fish', name:'Moorish Idol', clue:'I have bold black, white and yellow bands with one very long top fin.', fact:'Moorish Idols use their long snouts to reach food in cracks around coral reefs.' },

  { id:'greatwhite', category:'shark', name:'Great White Shark', clue:'I have a pointed nose, a grey back and a bright white belly.', fact:'Great White Sharks can keep parts of their body warmer than the water around them.' },
  { id:'hammerhead', category:'shark', name:'Great Hammerhead', clue:'My wide head looks like a hammer, with an eye at each end.', fact:'A hammerhead’s wide head helps it scan more of the ocean for food.' },
  { id:'whaleshark', category:'shark', name:'Whale Shark', clue:'I am a giant shark covered in pale spots and stripes.', fact:'Whale Sharks are the world’s largest fish, but they eat tiny plankton.' },
  { id:'tigershark', category:'shark', name:'Tiger Shark', clue:'Dark stripes run down my sides like the stripes of a tiger.', fact:'Young Tiger Sharks have bold stripes that fade as they grow older.' },
  { id:'nurseshark', category:'shark', name:'Nurse Shark', clue:'I have a broad, rounded head and little feelers near my mouth.', fact:'Nurse Sharks often rest together on the sandy sea floor during the day.' },

  { id:'bluewhale', category:'whale', name:'Blue Whale', clue:'I am enormous, long and blue-grey with a small fin on my back.', fact:'The Blue Whale is the largest animal known to have ever lived.' },
  { id:'humpback', category:'whale', name:'Humpback Whale', clue:'I have very long flippers and bumps on my head.', fact:'Humpback Whales sing long songs and sometimes leap clear of the water.' },
  { id:'orca', category:'whale', name:'Orca', clue:'My bold black-and-white pattern is easy to spot.', fact:'Orcas live in close family groups called pods and communicate with special calls.' },
  { id:'beluga', category:'whale', name:'Beluga Whale', clue:'I am snowy white with a round, squishy-looking forehead.', fact:'Belugas make many whistles and clicks, earning the nickname “canaries of the sea”.' },
  { id:'spermwhale', category:'whale', name:'Sperm Whale', clue:'I have a huge square head and wrinkly-looking skin.', fact:'Sperm Whales can dive very deep to hunt squid in the dark ocean.' },
  { id:'narwhal', category:'whale', name:'Narwhal', clue:'A long, spiral tusk sticks out from the front of my mottled grey body.', fact:'A Narwhal’s famous tusk is actually one very long tooth.' },
  { id:'southernright', category:'whale', name:'Southern Right Whale', clue:'I am a broad, dark whale with rough white patches on my head.', fact:'The rough head patches, called callosities, form a different pattern on every whale.' },
  { id:'minke', category:'whale', name:'Minke Whale', clue:'I am a small, streamlined baleen whale with a pointed snout and white flipper bands.', fact:'Minke Whales are among the smallest baleen whales.' },
  { id:'graywhale', category:'whale', name:'Gray Whale', clue:'My mottled grey skin often carries pale barnacles, and I have no tall back fin.', fact:'Gray Whales often feed by rolling onto one side and scooping food from the sea floor.' },
  { id:'bowhead', category:'whale', name:'Bowhead Whale', clue:'I have a huge curved head, a dark body and no fin on my back.', fact:'A Bowhead Whale’s thick blubber helps it live in icy Arctic seas.' }
];

const categoryInfo = {
  dog: { title:'Dog Trail', label:'DOGS', singular:'DOG', unit:'BREEDS', emoji:'🐶', copy:'Clever noses, waggy tails', bg:'#f8dfbf' },
  cat: { title:'Cat Trail', label:'CATS', singular:'CAT', unit:'BREEDS', emoji:'🐱', copy:'Soft paws, curious whiskers', bg:'#e4ddf7' },
  bird: { title:'Bird Trail', label:'BIRDS', singular:'BIRD', unit:'SPECIES', emoji:'🐦', copy:'Bright feathers, happy songs', bg:'#d9eee5' },
  fish: { title:'Fish Trail', label:'FISH', singular:'FISH', unit:'SPECIES', emoji:'🐠', copy:'Fins, scales, underwater tales', bg:'#d9edf3' },
  shark: { title:'Shark Trail', label:'SHARKS', singular:'SHARK', unit:'SPECIES', emoji:'🦈', copy:'Super senses, ancient swimmers', bg:'#d5e9ed' },
  whale: { title:'Whale Trail', label:'WHALES', singular:'WHALE', unit:'SPECIES', emoji:'🐋', copy:'Ocean giants, songs and splashes', bg:'#dce5f5' }
};

const photoSources = {
  beagle:'Beagle', dalmatian:'Dalmatian_(dog)', shepherd:'German_Shepherd', golden:'Golden_Retriever', collie:'Border_Collie',
  cattledog:'Australian_Cattle_Dog', kelpie:'Australian_Kelpie', aussieshepherd:'Australian_Shepherd', bassethound:'Basset_Hound', bernese:'Bernese_Mountain_Dog',
  bichon:'Bichon_Frise', bloodhound:'Bloodhound', borzoi:'Borzoi', boston:'Boston_Terrier', malamute:'Alaskan_Malamute',
  siamese:'Siamese_cat', persian:'Persian_cat', mainecoon:'Maine_Coon', bengal:'Bengal_cat', british:'British_Shorthair',
  sphynx:'Sphynx_cat', ragdoll:'Ragdoll', scottishfold:'Scottish_Fold', abyssinian:'Abyssinian_cat', norwegianforest:'Norwegian_Forest_cat',
  russianblue:'Russian_Blue', manx:'Manx_cat', devonrex:'Devon_Rex', turkishvan:'Turkish_Van', egyptianmau:'Egyptian_Mau',
  budgie:'Budgerigar', cockatiel:'Cockatiel', lorikeet:'Rainbow_lorikeet', finch:'Gouldian_finch', canary:'Domestic_canary',
  kookaburra:'Laughing_kookaburra', fairywren:'Superb_fairywren', magpie:'Australian_magpie', pelican:'Australian_pelican', blackswan:'Black_swan',
  cockatoo:'Sulphur-crested_cockatoo', galah:'Galah', rosella:'Eastern_rosella', redrobin:'Red-capped_robin', wedgetail:'Wedge-tailed_eagle',
  emu:'Emu', beeeater:'Rainbow_bee-eater', kingparrot:'Australian_king_parrot', brolga:'Brolga', jacana:'Comb-crested_jacana',
  clownfish:'Clownfish', betta:'Siamese_fighting_fish', guppy:'Guppy', angelfish:'Pterophyllum', goldfish:'Goldfish',
  bluetang:'Paracanthurus', lionfish:'Red_lionfish', discus:'Discus_(fish)', seahorse:'Seahorse', moorishidol:'Moorish_idol',
  greatwhite:'Great_white_shark', hammerhead:'Great_hammerhead', whaleshark:'Whale_shark', tigershark:'Tiger_shark', nurseshark:'Nurse_shark',
  bluewhale:'Blue_whale', humpback:'Humpback_whale', orca:'Orca', beluga:'Beluga_whale', spermwhale:'Sperm_whale',
  narwhal:'Narwhal', southernright:'Southern_right_whale', minke:'Common_minke_whale', graywhale:'Gray_whale', bowhead:'Bowhead_whale'
};

const infoSources = {
  cattledog:'https://dogsaustralia.org.au/BrowseBreed/browse-a-breed/119/Australian-Cattle-Dog/',
  kelpie:'https://www.dogsaustralia.org.au/members/breeds/breed-standards/Australian-Kelpie',
  aussieshepherd:'https://dogsaustralia.org.au/BrowseBreed/browse-a-breed/121/Australian-Shepherd/',
  bassethound:'https://dogsaustralia.org.au/BrowseBreed/browse-a-breed/104/Basset-Hound/',
  bernese:'https://www.dogsaustralia.org.au/members/breeds/breed-standards/Bernese-Mountain-Dog',
  bichon:'https://www.dogsaustralia.org.au/members/breeds/breed-standards/Bichon-Frise',
  bloodhound:'https://www.dogsaustralia.org.au/members/breeds/breed-standards/Bloodhound',
  borzoi:'https://www.dogsaustralia.org.au/members/breeds/breed-standards/Borzoi',
  boston:'https://dogsaustralia.org.au/BrowseBreed/browse-a-breed/192/Boston-Terrier-/',
  malamute:'https://www.dogsaustralia.org.au/members/breeds/breed-standards/Alaskan-Malamute',
  sphynx:'https://en.wikipedia.org/wiki/Sphynx_cat',
  ragdoll:'https://en.wikipedia.org/wiki/Ragdoll',
  scottishfold:'https://en.wikipedia.org/wiki/Scottish_Fold',
  abyssinian:'https://en.wikipedia.org/wiki/Abyssinian_cat',
  norwegianforest:'https://en.wikipedia.org/wiki/Norwegian_Forest_cat',
  russianblue:'https://en.wikipedia.org/wiki/Russian_Blue',
  manx:'https://en.wikipedia.org/wiki/Manx_cat',
  devonrex:'https://en.wikipedia.org/wiki/Devon_Rex',
  turkishvan:'https://en.wikipedia.org/wiki/Turkish_Van',
  egyptianmau:'https://en.wikipedia.org/wiki/Egyptian_Mau',
  kookaburra:'https://www.australiaswonderfulbirds.com.au/kingfishers',
  fairywren:'https://www.australiaswonderfulbirds.com.au/blog/tag/South%2BCoast%2BNSW',
  magpie:'https://www.australiaswonderfulbirds.com.au/in-the-bush',
  pelican:'https://www.australiaswonderfulbirds.com.au/at-the-beach',
  blackswan:'https://www.australiaswonderfulbirds.com.au/water-birds',
  cockatoo:'https://www.australiaswonderfulbirds.com.au/parrots',
  galah:'https://www.australiaswonderfulbirds.com.au/parrots',
  rosella:'https://www.australiaswonderfulbirds.com.au/parrots',
  redrobin:'https://www.australiaswonderfulbirds.com.au/robins',
  wedgetail:'https://www.australiaswonderfulbirds.com.au/raptors',
  emu:'https://www.australiaswonderfulbirds.com.au/in-the-bush',
  beeeater:'https://www.australiaswonderfulbirds.com.au/darwin',
  kingparrot:'https://www.australiaswonderfulbirds.com.au/parrots',
  brolga:'https://www.australiaswonderfulbirds.com.au/in-the-bush',
  jacana:'https://www.australiaswonderfulbirds.com.au/darwin'
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const views = { home: $('#homeView'), game: $('#gameView'), learn: $('#learnView'), results: $('#resultsView') };
const chooseSection = $('#chooseSection');
const state = { category: 'dog', questions: [], round: 0, score: 0, answered: false, sound: true, hintUsed: false };
let toastTimer;

function shuffle(items) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function escapeXml(value) {
  return String(value).replace(/[<>&'\"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','\"':'&quot;'}[c]));
}

function spots(fill, count = 7) {
  const points = [[122,108,9],[171,91,7],[195,142,10],[146,158,6],[104,147,5],[183,181,5],[134,194,7]];
  return points.slice(0,count).map(([cx,cy,r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`).join('');
}

function dogSvg(a) {
  const [base, accent, eye] = a.colors;
  const ears = a.trait === 'upright'
    ? `<path d="M93 91L77 24Q112 36 126 70M207 91L223 24Q188 36 174 70" fill="${base}" stroke="#28332f" stroke-width="5" stroke-linejoin="round"/>`
    : a.trait === 'fluffy'
    ? `<path d="M105 80Q61 47 52 93Q47 139 98 153M195 80Q239 47 248 93Q253 139 202 153" fill="${base}" stroke="#28332f" stroke-width="5"/>`
    : `<path d="M103 77Q58 52 56 101Q56 150 105 148M197 77Q242 52 244 101Q244 150 195 148" fill="${accent}" stroke="#28332f" stroke-width="5"/>`;
  let markings = '';
  if (a.pattern === 'spots') markings = spots(accent);
  if (a.pattern === 'mask') markings = `<path d="M103 77Q150 50 197 77L179 134Q150 112 121 134Z" fill="${accent}" opacity=".95"/>`;
  if (a.pattern === 'patch') markings = `<path d="M96 69Q128 50 142 75Q133 113 97 126Z" fill="${accent}"/>`;
  if (a.pattern === 'blaze') markings = `<path d="M135 58Q150 48 165 58L174 145L150 167L126 145Z" fill="${accent}"/>`;
  return `<svg viewBox="0 0 300 260" role="img" aria-label="Illustration of a ${escapeXml(a.name)}">
    ${ears}<ellipse cx="150" cy="132" rx="88" ry="81" fill="${base}" stroke="#28332f" stroke-width="5"/>
    ${markings}<ellipse cx="150" cy="157" rx="48" ry="40" fill="${a.pattern==='mask' ? base : '#fff3d8'}" opacity=".96"/>
    <circle cx="118" cy="125" r="8" fill="${eye}"/><circle cx="182" cy="125" r="8" fill="${eye}"/><circle cx="116" cy="122" r="2.5" fill="white"/><circle cx="180" cy="122" r="2.5" fill="white"/>
    <path d="M139 150Q150 141 161 150Q158 164 150 164Q142 164 139 150" fill="#29302e"/>
    <path d="M150 164Q143 177 130 173M150 164Q157 177 170 173" fill="none" stroke="#29302e" stroke-width="4" stroke-linecap="round"/>
    <path d="M130 202Q150 217 170 202" fill="none" stroke="#ef7651" stroke-width="7" stroke-linecap="round"/>
  </svg>`;
}

function catSvg(a) {
  const [base, accent, eye] = a.colors;
  const earTufts = a.trait === 'tufted' ? `<path d="M90 67L72 26L104 50M210 67L228 26L196 50" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>` : '';
  const fluffy = a.pattern === 'fluffy' ? `<path d="M87 179Q59 187 78 205Q59 220 91 223Q108 245 128 225Q150 248 169 225Q194 242 209 217Q238 207 214 189" fill="${base}" stroke="#28332f" stroke-width="5"/>` : '';
  let markings = '';
  if (a.pattern === 'points') markings = `<ellipse cx="150" cy="127" rx="52" ry="49" fill="${accent}"/><path d="M82 74L70 31L113 60M218 74L230 31L187 60" fill="${accent}"/>`;
  if (a.pattern === 'tabby') markings = `<path d="M125 64L137 96M150 58V96M175 64L163 96M94 118L120 128M206 118L180 128" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
  if (a.pattern === 'rosettes') markings = spots(accent,6);
  return `<svg viewBox="0 0 300 260" role="img" aria-label="Illustration of a ${escapeXml(a.name)}">
    ${fluffy}<path d="M104 78L70 32L76 105M196 78L230 32L224 105" fill="${base}" stroke="#28332f" stroke-width="5" stroke-linejoin="round"/>${earTufts}
    <ellipse cx="150" cy="137" rx="84" ry="82" fill="${base}" stroke="#28332f" stroke-width="5"/>${markings}
    <ellipse cx="117" cy="132" rx="12" ry="9" fill="${eye}"/><ellipse cx="183" cy="132" rx="12" ry="9" fill="${eye}"/>
    <path d="M116 129h4M182 129h4" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <path d="M141 157Q150 150 159 157Q156 167 150 168Q144 167 141 157" fill="#da7c75"/>
    <path d="M150 168Q143 180 133 174M150 168Q157 180 167 174" fill="none" stroke="#343b39" stroke-width="3" stroke-linecap="round"/>
    <path d="M126 158L66 148M126 167L61 172M174 158L234 148M174 167L239 172" stroke="#3f4945" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function birdSvg(a) {
  const [base, accent, detail] = a.colors;
  const crest = a.trait === 'crest' ? `<path d="M145 74Q142 27 165 14Q161 51 169 76M153 72Q165 36 181 32" fill="${accent}" stroke="#28332f" stroke-width="4" stroke-linejoin="round"/>` : '';
  let markings = '';
  if (a.pattern === 'waves') markings = `<path d="M146 69q8 8 16 0M142 82q10 9 20 0M141 95q11 9 22 0" fill="none" stroke="${detail}" stroke-width="4"/>`;
  if (a.pattern === 'cheeks') markings = `<circle cx="184" cy="99" r="14" fill="${detail}"/>`;
  if (a.pattern === 'rainbow') markings = `<path d="M131 89Q164 68 195 89L186 139Q153 154 128 128Z" fill="${accent}"/><path d="M128 129Q154 153 186 139L177 173L141 175Z" fill="${detail}"/>`;
  if (a.pattern === 'blocks') markings = `<path d="M133 111Q160 98 190 112L182 154L139 163Z" fill="${accent}"/><path d="M139 163L182 154L175 191L146 193Z" fill="${detail}"/>`;
  return `<svg viewBox="0 0 300 260" role="img" aria-label="Illustration of a ${escapeXml(a.name)}">
    ${crest}<ellipse cx="154" cy="150" rx="63" ry="79" fill="${base}" stroke="#28332f" stroke-width="5" transform="rotate(-8 154 150)"/>
    <circle cx="166" cy="88" r="45" fill="${a.pattern==='rainbow' ? accent : base}" stroke="#28332f" stroke-width="5"/>
    ${markings}<path d="M204 91L243 106L204 118Z" fill="#e7a643" stroke="#28332f" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="181" cy="83" r="7" fill="#252b29"/><circle cx="179" cy="81" r="2" fill="white"/>
    <path d="M118 130Q157 135 174 182Q138 202 111 174Z" fill="${accent}" stroke="#28332f" stroke-width="4"/>
    <path d="M111 200L84 239L133 215M164 215L158 247L184 222" fill="${detail}" stroke="#28332f" stroke-width="4" stroke-linejoin="round"/>
    <path d="M95 232H196" stroke="#6d5138" stroke-width="8" stroke-linecap="round"/>
  </svg>`;
}

function fishSvg(a) {
  const [base, accent, detail] = a.colors;
  let bodyPath = 'M69 135Q105 72 190 89Q222 96 241 132Q218 176 176 184Q100 193 69 135Z';
  if (a.trait === 'tall') bodyPath = 'M84 139Q119 55 179 66Q224 87 232 136Q214 190 167 207Q111 205 84 139Z';
  if (a.trait === 'round') bodyPath = 'M74 137Q93 76 166 80Q226 84 240 137Q221 187 165 191Q91 193 74 137Z';
  const tail = a.trait === 'fan' || a.trait === 'flowing'
    ? `<path d="M80 134Q31 75 24 104Q39 134 24 180Q52 185 81 151Z" fill="${accent}" stroke="#28332f" stroke-width="5"/>`
    : `<path d="M81 132L31 87Q36 133 28 180L82 151Z" fill="${accent}" stroke="#28332f" stroke-width="5" stroke-linejoin="round"/>`;
  let markings = '';
  if (a.pattern === 'stripes') markings = `<path d="M105 91Q92 135 108 179M161 83Q145 134 164 184M214 103Q198 137 215 166" fill="none" stroke="${accent}" stroke-width="18"/>`;
  if (a.pattern === 'bars') markings = `<path d="M128 76Q113 137 130 194M180 69Q163 135 182 196" fill="none" stroke="${accent}" stroke-width="12"/>`;
  if (a.pattern === 'dots') markings = spots(detail,5);
  const flowing = a.trait === 'flowing' ? `<path d="M119 183Q144 238 190 218L176 178M134 87Q166 42 200 74" fill="${accent}" stroke="#28332f" stroke-width="4"/>` : '';
  const tallFins = a.trait === 'tall' ? `<path d="M132 76L163 19L181 73M132 195L169 241L185 194" fill="${accent}" stroke="#28332f" stroke-width="4"/>` : '';
  return `<svg viewBox="0 0 300 260" role="img" aria-label="Illustration of a ${escapeXml(a.name)}">
    ${tail}${flowing}${tallFins}<path d="${bodyPath}" fill="${base}" stroke="#28332f" stroke-width="5"/>${markings}
    <path d="M152 98Q169 69 193 90" fill="${accent}" opacity=".8"/>
    <circle cx="211" cy="121" r="9" fill="#252b29"/><circle cx="208" cy="118" r="3" fill="white"/>
    <path d="M227 146Q242 154 249 144" fill="none" stroke="#28332f" stroke-width="4" stroke-linecap="round"/>
    <path d="M146 126Q119 140 147 159Q161 142 146 126" fill="${accent}" stroke="#28332f" stroke-width="3"/>
    <circle cx="250" cy="103" r="8" fill="none" stroke="#79bed1" stroke-width="3"/><circle cx="265" cy="82" r="5" fill="none" stroke="#79bed1" stroke-width="3"/>
  </svg>`;
}

function animalSvg(animal) {
  return ({ dog: dogSvg, cat: catSvg, bird: birdSvg, fish: fishSvg })[animal.category](animal);
}

function animalPhoto(animal) {
  const source = `assets/photos/${animal.id}.jpg`;
  const alt = `Real photograph of a ${escapeXml(animal.name)}`;
  return `<img class="photo-backdrop" src="${source}" alt="" aria-hidden="true" draggable="false"><img class="animal-photo" src="${source}" alt="${alt}" draggable="false">`;
}

function setView(name) {
  Object.entries(views).forEach(([key, element]) => element.classList.toggle('hidden', key !== name));
  chooseSection.classList.toggle('hidden', name !== 'home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCategories() {
  $('#categoryGrid').innerHTML = Object.entries(categoryInfo).map(([key, info]) => `
    <button class="category-card" data-category="${key}">
      <small>${info.label} · ${animals.filter(a => a.category === key).length} ${info.unit}</small><h3>${info.title}</h3><p>${info.copy}</p>
      <span class="go-dot">→</span><span class="card-emoji" aria-hidden="true">${info.emoji}</span>
    </button>`).join('');
  $$('.category-card').forEach(button => button.addEventListener('click', () => startGame(button.dataset.category)));
}

function renderFilters() {
  $('#filterRow').innerHTML = `<button class="filter-button active" data-filter="all">All animals</button>` + Object.entries(categoryInfo).map(([key, info]) => `<button class="filter-button" data-filter="${key}">${info.emoji} ${info.label[0] + info.label.slice(1).toLowerCase()}</button>`).join('');
  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    $$('.filter-button').forEach(b => b.classList.toggle('active', b === button));
    renderBreedGrid(button.dataset.filter);
  }));
}

function renderBreedGrid(filter = 'all') {
  const list = filter === 'all' ? animals : animals.filter(a => a.category === filter);
  $('#breedGrid').innerHTML = list.map(a => `
    <button class="breed-card" data-animal="${a.id}">
      <div class="breed-card-art" style="background:${categoryInfo[a.category].bg}">${animalPhoto(a)}</div>
      <div class="breed-card-copy"><small>${categoryInfo[a.category].singular}</small><h3>${a.name}</h3><span>Tap to learn →</span></div>
    </button>`).join('');
  $$('.breed-card').forEach(card => card.addEventListener('click', () => openFact(card.dataset.animal)));
}

function openFact(id) {
  const animal = animals.find(a => a.id === id);
  $('#factPortrait').style.background = categoryInfo[animal.category].bg;
  $('#factPortrait').innerHTML = animalPhoto(animal);
  $('#factCategory').textContent = categoryInfo[animal.category].singular;
  $('#factTitle').textContent = animal.name;
  $('#factText').textContent = animal.fact;
  $('#factSource').href = `https://en.wikipedia.org/wiki/${photoSources[animal.id]}`;
  const infoSource = infoSources[animal.id];
  $('#factInfoSource').classList.toggle('hidden', !infoSource);
  $('#factInfoSource').href = infoSource || '#';
  const infoSourceLabels = {
    dog: 'Breed facts: Dogs Australia ↗',
    cat: 'Breed facts: Wikipedia ↗',
    bird: 'Bird facts: Australia’s Wonderful Birds ↗'
  };
  $('#factInfoSource').textContent = infoSourceLabels[animal.category] || 'Learn more ↗';
  $('#factModal').classList.remove('hidden');
  playTone('open');
}

function closeFact() { $('#factModal').classList.add('hidden'); }

function startGame(category) {
  state.category = category;
  state.questions = shuffle(animals.filter(a => a.category === category)).slice(0, 5);
  state.round = 0;
  state.score = 0;
  state.answered = false;
  state.hintUsed = false;
  setView('game');
  renderRound();
}

function renderRound() {
  const animal = state.questions[state.round];
  state.answered = false;
  state.hintUsed = false;
  $('#roundLabel').textContent = `Question ${state.round + 1} of ${state.questions.length}`;
  $('#progressFill').style.width = `${((state.round + 1) / state.questions.length) * 100}%`;
  $('#scoreDisplay').textContent = state.score;
  $('#categoryTag').textContent = categoryInfo[state.category].title.toUpperCase();
  $('#clueText').textContent = animal.clue;
  $('#portraitStage').style.background = categoryInfo[state.category].bg;
  $('#portraitStage').innerHTML = animalPhoto(animal);
  $('#hintButton').disabled = false;
  $('#hintButton').innerHTML = '<span>✨</span> Give me a hint';

  const others = shuffle(animals.filter(a => a.category === state.category && a.id !== animal.id)).slice(0,3);
  const options = shuffle([animal, ...others]);
  $('#answerList').innerHTML = options.map((option, index) => `
    <button class="answer-button" data-id="${option.id}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option.name}</span>
    </button>`).join('');
  $$('.answer-button').forEach(button => button.addEventListener('click', () => chooseAnswer(button, animal)));
}

function chooseAnswer(button, correctAnimal) {
  if (state.answered) return;
  state.answered = true;
  const correct = button.dataset.id === correctAnimal.id;
  $$('.answer-button').forEach(b => {
    b.disabled = true;
    if (b.dataset.id === correctAnimal.id) {
      b.classList.add('correct');
      b.insertAdjacentHTML('beforeend', '<span class="feedback-icon">✓</span>');
    } else if (b === button) {
      b.classList.add('wrong');
      b.insertAdjacentHTML('beforeend', '<span class="feedback-icon">×</span>');
    }
  });
  $('#hintButton').disabled = true;
  if (correct) {
    const points = state.hintUsed ? 15 : 20;
    state.score += points;
    $('#scoreDisplay').textContent = state.score;
    showToast(`Great spotting! +${points} points`);
    playTone('correct');
    confetti(16);
  } else {
    showToast(`Good try! This is a ${correctAnimal.name}.`);
    playTone('wrong');
  }
  setTimeout(() => pronounceName(correctAnimal.name), 220);
  setTimeout(nextRound, 1900);
}

function useHint() {
  if (state.answered || state.hintUsed) return;
  state.hintUsed = true;
  const correctId = state.questions[state.round].id;
  const wrong = shuffle($$('.answer-button').filter(button => button.dataset.id !== correctId)).slice(0,2);
  wrong.forEach(button => { button.disabled = true; button.classList.add('faded'); });
  $('#hintButton').disabled = true;
  $('#hintButton').innerHTML = '<span>✨</span> Two choices left!';
  showToast('I moved two tricky choices away.');
  playTone('hint');
}

function nextRound() {
  if (state.round < state.questions.length - 1) {
    state.round += 1;
    renderRound();
  } else {
    showResults();
  }
}

function showResults() {
  setView('results');
  const percent = state.score / 100;
  const stars = percent >= .9 ? 3 : percent >= .6 ? 2 : 1;
  $('#finalScore').textContent = state.score;
  $('#resultStars').textContent = '★ '.repeat(stars) + '☆ '.repeat(3 - stars);
  $('#resultEmoji').textContent = stars === 3 ? '🏆' : stars === 2 ? '🏅' : '🌱';
  $('#resultTitle').textContent = stars === 3 ? 'Amazing animal expert!' : stars === 2 ? 'Brilliant exploring!' : 'Your knowledge is growing!';
  $('#resultCopy').textContent = stars === 3 ? 'You followed the clues like a true wildlife detective.' : 'Every round helps your animal knowledge grow. Ready for another trail?';
  const best = Math.max(Number(localStorage.getItem('pawsBest') || 0), state.score);
  localStorage.setItem('pawsBest', best);
  $('#bestScore').textContent = best;
  confetti(stars * 22);
  playTone('finish');
}

function showHome(scrollToTrails = false) {
  setView('home');
  if (scrollToTrails) setTimeout(() => $('#chooseSection').scrollIntoView({ behavior:'smooth' }), 80);
}

function showLearn() {
  setView('learn');
  renderBreedGrid('all');
  $$('.filter-button').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
}

function speakQuestion() {
  const animal = state.questions[state.round];
  if (!('speechSynthesis' in window)) return showToast('Read-aloud is not available in this browser.');
  speechSynthesis.cancel();
  const phrase = new SpeechSynthesisUtterance(`Who am I? Explorer clue: ${animal.clue}`);
  phrase.rate = .88;
  phrase.pitch = 1.1;
  phrase.lang = 'en-AU';
  speechSynthesis.speak(phrase);
}

function pronounceName(name) {
  if (!state.sound || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const phrase = new SpeechSynthesisUtterance(name);
  phrase.rate = .82;
  phrase.pitch = 1.05;
  phrase.lang = 'en-AU';
  speechSynthesis.speak(phrase);
}

function playTone(type) {
  if (!state.sound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const notes = { correct:[523,659,784], wrong:[260,210], hint:[440,660], open:[520], finish:[392,523,659,784] }[type] || [440];
    notes.forEach((frequency, index) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.0001, ctx.currentTime + index * .1);
      gain.gain.exponentialRampToValueAtTime(.13, ctx.currentTime + index * .1 + .015);
      gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + index * .1 + .18);
      oscillator.connect(gain).connect(ctx.destination);
      oscillator.start(ctx.currentTime + index * .1); oscillator.stop(ctx.currentTime + index * .1 + .2);
    });
  } catch (_) { /* sound is an optional enhancement */ }
}

function toggleSound() {
  state.sound = !state.sound;
  $('#soundButton').textContent = state.sound ? '🔊' : '🔇';
  $('#soundButton').setAttribute('aria-label', state.sound ? 'Turn sound off' : 'Turn sound on');
  $('#soundButton').setAttribute('aria-pressed', String(state.sound));
  if (state.sound) playTone('open');
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').classList.remove('hidden');
  toastTimer = setTimeout(() => $('#toast').classList.add('hidden'), 1400);
}

function confetti(count = 20) {
  const layer = $('#confettiLayer');
  const colors = ['#f6c84c','#ef7651','#3a9b76','#8578df','#5bb8d3'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('i');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--drift', `${-100 + Math.random() * 200}px`);
    piece.style.animationDelay = `${Math.random() * .28}s`;
    piece.style.animationDuration = `${.85 + Math.random() * .7}s`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 1900);
  }
}

$('#startButton').addEventListener('click', () => showHome(true));
$('#learnButton').addEventListener('click', showLearn);
$('#brandButton').addEventListener('click', () => showHome(false));
$('#backButton').addEventListener('click', () => showHome(true));
$('#learnBackButton').addEventListener('click', () => showHome(false));
$('#hintButton').addEventListener('click', useHint);
$('#speakButton').addEventListener('click', speakQuestion);
$('#soundButton').addEventListener('click', toggleSound);
$('#playAgainButton').addEventListener('click', () => startGame(state.category));
$('#newTrailButton').addEventListener('click', () => showHome(true));
$$('[data-close-modal]').forEach(element => element.addEventListener('click', closeFact));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeFact(); });

renderCategories();
renderFilters();
renderBreedGrid();
$('#bestScore').textContent = localStorage.getItem('pawsBest') || '0';
