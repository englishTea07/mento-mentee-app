'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bba187ee806dd8655fc6775b190e5d42",
"version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "264f3ebad01904f4b05bfb8b1cdbfe31",
"/": "264f3ebad01904f4b05bfb8b1cdbfe31",
"main.dart.js": "682d38dc23df73a60818e20ef30c5ae0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "158b4e8cca9771a05c3e51c902cef3bb",
".git/objects/95/c9d7953a888716a947ee7c39a384ae55976c5f": "cfeee06b45927f80af5944f3f4af8a6a",
".git/objects/59/88318f78f4bb72817cecaf64103055a8192bd5": "21522399e4b2d8dc9b9cac545932c3df",
".git/objects/50/e501a24d7410175997c5ebce75ced08d63a9ee": "b840e42fdf71a7558c87a571a99995c1",
".git/objects/68/07f9be1ebb66a1606e71e41222aadbf5631a28": "69f0efcd7966fe6d396f53f096dd4702",
".git/objects/57/e49db38a789dfbbdbc110b04357263ebab062c": "90ffcfc79d7b790c667e5bffc683e3e6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/642db1139b445331e6c32476e61adfe2422e3f": "905a4315ef462fc537224360d7f380ae",
".git/objects/9e/e50c8752f32228419ef197ef79c16aa10f9380": "8dbd5caaddd93cc9a7fc5e04ffcb96e9",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/04/a94264eccd616af7723d81f9f656a48876a790": "6deaa7758b026572c0018ac0234c339a",
".git/objects/04/1d0b7c1b4210ff621173b00093dda8b1a0b8e6": "bf7eb8a70930b77f4330c461eea5acae",
".git/objects/69/bd3ff4b198b42cf42efd30e3a247f30a933574": "e6f58f206b2ceee973cf577a408baaaf",
".git/objects/3c/61659245c921f03136d19199691cebeab42890": "59c6ff9a1dc40080b6136e3dea83d9e4",
".git/objects/3d/88fe3466de07c855ddc08fc36d943d0ba4ace5": "a47a3b6f8f0c1875d9fd92e15cba318b",
".git/objects/58/063b5ce9a8c44b0cef1d1ca5a42637e47dfd05": "758941bf862144c0f42612718dfc5b4e",
".git/objects/94/2a8157aa9f34abd5d908348f1938c0497fc432": "ac3de5c3bd71adf51fb178d2ba57afe7",
".git/objects/34/e1688a6a4da4db59cdc861fcd1c8cd972171dd": "08f74c6fbd7b1d563c32819359a2d069",
".git/objects/5a/6f61a7e4eb1ba780488ee5bbb83fe09f3c45e1": "b0b08c459b018c8db39508fb89758e38",
".git/objects/5a/fc3ecb4187ad6d7c18eaa7460b7fb280a6769b": "181f2b58e4e0b21ef689da6302c45ba7",
".git/objects/5a/9410178abf9a63ba56fa56b895dd368ff4ee00": "c121d2e88637af83076c913c36455ff1",
".git/objects/5f/a9d06ca6a00ead803484918213aa6f90b6fa16": "561b0606912890b9af32a81694a17e21",
".git/objects/5f/b7f67af23f310b32e28944d175b10910214a76": "db98d93f42a4585dfed15048a4dc50ca",
".git/objects/33/f47abe4f0b8851a502cbb9aa74f340f0cefacc": "1085cba67050fe86e49edc4807a2948d",
".git/objects/05/914eaa059531b5b018dcb1b63969abad658bf3": "9a74d00d445740121ab72931bfed33ba",
".git/objects/05/0afbd27cfd4195a19b5a9b0309c6739e47fe04": "14003dc5cc6def184916c49a036c0a0a",
".git/objects/02/2c5a580ce758d9597cee9870a47dd38f3678d8": "94b0cfdbccf1fc42df2432544e842e35",
".git/objects/b2/1595c733912ecd201abd84d3559bc2f6e450a8": "a4c3606dfe7f998c7016bd9100317f24",
".git/objects/ad/9c0bf377a45a63a3e66c88dedf986ac1d6eceb": "3e7ebf873a0b082b46cf480962c411f5",
".git/objects/d7/1303ccfc2d00e95d35c7a512aceec029abc325": "f6d4ebbd229ab5caa79d8c831d8d54e2",
".git/objects/a2/8404134045587b3cb3ab6ca8a9ffdc2b40ba2b": "baa8330931abb27b0e2ea1ffe55cf7f3",
".git/objects/d1/537dcb839b246d3e994d84756ba17bb8959dcf": "c8f1564f6a35ef6b8daa3aa6032fb49c",
".git/objects/d6/969b2ac3335586b38ee4120e5f58aa429050d4": "d6fdd1f085a0ace7a00ab324519c5667",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/26ae7b9acae2b83b8176113c3d19f6d26efaab": "7406a9f02709ec5b05cd48795c0ffd77",
".git/objects/bc/9429c8c2ee8e79e3883aab98b32f0a9ba116b9": "e2eb667ccd3f292db7b1144fa66f18ef",
".git/objects/d8/c5498b8cb0b054f14e3f5f87dbfbe098dec480": "1f8348db0eb4273dc5acdf75381154cb",
".git/objects/e5/a87c2a09579b468cfbf28b0907b916da91371d": "3a7219b5a3e9c726c4cba7e9d3fd8434",
".git/objects/f3/54b53d0f50bdecb3fff11e6f84be0332f750ab": "aa874346ee596851a8b335360da70c43",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0cc289317487e37fedddbd3df2368f72ceee66": "8906af800963a0ad1ec92d66743d67eb",
".git/objects/eb/e33b5bd1722ea714ed4525bfbb1e47bee9220f": "55cba69abc945340a4eb91bafe50d570",
".git/objects/c7/dfaece0c90e4d247116a533b4909e108cfdd38": "d54448f75c6593e4767acc6e39d95cc3",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/15f911d48ccbb2fd2e169b732ab7aa19d5e940": "f0996b1cae74fd14f0f468bd27f739dd",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fc/2c23e6cf34ab172ad38799388a7ca401c6b82b": "d142b056f1f687b4bbe4f21dc3155813",
".git/objects/fd/be6f40ee2f0226ec5b8610b67c84ba6358e6e1": "d88a5492d7e7609ffccdefd1b2ba6355",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1727d67ba7a3d4809e3ac5baeecba7ed59a4dc": "e7d5a9a417d727d83bd7f1c00ef87813",
".git/objects/e3/b4b93d54f5b73fdcd0028638aac35f9c501764": "3d1b0adce5ca876cb77387c8edb88f16",
".git/objects/e4/3324e47ff67c4020f95b887e4fb68dc1095dfe": "cf5c464180d1f67ef0245ff51679f67e",
".git/objects/fe/260625ae56c47b1ad360c9e4fbfda5f56fcae5": "0cea0f233a4f07684323a1921cab421d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/beafedf3f394f19cd53cdd29a4042c5b989b0a": "859fd0bd36a44c32babf2df5bdbf1beb",
".git/objects/c6/c7185ebb2b5a93f1caa91e8e1bb6c21c24055c": "39a4704d064824b1ce939d77e7afa030",
".git/objects/ec/c800c892fc845933b83bf65442b043fead13cd": "52adbb7bf895d3e00e34995f71b47ebd",
".git/objects/ec/3ae14d092a23b7167926a47a13e635449a9a81": "13e656a8a587e1f5e93fa29faf8d4508",
".git/objects/ec/f3029ad88349b2377393fc6b4d807e0002dc25": "7fc61dd359bde220a36b894367ae471c",
".git/objects/ec/4158b1b9e1d9af0a9073e1a32064c46e7a0f10": "899107d6dd23cd5bbb748cd58ba1e545",
".git/objects/20/393ecf32f7f0ea53a6ed7357782a785b3e5d8f": "304662d3c74ba14392d7f6d172c82271",
".git/objects/20/b8b8c7a78331bd4b1f899e9945f9128f3f5381": "7b7c9d423d5a49dd55790bcca1b6bf5d",
".git/objects/89/76d1b272e230b2a58a55786afc2f26e8fcbfce": "502f2319b4ac31ed4cab30bfe4102cab",
".git/objects/45/f4e4e99053e3e8a9d99a05f75e7a7a61d2929b": "c49e607a02a6040b0de29f17bcb33422",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/87/3a292143970da8ed3a33750ba704733c78878d": "90e3c951c5e841ab620a730466925ae0",
".git/objects/74/c2d82236076707caac1dd14813cdbfc4b3d039": "1e2f26d4d7af38d9cf1db173e2754597",
".git/objects/1a/4cf0ca55b26375e1af599f29a2608ea2e51f1d": "844c041e49cd565d43dc4fa699e6683f",
".git/objects/1a/d7e414f8277113e18224a3a80c939d84c11f1a": "ddaa8dae27f51d9f1617ef005e8d4224",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/edbe7a479a0e94276872041c9db46a1286ded5": "e8a176585f0ef0def82456e4b276bde2",
".git/objects/26/441afd28d8455a950fac2e26dbfcebb35a76c9": "4fc0013313db83add046975eb257f3b6",
".git/objects/21/5c74860f981c9548c5a12381b12d26ec7a12b3": "b737b2181c5e57435db8e02695de006d",
".git/objects/81/4a9af181c6c1e428752a63a38d877e9bff8231": "b4d96fdd00e1f7710936990090c3b2c4",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/72/5d934b43a00f757744e2cae8f2dead0d0cdb88": "d300717c6e9425880e8b6c5852f06e87",
".git/objects/44/57cbce42afdfe59cb6ae8016042b958dd7d24e": "a8acdc6754d4714b2642d5b82a705d36",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f2eef1bb9f1fb13834a53e525c3e8f0b8ea12e": "898a904b702de56b78f2a6d74c8c623e",
".git/objects/9f/aba0194e366c06025e96411caa174dfa9cc672": "03bb2c03ec39ef160762ff7a1d6b34ea",
".git/objects/9f/b4a4ab4a2751ba206f8eebd8db6457cec615f9": "0b425cd8f5522045494adfa371ef7c9a",
".git/objects/9f/33e4f23ce248a64c7746a09a275696062e859f": "2aa9b175effb34f802921694279df1b8",
".git/objects/07/d5e41027a15e19656aafd8af5c3aea635b87ba": "997862d9dd32a734cfe32fe7d14fe095",
".git/objects/38/65c5a9464583dd465db154c798b3513a803740": "80da996dae8ae5fa405fd2c1cccc4543",
".git/objects/36/7f279244ea7bef46d77b63335b060a4b95aef3": "fae78e2a9492faf306d1845586fb11e7",
".git/objects/5d/1241ad2fcf17dd1260ae50f327eecf665ee7d8": "a9f72003db1c38edc9e1934a603c6084",
".git/objects/5d/f36e0d7cccfb4f8027eb362f5db85b7507c469": "95cf0a2e6f6766b34af65427dd7b98af",
".git/objects/31/3ef04e5e61f4860d0315c820d3b9c3a3f23f15": "68258099a3786a32e6684dec9c37dee7",
".git/objects/31/e65f89181d38b78302ac508eb72c2504dde65f": "4e11bf5e7ce5b758f7209ec19fbcabb0",
".git/objects/31/9144f3612c3db1dbc59ca651af8705b5403a5e": "24555f5cb33dd33a3fd03c113a71ea73",
".git/objects/96/8bf9be360dfa3b28071cecc916055501b1f0a9": "97fed224bb423f89d7fe0cdeaf78db3d",
".git/objects/96/ad3d6b3d506341c58355239ca3c86ffe2c4a98": "7574495b7f62341800ba8a02707280d9",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/e809de7762c3d13f0d44c3913e07353eb4ed5e": "d490def156408f451b2e4284ff7913fa",
".git/objects/53/4c3cd5939df2a779efb4eb4943ee398a2ab4f5": "704927f673ed8af268a4559bcca54eea",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/08816f2ff34e3a0683c0340ecd8bae451d8048": "36175f7f6fb8be06bfa77045f2a13b58",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/02c90fc9952e702dae1a17706f8ac968167c08": "313b32a7c7e20d6e447b22e70f5db565",
".git/objects/30/7d5fe99be22dc753bfbfd4dcd882f6cfdd11c8": "bc5d516ff1fa2f391bba9c46c9ed5ca9",
".git/objects/5e/6a1633d86081a3e757f079b5b058c165be5dfd": "2fa8f1a1a901cd40203b11b7e4129a36",
".git/objects/5b/22039aae66cc5a65521a2669535dc9cd77f98d": "651aed9ca6b159e7944cd21507b3f985",
".git/objects/5b/745847f8392d708c6e23f2590deca489e05b9e": "3127b3821edbdf999d45b865d55605fc",
".git/objects/37/2a0b00459b590f7ae475ea1d87e93f79c0c414": "adbd1043fca9e56e5d13e10ecea1c9c9",
".git/objects/37/9525d777e0e735e78aba33b308c8d81dec9e00": "c15b60d4f3a0cdd62c6831e3eeccd65c",
".git/objects/01/7707f6855bba5897b7a9a9d03b1d1eb1d99447": "60efd1b75317415de7797d23a33bee6d",
".git/objects/55/8525ee4881fcb994c86598f2c6997642eb36fe": "06b08a9c7018919c83379e7be06bd943",
".git/objects/d3/dd23b24c7268e9160add82fff74c0ae1e2c129": "d569a40d2d8111644455ce0a87ab0f8a",
".git/objects/d3/488e21095daef77c6f5f846e91f543c0096488": "e4276c3dd770f02e2713680c9ae793df",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/71934301be3a6719209e271799c55e266e7ff3": "b5c8ab461c7fb6bd0c3511888a3a6c8c",
".git/objects/d4/017f73e4bdbc40be200e06fd2acafc0dbb2bf5": "4efb3f7b63be565d18d0a7d6b14f5c79",
".git/objects/a0/456bd5e6b79b96c5ff49d5d37dd9662a243e24": "8f471130336a0d0dfeee6d21005e4f69",
".git/objects/a7/073e3a80ebe3935e516ad3a87fee2a3c117d02": "4908ca444a8c850155435cf311a57e9b",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/45d86cee0f7871b3427ab6b42aa79a1a5f2a64": "69c694754a732b55b47dd44cd489699f",
".git/objects/b6/4a1dac8be6d0619771e859dc889aa563f0c65f": "c09f535605ce8afb3c4257c3d54f798d",
".git/objects/a9/411588ebbdcb5687f7fe4dfedff571784a5d2a": "cf9740d1d40797408ec626fe00b4b0c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/e994e93787617409f815120d0cb0ea405ae318": "473531260fa0cafa4c2b487065d16a33",
".git/objects/a8/8c680c5e78f8cf420a1d4b126f4aaad66eb41b": "b1697b92e0b774d26f64e7b09319fd12",
".git/objects/de/f08d26b3666dfbaf0d290844785b846c5d9af6": "e5d74ca6ef058592bf445711534d782a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b90141db825ea6276fc128d70e304c96c54724": "45cb34c6e682857e2b8c971b5e0b1fd7",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/f23555975b94acc4d2cd303cc3cd0c2f9c058c": "ed0ea06cf3bea555925a7d2f1d8b552d",
".git/objects/ef/8a3afd5f5799198beeaf6f322487afbdf210fb": "ddc21789f7fbe9928bf1691adec9f2e0",
".git/objects/c3/9d7684953562cf9f9d32b5220576bc38b6d87c": "8cce0e32bd9c92ac0ecae729eed88b3b",
".git/objects/c3/b6d935a8d42855864e2f9a2063d922fa545ba8": "847de1c194913ba34a4ba003211e8dac",
".git/objects/c4/3d62312e8ba114f66b84f1a06d9df773fd8c63": "ffceb300d54f300e543838a43aab6bcc",
".git/objects/ea/b19adabc9b0127cbc7e971f342c139575000b1": "055b42cb6ce5ea2d37b4bd473816c590",
".git/objects/e1/2e80a17b32b5959579d65628132021c7865aea": "afaf43a65e75a581b2fb4677b4892cd6",
".git/objects/e1/de2f8584f6231b44a43a473be7bbeb74a6fb27": "3aa8ad7a95324b774c79e6a1e3afcad7",
".git/objects/cd/c4f6fa354a8db6abd15ee8199e88490d5b7821": "302c9b6da19c407e0c33ce847edee63b",
".git/objects/cd/45e2d7400cb79a7b61aae315657b1ad971ff6a": "f6c5c39221f9b1fa83d707c0b4a10f9b",
".git/objects/e6/f0f511bd834aad0bf67855d4f8d1394025f022": "4a8442aeb87f9f2674ed2e022d3c60d7",
".git/objects/fa/43645ef433fa0f42ac51d24ae4567d08c1be6c": "2060648acf6983c32af88faa2dc4b3e8",
".git/objects/c5/eef85fa25f7cc335918e361fa8baeac471cf81": "4fbd866465ded65532c418d4498506d4",
".git/objects/c2/8dcfb29392d34495fecbe16b2906fcb4a2e13c": "c4e1065a731b27fd4e0e330908b82865",
".git/objects/e9/266e87780ed1201d45635e45f278d7200add54": "84e3818f52ac974450eecfe22d1df43b",
".git/objects/f1/29b22d151407f682c496a21e0d9bd89a94b150": "1b1d474a66a1339af1c473428eaf8c0c",
".git/objects/cb/9676b7979b4feb508939770476d0e3a163b52b": "9c42954ed3fe489884e4ca3a519cc954",
".git/objects/f8/2a09855c33de79220a468f4cb0a233fb128add": "48d95734b5f9356b629254d6ef5184bb",
".git/objects/f8/d08ea6024c27a008daf5ad060930574e7ddb35": "15de6d0b41efe692ba0f992aa593e918",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/2c/602421ac42328109732bec7f2ff205fd82992d": "9e95ee885eaf22dd4cfdc3f95bfcf3d8",
".git/objects/2c/bb96ae3767eab7ef7972e5b6bd720c3b53774c": "74efb4c522bffe219ea3e9cb9691bac9",
".git/objects/48/9751c1aa376e1ccfae7b393ee038c720e9b936": "231add3b35cf785f4579ddcfba79e3d6",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/1e/da4b499518f611a5b34f8e5463eae58f7d2c4d": "ca257dee72e2a15251d22a2ed01fbac0",
".git/objects/84/37495bfbc948aa6e762b605bcc9647f0414655": "758cfebd41e76e2e8744d98e3f1480f1",
".git/objects/4a/3d5322493d8393eff277d81c2c8563397f188d": "d9999a3f3847905bc2e63ed837f4481f",
".git/objects/8d/c902188ed3fa2082d22a4c59eb534355fc3187": "1dac29a8981bef28d8d117b1ac2cb1a2",
".git/objects/8d/321bc6bbb325be0275be8f91592dca7df71d1c": "6a8a6dd2e8fedec55aba34f6fe929d8d",
".git/objects/71/3e30ae5bef48a3f59520d3d7ac991651f274a7": "7ce8121241ef02a303986e108a54d3cb",
".git/objects/78/961b7733884905af3cfc8ab2f2185901896c1d": "3d2f5e7081c14a99a8814aca3d7e06f9",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/13/dd291aa827219eecb4a0be791d680d208c7dda": "2e3baba000f0a321a624e8f205ba80b0",
".git/objects/8e/bf0eac99ba3882bd82e2092eb2c6e5014cdda4": "3355b657b6c87da3dc653c5c12303bbb",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef10421b1b1b84b034383fdc897a03f3",
".git/logs/refs/heads/gh-pages": "ef10421b1b1b84b034383fdc897a03f3",
".git/logs/refs/remotes/origin/gh-pages": "ac5bac1845c7778815faf15f3b3fec2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "ea2d07882c19edc7aa9dff5e50ca0857",
".git/refs/remotes/origin/gh-pages": "ea2d07882c19edc7aa9dff5e50ca0857",
".git/index": "bb6f27160953eebc605ccc3a1fdab20e",
".git/COMMIT_EDITMSG": "b3c5474fba7ec985713691650edb3415",
"assets/AssetManifest.json": "79cfb4b5817335652e64ce597cf212e9",
"assets/NOTICES": "72446125a181a6a900de561abf9d1228",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "6fba4d971637bc6487f23e061570fceb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "234b2be9fd04e45fe5f32d861d1b6fa2",
"assets/fonts/MaterialIcons-Regular.otf": "2418186ec5775fa365b9e9bc1bfa92ea",
"assets/assets/images/yongnam.jpg": "7c8e61ad61e8f406ccc02d1543b0e86b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
