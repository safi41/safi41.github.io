'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb46d7a61617e41320396e1e4abd0abe",
".git/config": "bcb2a27e99f1a0cf040ad2554d2776e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b59aa80e0786a38f31a0bf086cd9384",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a976ce8a5faf567ae1ef56cb482b936d",
".git/logs/refs/heads/main": "9cc46020f4e2d8345126b3fa0abddd9b",
".git/logs/refs/remotes/origin/main": "e65a41ea6b8adb89c02a588d6890f390",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/8d451ba94c9d739dd8eb2c8837a1a97e767010": "2a430b6e78f2d9b442c221adde8ce2de",
".git/objects/03/aa7bad32ac189d86f8f7d26f16d15dc783dbda": "0a956a1e08bf19efa783e67f60818b9d",
".git/objects/14/68a53eb8bda38a853cc2ff012c1214d013f285": "65ec3f6a552351a7d8ba3573caded48a",
".git/objects/17/83f357e1780557b333db37f3993b3480969571": "4f8df4af31312b6bb5a61730153acb73",
".git/objects/19/4ada93d40f9ce7d3e39f3a773755522749f265": "fb6482edbb4bca11570649fa4688ed21",
".git/objects/19/7d8373125806a4b83d5d990fac5213c8ea5d56": "753d2db3df9e7b1f05aa72b38245b17c",
".git/objects/1d/ab9607616ec57ee3d68c1d21bb7de9c8b94572": "5501a05642002c0ccb660211e8a81a76",
".git/objects/20/3b5635328d4bafc41b3aa973d16733adfc257c": "28d5ea2d553663efbfa28cb5a802e1e5",
".git/objects/21/c0073fd1f1d76a2fd1d119bcb138fab730c742": "0fff27d3e0b657663b61ac5cd9e83b47",
".git/objects/22/484eef12a4d7fd904480ba2f93654808aee08b": "b65b45edba48c3d0d3f0a6e28b49f8df",
".git/objects/23/b7f9f1715c545b7094c7c2720141f89c0b1d0e": "21d6020fe6bc65e7a5e4b3dd60d10e8c",
".git/objects/24/e1b89bdd338b7c8a7bc585ee0f318054d16dd9": "625699328690291dccb3ba0c0230ec26",
".git/objects/2b/77684a474ae6c20759cab5d90f462001177a35": "c079e8495a9e8157085ce7920e471b27",
".git/objects/2d/5d5cc0d79d22f24d3d23b44de517e4f581146d": "b4a4e2a57a96d61635f42eb871c86c23",
".git/objects/2d/d1ab5e684b809e48e41b7ea7b0be5fd9e71a14": "a049f4296f006f36d17c22cd28cd4685",
".git/objects/2e/11c7fd5f009b733ef6ce978302f49f55937d33": "1e764ae0727a805b84a1978565abbaee",
".git/objects/2e/8842c13e62ac8df62aa6c8b85969f3b652349f": "69e74096be4150f26ab2a0c76388c8eb",
".git/objects/32/764db584c7302efd36f37267b4688bb860d433": "d25e6e7c75ff946fec63061354c69cf9",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/e2af2def121ea8978079c9fecd8cde639c85a0": "ce519d73ba79aedb335488dcf7af0762",
".git/objects/39/de6afb63a1fdfd635b131404facf64bdceb90d": "6c7611030933d1561eeb0a258d648c18",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/4b/1b301327f9e451e1ee269528804a4539dc01d1": "824d29a3aed622e043b41aebfd8999b4",
".git/objects/4b/c2d9e99b4c227c69784563b5dab81baa5f6caa": "06b6e0fefea83508b7ba32e8f4c27bbf",
".git/objects/4b/d2231686141b056a85de4f641175cf9ec741af": "60a11e0acf6f61fb22a09666ba806152",
".git/objects/4c/d6f816b89a78b05441740d431dd50210fe3cbb": "980535229cc1bc9e168627b2769c7ac5",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/4e0c0857c07cb3f031ba7d20c38e28da9cb6c0": "c8755d44c30f9da663651130b3b98495",
".git/objects/55/6e7122b5f66718a5953d600de3bb61eed02502": "15d989222815b385eb06a40722524bac",
".git/objects/55/70b7a9200656e6b045837a7eb4b61e859dfee5": "b9ebb6951dfa5850cb80d81832880060",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/bdb7b454d7a7517691c791513490743855e486": "c96830f72114395048e3a41c8aa3688f",
".git/objects/5e/23ecc11531d47d9758a21240502e3017838600": "811a2d9e5dac93f0945e65291038a852",
".git/objects/5e/d9acf673c6d89fdb3f07f8fb68a5133a6fd01e": "62c12190836aa087d71af77da43bdd89",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/513cacb2786c663e8a7f107c8c617a0df80c00": "0aa88f300178119514221b6a36ca8824",
".git/objects/73/53307d3c5f1e7c43d7643d26d59208dcf63411": "372a5f8d0514483030b1b29e04bb5e43",
".git/objects/74/0d7a50f5c79420a3cdf659ab68ed123587cefd": "b6edb7ebcc430aa9432c5a37924cce96",
".git/objects/74/f7e37fd57f29ee749e4b2ff4d8614e3db8abe3": "c5a6c838f26cae5cece29f496ed14d85",
".git/objects/75/2340f4f0d76b9c594c120c62ddab786a559c19": "f7ec198fe402c73cb60ba3fe65950e0f",
".git/objects/7c/877b147609a978a5866bd993e7a9ce424342e8": "768fbb962b8eb4100088b1b656d6a4cd",
".git/objects/7c/8c408657c71bcb9d28967db7145ca5913edd3b": "df55649cc659fe0c7f2c9264958e852a",
".git/objects/7d/334619251ea355b0258af2e39cb242f20d3374": "f77b81e214df262b88eea0a4caadd74e",
".git/objects/84/1e3d9203b80eacc8b98f4a1726397df1319954": "d4c06a5444115368d4f8f822f4a0c3ef",
".git/objects/85/930c67510f48937e68eefe48699d00c776f638": "44eabd408703a9090997cf3d053114f3",
".git/objects/86/98fb87f7396aca571bf6eb5a41f055a6033976": "3fbfb2e836ed50f3a19bc88036a42983",
".git/objects/87/e76fd5500e9b2464c561a246f18e2ef296fcda": "38f3ef9476e3a6db7afbda59abd530ce",
".git/objects/88/5e5861c047999de0fb3b899f10ec676f886169": "9ea9de166d3e09f43e5bfe9f87e54400",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/2ad757e4013668f892e85c199073c493e0226f": "203880197a74b8d9f254b96ccce65c9c",
".git/objects/8f/f86c324c28bc27858726857251582e88a2b225": "a8e3458f0634849e2a2d0b7002fa7801",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/2ba2b939454657d51c5faec2ec1a9f0bcdb912": "9b31338e7f1689b24ab38af5ecfa3cad",
".git/objects/94/856e4f52e8be21c75a199ecf73bb6f32907250": "67dbceed42cad8a15401a889aa31cb8e",
".git/objects/95/bb8b6abd047c9b4e40caefb80d17c06567b128": "68b3daebe60972dbf05ca678e9a3138d",
".git/objects/95/e1454c59d9b452cbd9267a898bd34fee8ed62c": "de346f6274542cbe313436b1d092a42b",
".git/objects/99/6163e1e789bb9ee614cc1ed7e1cebed503d48f": "d2d731d37e1ec2fe35b96a071828953f",
".git/objects/9b/aa90c7c99ff1ded364df52c341c771601c6cd5": "265b134df10f5dd0238580697deefa1e",
".git/objects/9c/00552bda4890b302c3957a3a99a3d5a703d67f": "7d40dfe75e4e52cfcf836761cf72a8e6",
".git/objects/a3/0a854e43f63df2b4131fee7f87f44ebd78f34a": "cb4606526b539c4a307707d28d8f63f3",
".git/objects/a3/7d21adef5f937728569fa245fc48ffc3bc3696": "45db952e53706e6557a45b4948843d6e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ad/af1b05fecbae46f58ece733b587761a634f1a9": "46829b0af8ba239c725e83d1a6351489",
".git/objects/b1/57764620b9f9a08a60727cc639c228f4117034": "210219df71d145ee968aaf5001ff5b46",
".git/objects/b3/c14e59161e44ec90a791a81a833563e16e164a": "1a4c1a7d8e0c4e72b3eee1fd93c25b3c",
".git/objects/b4/11767740ca5d6004b16f220f71a59300d9ed77": "1f1937ecb7b1a25a6c34d281089a4c02",
".git/objects/b4/1bfb11fb69cd6f039074db67d9ffe13d40433e": "07e60ecc31f25d0fdf12de6ff1273dd8",
".git/objects/b6/438df8728ef6a98b403c3285a236c14091d516": "db096050dd1d11fbb05c473411ce5159",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/c202c40b1956c91497e73cdf471c79a5cb564b": "a421192f0740e665afe0efa75c842b94",
".git/objects/be/6d62126a53f427c89f7c111f42cdb3a6d96c54": "5a27a5e7f82926bc6a10202ca0926801",
".git/objects/cb/bde3af35e7d405ebdeb171c527a6a7243f0e40": "145b0519cb5b64a345e8a477ce8d1423",
".git/objects/ce/5166614365d845db0e2fc34808ee8e96274604": "8642d6fc0d899ba01cdcd1c067d821f0",
".git/objects/cf/ed45773f380ad3f5676c39d25520c906f3cc14": "564f036d9f1587ec29c4fda6f19d1b89",
".git/objects/d1/00a0178222a685883620688b48815c9ebf3843": "acff185d4d32c2b0065719c8a756c9df",
".git/objects/d2/190b5139486ecf8c655e1cc1d06e8df3ffe249": "38d744ba160ce93006e81e51ecaed9b8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/df37aba124d42a93de0d24b45e11870e8723f9": "1bda1f7e6a05e66d58b87d68542edc05",
".git/objects/d5/b79a9897e78bea861f70697f30bdf96b4c427e": "fee9b25f443468440c68af2ee48b3abb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/b2f8079be9bfafa1084c8c6206cd68ea5f9e67": "06a94c782d4f6aa3124e5f77b46d01bc",
".git/objects/dd/22c008e18bd999ee3ff3cab1a7c0bae9e2f4ba": "1857e074a191512bc5011b138a08d392",
".git/objects/dd/9a4f16f5adf5fc0ba0f13457351468057068d4": "f60b2a4bd038e3874799efa435706239",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/fe3942c3969ff5bd631e89c1aa17db9ddfe590": "592983114b625d98c4d3017bf4483814",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/50190e57f780766e5cc804e3b0c2cdb0211273": "89af31baef4fb2e11f3d60394663e056",
".git/objects/ef/4245a247431f5ba2c54e64ba3819acdab351cc": "77b471b010c3fea7f50153169351202d",
".git/objects/ef/83a3e311a625b1b674310574db8c449b888c98": "70c31bd3970b0b66d3aadd3c2350e547",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/82158143113d04c106adef4bd1969b675560bf": "1e5a8e5c7c95447b6d3204b57ccebadd",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/b4d0d11bc0bcbfddb226426826d07870c692df": "37fe05b48cc64c630806ec23358f354f",
".git/objects/fc/dc4e7eb13d106da62273d655d215d07c958752": "5abe9a966e5b3a505cc4beb606b11a67",
".git/refs/heads/main": "e4870c9c357eb614bf5ee70db4d903cd",
".git/refs/remotes/origin/main": "e4870c9c357eb614bf5ee70db4d903cd",
"assets/AssetManifest.bin": "1234e25b0d641ecef577144abef1769b",
"assets/AssetManifest.bin.json": "4e62c8a302e41c1bf2f8440195faed01",
"assets/AssetManifest.json": "65a72affd53c924c473c33e9f3ee7098",
"assets/assets/babas.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/beef.png": "20391954cb836551343a0dc1a7727ddd",
"assets/assets/chciken.png": "8ead00848aa6c20f0e2c3c5056aa8c6d",
"assets/assets/cover.png": "0169b0be8e31a8feef8b4d02b49bbd97",
"assets/assets/loading2.json": "98e133e09e5157ed81b982f369556b12",
"assets/assets/lob.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/logo.svg": "8948e1e72576a3fea0b4e65dba55ef6f",
"assets/assets/logo1.png": "dc99182214cd634c40e0e6577e907445",
"assets/assets/mix.png": "291c9e84d4252ad67a3f4f3df60b32ec",
"assets/assets/pacf.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/three.png": "ddfaeffed90e6d81f9850a38d57e4f02",
"assets/assets/three1.png": "e0ccd7e15054f4c948bf4962d81f3710",
"assets/assets/three2.png": "3fb5f2170c2ea7bab0e228515d29a3aa",
"assets/assets/tiktok.png": "f42d793ea242eed056cabb5cda2622da",
"assets/assets/two.png": "4b2abf402a855fa3b8ef8dd77d2c688f",
"assets/assets/two1.png": "fc3936f63d280026bee51d7762f04e29",
"assets/assets/two2.png": "5585002899a2f5f62a5b53fab7654696",
"assets/assets/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/FontManifest.json": "f101aae79be1071dbcd3ebe508d7d2ab",
"assets/fonts/MaterialIcons-Regular.otf": "f5f2f8634c76a5026c7903b70e3199be",
"assets/NOTICES": "9eef76bce35303430d522c672622f288",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "510c6c80e66a687e9e70db3be3e7e69f",
"icons/android-chrome-192x192.png": "8ae05f2fa00453b704bd144cf307f61f",
"icons/android-chrome-512x512.png": "88bd1e6209e8628d2d29b04850fcf1a4",
"icons/apple-touch-icon.png": "c4715455d4faa97caeed7c4c337178a8",
"icons/favicon-16x16.png": "322ba376dfc59770cdc2edad7e555044",
"icons/favicon-32x32.png": "133ad967bce033ffaff50d9ac36dbbfb",
"icons/favicon.ico": "49b2689b9d1f3e5449e3f0883ad3ce10",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "7513ca23251ebf55757930c0e0614d98",
"/": "7513ca23251ebf55757930c0e0614d98",
"main.dart.js": "89c8ee7c2f353fb7cd5dc6eb3006c406",
"manifest.json": "27fd9dd9c05442854abd17ef4ce6b701",
"version.json": "73b7caf1c8b8bbcc7738ce5968681dbf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
