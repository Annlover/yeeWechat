angular.module('starter.controllers', [])
  .controller('BaseCtrl', function ($rootScope, $scope, $ionicSideMenuDelegate, $location) {
        $rootScope.shareTitle = "约测"

    $scope.toggleMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.resultMapping = [
      {code: '0001', name: 'AE86', icon: 'img/car/AE86.jpg', remark: 'AE86是丰田出厂的一款小巧、轻量、经济效益取向的小车，在1983年以COROLLA五代的身份投入生产线。由于汽车科技的进步，丰田在1978年推出的TERCEL标志著小型车由构造简单但成本较高且占空间的FR（前置引擎后轮驱动）转向较复杂但成本较低的FF（前置引擎前轮驱动）。自此，STARLET、COROLLA等车系便相继转投FF阵营。大势所趋之下，1983年的第五代LEVIN/TRUENO遂成COROLLA车系的FR末裔。系电影《头文字D》中藤原拓海的座驾。'},
      {code: '0002', name: '三菱EVO', icon: 'img/car/EVO.jpg', remark: '九十年代初日本三菱汽车公司为了能够参加WRC世界拉力冠军赛和SCCA专业拉力冠军赛做了一个明智而勇敢的决定，以旗下小型四门前轮驱动家庭轿车Lancer为蓝本，设计出了一款高性能四驱驱动运动轿车，这便是三菱汽车的旗舰之作——Lancer Evolution。Lancer Evolution的名字红遍全球，它不仅在WRC赛场上屡有展获，而且在诸多追求高性能跑车的速度迷心中，也是一款离梦想最近的超级街车。从诞生开始，EVO就是一台充满比赛血统的运动车，无论是在汽车拉力赛还是场地赛甚至坊间的黑夜飚车，EVO都有不俗的表现。'},
      {code: '0003', name: '大众GTI', icon: 'img/car/GTI.jpg', remark: '1976年的法兰克福车展上，“GTI”三个字母首次被世人熟悉，那时的“GT”取义意大利语“Gran Turismo”，意为“制造标准比得上赛车的高级轿车”，字母“I”则代表英文“Fuel Injection（燃油喷注）”。35年后的今天，“GTI”已经超越了字面含义，代表着对运动感和速度的执着追求。37年来，高尔夫GTI不断挑战性能高峰，更难能可贵的是，它点燃了每一个人心底与生俱来的对速度的渴望，激发起每一个驾驶者不断超越的运动激情，实现了每一个平凡人渴望创造奇迹的梦想，成为全球超过170万GTI车迷崇尚运动驾驶乐趣、彰显个性自我的精神象征。'},
      {code: '0004', name: '战神GTR', icon: 'img/car/GTR.jpg', remark: '日产公司旗下的Skyline房车系，在经过多年的演化改进之后，出现了GT-R车型，也成为系列的最高版本，被无数FANS追捧。新一代的GT-R脱离了Skyline车系，成为日产的一个独立车系，今后会把GT-R精神发扬光大。到目前为止，GT-R已成为世界最具性价比的超级跑车。在纽伯格林北环的最快圈速比价格贵两倍的保时捷911Turbo 还要快上两秒。而且，911Turbo比GT-R还要轻上100多公斤。'},
      {code: '0005', name: 'MINI', icon: 'img/car/MINI.jpg', remark: 'MINI Cooper采用前置发动机前轮驱动，四缸16气门的发动机排量为1.6L，虽然车身较轻，但如果想追求运动激情，动力还是略嫌不足。0—100km/h的加速时间为9.2s，虽然成绩不错，但爆发力不明显.MINI Cooper装备的是四轮独立跑车化悬架系统，以及后轴多连杆悬架系统，提供了极为优越的道路操控性。另外，长轴距、低重心和宽车轮以及短尾的设计，使得这部小车无论在绕桩还是在场地试车中表现得都异常活跃，在宝马5系、7系等老大哥面前毫不怯场。'},
      {code: '0006', name: '五菱之光', icon: 'img/car/5light.jpg', remark: '五菱之光上市7年累计产销量达到216万辆，是目前国内成长最快、销量最大的单一平台车型。仅2009年五菱之光的销量就接近60万辆，成为上汽通用五菱年产销超过100万辆的支柱力量。在五菱之光平台基础上推出的大微客五菱荣光，上市不到两年总销量也逼近30万台，成为国内销量增速最快的车型。在国内，他一度成为神车的代名词，无车能出其右'},
      {code: '0007', name: '众泰SR9', icon: 'img/car/SR9.jpg', remark: '能不能开上豪车就看众泰的了!”这句话经常会出现在文章评论中。没错，从成功推出“途观”、“Q3”、“A6”到“CrossBlue量产版”，众泰给了广大老百姓一个又一个的“惊喜”，这还不算完，它又为我们带来了10万级的“保时捷Macan”。不可否认，众泰的这款SR9绝对给你很强的视觉冲击力，其“拿来主义”的做法虽然不值得提倡，但却非常有效，就这长相这价位，真的让你很难拒绝。'},
      {code: '0008', name: '保时捷911', icon: 'img/car/911.jpg', remark: '保时捷911是由德国斯图加特市的保时捷公司所生产的跑车。由费迪南德·亚历山大·保时捷（Ferdinand Alexander Porsche）所设计。从1963年诞生以来，共经历了七代车型，因其独特的风格与极佳的耐用性享誉世界，保时捷911系列是整个保时捷乃至于整个德国整个世界最传奇的车型之一，同时也是中后置引擎跑车的代表作之一。保时捷911系列是由费迪南德·亚历山大·保时捷（ferdinand alexander porsche）所设计的，是保时捷的传奇车型。它悠久的历史和每一款经典的车型，已经给几代人带来了深远的影响。'},
      {code: '0009', name: '克尔维特', icon: 'img/car/Corvette.jpg', remark: '雪佛兰Corvette是美国国宝级的超级跑车，亦是通用旗下最高端的超级跑车品牌。该系列诞生于1953年，至今共衍生出7代车型，其中最新的为14款C7车型。Corvette特别能体现美国人对于超级跑车的追求：狂野大气，不拘小节，狂躁的V8发动机，7.0的巨大排量（13 Z06），科尔维特-ZR1车型更是拥有638Hp的巨大马力，以及604lb-ft扭矩，0-100仅需3秒左右，最高时速更是达到了惊人的350公里/每小时，Corvette最惊人的还是永不止境的中后段加速力，Corvette的中后段加速力在比赛中常常让对手措手不及，和兰博基尼，法拉利，布加迪不同的是Corvette超级跑车不仅拥有强大的直线加速能力，还有强悍的赛道能力，仅2011年Chevrolet ZR1就在纽博格林北环赛道（Nurburgring Nordschleife）创下7分19秒63的惊人圈速成绩。Corvette（科尔维特）在中国的知名度虽然比不上法拉利和保时捷，但它在美国堪称国宝的超级跑车，代表着美国的历史、文化、精神，还有最高端的汽车技术。'},
      {code: '0010', name: '兰博基尼', icon: 'img/car/Lamborghini.jpg', remark: '兰博基尼的标志是一头充满力量、正向对方攻击的斗牛，这与兰博基尼大马力高速跑车的特性相吻合，据说这一标志也体现了创始人兰博基尼斗牛般不甘示弱的脾性。兰博基尼 S. P. A.汽车厂的创始人费鲁吉欧·兰博基尼和兰博基尼早期生产的跑车、拖拉机。费鲁吉欧·兰博基尼骨子里渗透出意大利人特有的豪情壮志，激励着他一路从一位普通的农民之子白手起家，奋斗不息直至成为众人敬仰的行业掌舵人。这个意大利北方人凭借一股毫不妥协的闯劲以及近乎疯狂的热情，孜孜不倦地追求着制造出完美跑车的梦想。自那时起，倔气十足的“公牛”标志便成了兰博基尼的象征，诠释了这一与众不同的汽车品牌的所有特点———挑战极限，高傲不凡，豪放不羁。'},
      {code: '0011', name: '凯迪拉克SLS', icon: 'img/car/CadillacSLS.jpg', remark: '凯迪拉克（香港译作“佳得利”）是美国通用汽车集团旗下一款豪华汽车品牌，1902年（壬寅年）诞生于被誉为美国汽车之城的底特律。百多年来，凯迪拉克汽车在行业车内创造了无数个第一，缔造了无数个豪华车的行业标准；可以说凯迪拉克的历史代表了美国豪华车的历史。在韦伯斯特大词典中，凯迪拉克被定义为“同类中最为出色、最具声望事物”的同义词；被一向以追求极致尊贵著称的伦敦皇家汽车俱乐部冠以“世界标准”的美誉。 凯迪拉克融汇了百年历史精华和一代代设计师的智慧才智，成为汽车工业的领导性品牌。'},
      {code: '0012', name: '奔驰C200', icon: 'img/car/BenzC200.jpg', remark: '奔驰，德国汽车品牌，被认为是世界上最成功的高档汽车品牌之一，其完美的技术水平、过硬的质量标准、推陈出新的创新能力、以及一系列经典轿跑车款式令人称道。奔驰三叉星已成为世界上最著名的汽车及品牌标志之一。1886年自从奔驰制造了第一辆世界公认的汽车后，一百多年过去了，汽车早已度过了他的百岁寿辰，而在这一百多年来，随着汽车工业的篷勃发展，曾涌现出很多的汽车厂家，也有显赫一时的，但最终不过是昙花一现。到如今，能够经历风风雨雨而最终保存下来的，不过三四家，而百年老店，仅有奔驰一家。'},
      {code: '0013', name: '大众迈腾', icon: 'img/car/Magotan.jpg', remark: '迈腾源自和帕萨特B6关系紧密的FutureB6，这也是一汽-大众建厂以来将要生产和销售的第一款B级轿车，据一汽大众解释，“迈”寓意自信、果决、动感；“腾”表示腾飞、超越、激情。从B6开始，最新的大众B级车开始在一汽-大众生产，也就是Magotan迈腾系列。2010年的巴黎车展，大众第七代B级车正式亮相。B7继续由一汽-大众引进国内，并延续命名为Magotan迈腾。为了满足消费者对舒适性的需求，B7还进行原生加长，媒体称为迈腾B7L，即全新迈腾.'},
      {code: '0014', name: '奥迪RS6', icon: 'img/car/AudiRS6.jpg', remark: '奥迪RS6 Quattro，我们通常称呼其为RS6，是A6产品线中的最高性能版本，其定位高于奥迪S6，被称为最强买菜车。这是一个重视运动的行政级车，由奥迪旗下的Quattro Gmbh股份有限公司开发并生产。RS6有两个版本，其一为五门五座的旅行车“Avant”版，以及一个四门五座轿车Saloon-sedan。此外，他们都是使用前置发动机纵置，并且不与任何其他车辆共用。传动装置以驱动桥的形式在发动机后部纵向安置。“RS“的缩写，取自德语：RennSport。直译为“赛车运动“，代表奥迪的顶级高性能水平，定位于“S“型奥迪加强性能车型系列之上。像所有的奥迪“RS“系列车型一样，奥迪RS6使用最新最先进的工程和技术，所以它可以被称之为一个光环车辆。其具有所有奥迪车型中最强大的发动机数据，甚至超越了体型更大的奥迪S8。此外，像所有的RS车型一样，奥迪RS6[1]  使用“托森”出产的quattro四轮驱动系统。'},
      {code: '0015', name: '宝马M4', icon: 'img/car/BMWM4.jpg', remark: '宝马将其下一代M3 Coupe更名为M4 Coupe（下一代3系敞篷版也将以4系的名称命名）。这款M版Coupe在4系Coupe普通版上市的一年后即2014年发布亮相。宝马M4采用新款3系(F30)轿车作为其设计基础，M4 Coupe具备了大家所熟悉的M系列车型的设计特征，从而打造出了这款外形非常漂亮的Coupe车型，突出特征是其动感的前保险杠面板（含嵌入式下唇扰流板）和黑色的前格栅。此外挡泥板通风孔/LED头灯、扇形的侧裙板、适度外扩富有肌肉感的轮拱，都是M的标志性元素。'},
      {code: '0016', name: '宾利', icon: 'img/car/Bentley.jpg', remark: '宾利慕尚以法国勒芒赛道的传奇性弯道（Mulsanne）命名。作为第一款由宾利自主设计的旗舰车型，慕尚已取代宾利雅致（Arnage），荣登宾利家族的旗舰宝座。首席外饰设计师劳尔·皮雷先生(Mr Raul Pires)表示，“设计环节对宾利汽车至关重要，从外观到内饰，每个环节都精益求精。慕尚的诞生代表英国豪华汽车制造业的巅峰，它是让宾利引以为傲的有史以来最好的宾利车。”慕尚长长的引擎盖加上短前悬和长后悬，后腰线上抬的肌肉感设计与清晰的线条，从前向后优雅延伸，设计独特的20英寸轮毂（可选21英寸）等外观设计都彰显了浓郁的英伦古典韵味。慕尚采用的V8发动机拥有512匹的强大动力和高达1020牛顿米的输出扭矩。除了搭配8速自动变速箱以外，其凸轮定相技术能够保证即使转速较低也能产生巨大的扭矩输出。'},
      {code: '0017', name: '川崎', icon: 'img/car/Kawasaki.jpg', remark: '四轮承载肉体，两轮承载灵魂。突破历史的Z,锐利耀眼的前脸设计、精湛的框架和车身工艺，经过革新的街霸川崎Z800把“攻击风格”提高的一个新的水平。不仅如此，为了追求最佳骑乘体验，排气量从748cc升级到806cc。通过成熟的底盘调校，实现了有史以来最好的敏捷操控感。从Z1登场至今40年，Z车系再次突破历史获得重生。2013年年底，川崎正式推出“Kawasaki Z800”，该车在外形、发动机、排量和配置等方面，都站在了中量级NK街车的制高点。'},
      {code: '0018', name: '帕加尼', icon: 'img/car/Pagani.jpg', remark: '帕加尼Huayra是一款中置引擎超级跑车，由来自意大利的跑车制造商帕加尼（Pagani）在2011年的日内瓦车展上推出，将替代帕加尼Zonda成为帕加尼公司的主力车型。Huayra搭载AMG专门为Pagani打造的6.0L双增压V12发动机，最大功率超过700马力，峰值扭矩约1000N·m。鸥翼车门设计、楔形的车鼻、水滴状的玻璃车厢，羊驼色的真皮座椅和全碳纤维材质的车身，整合影音系统以及行车通讯系统等各种多功能配置，使Huayra在奢华的同时科技感十足'},
      {code: '0019', name: '比亚迪秦', icon: 'img/car/BYDQin.jpg', remark: '比亚迪·秦，是比亚迪股份有限公司自主研发的DM二代（在纯电动和混合动力两种模式间进行切换）的高性能三厢轿车。自从与德国戴姆勒合资后，比亚迪的造车工艺大幅提升。其先后斥巨资收购日本荻原模具，建设了国内最大的汽车测试基地，为高端电动轿车——比亚迪·秦的上市，做好铺垫。比亚迪·秦自2012年北京车展推出后，一直受到广大网友热捧。其5.9秒的百公里加速，让不少车友表示惊叹不已。'},
      {code: '0020', name: '沃尔沃V40', icon: 'img/car/Volvo.jpg', remark: '沃尔沃V40被定位为一款高端紧凑级五门掀背车型。从外观及产品定位来看，锁定的目标是宝马1系和奥迪A3以及新款奔驰A级。作为一款标准的紧凑级车，V40的长宽高分别为4369毫米、1802毫米和1445毫米，轴距2647毫米。相比其直接竞争车型奔驰A级，V40在宽度和高度上占有优势，相应的车内纵向空间和头部空间会更有更好表现。V40融合了沃尔沃的现代设计和经典元素，豹眼、鲨鱼嘴、鸟翼、水滴的造型，在V40的车身上被运用得惟妙惟肖，既动感又极富个性。沃尔沃V40拥有的超越同级别车辆的动力性能，213hp的强劲T5发动机为驾驶者带来化身竞技手的驰骋快感。'},
      {code: '0021', name: '法拉利LaFerrari', icon: 'img/car/FerrariLaFerrari.jpg', remark: 'LaFerrari是法拉利推出的一款旗舰级超级跑车，于2013年3月在日内瓦车展首次亮相，以取代Enzo Ferrari车型，仅限量499台。LaFerrari采用被称为HY-KERS的混合动力系统，一台6.3升V12自然吸气引擎可输出800马力的最大功率，电动机独立输出120千瓦动力，使得LaFerrari的联合输出功率高达963马力。LaFerrari的0-100km/h加速时间少于3秒，0-200km/h加速也少于7秒，0-300km/h更只需15秒，极速高达350km/h以上。LaFerrari拥有超凡极致的性能表现、空气动力效率以及操控性，为超级跑车树立了新的标杆。'},
      {code: '0022', name: '特斯拉Model S', icon: 'img/car/Tesla.jpg', remark: 'Tesla Model S是一款由Tesla汽车公司制造的全尺寸高性能电动轿车，外观造型方面，该车定位一款四门Coupe车型，动感的车身线条使人过目不忘。此外在前脸造型方面，该车也采用了自己的设计语言。另值得一提的是，特斯拉Model S的镀铬门把手在触摸之后可以自动弹出，充满科技感的设计从拉开车门时便开始体现。预计于2012年年中投入销售，而它的竞争对手则直指宝马5系。该款车的设计者Franz von Holzhausen，曾在马自达北美分公司担任设计师。在Tesla汽车公司中，Model S拥有独一无二的底盘、车身、发动机以及能量储备系统。'},
      {code: '0023', name: '玛莎拉蒂GT', icon: 'img/car/MaseratiGT.jpg', remark: '鲜明的个性，力量与优雅相结合的独特气质，玛莎拉蒂 GranTurismo 跑车是一款极富魅力的车型。它的造型设计中结合了无可比拟的视觉美感和梦幻效果。受玛莎拉蒂鸟笼 Birdcage 75th 概念车的启发，这款跑车具有强健的外观，同时带有一种自然的流动性，这种流畅感从前格栅开始，沿车身侧面一直延伸到尾灯。这一优美的、关注细节的精心设计是对空气动力学长期严谨研究的结果。GranTurismo 跑车的造型在风洞中经受了许多次检验与修改，这是玛莎拉蒂开发过程中一个至关重要的环节。GranTurismo 跑车配备4.2升V8发动机，最大功率达405马力（298千瓦）。特别的是，Granturismo采前49﹪、后51﹪重量分布，搭配的是自排变速箱附可变控制系统，驾驶者也能按个人需求激活手动模式，在弯道出入间享受快感。'},
      {code: '0024', name: '福特野马', icon: 'img/car/Mustang.jpg', remark: '标志性的加长引擎盖和较短的后甲板标志着40年的历史，正如如下这些经典的设计风格也成为了野马自上世纪六十年代以来的标志一样：车身侧面的C-开口、三元尾灯以及在水箱护罩中间的一匹奔驰着的骏马标志。野马那长相凶恶有如鲨鱼一般的鼻子向我们传达着一种自从上世纪六十年代晚期的车型开始就一直让人难以捉摸的感觉，而被置于梯形空间之中的、饰有宝石的圆形车头灯则是福特那惊人的创新设计能力的一个体现。这款专用的肌肉车（muscle-car）底盘是彻头彻尾的新产品，它配有一款堪称工艺品的前悬架以及精确的、带有潘哈德杆（Panhard rod）的三联后轴。上述这些，再加上精确的直接转向系统和强劲的盘式制动器，相信野马一定会让你拥有更高层的肌肉车驾驶体验。'},
      {code: '0025', name: '迈巴赫', icon: 'img/car/Maybach.jpg', remark: '迈巴赫是汽车历史上一个充满传奇色彩的品牌，巧夺天工的设计和无与伦比的精湛的制造技术使它在上个世纪初成为代表德国汽车工业最高水平的杰作。如果不是60年前的那场战争，迈巴赫恐怕早已成为与劳斯莱斯齐名的世界顶级豪华车。今天，德国人凭借自己的聪明才智和精湛的技艺使这一古老品牌迅速恢复昔日的光辉，重新诠释了“Maybach（迈巴赫）”这一传奇品牌——一个象征着完美和奢华的轿车。'},
      {code: '0026', name: '摩拜单车', icon: 'img/car/Mobike.jpg', remark: '也许，向往自由的你最适合的，就是双脚动力驱动的两轮敞篷跑车'},
    ];

  })
  .controller('CarTestCtrl', function ($rootScope, $scope, $ionicBackdrop, $timeout, $ionicScrollDelegate) {

        $rootScope.shareTitle = "测测看你适合开什么车！";

      function isNull(str){
        return str == null || str.value == "";
      }

      /**
       * java String hashCode 的实现
       * @param strKey
       * @return intValue
       */
      function hashCode(strKey)
      {
        var hash = 0;
        if(!isNull(strKey))
        {
          for (var i = 0; i < strKey.length; i++)
          {
            hash = hash * 31 + strKey.charCodeAt(i);
            hash = intValue(hash);
          }
        }
        return hash;
      }

      /**
       * 将js页面的number类型转换为java的int类型
       * @param num
       * @return intValue
       */
      function intValue(num)
      {
        var MAX_VALUE = 0x7fffffff;
        var MIN_VALUE = -0x80000000;
        if(num > MAX_VALUE || num < MIN_VALUE)
        {
          return num &= 0xFFFFFFFF;
        }
        return num;
      }

      $scope.init = function(){
        $scope.data = {};
        $scope.data.gender = 0;
        $scope.data.step = 0;

        $scope.result = null;

        $ionicScrollDelegate.scrollTop();
      }

      $scope.init();

      $scope.switchGender = function(value){
        $scope.data.gender = value;
      }

      $scope.doAction = function(){
        $scope.data.errCode = null;

        $timeout(function(){
          if(!$scope.data.username){
            $scope.data.errCode = "err0001";
          }

          if(!$scope.data.errCode){
            $scope.data.step = 1;
            $timeout(function(){
              var genderParam = 1;
              //女性系数为1,男性系数为2,未知系数为3
              if($scope.data.gender == 1){
                  genderParam = 2;
              }else if($scope.data.gender == 2){
                genderParam = 3;
              }

              //根据姓名hash做算法
              var hash = hashCode($scope.data.username);

              var finalIndex = Math.abs((genderParam + hash) % $scope.resultMapping.length);

              $scope.data.result = $scope.resultMapping[finalIndex];
            }, 1000);
          }
        }, 200)
      }
  })
    .controller('TouchSpeedCtrl', function ($rootScope, $scope, $timeout, $http, $ionicModal) {

        $rootScope.shareTitle = "我在霹雳手速榜中获得了手速惊人证书，快来和我比比吧！";

        var timer;

        var beginTime,endTime;

        $scope.init = function(){
            $scope.data = {};
            $scope.data.gameStatus = 0;
            $scope.data.round = 0;
            $scope.data.max = 3;
            $scope.data.perTime = 0;
            $scope.data.totalTime = 0;
            $scope.data.avgTime = 0;

            timer = null;
            beginTime = null;
            endTime = null;
        }

        function beginGame(){
            $scope.data.gameStatus = 1;
            timer = $timeout(function(){
                $scope.data.gameStatus = 2;
                beginTime = Date.now();
            }, 2000);
        }

        $scope.clickedBg = function(){
            switch($scope.data.gameStatus){
                case 0:
                    beginGame();
                    break;
                case 1:
                    $scope.data.gameStatus = 9;
                    $timeout.cancel(timer);
                    break;
                case 2:
                    endTime = Date.now();
                    $scope.data.perTime = endTime - beginTime;
                    $scope.data.gameStatus = 3;
                    //计算平均耗时
                    $scope.data.round++;
                    $scope.data.totalTime = $scope.data.totalTime + $scope.data.perTime;
                    $scope.data.avgTime = Math.round($scope.data.totalTime * 100 / $scope.data.round) /100;

                    if($scope.data.round < $scope.data.max){
                        $scope.data.gameStatus = 3;
                    }else{
                        $scope.data.gameStatus = 4;
                    }

                    break;
                case 3:
                    beginGame();
                    break;
                case 9:
                    beginGame();
                    break;
            }
        }

        $scope.reportResult = function(){
            if(!$scope.data.name){
                $scope.data.errCode = "err0001";
            }

            var postData = {
                name: $scope.data.name,
                phone: $scope.data.phone,
                rank: $scope.data.avgTime
            }
            $http.post("/api/reportTSRank", postData).then(function(data){
                $scope.closeModal();
            });
        }

        $ionicModal.fromTemplateUrl('report.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $ionicModal.fromTemplateUrl('ranks.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modalRanks = modal;
        });

        $scope.openRank = function() {
            $http.post("/api/listTSRank", null).success(function(data){
                $scope.data.ranks = data;
                $scope.modalRanks.show();
            });
        };
        $scope.closeRank = function() {
            $scope.modalRanks.hide();
        };

        $scope.init();
    }).controller('PlateNumberCtrl', function ($rootScope, $scope, $timeout) {

        var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var provinces = ['京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','桂','琼','川','贵','云','渝','藏','陕','甘','青','宁','新'];
        var enWords = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var carNames = ["Cayenne","Ferrari","Porsche"]

        function generateMixed(n) {
            var res = "";
            for(var i = 0; i < n ; i ++) {
                var id = Math.ceil(Math.random()*35);
                res += chars[id];
            }
            return res;
        }

        function generateProvince() {
            var province = provinces[Math.ceil(Math.random()*(provinces.length-1))];
            return province;
        }

        function generateEnWord(n) {
            var res = "";
            for(var i = 0; i < n ; i ++) {
                var id = Math.ceil(Math.random()*25);
                res += enWords[id];
            }
            return res;
        }

        $scope.init = function(){
            $scope.data = {};
            $scope.data.step = 0;
            $scope.data.carName = carNames[Math.floor(Math.random()*3)];
            $rootScope.shareTitle = "你的车牌究竟有多壕?";
        }

        $scope.reAction = function(){
            $scope.data.step = 0;
            $rootScope.shareTitle = "你的车牌究竟有多壕?";
        }

        $scope.doAction = function(){
            if(!$scope.data.username){
                $scope.data.errCode = "err0001";
                return
            }

            var province = generateProvince();
            var enWord = generateEnWord(1);

            //var value = generateMixed(2);
            var value = ""

            for(var i=0;i<5;i++){
                value += Math.floor(Math.random()*10);
            }

            //$scope.data.carNo = value;
            $scope.data.province = province;
            $scope.data.suffix = enWord + "·" + value;
            $scope.data.fullNo = province + enWord + value;
            //$scope.data.province = "测";
            //$scope.data.suffix = "A" + "·" + "88888";
            //$scope.data.fullNo = "测A88888";
            $scope.data.step = 1;

            $rootScope.shareTitle = "我的车牌是" + $scope.data.fullNo + "，壕不壕你说了算?";

        }

        $scope.init();
    });
