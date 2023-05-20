'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "40b662c684deef08809594e930b35b84",
"favicon.ico": "ddefe9599915b0e04b13679fd6fdba53",
"index.html": "6364525569ac3a740313273e32a32fac",
"/": "6364525569ac3a740313273e32a32fac",
"main.dart.js": "f7177e5f3b48bb45b1e0ee4ad79497e1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "08411b277237864c804720fa0996fcb9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "348e7d07ea173e01ef6ffef6bef1c98b",
"manifest.json": "b446d5d3c9d4b1d7fdc97e1104f6fd47",
"assets/AssetManifest.json": "6c9d6c19fcd38bc7b3b677e764476b62",
"assets/NOTICES": "3b516430a8a9a15a915e85942b396891",
"assets/FontManifest.json": "d7ea96ea7195f2a5c926735066434ef6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/image_01.png": "a299c520f67de8b3642ff90f910ae81b",
"assets/assets/image/item1.png": "26704bef75d061f8eab7d03b26505ebc",
"assets/assets/image/design.png": "756c4891b30577f18fff2d22aeb95747",
"assets/assets/image/item2.png": "3025a0d2928f8c0b33d20b8852dc4cef",
"assets/assets/image/item3.png": "4017e66bb1d7465211d643eb2b8fb4c3",
"assets/assets/image/serviceImage.png": "02913eb1f5e758634a66599b40802ffa",
"assets/assets/image/crypto.png": "af60c5d065c5aa46cbc598675aa5cdb5",
"assets/assets/image/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/assets/image/item4.png": "1dd07011bad300a96047b11247cf0e07",
"assets/assets/image/profile1.jpeg": "9a7e74c0ad5cd74ae3d31f2b77a78696",
"assets/assets/image/foodie.png": "3021ff5ee7a36e6502b0c0c80e02b659",
"assets/assets/image/headerPortofolio.png": "16f85ea64a3e2fc5f0839f2a1aaf15cb",
"assets/assets/image/recipes.png": "a3df8630fe5a0488b0be34c31a209ae7",
"assets/assets/image/services.png": "41b9a79de1e585aa3dffb173b7b4369c",
"assets/assets/image/imageHeader.png": "4ecc8213108fcd282c98e758595dbb13",
"assets/assets/image/porto.png": "75b8c59367f973d75f12406f3b852210",
"assets/assets/image/circle.png": "3a632d3b4aab822745a86189e75cd4a4",
"assets/assets/image/porto2.png": "7097d958ac0dcb69f76b5449d4a7b2ed",
"assets/assets/image/itemWhite3.png": "cc4afc1538b4f61fde5cd2fa6acb86ce",
"assets/assets/image/itemWhite2.png": "b6bd8374c23eb0f83cd4d27d073c456b",
"assets/assets/image/porto3.png": "442fbbbe74911791b9b08dee873c9ed4",
"assets/assets/image/menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"assets/assets/image/porto1.png": "59355869afae523d73ff71b0fcf8d6e5",
"assets/assets/image/blob.png": "03b81dc4f8534087ccb35e894dc6c94c",
"assets/assets/image/grocery.png": "57581d15c4949526f7c38e706f840158",
"assets/assets/image/itemWhite1.png": "91cc5cd87286733a7f79873fc60a8c50",
"assets/assets/image/strategy.jpeg": "2a91e52d9a37d372ad441039def1d466",
"assets/assets/image/logo.png": "ebef15eec14cc55b8ff1b8b2ddecdcce",
"assets/assets/image/team.jpeg": "0d7758b28e52b1343852b8566985766f",
"assets/assets/image/porto4.png": "d14acb9eeed60ae7c16f65015ee0ca57",
"assets/assets/image/design.jpeg": "59025d3e338842c3647eca9bf5b6cda2",
"assets/assets/image/itemWhite4.png": "d755b8a587ef320378ef2cad404e787f",
"assets/assets/image/porto5.png": "9aaa4213844ba8bd26847650fdb77f2d",
"assets/assets/image/contactus.png": "3921e8c25707f1c631898c790e439788",
"assets/assets/image/profile4.png": "368b5b1b052f8c85ccae1fbdf5df8c80",
"assets/assets/image/profile2.jpeg": "c938a337b0d6697610dd3cc98279496b",
"assets/assets/image/sent.png": "a76dea49fba5b97bf9504db741d38356",
"assets/assets/image/bug.png": "8514f35f000de5ab1ce8f7eeea799a0a",
"assets/assets/image/profile5.png": "46c4e55a75b3f866a8b665ed12758d7e",
"assets/assets/image/profile6.png": "a59bc966a09214bfaa00f2522cb84b44",
"assets/assets/image/profile2.png": "f13fc610f2f8107a6d7b388f142ead96",
"assets/assets/image/ai.png": "bcb008c3f2e0565ddb48c66e17dbc442",
"assets/assets/image/develop.jpeg": "9cee3d47eb01311d7b0c7739b971884d",
"assets/assets/image/profile3.png": "30d12443dbba81a5e49eeedc56d679f7",
"assets/assets/image/profile1.png": "dd73935d3a0c0c102b67bcedd8afda12",
"assets/assets/image/coding.png": "2641d2864726d97c04c5879f86a20bcb",
"assets/assets/image/profile3.jpeg": "750ab0dfa2d946863a30d93f0fd343ba",
"assets/assets/font/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/font/Lemon-Regular.ttf": "758546ad186e3d78f799269ccf6fdf54",
"assets/assets/font/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/font/hiraminpro-w3.otf": "3fabfe5faf69d7514122ef7c61d9e62c",
"assets/assets/font/Poppins/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/font/Poppins/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/font/Poppins/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/font/Poppins/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/font/Poppins/Poppins-Thin.otf": "21792aea22dc450c1b24a2ffc656f6e0",
"assets/assets/font/Poppins/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/font/Poppins/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/font/Poppins/Poppins-ExtraBold.otf": "162a9aeb6c2ca8567f36a62f0d06da07",
"assets/assets/font/Sofia/SofiaProMedium.otf": "b307c6ce73c3d573c228ecd5de070f45",
"assets/assets/font/Sofia/SofiaProSemiBold.otf": "a57bde9593a32d99ff54c3716859cc19",
"assets/assets/font/Sofia/SofiaProBold.otf": "28b75bc6b4d35b59ecf476db59bc4ecf",
"assets/assets/font/Sofia/SofiaProLight.otf": "52fa5a506994382612ed5936f1e94660",
"assets/assets/font/Sofia/SofiaProUltraLight.otf": "4bdc72d871a96c7a9bf467f5d5cff5f0",
"assets/assets/font/Sofia/SofiaProRegular.otf": "bd0a6d0d1ce78e95fb1629450636bc6f",
"assets/assets/font/Sofia/SofiaProExtraLight.otf": "8b590b229ee431c83a27e8930ad80781",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
