/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8c6a52c85f8b3edbdaf290b1a07a7fd"
  },
  {
    "url": "assets/css/0.styles.8537d5c7.css",
    "revision": "c6a411343964c68644d71943e5752df9"
  },
  {
    "url": "assets/img/debug1.e0558161.png",
    "revision": "e0558161c8a4d6f9025b4d108d228c79"
  },
  {
    "url": "assets/img/debug2.dad21bcb.png",
    "revision": "dad21bcbfb150d7fb23bf3c56f9983e1"
  },
  {
    "url": "assets/img/debug3.4ca776bd.png",
    "revision": "4ca776bdc93fa206695d782b47506e1f"
  },
  {
    "url": "assets/img/debug4.d151af65.png",
    "revision": "d151af651ce7cb3bc802622df624e56b"
  },
  {
    "url": "assets/img/debug5.ac2292fe.png",
    "revision": "ac2292fecfd099b227da2570b238d503"
  },
  {
    "url": "assets/img/debug6.936135ed.png",
    "revision": "936135ed4f99df636460357bb7bdcaf8"
  },
  {
    "url": "assets/img/el-tree-disabled-all.e7d1a06b.gif",
    "revision": "e7d1a06bba6660947c90abcc99bf10ba"
  },
  {
    "url": "assets/img/htop.87e6c840.png",
    "revision": "87e6c8406cfa9f040772fe424c3ed182"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zsh-after.53be29d3.png",
    "revision": "53be29d35dede83b9b94397b7571ae71"
  },
  {
    "url": "assets/img/zsh-before.21757f06.png",
    "revision": "21757f06a8faa44a824aa2e1cff4849e"
  },
  {
    "url": "assets/img/zsh-plugins.d2f0e132.png",
    "revision": "d2f0e1320da0d642504fae1e08b1784e"
  },
  {
    "url": "assets/img/zsh-theme.626e5ad4.png",
    "revision": "626e5ad42177fd63db0c1957c74b5d8e"
  },
  {
    "url": "assets/js/1.6b0214e0.js",
    "revision": "b4692f447f2b51f03198946be9845939"
  },
  {
    "url": "assets/js/10.25d44abd.js",
    "revision": "14a3220cb0efa2f930e6d3e334421499"
  },
  {
    "url": "assets/js/11.17bf8742.js",
    "revision": "ac3140df8be23ec4594a81cb12fc3ca0"
  },
  {
    "url": "assets/js/12.e794da73.js",
    "revision": "247aecfae1c050949f5cd6e602533b7e"
  },
  {
    "url": "assets/js/13.7529065b.js",
    "revision": "90d69af34b479a7306ee9a06f7e3b126"
  },
  {
    "url": "assets/js/14.1919cef4.js",
    "revision": "b7c526df07e4d2e897894c164958a259"
  },
  {
    "url": "assets/js/15.7925328d.js",
    "revision": "89b074004c90e1a3db8cef16069d7b53"
  },
  {
    "url": "assets/js/16.c7db9732.js",
    "revision": "df93d41103ef8837b6aab517549751ee"
  },
  {
    "url": "assets/js/17.c54f0b4f.js",
    "revision": "c5a90accc52acafb985f094c82664539"
  },
  {
    "url": "assets/js/18.1719a763.js",
    "revision": "19ff8bbb361fe6b942daf7f775f81198"
  },
  {
    "url": "assets/js/2.7c95bd33.js",
    "revision": "88feefd1b42e8ba3a71174b9dacc02b9"
  },
  {
    "url": "assets/js/3.4efa66e3.js",
    "revision": "e497d57ec4b0f017c79ff75a9bc8ebcc"
  },
  {
    "url": "assets/js/4.ac578b4c.js",
    "revision": "7c4a995b9c314a5a7546396d23fd7169"
  },
  {
    "url": "assets/js/5.5610b106.js",
    "revision": "b41302e01b795967f989fb49c9afa189"
  },
  {
    "url": "assets/js/6.e1baa7de.js",
    "revision": "77fdb761782261320729dd009e9f556a"
  },
  {
    "url": "assets/js/7.2b83ac38.js",
    "revision": "be4acfe918b9680dcff7f57ca935c566"
  },
  {
    "url": "assets/js/8.e4ae1ac6.js",
    "revision": "d61f7c098c4831c52d6a22e789687dc5"
  },
  {
    "url": "assets/js/9.5bb91b6c.js",
    "revision": "8d08df57c98f793e71bafa8c162b3306"
  },
  {
    "url": "assets/js/app.52dbb9c1.js",
    "revision": "c67fc9aeb30ae4e8d02bbbf5395c764c"
  },
  {
    "url": "buddy-logos/logos/100tb.svg",
    "revision": "7fa8ad048a197798149605ab1676d0e3"
  },
  {
    "url": "buddy-logos/logos/500px.svg",
    "revision": "2a89cd65cde685a75efabe2a0a541d8b"
  },
  {
    "url": "buddy-logos/logos/6px.svg",
    "revision": "11692269ac5a0e16840c9c566ba1945e"
  },
  {
    "url": "buddy-logos/logos/admob.svg",
    "revision": "8d1c38d9f559afd7f39d35c63df8a8ab"
  },
  {
    "url": "buddy-logos/logos/adroll.svg",
    "revision": "e437043fa7f46815143685ff8b039f92"
  },
  {
    "url": "buddy-logos/logos/adyen.svg",
    "revision": "a200c09709a49cae1930f246c451011a"
  },
  {
    "url": "buddy-logos/logos/aerospike.svg",
    "revision": "1a4806e02079aa524674106ad29c6695"
  },
  {
    "url": "buddy-logos/logos/airbnb.svg",
    "revision": "8ca13c354d28a9850f0ad7a090b0da30"
  },
  {
    "url": "buddy-logos/logos/airbrake.svg",
    "revision": "1b0e0e076cfd6fcb416dc4422b7906f1"
  },
  {
    "url": "buddy-logos/logos/airflow.svg",
    "revision": "2e0323932d3b0b8d3c749cd4370b3b21"
  },
  {
    "url": "buddy-logos/logos/airtable.svg",
    "revision": "ed8b957ab62abbb3060ce81c162fc550"
  },
  {
    "url": "buddy-logos/logos/akamai.svg",
    "revision": "35e4f028722573d7d3588ed8a81c92fb"
  },
  {
    "url": "buddy-logos/logos/akka.svg",
    "revision": "90e6402f339191c14b681cc2b227b5c6"
  },
  {
    "url": "buddy-logos/logos/alfresco.svg",
    "revision": "1db558726d0a5821daf1b252366972c8"
  },
  {
    "url": "buddy-logos/logos/algolia.svg",
    "revision": "a1ceea802f741cd2652a1d51679ac445"
  },
  {
    "url": "buddy-logos/logos/altair.svg",
    "revision": "a48e790d607573535d3b68efc5482ba0"
  },
  {
    "url": "buddy-logos/logos/amazon-chime.svg",
    "revision": "e512fc1b2c3598b034cc73189663c1c4"
  },
  {
    "url": "buddy-logos/logos/amazon-connect.svg",
    "revision": "a2f84639ea68a0251dbf3e59072a448d"
  },
  {
    "url": "buddy-logos/logos/amex.svg",
    "revision": "870bc143eeef79609d9d8e0612ca64f0"
  },
  {
    "url": "buddy-logos/logos/ampersand.svg",
    "revision": "d3367fc40c144d8e4496aac6d6a8cc95"
  },
  {
    "url": "buddy-logos/logos/android-icon.svg",
    "revision": "7652f8eb0d9cd8088a4ba95d2bade8df"
  },
  {
    "url": "buddy-logos/logos/android.svg",
    "revision": "b023b951dcbe1dc71bce7715c917a1f6"
  },
  {
    "url": "buddy-logos/logos/angellist.svg",
    "revision": "8ba8528ce2dee521723e3e9023ac2c07"
  },
  {
    "url": "buddy-logos/logos/angular-icon.svg",
    "revision": "e224f5ed261735072b00bdb3bae20cbd"
  },
  {
    "url": "buddy-logos/logos/angular.svg",
    "revision": "4271ed1718522446024f6aa28a385fb8"
  },
  {
    "url": "buddy-logos/logos/ansible.svg",
    "revision": "1a2cc8ae790ec60c0d233e2afe31cb67"
  },
  {
    "url": "buddy-logos/logos/apache_cloudstack.svg",
    "revision": "59ab05c5839fbf9f52791cde00bfe0d3"
  },
  {
    "url": "buddy-logos/logos/apache.svg",
    "revision": "12c493545aad44a15818e8186537df88"
  },
  {
    "url": "buddy-logos/logos/api-ai.svg",
    "revision": "43fe83285b1ce936b95dd1861aef0510"
  },
  {
    "url": "buddy-logos/logos/apiary.svg",
    "revision": "22e7a447f26044dae524bb3d6bee66cb"
  },
  {
    "url": "buddy-logos/logos/apigee.svg",
    "revision": "183e9ac1a39cdfcaf8a584352298c895"
  },
  {
    "url": "buddy-logos/logos/apitools.svg",
    "revision": "dc4e8a901bf08a3dfdba92ed27a76d21"
  },
  {
    "url": "buddy-logos/logos/apollostack.svg",
    "revision": "535a4be75ce034e4c351611caae9b907"
  },
  {
    "url": "buddy-logos/logos/appbase.svg",
    "revision": "8dc329c7daec01478efd15588911d448"
  },
  {
    "url": "buddy-logos/logos/appcelerator.svg",
    "revision": "0d8ed7edd654aa8571bf905cd0587055"
  },
  {
    "url": "buddy-logos/logos/appcode.svg",
    "revision": "1f4aaad7eec986ce30b3a38cb5b5a314"
  },
  {
    "url": "buddy-logos/logos/appdynamics.svg",
    "revision": "48a09c883b8059a20c64d21ac3a096dd"
  },
  {
    "url": "buddy-logos/logos/appfog.svg",
    "revision": "91c8bb3a0dce112b4c14f5e7c48259b5"
  },
  {
    "url": "buddy-logos/logos/apphub.svg",
    "revision": "65d51829b60818cb265c3c9ae48ced8d"
  },
  {
    "url": "buddy-logos/logos/appium.svg",
    "revision": "093183e20dac8c5d7fe24bba16f417d9"
  },
  {
    "url": "buddy-logos/logos/apple-pay.svg",
    "revision": "31a2ff95c9f101a17bda977d80b70c23"
  },
  {
    "url": "buddy-logos/logos/apple.svg",
    "revision": "060a28b311ab9255b3a14e47b0f14198"
  },
  {
    "url": "buddy-logos/logos/appmaker.svg",
    "revision": "2a46c07fc9f6aabaf3e32ea9188c1c5c"
  },
  {
    "url": "buddy-logos/logos/apportable.svg",
    "revision": "b41afa40b810d29c704c4c36d462a273"
  },
  {
    "url": "buddy-logos/logos/appsignal.svg",
    "revision": "5044c7141a4731cea91938a30c2397a2"
  },
  {
    "url": "buddy-logos/logos/apptentive.svg",
    "revision": "dead905d456ea436baff5b05e194be62"
  },
  {
    "url": "buddy-logos/logos/appveyor.svg",
    "revision": "813ec22ddc536b530ab1e84e047a96d3"
  },
  {
    "url": "buddy-logos/logos/arangodb.svg",
    "revision": "a181d3ca775b7dba0d69ed870989c43d"
  },
  {
    "url": "buddy-logos/logos/archlinux.svg",
    "revision": "9162e49dac3240b91f2792fb58109a6d"
  },
  {
    "url": "buddy-logos/logos/arduino.svg",
    "revision": "e55b960eb7752c3612e49261c21b171d"
  },
  {
    "url": "buddy-logos/logos/armory.svg",
    "revision": "d0221abca82dadb0175a5316e84c813e"
  },
  {
    "url": "buddy-logos/logos/asana.svg",
    "revision": "4a6e455537cde1451f06bdfb7c1cedd6"
  },
  {
    "url": "buddy-logos/logos/astronomer.svg",
    "revision": "6b18e5292fa9a585b95ea64ccb897240"
  },
  {
    "url": "buddy-logos/logos/atlassian.svg",
    "revision": "3aa135224af2c558c28efc5a2f1e3985"
  },
  {
    "url": "buddy-logos/logos/atom.svg",
    "revision": "455ec9269fe57cd582e54d15f42a1c92"
  },
  {
    "url": "buddy-logos/logos/atomic.svg",
    "revision": "2af785ccca22db91453e236867f29a14"
  },
  {
    "url": "buddy-logos/logos/aurelia.svg",
    "revision": "7c5c897172b3bae3d9597650e2402c9b"
  },
  {
    "url": "buddy-logos/logos/aurora.svg",
    "revision": "d063fb4f7fe219c6a79a20c8302f7873"
  },
  {
    "url": "buddy-logos/logos/aurous.svg",
    "revision": "ce8daca1024edeea1b62c4449c0be71c"
  },
  {
    "url": "buddy-logos/logos/auth0.svg",
    "revision": "83b74166b8a446a34c35e27ba511cd9a"
  },
  {
    "url": "buddy-logos/logos/authy.svg",
    "revision": "0db5784cbb0b70730f05ad2091cce1ec"
  },
  {
    "url": "buddy-logos/logos/autocode.svg",
    "revision": "7da43be3cea5a4f4b2406da4bee50d00"
  },
  {
    "url": "buddy-logos/logos/autoit.svg",
    "revision": "6ac45a7b2ec62dd9275b8c4736ade73b"
  },
  {
    "url": "buddy-logos/logos/autoprefixer.svg",
    "revision": "8a905a8b045ee5add03fd4af608d868c"
  },
  {
    "url": "buddy-logos/logos/ava.svg",
    "revision": "15bb925ccebed3e1d7980cbed6d7461b"
  },
  {
    "url": "buddy-logos/logos/awesome.svg",
    "revision": "430c187d073f8120df68e3d25da28536"
  },
  {
    "url": "buddy-logos/logos/aws-api-gateway.svg",
    "revision": "499eb6fef5e63dd475a4fdf67e085b08"
  },
  {
    "url": "buddy-logos/logos/aws-cloudformation.svg",
    "revision": "bb90f126afee72883a98238019f653b9"
  },
  {
    "url": "buddy-logos/logos/aws-cloudfront.svg",
    "revision": "11957c96c3c9d8b19f5d1425e936c588"
  },
  {
    "url": "buddy-logos/logos/aws-cloudsearch.svg",
    "revision": "1a9a657ba21f3e1d6c75f6218005c7fc"
  },
  {
    "url": "buddy-logos/logos/aws-cloudwatch.svg",
    "revision": "0922c2910e82fab31cae69118e0858a3"
  },
  {
    "url": "buddy-logos/logos/aws-codedeploy.svg",
    "revision": "49b5ca989cb59b660079b09282a3a7c7"
  },
  {
    "url": "buddy-logos/logos/aws-cognito.svg",
    "revision": "76edaec0dc96b763eae6b24335c91a6e"
  },
  {
    "url": "buddy-logos/logos/aws-dynamodb.svg",
    "revision": "b2485a02291d3f790881a893fc598bf8"
  },
  {
    "url": "buddy-logos/logos/aws-ec2.svg",
    "revision": "54c02a962f82ca2ea30e9271cf71b6d6"
  },
  {
    "url": "buddy-logos/logos/aws-elastic-cache.svg",
    "revision": "9470126fb650d6010ab0b1b9c3bf9170"
  },
  {
    "url": "buddy-logos/logos/aws-glacier.svg",
    "revision": "ac6e74e98e3fc665f3f421673e29579d"
  },
  {
    "url": "buddy-logos/logos/aws-iam.svg",
    "revision": "dcd774823375cae360b9048d7f5222a2"
  },
  {
    "url": "buddy-logos/logos/aws-kinesis.svg",
    "revision": "4f703f2ce1d0435f5d6310e4464081e7"
  },
  {
    "url": "buddy-logos/logos/aws-lambda.svg",
    "revision": "5bf9db5e954361d72cca210dbfb85795"
  },
  {
    "url": "buddy-logos/logos/aws-mobilehub.svg",
    "revision": "90783fe5853dd294e593d270eaaa50c2"
  },
  {
    "url": "buddy-logos/logos/aws-opsworks.svg",
    "revision": "985144e5c20a6fcdf3f3c1d0c718e9b2"
  },
  {
    "url": "buddy-logos/logos/aws-quicksight.svg",
    "revision": "e65047a6b4f2ed1a4c7fc87ec0694fe2"
  },
  {
    "url": "buddy-logos/logos/aws-rds.svg",
    "revision": "01f1ffe23faeb28753a33e96730cfa9c"
  },
  {
    "url": "buddy-logos/logos/aws-route53.svg",
    "revision": "67031afb934371ad4b6ff23358f5484a"
  },
  {
    "url": "buddy-logos/logos/aws-s3.svg",
    "revision": "a34ec4d2bd0e27206dbacfee133aa68c"
  },
  {
    "url": "buddy-logos/logos/aws-ses.svg",
    "revision": "f3b1603b7aac389cfd36853610f9d133"
  },
  {
    "url": "buddy-logos/logos/aws-sns.svg",
    "revision": "823048b793c912a77775256419df5497"
  },
  {
    "url": "buddy-logos/logos/aws-sqs.svg",
    "revision": "52e0a9090b3a0625864e5ff1c17f5a54"
  },
  {
    "url": "buddy-logos/logos/aws-waf.svg",
    "revision": "e0db62f753b1a975b7d3d41973920c89"
  },
  {
    "url": "buddy-logos/logos/aws.svg",
    "revision": "5594e8bc885617ae889a5de38d26203b"
  },
  {
    "url": "buddy-logos/logos/azure.svg",
    "revision": "94f325e1662a6906a86889056fcf3f12"
  },
  {
    "url": "buddy-logos/logos/babel.svg",
    "revision": "d255e75f6f38e21bc5b17f296248339c"
  },
  {
    "url": "buddy-logos/logos/backbone-icon.svg",
    "revision": "0fc33c70f16c988a6b2d18cbced3d65a"
  },
  {
    "url": "buddy-logos/logos/backbone.svg",
    "revision": "9ae1e83902be804d8e88dd12fde45b15"
  },
  {
    "url": "buddy-logos/logos/backerkit.svg",
    "revision": "6e49e57e990ca20469203b4ac93d7867"
  },
  {
    "url": "buddy-logos/logos/baker-street.svg",
    "revision": "dc78f4e96986787cf46fe05e2018e59b"
  },
  {
    "url": "buddy-logos/logos/base.svg",
    "revision": "be3babf311a44d56a9e90e96fd2884b8"
  },
  {
    "url": "buddy-logos/logos/basecamp.svg",
    "revision": "bd8df0186a44aa3bc638d7497a8413c6"
  },
  {
    "url": "buddy-logos/logos/basekit.svg",
    "revision": "fb10e329cfe346c1efe50a609eea0550"
  },
  {
    "url": "buddy-logos/logos/bash.svg",
    "revision": "4a7ad5fbaf1cf4f6acd5f727d1bbbf28"
  },
  {
    "url": "buddy-logos/logos/batch.svg",
    "revision": "8b03dee25ff5c43531d1a3249ae896fe"
  },
  {
    "url": "buddy-logos/logos/behance.svg",
    "revision": "e62836624d4e39c48f439c0d45de4f40"
  },
  {
    "url": "buddy-logos/logos/bem-2.svg",
    "revision": "13b002114e9996a777d16aa141c4ce14"
  },
  {
    "url": "buddy-logos/logos/bem.svg",
    "revision": "3c076a61dbe43e496d59ee8a6590dac9"
  },
  {
    "url": "buddy-logos/logos/bigpanda.svg",
    "revision": "8b8e299cc48248764d4a99baf94028a5"
  },
  {
    "url": "buddy-logos/logos/bing.svg",
    "revision": "b37181ea324fdad97b0b9d7575a4acbd"
  },
  {
    "url": "buddy-logos/logos/bitballoon.svg",
    "revision": "0b7886cb4edb4b2549216e649ca617de"
  },
  {
    "url": "buddy-logos/logos/bitbucket.svg",
    "revision": "89d343f5efe6c351fcd6c00871221bb0"
  },
  {
    "url": "buddy-logos/logos/bitcoin.svg",
    "revision": "bc37d65cf7156365883ed62da7647cff"
  },
  {
    "url": "buddy-logos/logos/bitnami.svg",
    "revision": "e18a66bfef6c15032d889ca62efb4e3b"
  },
  {
    "url": "buddy-logos/logos/bitrise.svg",
    "revision": "d3498b27709f2b59c87756084836c64b"
  },
  {
    "url": "buddy-logos/logos/blocs.svg",
    "revision": "f95bc160555ebd72827da87487f88153"
  },
  {
    "url": "buddy-logos/logos/blogger.svg",
    "revision": "723df214b7e465feccb8b3d2818774b3"
  },
  {
    "url": "buddy-logos/logos/blossom.svg",
    "revision": "358643be91536ddb89e88a9d733666f3"
  },
  {
    "url": "buddy-logos/logos/bluemix.svg",
    "revision": "1545972713c15b356c320f8e4a0efe24"
  },
  {
    "url": "buddy-logos/logos/blueprint.svg",
    "revision": "5dc48fc6747b5e50209fc59fe9f0b65e"
  },
  {
    "url": "buddy-logos/logos/bluetooth.svg",
    "revision": "1f8c6ac3911b741d9172d196e14b941f"
  },
  {
    "url": "buddy-logos/logos/bootstrap.svg",
    "revision": "71e42b5a8d6c0d6628ec8840cc4030e9"
  },
  {
    "url": "buddy-logos/logos/bosun.svg",
    "revision": "3487cecc0ca973a5b1e2960049fcc8e2"
  },
  {
    "url": "buddy-logos/logos/botanalytics.svg",
    "revision": "bd5c198330a837131eb71739f9846614"
  },
  {
    "url": "buddy-logos/logos/bourbon.svg",
    "revision": "faa4a0843aecefc782f3b3c113a37f3f"
  },
  {
    "url": "buddy-logos/logos/bower.svg",
    "revision": "2aff8e66261ead34b0bf666d1ad10346"
  },
  {
    "url": "buddy-logos/logos/bowtie.svg",
    "revision": "e2ef63541eda263995c761c30cc7b99f"
  },
  {
    "url": "buddy-logos/logos/box.svg",
    "revision": "37e6829d6165e67418aaf42ce33ff68a"
  },
  {
    "url": "buddy-logos/logos/brackets.svg",
    "revision": "f85a59a9c76cbefd1195e83079fa7d2b"
  },
  {
    "url": "buddy-logos/logos/branch.svg",
    "revision": "eaeb8210635998ed52e2c70933bb56fa"
  },
  {
    "url": "buddy-logos/logos/brandfolder.svg",
    "revision": "516c07b5b0f1cad9086c680b37b3a310"
  },
  {
    "url": "buddy-logos/logos/brave.svg",
    "revision": "498c89298f226092d0f64b99f9a81d8a"
  },
  {
    "url": "buddy-logos/logos/braze.svg",
    "revision": "ec6419fecdf1fb48824724c5eaff4c7a"
  },
  {
    "url": "buddy-logos/logos/broccoli.svg",
    "revision": "784308421ae4a844e3d0c4dcfbe19aa2"
  },
  {
    "url": "buddy-logos/logos/brotli.svg",
    "revision": "b49e777a1eb3b44a7ee00a7ea5a0f6a8"
  },
  {
    "url": "buddy-logos/logos/browserify-icon.svg",
    "revision": "c18a4d86ff0439f1cae0182e26036d43"
  },
  {
    "url": "buddy-logos/logos/browserify.svg",
    "revision": "4bc2052f85b57a1a1ea9646964148407"
  },
  {
    "url": "buddy-logos/logos/browserling.svg",
    "revision": "1666150b0ad48b87a5a4636f0bb06c4f"
  },
  {
    "url": "buddy-logos/logos/browserslist.svg",
    "revision": "b79acf21d24500f827fb2fad3f96a5ab"
  },
  {
    "url": "buddy-logos/logos/browserstack.svg",
    "revision": "d5ac7014c37fd6213a61481f1948cb9d"
  },
  {
    "url": "buddy-logos/logos/browsersync.svg",
    "revision": "b7e809d7f10428822773d35eca64db65"
  },
  {
    "url": "buddy-logos/logos/brunch.svg",
    "revision": "0a36f2c63ea26781fdd4992ec032d718"
  },
  {
    "url": "buddy-logos/logos/buck.svg",
    "revision": "6ab2e040ef1cf11e01ab889a4a0e1667"
  },
  {
    "url": "buddy-logos/logos/buddy.svg",
    "revision": "6415b50df5c3c25fe146a197211003ca"
  },
  {
    "url": "buddy-logos/logos/buffer.svg",
    "revision": "f94bc5f1a48f7a45f1f00416e9a1fc00"
  },
  {
    "url": "buddy-logos/logos/bugherd.svg",
    "revision": "e396ac29c8571f675a8c98848003686e"
  },
  {
    "url": "buddy-logos/logos/bugsee.svg",
    "revision": "d819742151f2774ac6e27716c8c9a154"
  },
  {
    "url": "buddy-logos/logos/bugsnag.svg",
    "revision": "396dc6f8fb5434fa54c7260b9a1ed97f"
  },
  {
    "url": "buddy-logos/logos/c.svg",
    "revision": "65aa0b061fe9bf7f1f17b975e3958298"
  },
  {
    "url": "buddy-logos/logos/c++.svg",
    "revision": "c64a068ead3cf3210c7608cea6018583"
  },
  {
    "url": "buddy-logos/logos/cachet.svg",
    "revision": "924d6d5a764e1e19ef2d55172c5e26b7"
  },
  {
    "url": "buddy-logos/logos/caffe2.svg",
    "revision": "4bb2a07c1e9be3eb296709be468534f2"
  },
  {
    "url": "buddy-logos/logos/cakephp.svg",
    "revision": "d884e9b594ce93589648a073edf60cea"
  },
  {
    "url": "buddy-logos/logos/campaignmonitor.svg",
    "revision": "b6afae1ba9b7abc498d20ed54a35e226"
  },
  {
    "url": "buddy-logos/logos/campfire.svg",
    "revision": "a454608b46e38397e15ad7951bdea78e"
  },
  {
    "url": "buddy-logos/logos/canjs.svg",
    "revision": "4a6da1cb94c48d943b117bd9f9d61ca8"
  },
  {
    "url": "buddy-logos/logos/capistrano.svg",
    "revision": "9883269005403eea542271bf16c0737b"
  },
  {
    "url": "buddy-logos/logos/carbide.svg",
    "revision": "a21c642244b3e94a320ec2e4e7123a4e"
  },
  {
    "url": "buddy-logos/logos/cassandra.svg",
    "revision": "55bc873b3c0bf64964c18d46fdb4d6ca"
  },
  {
    "url": "buddy-logos/logos/celluloid.svg",
    "revision": "a57f6fac10b7c3929797081b5fa09d1a"
  },
  {
    "url": "buddy-logos/logos/centos-icon.svg",
    "revision": "1fadafda9ffe42814365a1e628ebc5c4"
  },
  {
    "url": "buddy-logos/logos/centos.svg",
    "revision": "5634c5f4bfd03d2936bd1ecb8a53e0e3"
  },
  {
    "url": "buddy-logos/logos/certbot.svg",
    "revision": "262f2c6699f11245bdd91a8242ec55ca"
  },
  {
    "url": "buddy-logos/logos/chai.svg",
    "revision": "3999808bb0ecfefd39a0a91e0e1caa5e"
  },
  {
    "url": "buddy-logos/logos/chalk.svg",
    "revision": "fcbac3721437c1ef019b1130d001ceb7"
  },
  {
    "url": "buddy-logos/logos/changetip.svg",
    "revision": "7e15557bb77bfab858e0c165cb011462"
  },
  {
    "url": "buddy-logos/logos/chartblocks.svg",
    "revision": "3b8fce9d53e5221fa0d036f82fd82b88"
  },
  {
    "url": "buddy-logos/logos/chef.svg",
    "revision": "2be40cd03cc58ac1f58e4deb8d4e788a"
  },
  {
    "url": "buddy-logos/logos/chevereto.svg",
    "revision": "c6e3776314889e83c8c7569fc689493e"
  },
  {
    "url": "buddy-logos/logos/chrome.svg",
    "revision": "58d2fa44d503bff4b6a0293fc0eac7c4"
  },
  {
    "url": "buddy-logos/logos/circleci.svg",
    "revision": "7e1bacbb6149670ecc851c1687c14007"
  },
  {
    "url": "buddy-logos/logos/cirrus.svg",
    "revision": "0883e8615cbdc88ff6d420c15c4ca07c"
  },
  {
    "url": "buddy-logos/logos/clickdeploy.svg",
    "revision": "43955a29da006e48e78e2364e330ab80"
  },
  {
    "url": "buddy-logos/logos/clion.svg",
    "revision": "eca66a99238f40cec5012853eb345d4f"
  },
  {
    "url": "buddy-logos/logos/cljs.svg",
    "revision": "1850627a1c2e7f7b211ef476c61f716c"
  },
  {
    "url": "buddy-logos/logos/clojure.svg",
    "revision": "93a48eccee102ba1ee3e2111a48b351a"
  },
  {
    "url": "buddy-logos/logos/close.svg",
    "revision": "3c65cb8f634670eeb1d78a70a5042217"
  },
  {
    "url": "buddy-logos/logos/cloud9.svg",
    "revision": "22b81a013bbb0d58b8626bb41563e2fe"
  },
  {
    "url": "buddy-logos/logos/cloudacademy.svg",
    "revision": "cebf44e207daafb599c179c1fed2efa5"
  },
  {
    "url": "buddy-logos/logos/cloudant.svg",
    "revision": "09258c3810e72e2caf6433f25c7b457e"
  },
  {
    "url": "buddy-logos/logos/cloudcraft.svg",
    "revision": "c61a38123069110420067b8688f41424"
  },
  {
    "url": "buddy-logos/logos/cloudera.svg",
    "revision": "ec81b61ca4afd9464e51fc6edc05141b"
  },
  {
    "url": "buddy-logos/logos/cloudflare.svg",
    "revision": "6e301fa23faa11e58f09023249e6b58a"
  },
  {
    "url": "buddy-logos/logos/cloudinary.svg",
    "revision": "53c3240fa608cc6d711d6ad56131f5f5"
  },
  {
    "url": "buddy-logos/logos/cloudlinux.svg",
    "revision": "bc7c4e559086176eae4432ae82e38383"
  },
  {
    "url": "buddy-logos/logos/clusterhq.svg",
    "revision": "456afcfba09297ab552fb4e4334fa55e"
  },
  {
    "url": "buddy-logos/logos/cobalt.svg",
    "revision": "b8b2c4ef357432762e7ea24147c144e0"
  },
  {
    "url": "buddy-logos/logos/cockpit.svg",
    "revision": "8475bf0998ab0c7b43e27300d236ceda"
  },
  {
    "url": "buddy-logos/logos/cocoapods.svg",
    "revision": "755e6c4ad1916faae33434bd31ce56c7"
  },
  {
    "url": "buddy-logos/logos/codacy.svg",
    "revision": "a3b4a725d6cb75de36a762365819d529"
  },
  {
    "url": "buddy-logos/logos/codebase.svg",
    "revision": "ad463762d3e1807f56ef65629317cf16"
  },
  {
    "url": "buddy-logos/logos/codebeat.svg",
    "revision": "60d4ecae76c0c35a04f0bfe0ac0f70fd"
  },
  {
    "url": "buddy-logos/logos/codecademy.svg",
    "revision": "9e0f6864729b96ec9c8c7e4faa18b428"
  },
  {
    "url": "buddy-logos/logos/codeception.svg",
    "revision": "d88156cc25161922283016e60fda7dee"
  },
  {
    "url": "buddy-logos/logos/codeclimate.svg",
    "revision": "5f027b3aba4f5b36bc2e9fcadaa6c225"
  },
  {
    "url": "buddy-logos/logos/codecov.svg",
    "revision": "d208a3067971c14b916cf3b9cd9d2c77"
  },
  {
    "url": "buddy-logos/logos/codefactor.svg",
    "revision": "fd3e85da4fd4bb497787d2c4643bc793"
  },
  {
    "url": "buddy-logos/logos/codefund.svg",
    "revision": "5b31e83f4d4b5a3a05e585afa88fda5f"
  },
  {
    "url": "buddy-logos/logos/codeigniter.svg",
    "revision": "434bf7351b1566622bf422771444b18f"
  },
  {
    "url": "buddy-logos/logos/codepen-icon.svg",
    "revision": "1cf3ac2d70633e9d95dc41712f068da9"
  },
  {
    "url": "buddy-logos/logos/codepen.svg",
    "revision": "897a9e2aeca74cf88e4b262db9d83d4f"
  },
  {
    "url": "buddy-logos/logos/codepicnic.svg",
    "revision": "e74c7104b71ac90bc5e4836f28c9f27e"
  },
  {
    "url": "buddy-logos/logos/codepush.svg",
    "revision": "b3f8ab2a0bc6e3be46cd493479546a5c"
  },
  {
    "url": "buddy-logos/logos/coderwall.svg",
    "revision": "75c0582377bb91be88c7d5db9b9a00ae"
  },
  {
    "url": "buddy-logos/logos/codeschool.svg",
    "revision": "3a691f08c63bfb7c4178bcd4aab1cbc7"
  },
  {
    "url": "buddy-logos/logos/codeship.svg",
    "revision": "1e468707ed0ceaa8dbacdaa4b29ff7fc"
  },
  {
    "url": "buddy-logos/logos/codio.svg",
    "revision": "20b1f57c9e36ddeae2a6cb4a8ff65983"
  },
  {
    "url": "buddy-logos/logos/codrops.svg",
    "revision": "3ace3aa1d901779bb331441d4884f3b5"
  },
  {
    "url": "buddy-logos/logos/coffeescript.svg",
    "revision": "3deb758a9c873e2ce339247a5b26bc22"
  },
  {
    "url": "buddy-logos/logos/compass.svg",
    "revision": "f26e3f51db3ac274a2aa17afff7139c5"
  },
  {
    "url": "buddy-logos/logos/component.svg",
    "revision": "38da18673cf55a0ec4fc7987bb3309d4"
  },
  {
    "url": "buddy-logos/logos/componentkit.svg",
    "revision": "5932cb7b4d185f791e0b1243a1e15bc6"
  },
  {
    "url": "buddy-logos/logos/compose.svg",
    "revision": "277fc38b4a5cea6375ee8347eea1ca0c"
  },
  {
    "url": "buddy-logos/logos/composer.svg",
    "revision": "408850c477449bf57e3d0ba29c7900ce"
  },
  {
    "url": "buddy-logos/logos/concourse.svg",
    "revision": "2a562a0bcf7ddb3166b1d67df0c4d264"
  },
  {
    "url": "buddy-logos/logos/concrete5.svg",
    "revision": "b470c30cb78d95bd3fbd0c5ae36c1ab4"
  },
  {
    "url": "buddy-logos/logos/confluence.svg",
    "revision": "b4295764ef2447bcf3b513368f38cda0"
  },
  {
    "url": "buddy-logos/logos/consul.svg",
    "revision": "35408a525059700013da77f28b17f703"
  },
  {
    "url": "buddy-logos/logos/containership.svg",
    "revision": "3dec5a9f4cda1d0ccdc71dca17c9efa3"
  },
  {
    "url": "buddy-logos/logos/contentful.svg",
    "revision": "a1907edd8467af36b005d4e8d535d310"
  },
  {
    "url": "buddy-logos/logos/convox.svg",
    "revision": "cc17b9378e6e9df47288749844a5f5ef"
  },
  {
    "url": "buddy-logos/logos/copyleft-pirate.svg",
    "revision": "0393b1012a9b5957242363b9e10c488e"
  },
  {
    "url": "buddy-logos/logos/copyleft.svg",
    "revision": "6ca4eb3e740cc0646f1d126ec0c3e8ab"
  },
  {
    "url": "buddy-logos/logos/cordova.svg",
    "revision": "aa5aebb476e55136ee795add05735c38"
  },
  {
    "url": "buddy-logos/logos/coreos-icon.svg",
    "revision": "8121959c5dd22eba91cc4d6964b90970"
  },
  {
    "url": "buddy-logos/logos/coreos.svg",
    "revision": "fe6b988b372a46f4459f0c30ef45ba0f"
  },
  {
    "url": "buddy-logos/logos/couchbase.svg",
    "revision": "4f594344ac2aa80ad280f81378264f8f"
  },
  {
    "url": "buddy-logos/logos/couchdb.svg",
    "revision": "e2671f03b894c1d014d16825a1b3b868"
  },
  {
    "url": "buddy-logos/logos/coursera.svg",
    "revision": "61a902858553f338ac8bd3c1702a8668"
  },
  {
    "url": "buddy-logos/logos/coveralls.svg",
    "revision": "271a4ba666d71fef0e3ed3b08eb2edeb"
  },
  {
    "url": "buddy-logos/logos/coverity.svg",
    "revision": "58edfaa9f9657312fc42665d56480fba"
  },
  {
    "url": "buddy-logos/logos/cpanel.svg",
    "revision": "9e90cf23a763ff47420c30397d0f076d"
  },
  {
    "url": "buddy-logos/logos/craft.svg",
    "revision": "e1bc2056e5f60b507bfbb6c6b4e39b6a"
  },
  {
    "url": "buddy-logos/logos/crashlytics.svg",
    "revision": "0bde647a1ead31f4c68472bbd4b4af93"
  },
  {
    "url": "buddy-logos/logos/crateio.svg",
    "revision": "f49eec3ff8a42b6a81fa843890f23f48"
  },
  {
    "url": "buddy-logos/logos/createjs.svg",
    "revision": "fd9503c93fbe6427426ff8892a2e64f2"
  },
  {
    "url": "buddy-logos/logos/crittercism.svg",
    "revision": "59561ab7a96fd46be11b5e66b7a9333a"
  },
  {
    "url": "buddy-logos/logos/crossbrowsertesting.svg",
    "revision": "30bafe3df84e69c8cb70293fd8410237"
  },
  {
    "url": "buddy-logos/logos/crowdprocess.svg",
    "revision": "c19ab0b1cff1947159883337ac9e6d77"
  },
  {
    "url": "buddy-logos/logos/crucible.svg",
    "revision": "e4e59b0d0a076969072f19f74b534dd1"
  },
  {
    "url": "buddy-logos/logos/crystal.svg",
    "revision": "3a1491f42ef20c1004e562d4f0b0d329"
  },
  {
    "url": "buddy-logos/logos/css-3_official.svg",
    "revision": "b1b631b0581669ffd403c7b9ada659a9"
  },
  {
    "url": "buddy-logos/logos/css-3.svg",
    "revision": "d3ad67fa720fd7aee8c322caff911082"
  },
  {
    "url": "buddy-logos/logos/cssnext.svg",
    "revision": "9e3c1aba216f520f85736e731714436b"
  },
  {
    "url": "buddy-logos/logos/cucumber.svg",
    "revision": "4afe10fb7273adb9314bb336bb1e6bb9"
  },
  {
    "url": "buddy-logos/logos/customerio.svg",
    "revision": "00b4b32bca8b302a3f0d06ce275f0d14"
  },
  {
    "url": "buddy-logos/logos/cyclejs.svg",
    "revision": "e509f97ff4d2f8e3b285b83deca0e9d2"
  },
  {
    "url": "buddy-logos/logos/cypress.svg",
    "revision": "0ca019403f43313a7eee81c763bb9421"
  },
  {
    "url": "buddy-logos/logos/d3.svg",
    "revision": "60a9c90f980ad6b98745f0a03bc2947c"
  },
  {
    "url": "buddy-logos/logos/dapulse.svg",
    "revision": "10da4facb4789adba7e333410d4133ef"
  },
  {
    "url": "buddy-logos/logos/dart.svg",
    "revision": "9da33b058bf8980a407c2cd6840d0b91"
  },
  {
    "url": "buddy-logos/logos/dashlane.svg",
    "revision": "b9ecb8ca8386269f1892eee98bf8873a"
  },
  {
    "url": "buddy-logos/logos/dat.svg",
    "revision": "b02d98ee5012352c1c3f33579bdb75ee"
  },
  {
    "url": "buddy-logos/logos/database-labs.svg",
    "revision": "9d0102209f1c6a0aa291dec783890a7f"
  },
  {
    "url": "buddy-logos/logos/dcos.svg",
    "revision": "6198e374e6e5f3bcf003e88d5dd52707"
  },
  {
    "url": "buddy-logos/logos/debian.svg",
    "revision": "2b3882bf334b2f5584ea00dbb7ab5340"
  },
  {
    "url": "buddy-logos/logos/delicious-burger.svg",
    "revision": "8d207743f7f53e67a2a8a1f3e2adb82e"
  },
  {
    "url": "buddy-logos/logos/delicious.svg",
    "revision": "845b2c60360183d695d1da382f738303"
  },
  {
    "url": "buddy-logos/logos/delighted.svg",
    "revision": "2ee70b7875a098cad3daf329b08248ae"
  },
  {
    "url": "buddy-logos/logos/dependencyci.svg",
    "revision": "bdde2a832d0c3450dd8267d5895b44c5"
  },
  {
    "url": "buddy-logos/logos/deploy.svg",
    "revision": "d1a25ffe5d71e942e8a43f838e0789d6"
  },
  {
    "url": "buddy-logos/logos/deppbot.svg",
    "revision": "82b87f2c0136c613e8ca1592b98e52e1"
  },
  {
    "url": "buddy-logos/logos/derby.svg",
    "revision": "0dd97688ccb2ac9f24399a830a01b23c"
  },
  {
    "url": "buddy-logos/logos/designernews.svg",
    "revision": "1a27f3a6ffb02fc54c4613a70ede1d9d"
  },
  {
    "url": "buddy-logos/logos/desk.svg",
    "revision": "e66de29e426931404d7ff27d1edabe3e"
  },
  {
    "url": "buddy-logos/logos/deviantart.svg",
    "revision": "1417e385d93d4fe8463f700c1c8af8a6"
  },
  {
    "url": "buddy-logos/logos/digital-ocean.svg",
    "revision": "3b933164455833a4ad3b4bf46159bd0e"
  },
  {
    "url": "buddy-logos/logos/dimer.svg",
    "revision": "8d6eb7401476b4a537d60f4f73bb9828"
  },
  {
    "url": "buddy-logos/logos/dinersclub.svg",
    "revision": "386ce0002d1a3ecbca8539f5c60326cd"
  },
  {
    "url": "buddy-logos/logos/discord.svg",
    "revision": "fee2b0c7763cd68020f7d8fd9ea2c593"
  },
  {
    "url": "buddy-logos/logos/discover.svg",
    "revision": "cfd87968f0784c1b5acf62165e1a664f"
  },
  {
    "url": "buddy-logos/logos/disqus.svg",
    "revision": "31d06801e08c67d2f74b9e040201a3ec"
  },
  {
    "url": "buddy-logos/logos/distelli.svg",
    "revision": "1b57cb7b0e0f9afdcc5b3be6be1e8a14"
  },
  {
    "url": "buddy-logos/logos/divshot.svg",
    "revision": "0a4a3e21a1ffb1bf7ee0ee5d4bb0deea"
  },
  {
    "url": "buddy-logos/logos/django.svg",
    "revision": "28fe09a047913afe9ea13c7958c182c0"
  },
  {
    "url": "buddy-logos/logos/dockbit.svg",
    "revision": "38e6905e4e269204d168ef96cab7328b"
  },
  {
    "url": "buddy-logos/logos/docker.svg",
    "revision": "2e019a3e3de35c465f636710d4b77f5c"
  },
  {
    "url": "buddy-logos/logos/doctrine.svg",
    "revision": "16e033e956c690555ba4c2fd7857f9c1"
  },
  {
    "url": "buddy-logos/logos/docusaurus.svg",
    "revision": "d65117411c6dc84f6ca889edfd054420"
  },
  {
    "url": "buddy-logos/logos/dojo.svg",
    "revision": "dcfc7d17f30c5d66dc22f791d540ee25"
  },
  {
    "url": "buddy-logos/logos/dotcloud.svg",
    "revision": "8ef990451561c90e46bb8c327aec12e6"
  },
  {
    "url": "buddy-logos/logos/dotnet.svg",
    "revision": "f9b8f1c23e0e42a3c434568e3c773e46"
  },
  {
    "url": "buddy-logos/logos/doubleclick.svg",
    "revision": "e546102e822b2b3151e6e435756e0e27"
  },
  {
    "url": "buddy-logos/logos/dreamfactory.svg",
    "revision": "0243c522384a79fca4b3e8fd64bea3f2"
  },
  {
    "url": "buddy-logos/logos/dreamhost.svg",
    "revision": "453d27ff00c479cd20015fdf30bd4df0"
  },
  {
    "url": "buddy-logos/logos/dribbble-icon.svg",
    "revision": "f47f43587ec131c9a510b2b742d6437d"
  },
  {
    "url": "buddy-logos/logos/dribbble.svg",
    "revision": "32317af743c8b9ed2f87ae2ea0ee0440"
  },
  {
    "url": "buddy-logos/logos/drift.svg",
    "revision": "ad420fa1cb24eb5d3a3cdf49571a8a83"
  },
  {
    "url": "buddy-logos/logos/drip.svg",
    "revision": "743906dca08d7e6e0205d53e31aa4aa6"
  },
  {
    "url": "buddy-logos/logos/drone.svg",
    "revision": "dbca1625610e021e8f08286ad6cf0231"
  },
  {
    "url": "buddy-logos/logos/dropbox.svg",
    "revision": "33710e46618dae9a833c34fa37abf62a"
  },
  {
    "url": "buddy-logos/logos/dropmark.svg",
    "revision": "c78b3ae00c480f519880e3fc7a883ca0"
  },
  {
    "url": "buddy-logos/logos/dropzone.svg",
    "revision": "30534bb2264314af4b5fb7a44704f703"
  },
  {
    "url": "buddy-logos/logos/drupal.svg",
    "revision": "66089b06ce6bfb30e88fec5bcfb7a393"
  },
  {
    "url": "buddy-logos/logos/duckduckgo.svg",
    "revision": "86586f8c7cd2ac63b2be794f2f6b78ee"
  },
  {
    "url": "buddy-logos/logos/dyndns.svg",
    "revision": "146fdaea35604b2284a474ce8f571e45"
  },
  {
    "url": "buddy-logos/logos/eager.svg",
    "revision": "716e2433dedbf357ca9b7f9b8c70580d"
  },
  {
    "url": "buddy-logos/logos/ebanx.svg",
    "revision": "b28b2a82155828d164b26a0e2d4cb59a"
  },
  {
    "url": "buddy-logos/logos/eclipse.svg",
    "revision": "b89793da7136f9dd2ad4bcf226850a58"
  },
  {
    "url": "buddy-logos/logos/egghead.svg",
    "revision": "a37af1ba6b487357bfa5a062fe2fec7c"
  },
  {
    "url": "buddy-logos/logos/elasticbox.svg",
    "revision": "cfb1ea566a62e4fb91f2d69e7657faf1"
  },
  {
    "url": "buddy-logos/logos/elasticsearch.svg",
    "revision": "3ecfa53090955ca4fafc5ad4572ea8f6"
  },
  {
    "url": "buddy-logos/logos/electron.svg",
    "revision": "efc7269298a1558066e078d38a14e8ac"
  },
  {
    "url": "buddy-logos/logos/element.svg",
    "revision": "f41257c5b036697f2c8baf699c0f7fdc"
  },
  {
    "url": "buddy-logos/logos/elemental-ui.svg",
    "revision": "bb5e65972b280899702f0ccd15d3bc55"
  },
  {
    "url": "buddy-logos/logos/elementary.svg",
    "revision": "68384ff5f96cfc4b4377a8542e4ffbd7"
  },
  {
    "url": "buddy-logos/logos/ello.svg",
    "revision": "0efc7e0fc094dcc000ae88219c2737ab"
  },
  {
    "url": "buddy-logos/logos/elm.svg",
    "revision": "ae1a5ac2ce5c5d66041f86192872426a"
  },
  {
    "url": "buddy-logos/logos/elo.svg",
    "revision": "063960d9c40c53137be9a5ba4f609262"
  },
  {
    "url": "buddy-logos/logos/emacs.svg",
    "revision": "640124ecdac0ef551858037b3b3e8321"
  },
  {
    "url": "buddy-logos/logos/embedly.svg",
    "revision": "9c976fc80a930e9e2a381c5c5ce9596a"
  },
  {
    "url": "buddy-logos/logos/ember-tomster.svg",
    "revision": "ad11f1d9c91052358dfe40c0b02d2451"
  },
  {
    "url": "buddy-logos/logos/ember.svg",
    "revision": "527d5f49937c02a7fc99f02c807f5982"
  },
  {
    "url": "buddy-logos/logos/emmet.svg",
    "revision": "83887969e6ad1b5f86cf67e2aa33bfdf"
  },
  {
    "url": "buddy-logos/logos/engine-yard.svg",
    "revision": "0ab7812bbace83dba669602f52b3db42"
  },
  {
    "url": "buddy-logos/logos/envato.svg",
    "revision": "b4a7c1e8810cb9b5ee9125f240089fa1"
  },
  {
    "url": "buddy-logos/logos/envoyer.svg",
    "revision": "fedc5f8e18a2f2c55eb321f41e4777bb"
  },
  {
    "url": "buddy-logos/logos/enyo.svg",
    "revision": "46acddc7b0b000e2fb8c28d26ffc80c0"
  },
  {
    "url": "buddy-logos/logos/erlang.svg",
    "revision": "d1423591715e636884c6ba30a5ac650a"
  },
  {
    "url": "buddy-logos/logos/es6.svg",
    "revision": "bfc684a1c97ff311559bc896d7653ef0"
  },
  {
    "url": "buddy-logos/logos/esdoc.svg",
    "revision": "1fdec9e8e40c658876adf62674100fb3"
  },
  {
    "url": "buddy-logos/logos/eslint-old.svg",
    "revision": "924e24f11054febf4410fe147ee986b0"
  },
  {
    "url": "buddy-logos/logos/eslint.svg",
    "revision": "68004463b7e197cb02a4bcffa1900b8e"
  },
  {
    "url": "buddy-logos/logos/eta-lang.svg",
    "revision": "8bb1184bc101f752327daf6a8bfd5fa2"
  },
  {
    "url": "buddy-logos/logos/etcd.svg",
    "revision": "6571a4c1a3c9322fac04e825601327a2"
  },
  {
    "url": "buddy-logos/logos/ethereum.svg",
    "revision": "30e6cf227c006d9337a277ca5719ba4d"
  },
  {
    "url": "buddy-logos/logos/ethnio.svg",
    "revision": "449e0d0a10213e6ba4a75df92cc96662"
  },
  {
    "url": "buddy-logos/logos/eventbrite.svg",
    "revision": "2251e4f498e00679879a76d85ecce8da"
  },
  {
    "url": "buddy-logos/logos/eventsentry.svg",
    "revision": "8c3116c68161895784bd4035012068d8"
  },
  {
    "url": "buddy-logos/logos/expo.svg",
    "revision": "f44d703101b08ed6932711319489c751"
  },
  {
    "url": "buddy-logos/logos/exponent.svg",
    "revision": "3b665ad7e402e2a389f6fd0eda49f74e"
  },
  {
    "url": "buddy-logos/logos/express.svg",
    "revision": "530516030e26a09ac38473bd5d8eff0e"
  },
  {
    "url": "buddy-logos/logos/fabric_io.svg",
    "revision": "862ee866f777bd569425c6025ffc8969"
  },
  {
    "url": "buddy-logos/logos/fabric.svg",
    "revision": "8a9d1dc2b677efb5fa89140df57f0ec4"
  },
  {
    "url": "buddy-logos/logos/facebook.svg",
    "revision": "60f532b73b8720aba4a9f3fb2d39c56d"
  },
  {
    "url": "buddy-logos/logos/falcor.svg",
    "revision": "e35e77bd85aa5e3137e1db3a7d506b05"
  },
  {
    "url": "buddy-logos/logos/famous.svg",
    "revision": "f1ff9ebc1365a5acf3f4607ae56759d5"
  },
  {
    "url": "buddy-logos/logos/fastlane.svg",
    "revision": "c61dd2a2d82762833de1f78c6b77bd7b"
  },
  {
    "url": "buddy-logos/logos/fastly.svg",
    "revision": "21d1fb0b331d65ec9dab990aa03702db"
  },
  {
    "url": "buddy-logos/logos/feathersjs.svg",
    "revision": "3c3536a7ebe9be838aac3bfc582a964a"
  },
  {
    "url": "buddy-logos/logos/fedora.svg",
    "revision": "810bff057c10a2234e3598718fbf1643"
  },
  {
    "url": "buddy-logos/logos/firebase.svg",
    "revision": "bfa69c4f3255d5c564c2ec600ff9885e"
  },
  {
    "url": "buddy-logos/logos/firefox.svg",
    "revision": "81ab4272b0edff3882e480c5c32253f8"
  },
  {
    "url": "buddy-logos/logos/flannel.svg",
    "revision": "b9913535288c125e08910433f89629f8"
  },
  {
    "url": "buddy-logos/logos/flarum.svg",
    "revision": "1a8eeedcf5ea8cbb2a21c96030fe2eb6"
  },
  {
    "url": "buddy-logos/logos/flask.svg",
    "revision": "318d58cbc47ace3e1baf4f035cab5b53"
  },
  {
    "url": "buddy-logos/logos/flat-ui.svg",
    "revision": "f781d00c8861dbd9235b7b0f44d58768"
  },
  {
    "url": "buddy-logos/logos/flattr.svg",
    "revision": "70b6b9efc401cfdd398a7cea2a041d6c"
  },
  {
    "url": "buddy-logos/logos/fleep.svg",
    "revision": "accd5764da21ea8685795c3161dc3e3f"
  },
  {
    "url": "buddy-logos/logos/flexible-gs.svg",
    "revision": "cf2365a6c23529302ff3c12b645d4462"
  },
  {
    "url": "buddy-logos/logos/flickr-icon.svg",
    "revision": "a676c28cfb5f3c65a586925003949689"
  },
  {
    "url": "buddy-logos/logos/flickr.svg",
    "revision": "d32f51409b026bdb5d3db727f352991e"
  },
  {
    "url": "buddy-logos/logos/flight.svg",
    "revision": "f179cf7b8d22784fb41991f952be7ecc"
  },
  {
    "url": "buddy-logos/logos/flocker.svg",
    "revision": "53dc9d6aab4140766aed131d05bdc08e"
  },
  {
    "url": "buddy-logos/logos/floodio.svg",
    "revision": "9974efc6d2b00a2fb2e3118cbaab29ce"
  },
  {
    "url": "buddy-logos/logos/flow.svg",
    "revision": "6ae20d66e5c60ecc4af5eabb0917c3da"
  },
  {
    "url": "buddy-logos/logos/flowxo.svg",
    "revision": "7ec9159ab5340da1a39efe1c85cc47fc"
  },
  {
    "url": "buddy-logos/logos/floydhub.svg",
    "revision": "1369acab57981cbb5e6018a1826c746c"
  },
  {
    "url": "buddy-logos/logos/flux.svg",
    "revision": "9845ea5f709cdba38235f414d6824661"
  },
  {
    "url": "buddy-logos/logos/fluxxor.svg",
    "revision": "3d2893df67513c66af02b059d639dfb4"
  },
  {
    "url": "buddy-logos/logos/fly.svg",
    "revision": "b16316ce40af2bb51bec2aa316074744"
  },
  {
    "url": "buddy-logos/logos/flyjs.svg",
    "revision": "e99a6e9d2bcabe6704ce460ff4be3d09"
  },
  {
    "url": "buddy-logos/logos/fomo.svg",
    "revision": "8b148f8945bb001632e1e369db2a4825"
  },
  {
    "url": "buddy-logos/logos/font-awesome.svg",
    "revision": "87de1e68a923574754bf0253265e2607"
  },
  {
    "url": "buddy-logos/logos/forest.svg",
    "revision": "4e03842f31b340cfc14eed2af9c185a8"
  },
  {
    "url": "buddy-logos/logos/forever.svg",
    "revision": "3942c4c0df4153d6063423ed14a8bfd8"
  },
  {
    "url": "buddy-logos/logos/formkeep.svg",
    "revision": "95d8e3c373558b06f7c5446c470a4632"
  },
  {
    "url": "buddy-logos/logos/foundation.svg",
    "revision": "468694eeb7504a93f93ec582b3503e69"
  },
  {
    "url": "buddy-logos/logos/framed.svg",
    "revision": "7107c386ccaf30f8f5bf44d510ee33cb"
  },
  {
    "url": "buddy-logos/logos/framework7.svg",
    "revision": "212f837533fb49cc51acf460be72ea64"
  },
  {
    "url": "buddy-logos/logos/freebsd.svg",
    "revision": "668f3716f6617f549d8fd916c7b4b40c"
  },
  {
    "url": "buddy-logos/logos/freedcamp.svg",
    "revision": "47fd0b35d16100146bfc09b621d7f775"
  },
  {
    "url": "buddy-logos/logos/freedomdefined.svg",
    "revision": "4c9d0957d7cf8c1ad0cadfc5311cc7b6"
  },
  {
    "url": "buddy-logos/logos/frontapp.svg",
    "revision": "28395d709bc8ed12d9a3b331dbb45f83"
  },
  {
    "url": "buddy-logos/logos/fsharp.svg",
    "revision": "67303d4ece04bd7a0c5732b43c889c8d"
  },
  {
    "url": "buddy-logos/logos/galliumos.svg",
    "revision": "a3cbdbe4438d95dba5440fd19b54c351"
  },
  {
    "url": "buddy-logos/logos/game-analytics.svg",
    "revision": "eac4bc792fcd6801066abc501789afa0"
  },
  {
    "url": "buddy-logos/logos/gatsby.svg",
    "revision": "aec012ae2ee1860442d37e9c7c274c57"
  },
  {
    "url": "buddy-logos/logos/gaugeio.svg",
    "revision": "d966143c07684f2ac0ca169a2579e80a"
  },
  {
    "url": "buddy-logos/logos/geekbot.svg",
    "revision": "a126509ff6a268938d079f0316377d3d"
  },
  {
    "url": "buddy-logos/logos/get-satisfaction.svg",
    "revision": "7f14a31d1f7ed837aaee3f9d7916a489"
  },
  {
    "url": "buddy-logos/logos/ghost.svg",
    "revision": "c164ea493edb51fa71a06b70d422d78e"
  },
  {
    "url": "buddy-logos/logos/giantswarm.svg",
    "revision": "36a3332247172a75448f43b6e4f89c11"
  },
  {
    "url": "buddy-logos/logos/git-icon.svg",
    "revision": "64d5e98f1a220cdcad2b1a70d52ab669"
  },
  {
    "url": "buddy-logos/logos/git.svg",
    "revision": "e7c6c73f71f6fd52151cfc2d65006f29"
  },
  {
    "url": "buddy-logos/logos/gitboard.svg",
    "revision": "eb4df82152d362c4c6ba45d2ff8bd464"
  },
  {
    "url": "buddy-logos/logos/github-icon.svg",
    "revision": "0255bf2cd6e42c2fdbe2e189e418929f"
  },
  {
    "url": "buddy-logos/logos/github-octocat.svg",
    "revision": "5903a1df2f4b6dc96e4db491de5fbea7"
  },
  {
    "url": "buddy-logos/logos/github.svg",
    "revision": "bc00576b10d393b1c66f168d4ccc4fb5"
  },
  {
    "url": "buddy-logos/logos/gitkraken.svg",
    "revision": "b0f2e7546f3045b7c319ce483ab48b86"
  },
  {
    "url": "buddy-logos/logos/gitlab.svg",
    "revision": "db66f1db8b42d15252ca0f283abc420c"
  },
  {
    "url": "buddy-logos/logos/gitter.svg",
    "revision": "0b5694f205a1931fc72a49044df5f812"
  },
  {
    "url": "buddy-logos/logos/gitup.svg",
    "revision": "da89245fb6dfe1ec47a20cf9d02aeec5"
  },
  {
    "url": "buddy-logos/logos/glamorous.svg",
    "revision": "0108c1dda6552ac8a3e0977944045063"
  },
  {
    "url": "buddy-logos/logos/gleam.svg",
    "revision": "691d9470f6c1a25f1b5894a82eb26d2d"
  },
  {
    "url": "buddy-logos/logos/glimmerjs.svg",
    "revision": "f6e0e2f679dd8bb8e83377da67003135"
  },
  {
    "url": "buddy-logos/logos/glint.svg",
    "revision": "bdae6441e3372d35788195391d71cede"
  },
  {
    "url": "buddy-logos/logos/gnu.svg",
    "revision": "a7561d68fe36133749eecce4ac0a6026"
  },
  {
    "url": "buddy-logos/logos/gocd.svg",
    "revision": "56408a2075ef86359969eb89e50fce4e"
  },
  {
    "url": "buddy-logos/logos/gomix.svg",
    "revision": "e1c19140c83babc36745a7bd36e33d8f"
  },
  {
    "url": "buddy-logos/logos/google-2014.svg",
    "revision": "5f47d2cf037e5ea7a177d1a52c3ce3b6"
  },
  {
    "url": "buddy-logos/logos/google-360suite.svg",
    "revision": "e8d81ed71b17596342022a485c737e8c"
  },
  {
    "url": "buddy-logos/logos/google-ads.svg",
    "revision": "6e07847cd50e22d2329f13cb1907d097"
  },
  {
    "url": "buddy-logos/logos/google-adsense.svg",
    "revision": "13b03307e1702ccf0ba87c480076cfd4"
  },
  {
    "url": "buddy-logos/logos/google-adwords.svg",
    "revision": "d545b9abb552a68d5f3cf3fb6b301a00"
  },
  {
    "url": "buddy-logos/logos/google-analytics.svg",
    "revision": "7243b15716cd5817502c255df047b12c"
  },
  {
    "url": "buddy-logos/logos/google-calendar.svg",
    "revision": "67c664639864e127d18ec9f4e0f72099"
  },
  {
    "url": "buddy-logos/logos/google-cloud-platform.svg",
    "revision": "d3b896b4600cf25241c5d86cf4174f14"
  },
  {
    "url": "buddy-logos/logos/google-cloud.svg",
    "revision": "027c8b39aea980eb3550a4331dca3fc7"
  },
  {
    "url": "buddy-logos/logos/google-data-studio.svg",
    "revision": "f846c06248e93d96643a1a269ed5e458"
  },
  {
    "url": "buddy-logos/logos/google-developers.svg",
    "revision": "ccee951ca52c49638403acff58bd1423"
  },
  {
    "url": "buddy-logos/logos/google-drive.svg",
    "revision": "a174946f2a825d35e198e5b071a59b97"
  },
  {
    "url": "buddy-logos/logos/google-gmail.svg",
    "revision": "8daeddca1f9ccf08ff3b4b71555aed3f"
  },
  {
    "url": "buddy-logos/logos/google-gsuite.svg",
    "revision": "6fa11ce52e3663d82467448883ed19b7"
  },
  {
    "url": "buddy-logos/logos/google-icon.svg",
    "revision": "255362e37e04f0565901f5d67333eca8"
  },
  {
    "url": "buddy-logos/logos/google-inbox.svg",
    "revision": "752cc2dbebd45c3ff958d3f1c4c3f3f9"
  },
  {
    "url": "buddy-logos/logos/google-marketing-platform.svg",
    "revision": "4d0316ab585c65d16acbe0cced68da98"
  },
  {
    "url": "buddy-logos/logos/google-meet.svg",
    "revision": "23c723400b1953c970111e172e57f999"
  },
  {
    "url": "buddy-logos/logos/google-optimize.svg",
    "revision": "7e41501b57d045b2f630d06e93127e67"
  },
  {
    "url": "buddy-logos/logos/google-pay.svg",
    "revision": "40978de155950be3d6c37566e806677a"
  },
  {
    "url": "buddy-logos/logos/google-photos.svg",
    "revision": "a26de228a63975b86673655d5b8cdad8"
  },
  {
    "url": "buddy-logos/logos/google-plus.svg",
    "revision": "1fe1a958165c1cf0ddd9c7236bc3f1cb"
  },
  {
    "url": "buddy-logos/logos/google-tag-manager.svg",
    "revision": "e60257f06e63d7e3741cf8059dd7dce3"
  },
  {
    "url": "buddy-logos/logos/google-wallet.svg",
    "revision": "34e6c18e81935ab5dea12d5ad856debf"
  },
  {
    "url": "buddy-logos/logos/google.svg",
    "revision": "921bd0fd3ce1c8e6feb57b51afbb57ce"
  },
  {
    "url": "buddy-logos/logos/gopher.svg",
    "revision": "266d1cb060adfe97e0436047b746c9f4"
  },
  {
    "url": "buddy-logos/logos/gordon.svg",
    "revision": "aa811b8f5fb50e83dfc05e335b64dd38"
  },
  {
    "url": "buddy-logos/logos/gradle.svg",
    "revision": "d919a8df80e193540583a184c00586f8"
  },
  {
    "url": "buddy-logos/logos/grafana.svg",
    "revision": "a2f456cd6ba08fef5ad9e3ce7f53b133"
  },
  {
    "url": "buddy-logos/logos/grails.svg",
    "revision": "20bec075832b44296ed798788f528963"
  },
  {
    "url": "buddy-logos/logos/grape.svg",
    "revision": "04a638093fb16469fa3eacc77c2c667b"
  },
  {
    "url": "buddy-logos/logos/graphcool.svg",
    "revision": "2ef34a3d1a3da9ce31958deb38bdd197"
  },
  {
    "url": "buddy-logos/logos/graphene.svg",
    "revision": "bb0d60cccd3724dae7293ca12caad485"
  },
  {
    "url": "buddy-logos/logos/graphql.svg",
    "revision": "9c29cb1798b50863f98b657dcd9c127d"
  },
  {
    "url": "buddy-logos/logos/gratipay.svg",
    "revision": "f33f848af9c7b8e5b6173c080d9f3f2b"
  },
  {
    "url": "buddy-logos/logos/grav.svg",
    "revision": "66f45ed8ea1aee12e41c1cca0920d1d3"
  },
  {
    "url": "buddy-logos/logos/gravatar.svg",
    "revision": "d9dc41fd36fab89ad455fe342d2682bc"
  },
  {
    "url": "buddy-logos/logos/graylog.svg",
    "revision": "0591a733ff213d8055aa9829c5f3f9fd"
  },
  {
    "url": "buddy-logos/logos/groovehq.svg",
    "revision": "b1b8420def4ec885f783f3033ca2ef67"
  },
  {
    "url": "buddy-logos/logos/grove.svg",
    "revision": "abf6257cb4a2a9e22a209c5773975671"
  },
  {
    "url": "buddy-logos/logos/grunt.svg",
    "revision": "7835f1c5e7f781ce68eba53c4e93cd69"
  },
  {
    "url": "buddy-logos/logos/gulp.svg",
    "revision": "771551b909fd715c3a185f8e86225bb8"
  },
  {
    "url": "buddy-logos/logos/gunicorn.svg",
    "revision": "8134c2d7779e83e514d03263a574a2d5"
  },
  {
    "url": "buddy-logos/logos/gusto.svg",
    "revision": "5f20ff9fd78aa0a24a00af3f9e07e6bf"
  },
  {
    "url": "buddy-logos/logos/gwt.svg",
    "revision": "fca9cb49649a1b9bdd266f3bba3a6981"
  },
  {
    "url": "buddy-logos/logos/hack.svg",
    "revision": "9d4f880cdccf3d10f70da81e9645a500"
  },
  {
    "url": "buddy-logos/logos/hacker-one.svg",
    "revision": "fd2a70370cd80b5c0a3326e4a6deb3c5"
  },
  {
    "url": "buddy-logos/logos/hadoop.svg",
    "revision": "8eee7224a9b2454322bff7f57c708256"
  },
  {
    "url": "buddy-logos/logos/haml.svg",
    "revision": "59ce2f4ea9c09d1cd548d15d987fa326"
  },
  {
    "url": "buddy-logos/logos/handlebars.svg",
    "revision": "640d50f22a139ddc34b19e250ff19959"
  },
  {
    "url": "buddy-logos/logos/hapi.svg",
    "revision": "7b31e15b0248d1633866402cfd1c3965"
  },
  {
    "url": "buddy-logos/logos/harrow.svg",
    "revision": "b6c0be73a4fec38a4e1068753efb3185"
  },
  {
    "url": "buddy-logos/logos/hashnode.svg",
    "revision": "1eee2efbf74de182618a27cce7fc0c4d"
  },
  {
    "url": "buddy-logos/logos/haskell.svg",
    "revision": "89e1cae5e53197ebf2751139846b7487"
  },
  {
    "url": "buddy-logos/logos/hasura.svg",
    "revision": "39d511ed2ea2b048b2255cc63989f7d2"
  },
  {
    "url": "buddy-logos/logos/haxe.svg",
    "revision": "315768ffb7eeff0a3375289eb40666b6"
  },
  {
    "url": "buddy-logos/logos/haxl.svg",
    "revision": "abf826feb6c50163ffbb1007e98c6a48"
  },
  {
    "url": "buddy-logos/logos/hbase.svg",
    "revision": "452564b0ecb5a2124320aa242c343380"
  },
  {
    "url": "buddy-logos/logos/heap.svg",
    "revision": "fffbeb9bc5344d439c24cd9a915fcbd4"
  },
  {
    "url": "buddy-logos/logos/helpscout.svg",
    "revision": "c50d01fa158b06287426ede522e97dd1"
  },
  {
    "url": "buddy-logos/logos/heroku-redis.svg",
    "revision": "0893beba206c5014be51d2c0f6a0e2f5"
  },
  {
    "url": "buddy-logos/logos/heroku.svg",
    "revision": "b320b99905828c5bc81baacb0268cc04"
  },
  {
    "url": "buddy-logos/logos/heron.svg",
    "revision": "fd0fa0e793772133bd5c09819a412780"
  },
  {
    "url": "buddy-logos/logos/hexo.svg",
    "revision": "4f13e14d99f051a5345a4200c9d6d1a9"
  },
  {
    "url": "buddy-logos/logos/hhvm.svg",
    "revision": "7bc61dde2c5b416c6551f1863f267865"
  },
  {
    "url": "buddy-logos/logos/hibernate.svg",
    "revision": "54222759641b2e9b8134d5537a3f5fab"
  },
  {
    "url": "buddy-logos/logos/highcharts.svg",
    "revision": "adba38892939f53b17518811ac1a878f"
  },
  {
    "url": "buddy-logos/logos/hipchat.svg",
    "revision": "94f5c7d711da082845b949eb94f52b8b"
  },
  {
    "url": "buddy-logos/logos/hipercard.svg",
    "revision": "688ff29f75f60e62a1b9f64dd4a35dde"
  },
  {
    "url": "buddy-logos/logos/hoa.svg",
    "revision": "c42b04fa7ca95b2c3f8026607260b93b"
  },
  {
    "url": "buddy-logos/logos/hoodie.svg",
    "revision": "3e008f7c7026ecb737173258940dc6b8"
  },
  {
    "url": "buddy-logos/logos/horizon.svg",
    "revision": "5d8e5a81c8b6b08d04a76212127d3495"
  },
  {
    "url": "buddy-logos/logos/hosted-graphite.svg",
    "revision": "b26e3df938ca18eac81f319cc8f23618"
  },
  {
    "url": "buddy-logos/logos/hostgator.svg",
    "revision": "7f51ee3e3515a8dfc4eb281134968516"
  },
  {
    "url": "buddy-logos/logos/houndci.svg",
    "revision": "35ee1e745427c1f87a0b9bac5e851a26"
  },
  {
    "url": "buddy-logos/logos/html-5.svg",
    "revision": "24845c5ca600cfab149e84387d826465"
  },
  {
    "url": "buddy-logos/logos/html5-boilerplate.svg",
    "revision": "3a1f0d44ad0bfe2e8618ee2bc1b36d66"
  },
  {
    "url": "buddy-logos/logos/hubspot.svg",
    "revision": "23ec124e7d117d7f0520f80fccb21673"
  },
  {
    "url": "buddy-logos/logos/hugo.svg",
    "revision": "655c8f0fcb9ca0df47f04c353440846b"
  },
  {
    "url": "buddy-logos/logos/humongous.svg",
    "revision": "514defde27d9e849d856b49c3079bfbc"
  },
  {
    "url": "buddy-logos/logos/hyper.svg",
    "revision": "c9b3bde8392cf89712ba9012c7181018"
  },
  {
    "url": "buddy-logos/logos/hyperapp.svg",
    "revision": "95e2d33910a39fa0759bc89271eb5673"
  },
  {
    "url": "buddy-logos/logos/ibm.svg",
    "revision": "3f8d26bfbcd19410321566f445a0b657"
  },
  {
    "url": "buddy-logos/logos/ieee.svg",
    "revision": "3a03c9abfd3465f10f11bfcb6892a620"
  },
  {
    "url": "buddy-logos/logos/ifttt.svg",
    "revision": "d7cb36f7d6d98ca837c53c311b714e4e"
  },
  {
    "url": "buddy-logos/logos/imagemin.svg",
    "revision": "7a00faa7e561f789a116c2defadc3cf8"
  },
  {
    "url": "buddy-logos/logos/immutable.svg",
    "revision": "d2be58123d4283eb36498506f83a9c62"
  },
  {
    "url": "buddy-logos/logos/impala.svg",
    "revision": "5f681e7a3a3cf2f30534f44eb117ea50"
  },
  {
    "url": "buddy-logos/logos/importio.svg",
    "revision": "96f912f813edae6959680543f565a479"
  },
  {
    "url": "buddy-logos/logos/infer.svg",
    "revision": "cf76f06f742fa51fa45094a7188bdd29"
  },
  {
    "url": "buddy-logos/logos/inferno.svg",
    "revision": "79ab8a2ff79e98f19d8ec3a89fa1a6e4"
  },
  {
    "url": "buddy-logos/logos/influxdb.svg",
    "revision": "661b8b7d6244358b787270b8407535ca"
  },
  {
    "url": "buddy-logos/logos/ink.svg",
    "revision": "dd06364b6e6fae53af8a80284576e84b"
  },
  {
    "url": "buddy-logos/logos/instagram-icon.svg",
    "revision": "4c7ce1b03d039e985ccc196099fde994"
  },
  {
    "url": "buddy-logos/logos/instagram.svg",
    "revision": "b75c451e2c224c0b227d6d43aaff116d"
  },
  {
    "url": "buddy-logos/logos/intellij-idea.svg",
    "revision": "5a85e929161673d997368cdd61bb65a0"
  },
  {
    "url": "buddy-logos/logos/intercom.svg",
    "revision": "f944fc98194bf370d9de2e70cd367075"
  },
  {
    "url": "buddy-logos/logos/internetexplorer.svg",
    "revision": "a523b8a56bfd62d82de709fe893a2675"
  },
  {
    "url": "buddy-logos/logos/invision.svg",
    "revision": "2f41c95d92b7033b797048035e772889"
  },
  {
    "url": "buddy-logos/logos/io.svg",
    "revision": "862373721b5b1c543f2c0b797f7b58fc"
  },
  {
    "url": "buddy-logos/logos/ionic.svg",
    "revision": "83ff7531209967d27f6f95c4549808a6"
  },
  {
    "url": "buddy-logos/logos/ios.svg",
    "revision": "fe6b9567e33c6589d14d1568d282de53"
  },
  {
    "url": "buddy-logos/logos/iron.svg",
    "revision": "710c870ab5eedbfbe4445326d3fcf28a"
  },
  {
    "url": "buddy-logos/logos/itsalive.svg",
    "revision": "4cec34e88850c13d38fdef0a464d2eac"
  },
  {
    "url": "buddy-logos/logos/jade.svg",
    "revision": "76b16c6a27fa15962b463152556686ca"
  },
  {
    "url": "buddy-logos/logos/jamstack.svg",
    "revision": "28deb1be42089f979aedc4d4947dbfc7"
  },
  {
    "url": "buddy-logos/logos/jasmine.svg",
    "revision": "e29bd4056a6587ce963a298029692db2"
  },
  {
    "url": "buddy-logos/logos/java.svg",
    "revision": "a732a6e5bc69653a55d6dd81ab8d2d5e"
  },
  {
    "url": "buddy-logos/logos/javascript.svg",
    "revision": "87711407412494d529d45ee76167583c"
  },
  {
    "url": "buddy-logos/logos/jcb.svg",
    "revision": "a86c67018e518bbea2ab536a350a588d"
  },
  {
    "url": "buddy-logos/logos/jekyll.svg",
    "revision": "e8fd4164a92f134afd412b2b4cf824b4"
  },
  {
    "url": "buddy-logos/logos/jelastic.svg",
    "revision": "9e7de03f363e5efb00d8960a51b9c289"
  },
  {
    "url": "buddy-logos/logos/jenkins.svg",
    "revision": "80db7ec4b3fd69b977a298befda61698"
  },
  {
    "url": "buddy-logos/logos/jest.svg",
    "revision": "2c3c135cc8e06e14eb916df38e89b3fb"
  },
  {
    "url": "buddy-logos/logos/jetbrains.svg",
    "revision": "a434d3754b53902f2647bb6f494c0db6"
  },
  {
    "url": "buddy-logos/logos/jhipster.svg",
    "revision": "97ec373dbd42f51ee27723037088eb77"
  },
  {
    "url": "buddy-logos/logos/jira.svg",
    "revision": "0b47e9e4dd3edf5b67fa10457dfbd98d"
  },
  {
    "url": "buddy-logos/logos/joomla.svg",
    "revision": "d8aa2e455d209bd91de1d6bd4ffba610"
  },
  {
    "url": "buddy-logos/logos/jquery-mobile.svg",
    "revision": "c7fcf7e77d06170c13615246a97906c1"
  },
  {
    "url": "buddy-logos/logos/jquery.svg",
    "revision": "6ff17bd2dc7d786853da589cb373d553"
  },
  {
    "url": "buddy-logos/logos/jruby.svg",
    "revision": "8283ecd88f22e58366eb695ee2043026"
  },
  {
    "url": "buddy-logos/logos/jsbin.svg",
    "revision": "b4186abcd17443a4284827570dfc0286"
  },
  {
    "url": "buddy-logos/logos/jscs.svg",
    "revision": "e495fedf0924896055736ff68e58ca36"
  },
  {
    "url": "buddy-logos/logos/jsdelivr.svg",
    "revision": "23ef52e22ebcce12f48eb9587c15ebf8"
  },
  {
    "url": "buddy-logos/logos/jsdom.svg",
    "revision": "d8ac5f936727e69c03084793d2d7d451"
  },
  {
    "url": "buddy-logos/logos/jsfiddle.svg",
    "revision": "a198c31ef7f28f8d9440a4dce2734f64"
  },
  {
    "url": "buddy-logos/logos/json.svg",
    "revision": "ac9400ad542fe08695825e09e5a5b92f"
  },
  {
    "url": "buddy-logos/logos/jspm.svg",
    "revision": "2a73f36963fb7cecc9caa4a579756310"
  },
  {
    "url": "buddy-logos/logos/juju.svg",
    "revision": "73cce4f2b8e68901997421d6a4b171bd"
  },
  {
    "url": "buddy-logos/logos/julia.svg",
    "revision": "94400df5c4d73411a2b577c199bc5691"
  },
  {
    "url": "buddy-logos/logos/kafka.svg",
    "revision": "4e7b004b675b18960da4a779d207b079"
  },
  {
    "url": "buddy-logos/logos/kaios.svg",
    "revision": "dfb32b3bcc475bed1fba38ab1f5f1d3f"
  },
  {
    "url": "buddy-logos/logos/kallithea.svg",
    "revision": "9730f1df235427f19ac921decb8ed31d"
  },
  {
    "url": "buddy-logos/logos/karma.svg",
    "revision": "4e1ae63e3c482df43225e5adf1b55a84"
  },
  {
    "url": "buddy-logos/logos/keen.svg",
    "revision": "4d71008de53ac8734bae4d4fc0559800"
  },
  {
    "url": "buddy-logos/logos/kemal.svg",
    "revision": "df9c7a539cc4ecb353e14983c9a42df9"
  },
  {
    "url": "buddy-logos/logos/keycdn.svg",
    "revision": "fb7dabdc9305282f5db13e14e6d9008e"
  },
  {
    "url": "buddy-logos/logos/keymetrics.svg",
    "revision": "db53b597a06db24045f459a4db32b1a1"
  },
  {
    "url": "buddy-logos/logos/keystonejs.svg",
    "revision": "04eab88afa9cee52610e469d6f21ff00"
  },
  {
    "url": "buddy-logos/logos/khan_academy.svg",
    "revision": "a5d04781a09de1bcb9b4f0aef72a60a6"
  },
  {
    "url": "buddy-logos/logos/kibana.svg",
    "revision": "61cfe0e145b5de558e6ecc9420e83a42"
  },
  {
    "url": "buddy-logos/logos/kickstarter.svg",
    "revision": "552565a3998e088f598348aa9c2c94f8"
  },
  {
    "url": "buddy-logos/logos/kinto.svg",
    "revision": "5f1dfba38b726bbefe74c59eba86e637"
  },
  {
    "url": "buddy-logos/logos/kinvey.svg",
    "revision": "ed5f888299d81cfa79ae77f12d6d4c98"
  },
  {
    "url": "buddy-logos/logos/kirby.svg",
    "revision": "23498f26a39db63633b611eeeb92ed15"
  },
  {
    "url": "buddy-logos/logos/kissmetrics-monochromatic.svg",
    "revision": "f1d2f70e8186f1239a9f4756495a2a49"
  },
  {
    "url": "buddy-logos/logos/kissmetrics.svg",
    "revision": "cc49eeb418874745a4832b7ccc16f19c"
  },
  {
    "url": "buddy-logos/logos/kitematic.svg",
    "revision": "60c249f1764d1f7a32de57d03ea02c15"
  },
  {
    "url": "buddy-logos/logos/kloudless.svg",
    "revision": "6e95a26fb405df1609b15b54f6bea017"
  },
  {
    "url": "buddy-logos/logos/knex.svg",
    "revision": "a22ac4117f172e45e59223efec74be13"
  },
  {
    "url": "buddy-logos/logos/knockout.svg",
    "revision": "a2f38da010b71664e168674aedc63499"
  },
  {
    "url": "buddy-logos/logos/kong.svg",
    "revision": "0ab7e266795a84d29abe96d95f320cf0"
  },
  {
    "url": "buddy-logos/logos/kontena.svg",
    "revision": "3857bc98071382f3c40fcaee4dadec7d"
  },
  {
    "url": "buddy-logos/logos/kops.svg",
    "revision": "736fbede89a875f9d5f14168a780af53"
  },
  {
    "url": "buddy-logos/logos/kore.svg",
    "revision": "97b4ec54d5b4395a34b0277932155e96"
  },
  {
    "url": "buddy-logos/logos/koreio.svg",
    "revision": "a62143a8ffbff54a9f0f773d3cd0b5b0"
  },
  {
    "url": "buddy-logos/logos/kotlin.svg",
    "revision": "99fbbf55b7bfe0d3be16ed5663b0f9eb"
  },
  {
    "url": "buddy-logos/logos/kraken.svg",
    "revision": "3e7f1d98cb1b7a5ea24c69cc972ea55e"
  },
  {
    "url": "buddy-logos/logos/krakenjs.svg",
    "revision": "23681f99bf8219406df2e1edd16e406c"
  },
  {
    "url": "buddy-logos/logos/kubernetes.svg",
    "revision": "efa8fbd95ccccfe17a7eb301c28245ae"
  },
  {
    "url": "buddy-logos/logos/kustomer.svg",
    "revision": "5e1683bf31a8d36ab0a2be44079322a6"
  },
  {
    "url": "buddy-logos/logos/laravel.svg",
    "revision": "1766a461a29f99bb57dde5ad4d52b2d9"
  },
  {
    "url": "buddy-logos/logos/lastfm.svg",
    "revision": "e7cc0262dab66b1ce9acf996b2287516"
  },
  {
    "url": "buddy-logos/logos/lateral.svg",
    "revision": "84df7e38610e13d60415dfc624c7d81e"
  },
  {
    "url": "buddy-logos/logos/launchkit.svg",
    "revision": "339810ed2f8fe3a3b7b1e6538dfb9a70"
  },
  {
    "url": "buddy-logos/logos/launchrock.svg",
    "revision": "27847936ea8819b18309c05ceeedb5f9"
  },
  {
    "url": "buddy-logos/logos/leafjet.svg",
    "revision": "66aa817e74a3793db87d3555a88da690"
  },
  {
    "url": "buddy-logos/logos/leankit.svg",
    "revision": "ac4d2807e1ed9ebcf6c4aea76cea3b6b"
  },
  {
    "url": "buddy-logos/logos/less.svg",
    "revision": "b3473f5e868c002b2be2bd5987088eee"
  },
  {
    "url": "buddy-logos/logos/letsencrypt.svg",
    "revision": "9b4554805996958431d73ab8b1d18e3a"
  },
  {
    "url": "buddy-logos/logos/leveldb.svg",
    "revision": "5abc17c7e321c65fde11c0bff39d6e89"
  },
  {
    "url": "buddy-logos/logos/librato.svg",
    "revision": "05b53c1bebe8da08822ad44e862c85f2"
  },
  {
    "url": "buddy-logos/logos/liftweb.svg",
    "revision": "5f16aabb50b6c8cc43f7378dfbe9203b"
  },
  {
    "url": "buddy-logos/logos/lighttpd.svg",
    "revision": "abe676ce4dd3f330593a2b0f94745f97"
  },
  {
    "url": "buddy-logos/logos/linkedin.svg",
    "revision": "0a02fac0eb37309136a725b35b938ad6"
  },
  {
    "url": "buddy-logos/logos/linkerd.svg",
    "revision": "4a5eec4e0296f867a88a7f9ac1f3ccd2"
  },
  {
    "url": "buddy-logos/logos/linode.svg",
    "revision": "b9bb6240af77f485a831f4b6ce9beba2"
  },
  {
    "url": "buddy-logos/logos/linux-mint.svg",
    "revision": "f86ced47d7f7870452a61317aa698c09"
  },
  {
    "url": "buddy-logos/logos/linux-tux.svg",
    "revision": "2e82d079f8bc66df87636c7bb8f8ab7c"
  },
  {
    "url": "buddy-logos/logos/litmus.svg",
    "revision": "49cae687b976c38a262cda4d194e5db3"
  },
  {
    "url": "buddy-logos/logos/loader.svg",
    "revision": "252d3c92789dbe03e89bb823213fb0d0"
  },
  {
    "url": "buddy-logos/logos/locent.svg",
    "revision": "6d5e08aaf3b8f1c4910496add851c100"
  },
  {
    "url": "buddy-logos/logos/lodash.svg",
    "revision": "9068d32a4bf9f5e121ac449fca2f2de0"
  },
  {
    "url": "buddy-logos/logos/logentries.svg",
    "revision": "386b6feaa45d00fc2e70c9e19550dcba"
  },
  {
    "url": "buddy-logos/logos/loggly.svg",
    "revision": "1a005ae8a5a7ecf76ca73cafd50479df"
  },
  {
    "url": "buddy-logos/logos/logmatic.svg",
    "revision": "f53d9975c15e344d83c79ed8d69f43f6"
  },
  {
    "url": "buddy-logos/logos/lookback.svg",
    "revision": "312ab946ba9e0ad8746443022b705a01"
  },
  {
    "url": "buddy-logos/logos/looker.svg",
    "revision": "e42c5d596b634da13331a3fa4380645e"
  },
  {
    "url": "buddy-logos/logos/loopback.svg",
    "revision": "213d300f7548ffa3e42af613e1072d6f"
  },
  {
    "url": "buddy-logos/logos/losant.svg",
    "revision": "8c74bb2eb6c474a0c88f2511d4344b6a"
  },
  {
    "url": "buddy-logos/logos/lotus.svg",
    "revision": "935604b277c80af6f3438b0d40aefb42"
  },
  {
    "url": "buddy-logos/logos/lua.svg",
    "revision": "33743237f03981588dd7bedcc090e785"
  },
  {
    "url": "buddy-logos/logos/lucene.net.svg",
    "revision": "2f3236f7c6036ffe4dded2341bacfff1"
  },
  {
    "url": "buddy-logos/logos/lucene.svg",
    "revision": "c18fa0e2bd9791fecf54b78caf0e9315"
  },
  {
    "url": "buddy-logos/logos/lumen.svg",
    "revision": "14a60dd6255a3bbb660c8192b1c900c1"
  },
  {
    "url": "buddy-logos/logos/lynda.svg",
    "revision": "94610025b4db8b1ad047417f533ca2dc"
  },
  {
    "url": "buddy-logos/logos/macosx.svg",
    "revision": "77e982b1ac5a51e0af89b44e12c00ad5"
  },
  {
    "url": "buddy-logos/logos/maestro.svg",
    "revision": "1a587f7833cc3f8c5e2d07f791c8c755"
  },
  {
    "url": "buddy-logos/logos/mageia.svg",
    "revision": "504dd2dea5f5eea276e0b25bbe6544a1"
  },
  {
    "url": "buddy-logos/logos/magento.svg",
    "revision": "de052da6ca659a4c7a5767f75a5d90f5"
  },
  {
    "url": "buddy-logos/logos/magneto.svg",
    "revision": "83b2bb8d0cc51d4704d4a75fa832e164"
  },
  {
    "url": "buddy-logos/logos/mailchimp-freddie.svg",
    "revision": "a5fb4b48e6979898005baf366cd4e807"
  },
  {
    "url": "buddy-logos/logos/mailchimp.svg",
    "revision": "01d2b17d53c6e4967ebe3799c6e3e4dd"
  },
  {
    "url": "buddy-logos/logos/maildeveloper.svg",
    "revision": "37f6bf9a5ed37d2f6237944c52d87bb9"
  },
  {
    "url": "buddy-logos/logos/mailgun.svg",
    "revision": "1d9910fb9445b02e73154e3578e30648"
  },
  {
    "url": "buddy-logos/logos/mandrill-shield.svg",
    "revision": "309b688c1472c4f9fa83ac4caff0049b"
  },
  {
    "url": "buddy-logos/logos/mandrill.svg",
    "revision": "8d05e911b792c742f11c1403dcf3f74f"
  },
  {
    "url": "buddy-logos/logos/manifoldjs.svg",
    "revision": "ada470a4e714617b142faaeb28747430"
  },
  {
    "url": "buddy-logos/logos/mantl.svg",
    "revision": "db6376c9943779c5b153a19f8c318afd"
  },
  {
    "url": "buddy-logos/logos/manuscript.svg",
    "revision": "c87a2a0814200dddc551f641333804a7"
  },
  {
    "url": "buddy-logos/logos/mapbox.svg",
    "revision": "b9d7109b23f2289c9c632ceb62523de1"
  },
  {
    "url": "buddy-logos/logos/maps-me.svg",
    "revision": "a4f6ec8d8cb27663d5f6e6bf981bec90"
  },
  {
    "url": "buddy-logos/logos/mapzen.svg",
    "revision": "d2cc63bc6c3be705960cb967453d2c01"
  },
  {
    "url": "buddy-logos/logos/mariadb.svg",
    "revision": "e16110bc845f97bde29fcdc5183597c9"
  },
  {
    "url": "buddy-logos/logos/marionette.svg",
    "revision": "a8f0d530c9ee22c35bd9ba0957b8b3b3"
  },
  {
    "url": "buddy-logos/logos/markdown.svg",
    "revision": "5d2c73b07f6d9d947b625f6868079540"
  },
  {
    "url": "buddy-logos/logos/marko.svg",
    "revision": "fed0963a273cf61045d43bfebc9962fc"
  },
  {
    "url": "buddy-logos/logos/marvel.svg",
    "revision": "00f79b7d3e2b7e92eee836dafbc870eb"
  },
  {
    "url": "buddy-logos/logos/mastercard.svg",
    "revision": "3fe7290b9e893ce574999675f7c091d7"
  },
  {
    "url": "buddy-logos/logos/material-ui.svg",
    "revision": "cd849ab9d8ba06af809a4d72ac60f5a6"
  },
  {
    "url": "buddy-logos/logos/materializecss.svg",
    "revision": "fe397f2a174dad6c5f2c36cec0c1ae5e"
  },
  {
    "url": "buddy-logos/logos/mattermost.svg",
    "revision": "ae093764de058ff844aa4e013ff4ce49"
  },
  {
    "url": "buddy-logos/logos/maxcdn.svg",
    "revision": "80769bc9b29c327e311b8081289cc205"
  },
  {
    "url": "buddy-logos/logos/mdn.svg",
    "revision": "2de3700ea065810a0845b23795f46f2f"
  },
  {
    "url": "buddy-logos/logos/meanio.svg",
    "revision": "9a93233670ede175235c4b4945d020c3"
  },
  {
    "url": "buddy-logos/logos/medium.svg",
    "revision": "bad5a888d252fc08e4d77a10edbbc105"
  },
  {
    "url": "buddy-logos/logos/memcached.svg",
    "revision": "2bcccabfb9f9a61687d297d69dca3ecf"
  },
  {
    "url": "buddy-logos/logos/memsql.svg",
    "revision": "24b00de7e546d2228831a3fb68a302e7"
  },
  {
    "url": "buddy-logos/logos/mention.svg",
    "revision": "fa2fa981ec25306f0f423df91c5322c4"
  },
  {
    "url": "buddy-logos/logos/mercurial.svg",
    "revision": "5046f9b093ed5456c75c36bab6511c4d"
  },
  {
    "url": "buddy-logos/logos/mern.svg",
    "revision": "b1f4afbe35badce66ba5a7d45c001ffb"
  },
  {
    "url": "buddy-logos/logos/mesos.svg",
    "revision": "667f5623e4493499933fe2f5583f6c86"
  },
  {
    "url": "buddy-logos/logos/mesosphere.svg",
    "revision": "ff3736b52ef9f223ee1bbc2ce22fd4db"
  },
  {
    "url": "buddy-logos/logos/message.io.svg",
    "revision": "96133cc1dab49e15f7a7e6be8473749a"
  },
  {
    "url": "buddy-logos/logos/metabase.svg",
    "revision": "84d1cf25e7554e35625cd5d393d67316"
  },
  {
    "url": "buddy-logos/logos/meteor-icon.svg",
    "revision": "2a05c00f5ab999401f4790fc9b3f395d"
  },
  {
    "url": "buddy-logos/logos/meteor.svg",
    "revision": "02f855ee14a025e1083c69cec435a537"
  },
  {
    "url": "buddy-logos/logos/microcosm.svg",
    "revision": "ae0cb12052e8b3aac24849a87ef6504f"
  },
  {
    "url": "buddy-logos/logos/microsoft-edge.svg",
    "revision": "9f06f93174c56ab34f15a30fdb3211ec"
  },
  {
    "url": "buddy-logos/logos/microsoft-windows.svg",
    "revision": "62f68f288893b7f58844e03b61f045cf"
  },
  {
    "url": "buddy-logos/logos/microsoft.svg",
    "revision": "096c7c84aacfaefec6c0d01bedc5af98"
  },
  {
    "url": "buddy-logos/logos/middleman.svg",
    "revision": "4bee7dffa5ee47f824dd8269aab0d6a0"
  },
  {
    "url": "buddy-logos/logos/milligram.svg",
    "revision": "0fae2d49f92c58ca852f6003d307c250"
  },
  {
    "url": "buddy-logos/logos/mist.svg",
    "revision": "c50e6057f725ce259405243927bffa1e"
  },
  {
    "url": "buddy-logos/logos/mithril.svg",
    "revision": "de81ffdfba442bfa61efafaebaf0c866"
  },
  {
    "url": "buddy-logos/logos/mixmax.svg",
    "revision": "6187c05453c5897a8504cc7a964cb8d1"
  },
  {
    "url": "buddy-logos/logos/mixpanel.svg",
    "revision": "e526e2fe3eea19d675f47459fad085a4"
  },
  {
    "url": "buddy-logos/logos/mobx.svg",
    "revision": "f04a464f4df62a6b25c278f5afb00079"
  },
  {
    "url": "buddy-logos/logos/mocha.svg",
    "revision": "6b0e00b3cef1bf98d3c8d90396c8580f"
  },
  {
    "url": "buddy-logos/logos/mockflow.svg",
    "revision": "3279c72914891d5b9cb50683dd26edb8"
  },
  {
    "url": "buddy-logos/logos/modernizr.svg",
    "revision": "2b736ab77f8ae77f906fc87d9f3971a1"
  },
  {
    "url": "buddy-logos/logos/modulus.svg",
    "revision": "90363b1654418731c598c256b1e9e650"
  },
  {
    "url": "buddy-logos/logos/modx.svg",
    "revision": "577112d36b9e9c74382ce2b0c7deab59"
  },
  {
    "url": "buddy-logos/logos/momentjs.svg",
    "revision": "147e545fab7f804e667190ca5b601115"
  },
  {
    "url": "buddy-logos/logos/monero.svg",
    "revision": "538003100ce4e704c4de02ae7bdb3a0f"
  },
  {
    "url": "buddy-logos/logos/mongodb.svg",
    "revision": "2aa7f7b569fd6e9176f49dd31eaa970e"
  },
  {
    "url": "buddy-logos/logos/mongolab.svg",
    "revision": "0c55eb3da2c2b7f992f16d0af46437f4"
  },
  {
    "url": "buddy-logos/logos/mono.svg",
    "revision": "2c702cb1d8e87fc165732343be61d905"
  },
  {
    "url": "buddy-logos/logos/moon.svg",
    "revision": "64b50bcfd13e43b6f4e08c1e064f23e4"
  },
  {
    "url": "buddy-logos/logos/mootools.svg",
    "revision": "79e8726a261cc62bdd51091bd771d5e7"
  },
  {
    "url": "buddy-logos/logos/morpheus.svg",
    "revision": "8ede4346af9b25332e334c32b23fec3b"
  },
  {
    "url": "buddy-logos/logos/mozilla.svg",
    "revision": "6d3754b21af11702b32d0087e0f155fc"
  },
  {
    "url": "buddy-logos/logos/mparticle.svg",
    "revision": "f1316fa5e4ee42d0c098ae764d76a6de"
  },
  {
    "url": "buddy-logos/logos/mysql.svg",
    "revision": "dd2a5a358ea682bed45bf98bc842b3ed"
  },
  {
    "url": "buddy-logos/logos/myth.svg",
    "revision": "a19d793ec44fdeae74b93bf0c07e63c2"
  },
  {
    "url": "buddy-logos/logos/namecheap.svg",
    "revision": "91d482fdb6278370502335b22aaa6b59"
  },
  {
    "url": "buddy-logos/logos/nanonets.svg",
    "revision": "53070cff901b488f03a067d21d41f4d8"
  },
  {
    "url": "buddy-logos/logos/nativescript.svg",
    "revision": "c9ab4e2e9d9777d01312071d313c4383"
  },
  {
    "url": "buddy-logos/logos/neat.svg",
    "revision": "053713539483f896bf5497cf35f5f90a"
  },
  {
    "url": "buddy-logos/logos/neo4j.svg",
    "revision": "51810d8be900128dec90bcf00aa1f5e3"
  },
  {
    "url": "buddy-logos/logos/neonmetrics.svg",
    "revision": "e6443e5cfa2eb8e8f102d87bd6fc689e"
  },
  {
    "url": "buddy-logos/logos/neovim.svg",
    "revision": "f3000f444ffd97043d1d7949cc343cda"
  },
  {
    "url": "buddy-logos/logos/nestjs.svg",
    "revision": "1301a698c688bd9f2887328b126c8ab4"
  },
  {
    "url": "buddy-logos/logos/netbeans.svg",
    "revision": "8a7c9b2d858b21cb335e67402a2bee09"
  },
  {
    "url": "buddy-logos/logos/netflix-icon.svg",
    "revision": "77c5ae8124a31add8ef9e28505601dcf"
  },
  {
    "url": "buddy-logos/logos/netflix.svg",
    "revision": "714766ea946362ea824a9aefec88c871"
  },
  {
    "url": "buddy-logos/logos/netlify.svg",
    "revision": "41555d529c6dac488b4292fe55632cad"
  },
  {
    "url": "buddy-logos/logos/netuitive.svg",
    "revision": "49465c2ffb4ddbfe35cd9d10b8cabe46"
  },
  {
    "url": "buddy-logos/logos/new-relic.svg",
    "revision": "786516ab2baff115787844021cd9beed"
  },
  {
    "url": "buddy-logos/logos/nextjs.svg",
    "revision": "e48e27f9d0eab488e665d8513578dfb5"
  },
  {
    "url": "buddy-logos/logos/nginx.svg",
    "revision": "87ef659565a5f470142895c5c65c4725"
  },
  {
    "url": "buddy-logos/logos/nightwatch.svg",
    "revision": "cf8c5f3668f11c58a34b06c227330ec0"
  },
  {
    "url": "buddy-logos/logos/nodal.svg",
    "revision": "bc8826c1aa071137ba24bb5c1808fdc9"
  },
  {
    "url": "buddy-logos/logos/node-sass.svg",
    "revision": "26c5312c19c2a7b2e007d12d8caf0ef0"
  },
  {
    "url": "buddy-logos/logos/nodebots.svg",
    "revision": "6ac020a770446898887b1a7b19744f27"
  },
  {
    "url": "buddy-logos/logos/nodejitsu.svg",
    "revision": "538d4796b00bd464621a6753f0f6daae"
  },
  {
    "url": "buddy-logos/logos/nodejs-icon.svg",
    "revision": "94cafb0d1b4a2875215db17964f0938a"
  },
  {
    "url": "buddy-logos/logos/nodejs.svg",
    "revision": "f434bfbbffc44588572e13e1e113391a"
  },
  {
    "url": "buddy-logos/logos/nodemon.svg",
    "revision": "c3e50f3cf511e1dc5cd5e192911eb8f1"
  },
  {
    "url": "buddy-logos/logos/nodeos.svg",
    "revision": "115e8ecf5127be256cf38921e3b2e82b"
  },
  {
    "url": "buddy-logos/logos/nodewebkit.svg",
    "revision": "f906d8cd4205897120aa3fa14c17dee1"
  },
  {
    "url": "buddy-logos/logos/nomad.svg",
    "revision": "2c0a61156166c564489f23f90cb6f478"
  },
  {
    "url": "buddy-logos/logos/noysi.svg",
    "revision": "4e5a5393d7ef9cad7fabc274b3a9b3a4"
  },
  {
    "url": "buddy-logos/logos/npm-2.svg",
    "revision": "4ffaf2930fa525b929a5b4eff002830d"
  },
  {
    "url": "buddy-logos/logos/npm.svg",
    "revision": "dc5e0813f887fd1ecdc0cd9e3f856914"
  },
  {
    "url": "buddy-logos/logos/nuclide.svg",
    "revision": "ea8d681519c3cab4f245e491b31a6be3"
  },
  {
    "url": "buddy-logos/logos/nuodb.svg",
    "revision": "94389bcec7c220966c99728fa708921e"
  },
  {
    "url": "buddy-logos/logos/nuxt.svg",
    "revision": "fc69473e19e1a29c8c4f525aca501b4d"
  },
  {
    "url": "buddy-logos/logos/oauth.svg",
    "revision": "405662ee5d719a333a12b5f571cf8433"
  },
  {
    "url": "buddy-logos/logos/ocaml.svg",
    "revision": "be0bbdf8a8b81277d08a9f8420229d5e"
  },
  {
    "url": "buddy-logos/logos/octodns.svg",
    "revision": "957b32bcf8d8ef98574b5ae7a261bd18"
  },
  {
    "url": "buddy-logos/logos/olapic.svg",
    "revision": "561ee71f8e86717b90f23234a7aa203b"
  },
  {
    "url": "buddy-logos/logos/olark.svg",
    "revision": "43393c78d16464c9a959bd7e65d0f5c9"
  },
  {
    "url": "buddy-logos/logos/onesignal.svg",
    "revision": "37dad9aa4ea7b74489cc3444279510d9"
  },
  {
    "url": "buddy-logos/logos/opbeat.svg",
    "revision": "4133aea90b9cd09e2b250a977854169c"
  },
  {
    "url": "buddy-logos/logos/open-graph.svg",
    "revision": "3a18ebaff854786a41b6e00907d2cc5a"
  },
  {
    "url": "buddy-logos/logos/opencart.svg",
    "revision": "01d40f2e85830908f923eaeed3ddd254"
  },
  {
    "url": "buddy-logos/logos/opencollective.svg",
    "revision": "6595b6d9491a09fb71aed3825756ba18"
  },
  {
    "url": "buddy-logos/logos/opencv.svg",
    "revision": "95689ea117232007c5e12eb560191733"
  },
  {
    "url": "buddy-logos/logos/opengl.svg",
    "revision": "52cf5af5d54d87e7bd9071e53df11dcd"
  },
  {
    "url": "buddy-logos/logos/openlayers.svg",
    "revision": "322af141ae836fa282f2cba3407b2947"
  },
  {
    "url": "buddy-logos/logos/openshift.svg",
    "revision": "453d68c6dc25171decdb2bf56cf649c4"
  },
  {
    "url": "buddy-logos/logos/opensource.svg",
    "revision": "ba4211bcc063042282a9df95f3fa7536"
  },
  {
    "url": "buddy-logos/logos/openstack.svg",
    "revision": "172513ba967d2c504844e39be1bc14ea"
  },
  {
    "url": "buddy-logos/logos/opera.svg",
    "revision": "ed38582e709fff3ca2ccad85858f061d"
  },
  {
    "url": "buddy-logos/logos/opsee.svg",
    "revision": "e461b0fb9a2914089f98549d0e453f99"
  },
  {
    "url": "buddy-logos/logos/opsgenie.svg",
    "revision": "ac7a74a70fbf684545409bf1b91c6005"
  },
  {
    "url": "buddy-logos/logos/opsmatic.svg",
    "revision": "c1b8828783cc0b52de35c9c8747dc99e"
  },
  {
    "url": "buddy-logos/logos/optimizely.svg",
    "revision": "7cd2de1a7e3185674c434a71f0914637"
  },
  {
    "url": "buddy-logos/logos/oracle.svg",
    "revision": "7c876d3b9ff4dae89662d63f42c1e40b"
  },
  {
    "url": "buddy-logos/logos/oreilly.svg",
    "revision": "58f06b160e95a6209da9ffd6fd6f02f3"
  },
  {
    "url": "buddy-logos/logos/origami.svg",
    "revision": "2ac2326b9b2e7106625403b347b8aa67"
  },
  {
    "url": "buddy-logos/logos/origin.svg",
    "revision": "4ef0fa2a60172fb90cc755964276f289"
  },
  {
    "url": "buddy-logos/logos/oshw.svg",
    "revision": "6929729dad47d6025f2a900b0db9ab87"
  },
  {
    "url": "buddy-logos/logos/osquery.svg",
    "revision": "9a9ae84a38ee9dc9f4290c44357083ec"
  },
  {
    "url": "buddy-logos/logos/otto.svg",
    "revision": "2a6e5d535853ec7d3be55a50f9cd3d35"
  },
  {
    "url": "buddy-logos/logos/packer.svg",
    "revision": "836129ce73b11cbf6e716acefc3771cb"
  },
  {
    "url": "buddy-logos/logos/pagekit.svg",
    "revision": "1c4415f4ab47a2cb27cebf7bca16bba7"
  },
  {
    "url": "buddy-logos/logos/pagekite.svg",
    "revision": "17d858f3cd30b315ef32953b9c8a700c"
  },
  {
    "url": "buddy-logos/logos/panda.svg",
    "revision": "3b1e56968325e5dcbfd310cfe840621e"
  },
  {
    "url": "buddy-logos/logos/parse.svg",
    "revision": "a4d50223fa73ac915ac6c99d348dc8fa"
  },
  {
    "url": "buddy-logos/logos/parsehub.svg",
    "revision": "bbfa895e118bccdc0b9b96eec058b267"
  },
  {
    "url": "buddy-logos/logos/passbolt.svg",
    "revision": "4b93a8836f9e4494aa5741adc6ab7c77"
  },
  {
    "url": "buddy-logos/logos/passport.svg",
    "revision": "baefd8d2b158cbf94e3bb3f6f6a85162"
  },
  {
    "url": "buddy-logos/logos/patreon.svg",
    "revision": "5d3a8d19caed72bcec4adda7d2e05f5b"
  },
  {
    "url": "buddy-logos/logos/paypal.svg",
    "revision": "f3e24db27736030c70accbf2f2c852e4"
  },
  {
    "url": "buddy-logos/logos/peer5.svg",
    "revision": "b0bb61d3267041e0999a085f7a81c29c"
  },
  {
    "url": "buddy-logos/logos/pepperoni.svg",
    "revision": "7903d5043b3d8355287eb26ac712fe67"
  },
  {
    "url": "buddy-logos/logos/percona.svg",
    "revision": "76b7e6be7baf76257859c881490c9369"
  },
  {
    "url": "buddy-logos/logos/percy.svg",
    "revision": "e434dec0ff6405386d229880e3bbd86e"
  },
  {
    "url": "buddy-logos/logos/perf-rocks.svg",
    "revision": "e5c175027b1939b467a925f708bb9939"
  },
  {
    "url": "buddy-logos/logos/periscope.svg",
    "revision": "5146dbef33034ed96231599aee2d99de"
  },
  {
    "url": "buddy-logos/logos/perl.svg",
    "revision": "a025edb4a4db1cc2ba06750f29e35f8d"
  },
  {
    "url": "buddy-logos/logos/phalcon.svg",
    "revision": "c196e4e9cf45c455770e524e518caca2"
  },
  {
    "url": "buddy-logos/logos/phoenix.svg",
    "revision": "43646cbba5556c3e7cb758190ecf4e29"
  },
  {
    "url": "buddy-logos/logos/phonegap-bot.svg",
    "revision": "e10b9c81a23d5bd1e88d4896bd281366"
  },
  {
    "url": "buddy-logos/logos/phonegap.svg",
    "revision": "16771a56068ef752fefd80be288785de"
  },
  {
    "url": "buddy-logos/logos/php.svg",
    "revision": "fa78b345d39deeca1ac3460695e9b426"
  },
  {
    "url": "buddy-logos/logos/phpstorm.svg",
    "revision": "e83c5c30e96c8b9db25a94fb0540b1e1"
  },
  {
    "url": "buddy-logos/logos/picasa.svg",
    "revision": "075821250c5becdf88d20ef4a6c1ad5a"
  },
  {
    "url": "buddy-logos/logos/pingdom.svg",
    "revision": "d3eabb8285ece1ceba80ebd058c2267c"
  },
  {
    "url": "buddy-logos/logos/pingy.svg",
    "revision": "0aac8e83fa4869825ffb6cdfedbf881d"
  },
  {
    "url": "buddy-logos/logos/pinterest.svg",
    "revision": "d8a44cc58536d5f706da07bea0dd7faa"
  },
  {
    "url": "buddy-logos/logos/pipedrive.svg",
    "revision": "a6d6560b13c019591be699f5b159864e"
  },
  {
    "url": "buddy-logos/logos/pipefy.svg",
    "revision": "e38c150981c85b3b8d22eeb1cac3641d"
  },
  {
    "url": "buddy-logos/logos/pivotal_tracker.svg",
    "revision": "4757744cd9da6a5064f158fd1a06e999"
  },
  {
    "url": "buddy-logos/logos/pixate.svg",
    "revision": "05e1b77f28b544a4382b7d7d6dfd3779"
  },
  {
    "url": "buddy-logos/logos/pixelapse.svg",
    "revision": "dd06f8325819b541b46b6bf411751e56"
  },
  {
    "url": "buddy-logos/logos/pkg.svg",
    "revision": "a7ee14ef9cda2ad3dfc36ac8dbe92bac"
  },
  {
    "url": "buddy-logos/logos/planless.svg",
    "revision": "8d7f1d1f58663a66d29c1265c77803c9"
  },
  {
    "url": "buddy-logos/logos/plastic-scm.svg",
    "revision": "5718d22fb2e7941cdcf5277d2d1bcc1a"
  },
  {
    "url": "buddy-logos/logos/platformio.svg",
    "revision": "f1a357584d2f7a24a9663f5355d0c9b8"
  },
  {
    "url": "buddy-logos/logos/play.svg",
    "revision": "c41fd32709baac7aabdcf7a47e955841"
  },
  {
    "url": "buddy-logos/logos/pm2.svg",
    "revision": "9c9f9c3bd16336542cf4eabfc3ded7d6"
  },
  {
    "url": "buddy-logos/logos/podio.svg",
    "revision": "ae2e27e369ccb21c703ac2c69bc1588d"
  },
  {
    "url": "buddy-logos/logos/poeditor.svg",
    "revision": "c9cf40e219baccf9a1725ad6d2bbd38f"
  },
  {
    "url": "buddy-logos/logos/polymer.svg",
    "revision": "64402d69d11e2dffa597a6f620d30d0c"
  },
  {
    "url": "buddy-logos/logos/positionly.svg",
    "revision": "c9074d9fb0ab11a56534904e63eadd31"
  },
  {
    "url": "buddy-logos/logos/postcss.svg",
    "revision": "72edd65f6ca1391aebad72ea5d84174a"
  },
  {
    "url": "buddy-logos/logos/postgresql.svg",
    "revision": "f16a2cda4a160e5aafbab5f2aa49c526"
  },
  {
    "url": "buddy-logos/logos/postman.svg",
    "revision": "3ad5d3e7fc52d413e9d521eeeb1561ab"
  },
  {
    "url": "buddy-logos/logos/pouchdb.svg",
    "revision": "a71fa7ad4fc731885163df7396fc8f48"
  },
  {
    "url": "buddy-logos/logos/preact.svg",
    "revision": "d2f74a71aff2483afe4a24f4477d308e"
  },
  {
    "url": "buddy-logos/logos/precursor.svg",
    "revision": "234ca0ebc166cf555efeae9bb00b4910"
  },
  {
    "url": "buddy-logos/logos/prestashop.svg",
    "revision": "dc1918e029d960ded23f45cbefacf9b5"
  },
  {
    "url": "buddy-logos/logos/presto.svg",
    "revision": "08301749e56dc3ce970060d918b7e982"
  },
  {
    "url": "buddy-logos/logos/prettier.svg",
    "revision": "54f352037191a9c5f300419552906208"
  },
  {
    "url": "buddy-logos/logos/processwire-icon.svg",
    "revision": "11cf3db1c3dad3984a0d86ae23eca3e2"
  },
  {
    "url": "buddy-logos/logos/processwire.svg",
    "revision": "3f2ff303dab3d12a914c5d0774476ce2"
  },
  {
    "url": "buddy-logos/logos/productboard.svg",
    "revision": "52a1d9802fb98bb9a4f2fc8fb2d87682"
  },
  {
    "url": "buddy-logos/logos/producteev.svg",
    "revision": "fa85a1c591fb1d6c91de31a3f41ddfdf"
  },
  {
    "url": "buddy-logos/logos/producthunt.svg",
    "revision": "c541d5656b0e8b9162238b6d40e02b61"
  },
  {
    "url": "buddy-logos/logos/progress.svg",
    "revision": "c4de616f8d83a353c933be51340de0a2"
  },
  {
    "url": "buddy-logos/logos/prometheus.svg",
    "revision": "fdabc94099a2462a03df5ae1e4bc47c5"
  },
  {
    "url": "buddy-logos/logos/promises.svg",
    "revision": "66e1910f2b3420f619999c8be504c22e"
  },
  {
    "url": "buddy-logos/logos/proofy.svg",
    "revision": "014fd519c5f68d289fa5c8eb96cf6c26"
  },
  {
    "url": "buddy-logos/logos/prospect.svg",
    "revision": "e0aaa175a092a1b4af1a9f3234ad273b"
  },
  {
    "url": "buddy-logos/logos/protactor.svg",
    "revision": "1f1c007f0e1ee71880cc714e37471d94"
  },
  {
    "url": "buddy-logos/logos/protoio.svg",
    "revision": "bfe602353f91fc7a7d13e835e9a05faa"
  },
  {
    "url": "buddy-logos/logos/protonet.svg",
    "revision": "b01f49467d747c3e1f7a631f2cd4b3c1"
  },
  {
    "url": "buddy-logos/logos/prott.svg",
    "revision": "0700d2314ffc6948733aa9037a3d8931"
  },
  {
    "url": "buddy-logos/logos/pug.svg",
    "revision": "9a98bea248826930761a854f072d74bd"
  },
  {
    "url": "buddy-logos/logos/pumpkindb.svg",
    "revision": "32ad74a1ca964faebdeddfc63df27b1a"
  },
  {
    "url": "buddy-logos/logos/puppet.svg",
    "revision": "41b6a3fa63ed99e79d72f4c0c6f2156b"
  },
  {
    "url": "buddy-logos/logos/puppy-linux.svg",
    "revision": "c4c88a17ae351256ee40f51912439c87"
  },
  {
    "url": "buddy-logos/logos/pushbullet.svg",
    "revision": "a10e84a6c065d1fe21ddd0a36a7f0e78"
  },
  {
    "url": "buddy-logos/logos/pusher.svg",
    "revision": "08436c665366c78f541a7340a30e74bb"
  },
  {
    "url": "buddy-logos/logos/pycharm.svg",
    "revision": "9ec0f299e459e24bd28717632662789b"
  },
  {
    "url": "buddy-logos/logos/python.svg",
    "revision": "51c2eab22c8994e70e7633979982b451"
  },
  {
    "url": "buddy-logos/logos/pytorch.svg",
    "revision": "f93ae9fac7d0d4a222203cae3228bd56"
  },
  {
    "url": "buddy-logos/logos/pyup.svg",
    "revision": "fbff8ffe54d4422291e5a390e3f91865"
  },
  {
    "url": "buddy-logos/logos/q.svg",
    "revision": "bc59b6478b83a6e40aee7d28a28fe67e"
  },
  {
    "url": "buddy-logos/logos/qordoba.svg",
    "revision": "8e10358ad1b2b91aaeb1b9a444edd2de"
  },
  {
    "url": "buddy-logos/logos/qt.svg",
    "revision": "98f7ce4c394dd03c8b0c5a7fe29e271f"
  },
  {
    "url": "buddy-logos/logos/quay.svg",
    "revision": "3dc40e769f882d3566a123c1180ab10c"
  },
  {
    "url": "buddy-logos/logos/quobyte.svg",
    "revision": "4ca9369adfcb627bc8bc7931239c2bbe"
  },
  {
    "url": "buddy-logos/logos/quora.svg",
    "revision": "6a53bcc5520d0889c80e710c39a5b849"
  },
  {
    "url": "buddy-logos/logos/r-lang.svg",
    "revision": "3703ec9ce6d9f6ba0bbb3eb2848a7da5"
  },
  {
    "url": "buddy-logos/logos/rabbitmq.svg",
    "revision": "5328f8f21e1e21cb9f4fd5ee96802278"
  },
  {
    "url": "buddy-logos/logos/rackspace.svg",
    "revision": "ad1a576e84f21659ab734b814132732b"
  },
  {
    "url": "buddy-logos/logos/rails.svg",
    "revision": "2db2978200ab968daec54ec9630992b7"
  },
  {
    "url": "buddy-logos/logos/ramda.svg",
    "revision": "2375cbd8f742ba9a3c09ea05f386b0b6"
  },
  {
    "url": "buddy-logos/logos/raml.svg",
    "revision": "744bdd37c824026a1fa11989008aed2b"
  },
  {
    "url": "buddy-logos/logos/rancher.svg",
    "revision": "71d67aad5ad1e3fcb06d859390031258"
  },
  {
    "url": "buddy-logos/logos/randomcolor.svg",
    "revision": "206ce7e5523457bac010b98eaec68bd7"
  },
  {
    "url": "buddy-logos/logos/raphael.svg",
    "revision": "49c1ea9f58681667d89272cd9ec84e47"
  },
  {
    "url": "buddy-logos/logos/raspberry-pi.svg",
    "revision": "7eb0d22d069ed9817d31e4a7aa202c5c"
  },
  {
    "url": "buddy-logos/logos/rax.svg",
    "revision": "946ac6cf70e1b71fdac6379586683653"
  },
  {
    "url": "buddy-logos/logos/react-router.svg",
    "revision": "d7396d6757fd902f37f8d5b15dcac37d"
  },
  {
    "url": "buddy-logos/logos/react.svg",
    "revision": "9a28da9f2a3fa419eb399e49f98cda39"
  },
  {
    "url": "buddy-logos/logos/reactivex.svg",
    "revision": "55d01d15d88bfecaa3d4502d07aec59b"
  },
  {
    "url": "buddy-logos/logos/realm.svg",
    "revision": "2ab73c71bd6be7c01c2f0ebd4fe160f1"
  },
  {
    "url": "buddy-logos/logos/reapp.svg",
    "revision": "2097a4ac3ad8ba32ae2abf764db8a5fd"
  },
  {
    "url": "buddy-logos/logos/reasonml.svg",
    "revision": "b5ff89551f1e8eb3d7e6c000b5d4ca61"
  },
  {
    "url": "buddy-logos/logos/recast.ai.svg",
    "revision": "2ce600ed7d83f4caa33a95cffbae588a"
  },
  {
    "url": "buddy-logos/logos/reddit.svg",
    "revision": "5df9c3c7e73bb6e3522eedc439865f9b"
  },
  {
    "url": "buddy-logos/logos/redhat.svg",
    "revision": "9ae7882db95c39ded0326faf1fcc3472"
  },
  {
    "url": "buddy-logos/logos/redis.svg",
    "revision": "3c39fafea312112d50df5cbb6fb118d0"
  },
  {
    "url": "buddy-logos/logos/redsmin.svg",
    "revision": "47eaf40343b5c4d38ce8ac28fd777b67"
  },
  {
    "url": "buddy-logos/logos/redspread.svg",
    "revision": "f418de73d92da482f64e490c96a72787"
  },
  {
    "url": "buddy-logos/logos/redux-observable.svg",
    "revision": "b4add3e824292fa86f957ee38e06c913"
  },
  {
    "url": "buddy-logos/logos/redux-saga.svg",
    "revision": "0fd619257d196a332a05540af3fafada"
  },
  {
    "url": "buddy-logos/logos/redux.svg",
    "revision": "85772647236e76b8e772c14c092a28ac"
  },
  {
    "url": "buddy-logos/logos/refactor.svg",
    "revision": "d6350dc1258c3a95429a6d75e8fd2693"
  },
  {
    "url": "buddy-logos/logos/reindex.svg",
    "revision": "f831ae1a26a3aa892d75eedbeccadfa0"
  },
  {
    "url": "buddy-logos/logos/relay.svg",
    "revision": "8b2a07d4a46604c53e699dac4960b856"
  },
  {
    "url": "buddy-logos/logos/remergr.svg",
    "revision": "4d425e56a1cac97745c87fa75a28525f"
  },
  {
    "url": "buddy-logos/logos/require.svg",
    "revision": "4d6dde3bd93ee05a87a054c63e704bd6"
  },
  {
    "url": "buddy-logos/logos/rest-li.svg",
    "revision": "42ac1907998f8872f21b4508303834cc"
  },
  {
    "url": "buddy-logos/logos/rest.svg",
    "revision": "e64bb2f1371597b5018e8fa1c9696aa6"
  },
  {
    "url": "buddy-logos/logos/rethinkdb.svg",
    "revision": "eaa2823353835e5bbe92cbadafcf4f85"
  },
  {
    "url": "buddy-logos/logos/riak.svg",
    "revision": "ba326858cab45202230a56bd8426d8c0"
  },
  {
    "url": "buddy-logos/logos/riot.svg",
    "revision": "873fa33064d7f720a962f5dfbb124c71"
  },
  {
    "url": "buddy-logos/logos/rkt.svg",
    "revision": "d2c4737b61548a72dfee4974c2f97711"
  },
  {
    "url": "buddy-logos/logos/rocket-chat.svg",
    "revision": "d092378c297413881133e7e7eab5b12c"
  },
  {
    "url": "buddy-logos/logos/rocksdb.svg",
    "revision": "3c50ec52a05d0d1d2c8bab37b9ca567a"
  },
  {
    "url": "buddy-logos/logos/rollbar.svg",
    "revision": "9785e210c3ee3d5b485a7d007b5615fd"
  },
  {
    "url": "buddy-logos/logos/rollup.svg",
    "revision": "9739a01e2733f2dc2a09ffe87168e89a"
  },
  {
    "url": "buddy-logos/logos/rollupjs.svg",
    "revision": "a71b5f02cb0c73804b07938d853ee8f9"
  },
  {
    "url": "buddy-logos/logos/rsa.svg",
    "revision": "fb70d0fc3a0433c85522857545fc177a"
  },
  {
    "url": "buddy-logos/logos/rsmq.svg",
    "revision": "84a01b16f37022859311e16dadb38246"
  },
  {
    "url": "buddy-logos/logos/rubocop.svg",
    "revision": "0d78b3ac2ad61467725bd7096e52020c"
  },
  {
    "url": "buddy-logos/logos/ruby.svg",
    "revision": "514befa7a168a76156a2dd5a043d73fd"
  },
  {
    "url": "buddy-logos/logos/rubygems.svg",
    "revision": "e4ce32e1be2dfd0b8b35afd3aba21b97"
  },
  {
    "url": "buddy-logos/logos/rubymine.svg",
    "revision": "059323bec732a921ec9f1968716f32ca"
  },
  {
    "url": "buddy-logos/logos/rum.svg",
    "revision": "708b952fad4fee3686ed3e9dbc9a02ce"
  },
  {
    "url": "buddy-logos/logos/run-above.svg",
    "revision": "0528126f873eaf4eb19b9f160df26ebe"
  },
  {
    "url": "buddy-logos/logos/runnable.svg",
    "revision": "fe3cadf48831cf593a6ab098a5e54f86"
  },
  {
    "url": "buddy-logos/logos/runscope.svg",
    "revision": "6243dba8e0f39c44868be0cc08d3b50f"
  },
  {
    "url": "buddy-logos/logos/rust.svg",
    "revision": "91052dc3c295ef5299d7b8f1dfb0bb8f"
  },
  {
    "url": "buddy-logos/logos/rxdb.svg",
    "revision": "b105f189c34c9733dcf5dad6530cfa65"
  },
  {
    "url": "buddy-logos/logos/safari.svg",
    "revision": "93d337fbab4a7c55d86925691b6c1726"
  },
  {
    "url": "buddy-logos/logos/sagui.svg",
    "revision": "874d74cb22d4f192a74809f95a5c1be8"
  },
  {
    "url": "buddy-logos/logos/sails.svg",
    "revision": "075ae0ee9c047c64c242d7d2d6b788dd"
  },
  {
    "url": "buddy-logos/logos/salesforce.svg",
    "revision": "b847b1c5d36bbf893403e41e0c0650d7"
  },
  {
    "url": "buddy-logos/logos/saltstack.svg",
    "revision": "254d816724a943b0b06c4eea1a34ef18"
  },
  {
    "url": "buddy-logos/logos/sameroom.svg",
    "revision": "f9224fe5a4c9ce40d572f950ee8d93d2"
  },
  {
    "url": "buddy-logos/logos/sanity.svg",
    "revision": "29ef18b27b94ff558a5012becc8cca96"
  },
  {
    "url": "buddy-logos/logos/sass-doc.svg",
    "revision": "a1922399b5af3a8036203e5e8f33ef22"
  },
  {
    "url": "buddy-logos/logos/sass.svg",
    "revision": "470548b4a95cae966d0750d6720e4082"
  },
  {
    "url": "buddy-logos/logos/saucelabs.svg",
    "revision": "d52d4935d08a3456857d282ad24000f6"
  },
  {
    "url": "buddy-logos/logos/scala.svg",
    "revision": "3115ac7e414f6335a08022d3434641e0"
  },
  {
    "url": "buddy-logos/logos/scaledrone.svg",
    "revision": "59e47a6454800cb4137055ca7c7efe3b"
  },
  {
    "url": "buddy-logos/logos/scaphold.svg",
    "revision": "ed71ebd3c16e4fd540e533ae04f83ba3"
  },
  {
    "url": "buddy-logos/logos/scribd.svg",
    "revision": "3797fb77ed6c96d88f45dd97ca83079f"
  },
  {
    "url": "buddy-logos/logos/sectionio.svg",
    "revision": "6d798ea628b2f86221273a7634e5f2fe"
  },
  {
    "url": "buddy-logos/logos/segment.svg",
    "revision": "f88188d3f824b7e0b98bd9b309e4771c"
  },
  {
    "url": "buddy-logos/logos/selenium.svg",
    "revision": "8d12fc5505b60b5518d72ecea6a0b460"
  },
  {
    "url": "buddy-logos/logos/semantic-ui.svg",
    "revision": "002357272de7d2128ec28bf4586af90a"
  },
  {
    "url": "buddy-logos/logos/semaphore.svg",
    "revision": "9b8b32127cf6fdc0791d6ceff9a3fe30"
  },
  {
    "url": "buddy-logos/logos/sencha.svg",
    "revision": "634b7b9dbebbfd20d34e4a9477bbaeb4"
  },
  {
    "url": "buddy-logos/logos/sendgrid.svg",
    "revision": "bcf966ffe25f4bd627cbf0daa0c32e53"
  },
  {
    "url": "buddy-logos/logos/seneca.svg",
    "revision": "a35a4d7f3dc8ab7df7250eadd657f18b"
  },
  {
    "url": "buddy-logos/logos/sensu.svg",
    "revision": "fcc3e87b7fe35dc160c7bd912672f00b"
  },
  {
    "url": "buddy-logos/logos/sentry.svg",
    "revision": "7be62c2a9a9bee0c07292be5e094ec0e"
  },
  {
    "url": "buddy-logos/logos/sequelize.svg",
    "revision": "fc2fea2de1e6e5f67d6a419eab16b0b8"
  },
  {
    "url": "buddy-logos/logos/serveless.svg",
    "revision": "8c650f1a011a05396f671476a40b2368"
  },
  {
    "url": "buddy-logos/logos/serverless.svg",
    "revision": "c829fd0c4275e6f8aa3868c486a3a3a5"
  },
  {
    "url": "buddy-logos/logos/sherlock.svg",
    "revision": "e86eabd5ac690d4b2b8e222b98e724e4"
  },
  {
    "url": "buddy-logos/logos/shields.svg",
    "revision": "f3f83a1a5f93fb646d4d873dbdb7d0c2"
  },
  {
    "url": "buddy-logos/logos/shipit.svg",
    "revision": "36b1cc34816463f038d0b6353180f603"
  },
  {
    "url": "buddy-logos/logos/shippable.svg",
    "revision": "c80a73864fc325b407199911088cbb88"
  },
  {
    "url": "buddy-logos/logos/shogun.svg",
    "revision": "af788db40d19942bbbd928c50d7f5c89"
  },
  {
    "url": "buddy-logos/logos/shopify.svg",
    "revision": "d226571e6e6dd1a404430de8a302dc9c"
  },
  {
    "url": "buddy-logos/logos/sidekick.svg",
    "revision": "bc6c0ec476c0558e823d125c6cc24bd9"
  },
  {
    "url": "buddy-logos/logos/sidekiq.svg",
    "revision": "8b39e48f52ab9c3f0aa49ab229dd0f90"
  },
  {
    "url": "buddy-logos/logos/sinatra.svg",
    "revision": "add247262bcadbd308ba94e54d40b669"
  },
  {
    "url": "buddy-logos/logos/siphon.svg",
    "revision": "ea64f5dfad09a82d1458442da2a3149a"
  },
  {
    "url": "buddy-logos/logos/sitepoint.svg",
    "revision": "2dc622ebe2f350c7a3dab12f7cde384e"
  },
  {
    "url": "buddy-logos/logos/sketch.svg",
    "revision": "f7c0bac02ec3a8487c67976302aba5e7"
  },
  {
    "url": "buddy-logos/logos/sketchapp.svg",
    "revision": "4550739410a66f5c2c710647640fbe7e"
  },
  {
    "url": "buddy-logos/logos/skylight.svg",
    "revision": "3d9262a57a14f5aee6a8075684541d3d"
  },
  {
    "url": "buddy-logos/logos/skype.svg",
    "revision": "d45d32fa41d87042155762dc9f30bcae"
  },
  {
    "url": "buddy-logos/logos/slack.svg",
    "revision": "db251f5b1eda3a4641c48a1182475ade"
  },
  {
    "url": "buddy-logos/logos/slides.svg",
    "revision": "e4a58e2683ca3a2ad7e49c3ce2cb3afd"
  },
  {
    "url": "buddy-logos/logos/slim.svg",
    "revision": "6b697f69b4167476713b817b9ec2a69c"
  },
  {
    "url": "buddy-logos/logos/smartling.svg",
    "revision": "222c37951332db9b96a03f73c73ab2a1"
  },
  {
    "url": "buddy-logos/logos/smashingmagazine.svg",
    "revision": "a5710a77ac421e4705621e7639407400"
  },
  {
    "url": "buddy-logos/logos/snap-svg.svg",
    "revision": "84fe89ee067b5a4053f64a358b755a56"
  },
  {
    "url": "buddy-logos/logos/sninnaker.svg",
    "revision": "4d55e485180a416ce54473cdc6bc2606"
  },
  {
    "url": "buddy-logos/logos/snupps.svg",
    "revision": "b17407d4e14a8592305c4d8b026e7efa"
  },
  {
    "url": "buddy-logos/logos/snyk.svg",
    "revision": "7be7d37ecfbb017607c826a383e50346"
  },
  {
    "url": "buddy-logos/logos/socket.io.svg",
    "revision": "18c86649c363a1f450b6a3a91e2c3f88"
  },
  {
    "url": "buddy-logos/logos/solr.svg",
    "revision": "efa4eaa1eb37be4954fa6d7ab5655d1a"
  },
  {
    "url": "buddy-logos/logos/sonarqube.svg",
    "revision": "fc9a8506c2a4df93ff21348a7771d9b0"
  },
  {
    "url": "buddy-logos/logos/soundcloud.svg",
    "revision": "0b309ed60e3a8bd6e2bb8097209c8abc"
  },
  {
    "url": "buddy-logos/logos/sourcegraph.svg",
    "revision": "197c9110ee1c17cbfe0ba1408dd3e8b0"
  },
  {
    "url": "buddy-logos/logos/sourcetrail.svg",
    "revision": "1c85c46c4b125a9c443a8f58e6cbfaf7"
  },
  {
    "url": "buddy-logos/logos/sourcetree.svg",
    "revision": "32b7a7e895bcebf99d90ebbf68faa6cd"
  },
  {
    "url": "buddy-logos/logos/spark.svg",
    "revision": "e58ac124cec69fc9f66f13c7ef75306e"
  },
  {
    "url": "buddy-logos/logos/sparkcentral.svg",
    "revision": "65d0fbad6ee26840c3095b5793c642e9"
  },
  {
    "url": "buddy-logos/logos/sparkpost.svg",
    "revision": "abae0257f97cc62c644062597b40c72a"
  },
  {
    "url": "buddy-logos/logos/speakerdeck.svg",
    "revision": "9ee6cb60d21ff762d94e05081f61e08b"
  },
  {
    "url": "buddy-logos/logos/speedcurve.svg",
    "revision": "b3921d15014ea71af6d86c517a580a98"
  },
  {
    "url": "buddy-logos/logos/spinnaker.svg",
    "revision": "4d55e485180a416ce54473cdc6bc2606"
  },
  {
    "url": "buddy-logos/logos/spring.svg",
    "revision": "96698f4a5075ad1d9e1f761c53483570"
  },
  {
    "url": "buddy-logos/logos/sqldep.svg",
    "revision": "8b9d2f0d76e87a5ff82bef76606ecf75"
  },
  {
    "url": "buddy-logos/logos/sqlite.svg",
    "revision": "bb077b0f2c5a27e91f266a034cfc1a3d"
  },
  {
    "url": "buddy-logos/logos/square.svg",
    "revision": "72550c3bd7f627a9b60018831524745e"
  },
  {
    "url": "buddy-logos/logos/squarespace.svg",
    "revision": "827cb3d6684444444358d759469af7b2"
  },
  {
    "url": "buddy-logos/logos/stackoverflow.svg",
    "revision": "2a38efa2d645428c7f59c1f2f5098374"
  },
  {
    "url": "buddy-logos/logos/stackshare.svg",
    "revision": "867ea53d2eb82f66da4b6ee2cde84ac8"
  },
  {
    "url": "buddy-logos/logos/stacksmith.svg",
    "revision": "de03496894b11553be75671590ae9212"
  },
  {
    "url": "buddy-logos/logos/stash.svg",
    "revision": "9d88464dbcb1bdcbd93490d7a4e0e92a"
  },
  {
    "url": "buddy-logos/logos/statuspage.svg",
    "revision": "8e1549a3131fd06acf5a72eb9a66d991"
  },
  {
    "url": "buddy-logos/logos/steam.svg",
    "revision": "df561e52e5d444a606412a1b5842778a"
  },
  {
    "url": "buddy-logos/logos/steemit.svg",
    "revision": "42ca5232c3af58aae2d2b962e4d46d2c"
  },
  {
    "url": "buddy-logos/logos/steroids.svg",
    "revision": "c9d50795661b6264f1dd032c61d164b2"
  },
  {
    "url": "buddy-logos/logos/stetho.svg",
    "revision": "1496b20f937d75e8b74786a77cd31acf"
  },
  {
    "url": "buddy-logos/logos/stickermule.svg",
    "revision": "81c9c17ab60b432831a5b93919623916"
  },
  {
    "url": "buddy-logos/logos/stitch.svg",
    "revision": "61048bd7b88013d2f63a6aee98e28d22"
  },
  {
    "url": "buddy-logos/logos/stoplight.svg",
    "revision": "34fefb055b4b8e21ae3b7b989b1d59b9"
  },
  {
    "url": "buddy-logos/logos/stormpath.svg",
    "revision": "4ff8009e8f79e84f9e9be1351b08db87"
  },
  {
    "url": "buddy-logos/logos/strapi.svg",
    "revision": "82651ae061d5246f792e0cfbc08856f8"
  },
  {
    "url": "buddy-logos/logos/strider.svg",
    "revision": "9534feadefd635dcb0c774a748e9fe7c"
  },
  {
    "url": "buddy-logos/logos/stripe.svg",
    "revision": "9f18863c5ed77db9011cc575edcf8583"
  },
  {
    "url": "buddy-logos/logos/strongloop.svg",
    "revision": "b907693e33b9b3f168a2d6b5a4981e74"
  },
  {
    "url": "buddy-logos/logos/struts.svg",
    "revision": "9df1edf362eb338bc70df0e29d7a5dad"
  },
  {
    "url": "buddy-logos/logos/styleci.svg",
    "revision": "dbf4b9e13eef26cef893dd1e72f5f73f"
  },
  {
    "url": "buddy-logos/logos/stylefmt.svg",
    "revision": "6e6197de3f40a018b0a32bf20509fc1f"
  },
  {
    "url": "buddy-logos/logos/stylelint.svg",
    "revision": "aef8ff783e1384ef1c284dcc8384ec36"
  },
  {
    "url": "buddy-logos/logos/stylus.svg",
    "revision": "10283d2cd6fc9dd0abd44f1062ae3327"
  },
  {
    "url": "buddy-logos/logos/subversion.svg",
    "revision": "85f5ed2ab53752bd8e255335c7ed0d90"
  },
  {
    "url": "buddy-logos/logos/sugarss.svg",
    "revision": "589b24392cf4c38e7cc8cba7d2a879a5"
  },
  {
    "url": "buddy-logos/logos/supergiant.svg",
    "revision": "d9adc6d0ed4a13aa4dfea1bd8f78ba0c"
  },
  {
    "url": "buddy-logos/logos/supersonic.svg",
    "revision": "84dc978ded5da9b5d2d3ef1c8ea99276"
  },
  {
    "url": "buddy-logos/logos/supportkit.svg",
    "revision": "1c0007ecc575cd25010cf33390bc5092"
  },
  {
    "url": "buddy-logos/logos/surge.svg",
    "revision": "49842b2d4da08dd551e0bbc48cb16312"
  },
  {
    "url": "buddy-logos/logos/survicate.svg",
    "revision": "4647bcf8f4dd3fefea53d1a3507eafde"
  },
  {
    "url": "buddy-logos/logos/suse.svg",
    "revision": "7fe01c1e648dbb927009efd654a8ca8d"
  },
  {
    "url": "buddy-logos/logos/susy.svg",
    "revision": "8f72e61333dae056d3cd2ecc0871d7ad"
  },
  {
    "url": "buddy-logos/logos/svg.svg",
    "revision": "4cf8adfd73bdd43705e9a55b550144ec"
  },
  {
    "url": "buddy-logos/logos/swagger.svg",
    "revision": "0d797eb3c45428d0a568f4237d063631"
  },
  {
    "url": "buddy-logos/logos/swift.svg",
    "revision": "36e74efe58402a0991de884027a796bd"
  },
  {
    "url": "buddy-logos/logos/swiftype.svg",
    "revision": "8e6ca0a697991eea5715972db2784f5e"
  },
  {
    "url": "buddy-logos/logos/symfony.svg",
    "revision": "8aa234eeee7ee7d47696e20bed186038"
  },
  {
    "url": "buddy-logos/logos/sysdig.svg",
    "revision": "4ea007562ee923c79c79089da5161a51"
  },
  {
    "url": "buddy-logos/logos/t3.svg",
    "revision": "07f636774a56b3040a281eae773b214c"
  },
  {
    "url": "buddy-logos/logos/taiga.svg",
    "revision": "3763b70aa0df7920843c8ea397ac3761"
  },
  {
    "url": "buddy-logos/logos/tapcart.svg",
    "revision": "ca09fcad26d36766340d576fe618e86d"
  },
  {
    "url": "buddy-logos/logos/targetprocess.svg",
    "revision": "09a35784f2f1940b996b5d7743e5753a"
  },
  {
    "url": "buddy-logos/logos/tastejs.svg",
    "revision": "53f990ef46a534a3cfb913a963a407c8"
  },
  {
    "url": "buddy-logos/logos/tealium.svg",
    "revision": "d586f80fc3f30bff68e3936ca7246b14"
  },
  {
    "url": "buddy-logos/logos/teamgrid.svg",
    "revision": "33491c3f4b875fb91bb30bd4ec10762d"
  },
  {
    "url": "buddy-logos/logos/teamwork.svg",
    "revision": "35b28efd817aaf284ea77095871acaf8"
  },
  {
    "url": "buddy-logos/logos/tectonic.svg",
    "revision": "2ecea45fbb320ad49ce4c587e836fcb4"
  },
  {
    "url": "buddy-logos/logos/telegram.svg",
    "revision": "c55528d4703de7ee1676b1d86e92af68"
  },
  {
    "url": "buddy-logos/logos/tensorflow.svg",
    "revision": "6c6436f64b4e9401c4b3d4c2df1df4f8"
  },
  {
    "url": "buddy-logos/logos/terminal.svg",
    "revision": "5f0e74a14f5d9dfbe06d500fa45176c2"
  },
  {
    "url": "buddy-logos/logos/terraform.svg",
    "revision": "a88583475fec30a727771ae6530d4a8b"
  },
  {
    "url": "buddy-logos/logos/testlodge.svg",
    "revision": "96fc540f5d499def0e4f727954565b0d"
  },
  {
    "url": "buddy-logos/logos/testmunk.svg",
    "revision": "bcb32ac3d41fde7758cb3bbab24e6d83"
  },
  {
    "url": "buddy-logos/logos/thimble.svg",
    "revision": "371a533bf0a93af440d43c9324953baa"
  },
  {
    "url": "buddy-logos/logos/titon.svg",
    "revision": "da3e26fe12a0fbffc239e24ce3ba9eaf"
  },
  {
    "url": "buddy-logos/logos/todoist.svg",
    "revision": "6e46d99e1d7107e2bba2f92db7754d7e"
  },
  {
    "url": "buddy-logos/logos/todomvc.svg",
    "revision": "d6e260a318b8bc510a21f42b7df68229"
  },
  {
    "url": "buddy-logos/logos/tomcat.svg",
    "revision": "dee06f9fe837c5a43deddd249525c0bd"
  },
  {
    "url": "buddy-logos/logos/torus.svg",
    "revision": "3471f7d19bf4872d7ff25b0c5f656c2d"
  },
  {
    "url": "buddy-logos/logos/traackr.svg",
    "revision": "2444d7fc3b5a3f9b1291754af82634ab"
  },
  {
    "url": "buddy-logos/logos/trac.svg",
    "revision": "5ce961e23b9162cde7c5e4513f3bd2a1"
  },
  {
    "url": "buddy-logos/logos/trace.svg",
    "revision": "8b86c27784862112393909c28315d5a8"
  },
  {
    "url": "buddy-logos/logos/travis-ci-monochrome.svg",
    "revision": "4dcd8d4c2ced3e8551ea46804adffde1"
  },
  {
    "url": "buddy-logos/logos/travis-ci.svg",
    "revision": "4f9df7d6b8618869f601b6bd63d78eaf"
  },
  {
    "url": "buddy-logos/logos/treasuredata.svg",
    "revision": "a17dcdc911d6f87272bbc2d39ddcbc8d"
  },
  {
    "url": "buddy-logos/logos/treehouse.svg",
    "revision": "3e5f241cfea9dd861e1be2c28a1a6729"
  },
  {
    "url": "buddy-logos/logos/trello.svg",
    "revision": "e0e9cc49fa73d4691912791539adb1eb"
  },
  {
    "url": "buddy-logos/logos/tsu.svg",
    "revision": "c4516d52352e3c82820186454d25fea0"
  },
  {
    "url": "buddy-logos/logos/tsuru.svg",
    "revision": "85ad0aec304849f9b057925345e08042"
  },
  {
    "url": "buddy-logos/logos/tumblr-icon.svg",
    "revision": "f27d3fc9b8288ed8e5f1ebc01a176306"
  },
  {
    "url": "buddy-logos/logos/tumblr.svg",
    "revision": "91a1898e90980ef4c0c1fb48fa58fc45"
  },
  {
    "url": "buddy-logos/logos/tunein.svg",
    "revision": "e0ad73673ce6b23e60ed158e1ab4a245"
  },
  {
    "url": "buddy-logos/logos/turret.svg",
    "revision": "efe6c9352c9dc00beeee2cd6f67ca859"
  },
  {
    "url": "buddy-logos/logos/tutsplus.svg",
    "revision": "eeb57b0119c7ebf0b2a914abb64db12e"
  },
  {
    "url": "buddy-logos/logos/tutum.svg",
    "revision": "50d4014fe3d8397ca710b2fd62353218"
  },
  {
    "url": "buddy-logos/logos/tux.svg",
    "revision": "2e82d079f8bc66df87636c7bb8f8ab7c"
  },
  {
    "url": "buddy-logos/logos/twilio.svg",
    "revision": "3634b0f00050109f94b0948a824ce2c9"
  },
  {
    "url": "buddy-logos/logos/twitch.svg",
    "revision": "e1f7813a81c4579705af8aec19b9aac0"
  },
  {
    "url": "buddy-logos/logos/twitter.svg",
    "revision": "c4f438fa6064cce71e3a97aae3d9684a"
  },
  {
    "url": "buddy-logos/logos/typeform.svg",
    "revision": "c990421a672826b1d5dbaf7e60215c22"
  },
  {
    "url": "buddy-logos/logos/typescript-icon.svg",
    "revision": "9e8bfce4de1e3508a98fb887c593c11b"
  },
  {
    "url": "buddy-logos/logos/typescript.svg",
    "revision": "a9a7245dfd4d4081c0c6d16a5b2107c5"
  },
  {
    "url": "buddy-logos/logos/ubuntu.svg",
    "revision": "3a090741999c0467a877b078c6c2ca58"
  },
  {
    "url": "buddy-logos/logos/udacity.svg",
    "revision": "134f5c41f9e0973e88d2ffe08b0a437b"
  },
  {
    "url": "buddy-logos/logos/udemy.svg",
    "revision": "ae2c99beeb1dfefe1dacbc3072aa2a4e"
  },
  {
    "url": "buddy-logos/logos/uikit.svg",
    "revision": "603c7df895ee2c1a2f62c6e0f8212b90"
  },
  {
    "url": "buddy-logos/logos/umu.svg",
    "revision": "9725b89ea6b4fd15d8b0b101d97f5f17"
  },
  {
    "url": "buddy-logos/logos/unbounce.svg",
    "revision": "52a5f5ba88e6d8f9d9d1d5c687985741"
  },
  {
    "url": "buddy-logos/logos/undertow.svg",
    "revision": "6a4f7a89cba0bd44fea0cd1b9dbda2c5"
  },
  {
    "url": "buddy-logos/logos/unionpay.svg",
    "revision": "9b59a572fd6306d853d1820e9f9551cb"
  },
  {
    "url": "buddy-logos/logos/unitjs.svg",
    "revision": "b47d930c67bba30c76a0f698ee1d281b"
  },
  {
    "url": "buddy-logos/logos/unito.svg",
    "revision": "650602bc3ff084c6f2d5936c2988f159"
  },
  {
    "url": "buddy-logos/logos/unity.svg",
    "revision": "23d1fdd50793a0f55a7c86018a5c2362"
  },
  {
    "url": "buddy-logos/logos/upcase.svg",
    "revision": "db35cd01288dca646cd10ff595a170bb"
  },
  {
    "url": "buddy-logos/logos/upwork.svg",
    "revision": "c4be0d43f90ef6897a43eb4e07e1694b"
  },
  {
    "url": "buddy-logos/logos/user-testing.svg",
    "revision": "2fb83aaae0060cb68fd8b8aa8cc02f76"
  },
  {
    "url": "buddy-logos/logos/uservoice.svg",
    "revision": "f0155f24ca3a5b71a5565deb97831f2b"
  },
  {
    "url": "buddy-logos/logos/v8-ignition.svg",
    "revision": "c62256b749e4c6d09631c99d78c3fb8d"
  },
  {
    "url": "buddy-logos/logos/v8-turbofan.svg",
    "revision": "9b640b11bda575cc2f6629c1576968b6"
  },
  {
    "url": "buddy-logos/logos/v8.svg",
    "revision": "afa6724b28859d685303faba2aa26f3b"
  },
  {
    "url": "buddy-logos/logos/vaadin.svg",
    "revision": "75d7d357e9aa047c65eee4f62dc740dd"
  },
  {
    "url": "buddy-logos/logos/vaddy.svg",
    "revision": "c93c8328edc814924a984aea9c5e0a57"
  },
  {
    "url": "buddy-logos/logos/vagrant.svg",
    "revision": "89422b806d7b6519a8febaa449e48f6f"
  },
  {
    "url": "buddy-logos/logos/vault.svg",
    "revision": "d81a1e42eaf5579dc027e675034c8a8a"
  },
  {
    "url": "buddy-logos/logos/vernemq.svg",
    "revision": "303456dd4335091a99e4eda8efdcd973"
  },
  {
    "url": "buddy-logos/logos/victorops.svg",
    "revision": "8ecb33a58648152ff3e4d9a5ac8954d3"
  },
  {
    "url": "buddy-logos/logos/vim.svg",
    "revision": "e6a94e0312876aa7fed3c0b12ccca138"
  },
  {
    "url": "buddy-logos/logos/vimeo-icon.svg",
    "revision": "a94f73209b5a70895ece832166f02331"
  },
  {
    "url": "buddy-logos/logos/vimeo.svg",
    "revision": "8bd011528c32f2b94da415dff6f91bec"
  },
  {
    "url": "buddy-logos/logos/vine.svg",
    "revision": "0a8e5656bb5456e05777c32f83ea131f"
  },
  {
    "url": "buddy-logos/logos/visa.svg",
    "revision": "0d1fbbc448bf6bb8ff0b05bfb1e100d9"
  },
  {
    "url": "buddy-logos/logos/visaelectron.svg",
    "revision": "a4ec2cabc3103e7ac83c859220e7378a"
  },
  {
    "url": "buddy-logos/logos/visual_website_optimizer.svg",
    "revision": "5ed0773fd271424b6f02762b3bf9e1fc"
  },
  {
    "url": "buddy-logos/logos/visual-studio-code.svg",
    "revision": "3a69682dec932a58869ff54403232195"
  },
  {
    "url": "buddy-logos/logos/visual-studio.svg",
    "revision": "bfbb11db581dc61df43fd9577e0cdae4"
  },
  {
    "url": "buddy-logos/logos/vivaldi.svg",
    "revision": "01b701cab83008f747f7d21a621cf6b0"
  },
  {
    "url": "buddy-logos/logos/void.svg",
    "revision": "b46444c98a0f18718f0b22b6d4b3a78c"
  },
  {
    "url": "buddy-logos/logos/vue.svg",
    "revision": "22efb7c22774c39c790448f62bda240d"
  },
  {
    "url": "buddy-logos/logos/vuetifyjs.svg",
    "revision": "a1d6f0165d16f1a489e652b360f0cbe9"
  },
  {
    "url": "buddy-logos/logos/vulkan.svg",
    "revision": "817161d8e108fce3765f2b15e823f420"
  },
  {
    "url": "buddy-logos/logos/vultr.svg",
    "revision": "fa38e3928c971d98d041425a5e8edf39"
  },
  {
    "url": "buddy-logos/logos/w3c.svg",
    "revision": "0fc78adefe5971a6a44748024b4d9b7a"
  },
  {
    "url": "buddy-logos/logos/waffle.svg",
    "revision": "9b4562c2702d43102bde7adeb7954194"
  },
  {
    "url": "buddy-logos/logos/wagtail.svg",
    "revision": "6e8ffcd99cbe8fde6d5539033f09a3e7"
  },
  {
    "url": "buddy-logos/logos/wakatime.svg",
    "revision": "928ee9909c15d0402f2c5f9e4ce2fea4"
  },
  {
    "url": "buddy-logos/logos/watchman.svg",
    "revision": "3f8957c6a4a347928e97a19835ea4b17"
  },
  {
    "url": "buddy-logos/logos/weave.svg",
    "revision": "b2dcfeb16043f824c6e18aec2a2d6604"
  },
  {
    "url": "buddy-logos/logos/webassembly.svg",
    "revision": "ce56c8910690ec6ef793936d01bdc163"
  },
  {
    "url": "buddy-logos/logos/webcomponents.svg",
    "revision": "956c60a1724d996ab66d688bc1c8b621"
  },
  {
    "url": "buddy-logos/logos/webhooks.svg",
    "revision": "4c17a8a1d6df86646d5765705006c88c"
  },
  {
    "url": "buddy-logos/logos/webmin.svg",
    "revision": "43d20571c440b3e4f3f7f5f9fb7bb0c6"
  },
  {
    "url": "buddy-logos/logos/webpack.svg",
    "revision": "872ecaf99b4f8131a4c8a7c9751bc13a"
  },
  {
    "url": "buddy-logos/logos/webplatform.svg",
    "revision": "cb2a751ba3bacf0280ae422b4a09d5f0"
  },
  {
    "url": "buddy-logos/logos/webrtc.svg",
    "revision": "520f0798ac2648836b51ee2966abd6a4"
  },
  {
    "url": "buddy-logos/logos/websocket.svg",
    "revision": "38378eac12cad179ae76fbcdf10f03e8"
  },
  {
    "url": "buddy-logos/logos/webstorm.svg",
    "revision": "5e95328c8ad09efca9812d56c72135de"
  },
  {
    "url": "buddy-logos/logos/webtask.svg",
    "revision": "8dbdc495ae846b9b11456e24ae36de41"
  },
  {
    "url": "buddy-logos/logos/webtorrent.svg",
    "revision": "720b41da41d083d31666bc9c21bd17f0"
  },
  {
    "url": "buddy-logos/logos/weebly.svg",
    "revision": "1b3a2938a49b96055d7853a4555e065f"
  },
  {
    "url": "buddy-logos/logos/wercker.svg",
    "revision": "6f3b10cd92a1ec420e0a3e521f8ace35"
  },
  {
    "url": "buddy-logos/logos/whalar.svg",
    "revision": "8fbce4eca5cf460a9fc7d8b200a90b83"
  },
  {
    "url": "buddy-logos/logos/whatsapp.svg",
    "revision": "8242a1532ce559c68370b20a10f7af56"
  },
  {
    "url": "buddy-logos/logos/whatwg.svg",
    "revision": "3fb596fa3ad4172adc4ba121d86eb833"
  },
  {
    "url": "buddy-logos/logos/wicket.svg",
    "revision": "bace9dd82b1ed21c2578492749a1e1bd"
  },
  {
    "url": "buddy-logos/logos/wifi.svg",
    "revision": "cb35e52dc9eca3be8866d6cddb483fad"
  },
  {
    "url": "buddy-logos/logos/wire.svg",
    "revision": "4505297ccfe21323232aead763dc9b6d"
  },
  {
    "url": "buddy-logos/logos/wiredtree.svg",
    "revision": "a8ea6f8a6e14d515582286a2329a41c1"
  },
  {
    "url": "buddy-logos/logos/wix.svg",
    "revision": "e6be00fa66495d3930532628e5d2267a"
  },
  {
    "url": "buddy-logos/logos/woocommerce.svg",
    "revision": "2a0e45362c05f9110cd10276daa2cff2"
  },
  {
    "url": "buddy-logos/logos/woopra.svg",
    "revision": "49ffc16ea1636b307665c62391712200"
  },
  {
    "url": "buddy-logos/logos/wordpress-icon.svg",
    "revision": "b08e20e3d29273e2dd8c2945bec13b6e"
  },
  {
    "url": "buddy-logos/logos/wordpress.svg",
    "revision": "af3b4cd57d4eef5d48f8ec2855d85599"
  },
  {
    "url": "buddy-logos/logos/workboard.svg",
    "revision": "d72595bd9cb1353d0e3a0f30961f6b59"
  },
  {
    "url": "buddy-logos/logos/wpengine.svg",
    "revision": "c68bec3c1665bee4500002d6b64287a8"
  },
  {
    "url": "buddy-logos/logos/wufoo.svg",
    "revision": "a0d59985cebfe1049432c796c11aba08"
  },
  {
    "url": "buddy-logos/logos/x-ray-goggles.svg",
    "revision": "6acf50e818711b18be823fa826b64440"
  },
  {
    "url": "buddy-logos/logos/xamarin.svg",
    "revision": "bcbfae0f34c16e75e9a06a00cdea0165"
  },
  {
    "url": "buddy-logos/logos/xampp.svg",
    "revision": "5cc20eac57c5c786f42dae4691910d7e"
  },
  {
    "url": "buddy-logos/logos/xcart.svg",
    "revision": "b2bee24935f61b7b4a276bab210e6984"
  },
  {
    "url": "buddy-logos/logos/xero.svg",
    "revision": "2c2f23f1111a0ca16e92b98fafae7ed2"
  },
  {
    "url": "buddy-logos/logos/xplenty.svg",
    "revision": "a4130d5cac03cbef84a8ea57fdadf240"
  },
  {
    "url": "buddy-logos/logos/xtend.svg",
    "revision": "5733b10e7b51750ef488c91e902598b5"
  },
  {
    "url": "buddy-logos/logos/xwiki.svg",
    "revision": "7c8af3fae91fc8e141f00d454fd3d823"
  },
  {
    "url": "buddy-logos/logos/yahoo.svg",
    "revision": "760abf781837c2b29ef79a1255050a61"
  },
  {
    "url": "buddy-logos/logos/yammer.svg",
    "revision": "4f32c77fc356f331ce4c7a7380481cdc"
  },
  {
    "url": "buddy-logos/logos/yandex-ru.svg",
    "revision": "9c5b0aedec0c0f2fe93f25aad05cadd8"
  },
  {
    "url": "buddy-logos/logos/yarn.svg",
    "revision": "878ab38467e5d9ce11b5add119296fd9"
  },
  {
    "url": "buddy-logos/logos/ycombinator.svg",
    "revision": "b3155900e94449481985b07b46660f71"
  },
  {
    "url": "buddy-logos/logos/yeoman.svg",
    "revision": "55e964d36d3cb4a5cf35720c9a9a371a"
  },
  {
    "url": "buddy-logos/logos/yii.svg",
    "revision": "b1105a6a3329c4b04908f597a3a69020"
  },
  {
    "url": "buddy-logos/logos/youtrack.svg",
    "revision": "4dae4e6455b9e04480a2795d1c24ec30"
  },
  {
    "url": "buddy-logos/logos/youtube.svg",
    "revision": "7a8202a8aa5df17bb4ce198158886a80"
  },
  {
    "url": "buddy-logos/logos/zapier.svg",
    "revision": "01b56452eb9cab3714d819ed3199e1a0"
  },
  {
    "url": "buddy-logos/logos/zeit.svg",
    "revision": "e66e75a2b6ec77409b3460280a8425f9"
  },
  {
    "url": "buddy-logos/logos/zend-framework.svg",
    "revision": "e3f18f1c477a7e9a8c1963e93160c28b"
  },
  {
    "url": "buddy-logos/logos/zendesk.svg",
    "revision": "2ad72eadafffe0ad69832257d6232ed9"
  },
  {
    "url": "buddy-logos/logos/zenhub.svg",
    "revision": "c897123c5246e0001a756b34db839ee2"
  },
  {
    "url": "buddy-logos/logos/zest.svg",
    "revision": "ec10f8bf83bca8e7d854778c899a711b"
  },
  {
    "url": "buddy-logos/logos/zigbee.svg",
    "revision": "300a4bbc9c8b7f745fac3f65c6a5c2c0"
  },
  {
    "url": "buddy-logos/logos/zoho.svg",
    "revision": "dbecbaf0fa7bc2c08b185881d9e87279"
  },
  {
    "url": "buddy-logos/logos/zube.svg",
    "revision": "5ee9809f8fdcba9cf64707fc39a25d10"
  },
  {
    "url": "buddy-logos/logos/zulip.svg",
    "revision": "6a3662a6121f69262971feb046b44b15"
  },
  {
    "url": "buddy-logos/logos/zwave.svg",
    "revision": "ad7e1775f55a8ef2a6ec7e089985a328"
  },
  {
    "url": "index.html",
    "revision": "894058ad8c0c166772af4135ad97ec52"
  },
  {
    "url": "me.png",
    "revision": "c8afe0e13189c7d591dad21c78e77dab"
  },
  {
    "url": "note/Database/index.html",
    "revision": "cee0290713fc79b7183278d1b4d59aa6"
  },
  {
    "url": "note/Database/pipelinedb-demo.html",
    "revision": "7b4d47625b2b8eba5542a6c42cdebaea"
  },
  {
    "url": "note/Explore/index.html",
    "revision": "6d63aab19f8d7405a62d97aa4c8cdd18"
  },
  {
    "url": "note/FrontEnd/elementui-tree-disabled.html",
    "revision": "d85e751b2606b515c7caf08c0ceaf719"
  },
  {
    "url": "note/FrontEnd/index.html",
    "revision": "34c83b3e26a14dfc7b0e7c44511a40fb"
  },
  {
    "url": "note/FrontEnd/mock-lose-cookies-dbg.html",
    "revision": "07e534e7700e7e1c4c7056949d29cb9c"
  },
  {
    "url": "note/FrontEnd/webpack-source-self-path.html",
    "revision": "e1ebe96d9dd400bbecacf9acebfc745b"
  },
  {
    "url": "note/index.html",
    "revision": "19e378524fed3c6619ea035d59a8d963"
  },
  {
    "url": "note/Linux/centos7-ready.html",
    "revision": "de32016e5aa87b74f5e186a70d82e509"
  },
  {
    "url": "note/Linux/index.html",
    "revision": "08c2af4e759194fc6046a54577dd7e41"
  },
  {
    "url": "note/NodeJS/index.html",
    "revision": "8ae4eace94ad48b4248328a444709e85"
  },
  {
    "url": "project/index.html",
    "revision": "e7b840da4f8586829ed0566a48666073"
  },
  {
    "url": "quick/index.html",
    "revision": "44f25a4ab3b99aabe679fd19fe68a75a"
  },
  {
    "url": "star/index.html",
    "revision": "6038ddcc2566cc32899c0b625caa9f20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
