(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"460a":function(n,i,u){"use strict";var g={set:function(n,i){localStorage.setItem(n,JSON.stringify(i))},get:function(n){return JSON.parse(localStorage.getItem(n))},remove:function(n){localStorage.removeItem(n)}};i["a"]=g},f248:function(n,i,u){"use strict";u.d(i,"a",(function(){return g}));u("c975"),u("b64b");var g={scheme_common:{dict:{shengmu:{b:"b",c:"c",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",l:"l",m:"m",n:"n",p:"p",q:"q",r:"r",s:"s",t:"t",w:"w",x:"x",y:"y",z:"z",ch:"i",sh:"u",zh:"v"},yunmu:{a:"a",ai:"l",an:"j",ang:"h",ao:"k",e:"e",ei:"z",en:"f",eng:"g",i:"i",ia:"w",ian:"m",iang:"d",iao:"c",ie:"x",iong:"s",in:"n",ing:"y",iu:"q",o:"o",ong:"s",ou:"b",u:"u",ua:"w",uai:"y",uan:"r",uang:"d",ue:"t",ui:"v",un:"p",uo:"o","ü":"v",er:"r"},special:{a:"aa",ai:"ai",an:"an",ang:"ah",ao:"ao",e:"ee",ei:"ei",en:"en",eng:"eg",er:"er",o:"oo",ou:"ou"}}},scheme:[],scheme_predefine:[{name:"自然码",dict:{yunmu:{"üe":"t","ün":"p","üan":"r"},special:{yu:"yu",ju:"ju",qu:"qu",xu:"xu"},special_tips:"a o e重复2次按键；ai an ao ei en eng er ou首尾两按键；ang（按键为a、ang）"}},{name:"微软双拼",dict:{shengmu:{},yunmu:{"üe":"t","ün":"p","üan":"r",ing:";","ü":"y"},special:{yu:"yu",ju:"ju",qu:"qu",xu:"xu",a:"oa",ai:"ol",an:"oj",ang:"oh",ao:"ok",e:"oe",ei:"oz",en:"of",eng:"og",er:"or",ou:"ob"},special_tips:"零声母键为O, üe只放在T键上"}},{name:"搜狗双拼",dict:{shengmu:{},yunmu:{"üe":"t","ün":"p","üan":"r",ing:";","ü":"y"},special:{yu:"yu",ju:"ju",qu:"qu",xu:"xu",a:"oa",ai:"ol",an:"oj",ang:"oh",ao:"ok",e:"oe",ei:"oz",en:"of",eng:"og",er:"or",ou:"ob"},special_tips:"零声母键为O"}},{name:"智能ABC",dict:{shengmu:{ch:"e",sh:"v",zh:"a"},yunmu:{ei:"q",ia:"d",ian:"w",iang:"t",iao:"z",in:"c",iu:"r",ua:"d",uai:"c",uan:"p",uang:"t",ue:"m",ui:"m",un:"n","ün":"n","üe":"m","üan":"p"},special:{a:"oa",ai:"ol",an:"oj",ang:"oh",ao:"ok",e:"oe",ei:"oq",en:"of",eng:"og",er:"or",ou:"ob",yu:"yu",ju:"ju",qu:"qu",xu:"xu"},special_tips:"零声母键为O,üe在M键上"}}]},a=function(n){var i={};try{i=JSON.parse(JSON.stringify(n))}catch(u){}return i};g.init=function(){for(var n=0;n<g.scheme_predefine.length;n++){"undefined"==typeof g.scheme_predefine[n].dict.shengmu&&(g.scheme_predefine[n].dict.shengmu={}),"undefined"==typeof g.scheme_predefine[n].dict.yunmu&&(g.scheme_predefine[n].dict.yunmu={}),"undefined"==typeof g.scheme_predefine[n].dict.special&&(g.scheme_predefine[n].dict.special={}),Object.assign=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(n[g]=u[g])}return n};var i=g.scheme_predefine[n].dict,u=g.scheme_common.dict;i.shengmu=Object.assign({},u.shengmu,i.shengmu),i.yunmu=Object.assign({},u.yunmu,i.yunmu),i.special=Object.assign({},u.special,i.special)}g.scheme=a(g.scheme_predefine)},g.init(),g.current_scheme_index=0,g.get_current_scheme=function(){return g.scheme[g.current_scheme_index]},g.get_pinyin_parts=function(n){if(!n)return{first:"",second:""};var i="";return["zh","ch","sh"].indexOf(n.substr(0,2))>-1?{first:n.substr(0,2),second:n.substr(2)}:["a","o","e"].indexOf(n)>-1?{first:i,second:n}:["a","o","e"].indexOf(n.substr(0,1))>-1?n.substr(0,1)==g.get_current_scheme().dict.special[n].substr(0,1)?{first:n.substr(0,1),second:n.substr(1)}:{first:i,second:n}:{first:n.substr(0,1),second:n.substr(1)}},g.step_special=function(){var n=[],i=JSON.parse(JSON.stringify(g.get_current_scheme().dict.special)),u=JSON.parse(JSON.stringify(g.scheme_common.dict.special));for(var a in i)u[a]||n.push(a);return n},g.current_scheme_key_has_yuns=function(){for(var n={},i=g.get_current_scheme().dict.yunmu,u=Object.keys(i),a=0;a<u.length;a++)n[i[u[a]]]||(n[i[u[a]]]=[]),n[i[u[a]]].push(u[a]);return n},g.current_scheme_key_has_shengs=function(){for(var n={},i=g.get_current_scheme().dict.shengmu,u=Object.keys(i),a=0;a<u.length;a++)n[i[u[a]]]||(n[i[u[a]]]=[]),n[i[u[a]]].push(u[a]);return n}},fa5e:function(n,i,u){"use strict";u.d(i,"a",(function(){return a}));u("99af"),u("c975"),u("ac1f"),u("5319");for(var g=u("f248"),a={shengmu:["","b","p","m","f","d","t","n","l","g","k","h","j","q","x","zh","ch","sh","r","z","c","s","y","w"],yunmu:["a","o","e","i","u","ü","ai","ei","ui","ao","ou","iu","ie","üe","er","an","en","in","un","ün","ang","eng","ing","ong","ia","ian","iang","iao","iong","ua","uai","uan","uang","uo","üan"],zhengti:["zhi","chi","shi","ri","zi","ci","si","yi","wu","yu","ye","yue","yuan","yin","yun","ying"],array:[["a","o","e","","","","ai","ei","","ao","ou","","","","er","an","en","","","","ang","eng","","","","","","","","","","","","",""],["ba","bo","","bi","bu","","bai","bei","","bao","","","bie","","","ban","ben","bin","","","bang","beng","bing","","","bian","","biao","","","","","","",""],["pa","po","","pi","pu","","pai","pei","","pao","pou","","pie","","","pan","pen","pin","","","pang","peng","ping","","","pian","","piao","","","","","","",""],["ma","mo","me","mi","mu","","mai","mei","","mao","mou","miu","mie","","","man","men","min","","","mang","meng","ming","","","mian","","miao","","","","","","",""],["fa","fo","","","fu","","","fei","","","fou","","","","","fan","fen","","","","fang","feng","","","","","","","","","","","","",""],["da","","de","di","du","","dai","dei","dui","dao","dou","diu","die","","","dan","den","","dun","","dang","deng","ding","dong","dia","dian","","diao","","","","duan","","duo",""],["ta","","te","ti","tu","","tai","","tui","tao","tou","","tie","","","tan","","","tun","","tang","teng","ting","tong","","tian","","tiao","","","","tuan","","tuo",""],["na","","ne","ni","nu","nü","nai","nei","","nao","nou","niu","nie","nüe","","nan","nen","nin","","","nang","neng","ning","nong","","nian","niang","niao","","","","nuan","","nuo",""],["la","lo","le","li","lu","lü","lai","lei","","lao","lou","liu","lie","lüe","","lan","","lin","lun","","lang","leng","ling","long","lia","lian","liang","liao","","","","luan","","luo",""],["ga","","ge","","gu","","gai","gei","gui","gao","gou","","","","","gan","gen","","gun","","gang","geng","","gong","","","","","","gua","guai","guan","guang","guo",""],["ka","","ke","","ku","","kai","kei","kui","kao","kou","","","","","kan","ken","","kun","","kang","keng","","kong","","","","","","kua","kuai","kuan","kuang","kuo",""],["ha","","he","","hu","","hai","hei","hui","hao","hou","","","","","han","hen","","hun","","hang","heng","","hong","","","","","","hua","huai","huan","huang","huo",""],["","","","ji","","ju","","","","","","jiu","jie","jue","","","","jin","","jun","","","jing","","jia","jian","jiang","jiao","jiong","","","","","","juan"],["","","","qi","","qu","","","","","","qiu","qie","que","","","","qin","","qun","","","qing","","qia","qian","qiang","qiao","qiong","","","","","","quan"],["","","","xi","","xu","","","","","","xiu","xie","xue","","","","xin","","xun","","","xing","","xia","xian","xiang","xiao","xiong","","","","","","xuan"],["zha","","zhe","zhi","zhu","","zhai","zhei","zhui","zhao","zhou","","","","","zhan","zhen","","zhun","","zhang","zheng","","zhong","","","","","","zhua","zhuai","zhuan","zhuang","zhuo",""],["cha","","che","chi","chu","","chai","","chui","chao","chou","","","","","chan","chen","","chun","","chang","cheng","","chong","","","","","","chua","chuai","chuan","chuang","chuo",""],["sha","","she","shi","shu","","shai","shei","shui","shao","shou","","","","","shan","shen","","shun","","shang","sheng","","","","","","","","shua","shuai","shuan","shuang","shuo",""],["","","re","ri","ru","","","","rui","rao","rou","","","","","ran","ren","","run","","rang","reng","","rong","","","","","","rua","","ruan","","ruo",""],["za","","ze","zi","zu","","zai","zei","zui","zao","zou","","","","","zan","zen","","zun","","zang","zeng","","zong","","","","","","","","zuan","","zuo",""],["ca","","ce","ci","cu","","cai","","cui","cao","cou","","","","","can","cen","","cun","","cang","ceng","","cong","","","","","","","","cuan","","cuo",""],["sa","","se","si","su","","sai","","sui","sao","sou","","","","","san","sen","","sun","","sang","seng","","song","","","","","","","","suan","","suo",""],["ya","yo","ye","yi","","yu","","","","yao","you","","","yue","","yan","","yin","","yun","yang","","ying","yong","","","","","","","","","","","yuan"],["wa","wo","","","wu","","wai","wei","","","","","","","","wan","wen","","","","wang","weng","","","","","","","","","","","","",""]],shengdiao:{a:["ā","á","ǎ","à"],o:["ō","ó","ǒ","ò"],e:["ē","é","ě","è"],i:["ī","í","ǐ","ì"],u:["ū","ú","ǔ","ù"],"ü":["ǖ","ǘ","ǚ","ǜ"],ai:["āi","ái","ǎi","ài"],ei:["ēi","éi","ěi","èi"],ui:["uī","uí","uǐ","uì"],ao:["āo","áo","ǎo","ào"],ou:["ōu","óu","ǒu","òu"],iu:["iū","iú","iǔ","iù"],ie:["iē","ié","iě","iè"],"üe":["üē","üé","üě","üè"],er:["ēr","ér","ěr","èr"],an:["ān","án","ǎn","àn"],en:["ēn","én","ěn","èn"],in:["īn","ín","ǐn","ìn"],un:["ūn","ún","ǔn","ùn"],"ün":["ǖn","ǘn","ǚn","ǜn"],ang:["āng","áng","ǎng","àng"],eng:["ēng","éng","ěng","èng"],ing:["īng","íng","ǐng","ìng"],ong:["ōng","óng","ǒng","òng"],ia:["iā","iá","iǎ","ià"],ian:["iān","ián","iǎn","iàn"],iang:["iāng","iáng","iǎng","iàng"],iao:["iāo","iáo","iǎo","iào"],iong:["iōng","ióng","iǒng","iòng"],ua:["uā","uá","uǎ","uà"],uai:["uāi","uái","uǎi","uài"],uan:["uān","uán","uǎn","uàn"],uang:["uāng","uáng","uǎng","uàng"],uo:["uō","uó","uǒ","uò"],"üan":["üān","üán","üǎn","üàn"],ba:["bā","bá","bǎ","bà"],bo:["bō","bó","bǒ","bò"],bi:["bī","bí","bǐ","bì"],bu:["bū","bú","bǔ","bù"],bai:["bāi","bái","bǎi","bài"],bei:["bēi","béi","běi","bèi"],bao:["bāo","báo","bǎo","bào"],bie:["biē","bié","biě","biè"],ban:["bān","bán","bǎn","bàn"],ben:["bēn","bén","běn","bèn"],bin:["bīn","bín","bǐn","bìn"],bang:["bāng","báng","bǎng","bàng"],beng:["bēng","béng","běng","bèng"],bing:["bīng","bíng","bǐng","bìng"],bian:["biān","bián","biǎn","biàn"],biao:["biāo","biáo","biǎo","biào"],pa:["pā","pá","pǎ","pà"],po:["pō","pó","pǒ","pò"],pi:["pī","pí","pǐ","pì"],pu:["pū","pú","pǔ","pù"],pai:["pāi","pái","pǎi","pài"],pei:["pēi","péi","pěi","pèi"],pao:["pāo","páo","pǎo","pào"],pou:["pōu","póu","pǒu","pòu"],pie:["piē","pié","piě","piè"],pan:["pān","pán","pǎn","pàn"],pen:["pēn","pén","pěn","pèn"],pin:["pīn","pín","pǐn","pìn"],pang:["pāng","páng","pǎng","pàng"],peng:["pēng","péng","pěng","pèng"],ping:["pīng","píng","pǐng","pìng"],pian:["piān","pián","piǎn","piàn"],piao:["piāo","piáo","piǎo","piào"],ma:["mā","má","mǎ","mà"],mo:["mō","mó","mǒ","mò"],me:["mē","mé","mě","mè"],mi:["mī","mí","mǐ","mì"],mu:["mū","mú","mǔ","mù"],mai:["māi","mái","mǎi","mài"],mei:["mēi","méi","měi","mèi"],mao:["māo","máo","mǎo","mào"],mou:["mōu","móu","mǒu","mòu"],miu:["miū","miú","miǔ","miù"],mie:["miē","mié","miě","miè"],man:["mān","mán","mǎn","màn"],men:["mēn","mén","měn","mèn"],min:["mīn","mín","mǐn","mìn"],mang:["māng","máng","mǎng","màng"],meng:["mēng","méng","měng","mèng"],ming:["mīng","míng","mǐng","mìng"],mian:["miān","mián","miǎn","miàn"],miao:["miāo","miáo","miǎo","miào"],fa:["fā","fá","fǎ","fà"],fo:["fō","fó","fǒ","fò"],fu:["fū","fú","fǔ","fù"],fei:["fēi","féi","fěi","fèi"],fou:["fōu","fóu","fǒu","fòu"],fan:["fān","fán","fǎn","fàn"],fen:["fēn","fén","fěn","fèn"],fang:["fāng","fáng","fǎng","fàng"],feng:["fēng","féng","fěng","fèng"],da:["dā","dá","dǎ","dà"],de:["dē","dé","dě","dè"],di:["dī","dí","dǐ","dì"],du:["dū","dú","dǔ","dù"],dai:["dāi","dái","dǎi","dài"],dei:["dēi","déi","děi","dèi"],dui:["duī","duí","duǐ","duì"],dao:["dāo","dáo","dǎo","dào"],dou:["dōu","dóu","dǒu","dòu"],diu:["diū","diú","diǔ","diù"],die:["diē","dié","diě","diè"],dan:["dān","dán","dǎn","dàn"],den:["dēn","dén","děn","dèn"],dun:["dūn","dún","dǔn","dùn"],dang:["dāng","dáng","dǎng","dàng"],deng:["dēng","déng","děng","dèng"],ding:["dīng","díng","dǐng","dìng"],dong:["dōng","dóng","dǒng","dòng"],dia:["diā","diá","diǎ","dià"],dian:["diān","dián","diǎn","diàn"],diao:["diāo","diáo","diǎo","diào"],duan:["duān","duán","duǎn","duàn"],duo:["duō","duó","duǒ","duò"],ta:["tā","tá","tǎ","tà"],te:["tē","té","tě","tè"],ti:["tī","tí","tǐ","tì"],tu:["tū","tú","tǔ","tù"],tai:["tāi","tái","tǎi","tài"],tui:["tuī","tuí","tuǐ","tuì"],tao:["tāo","táo","tǎo","tào"],tou:["tōu","tóu","tǒu","tòu"],tie:["tiē","tié","tiě","tiè"],tan:["tān","tán","tǎn","tàn"],tun:["tūn","tún","tǔn","tùn"],tang:["tāng","táng","tǎng","tàng"],teng:["tēng","téng","těng","tèng"],ting:["tīng","tíng","tǐng","tìng"],tong:["tōng","tóng","tǒng","tòng"],tian:["tiān","tián","tiǎn","tiàn"],tiao:["tiāo","tiáo","tiǎo","tiào"],tuan:["tuān","tuán","tuǎn","tuàn"],tuo:["tuō","tuó","tuǒ","tuò"],na:["nā","ná","nǎ","nà"],ne:["nē","né","ně","nè"],ni:["nī","ní","nǐ","nì"],nu:["nū","nú","nǔ","nù"],"nü":["nǖ","nǘ","nǚ","nǜ"],nai:["nāi","nái","nǎi","nài"],nei:["nēi","néi","něi","nèi"],nao:["nāo","náo","nǎo","nào"],nou:["nōu","nóu","nǒu","nòu"],niu:["niū","niú","niǔ","niù"],nie:["niē","nié","niě","niè"],"nüe":["nüē","nüé","nüě","nüè"],nan:["nān","nán","nǎn","nàn"],nen:["nēn","nén","něn","nèn"],nin:["nīn","nín","nǐn","nìn"],nang:["nāng","náng","nǎng","nàng"],neng:["nēng","néng","něng","nèng"],ning:["nīng","níng","nǐng","nìng"],nong:["nōng","nóng","nǒng","nòng"],nian:["niān","nián","niǎn","niàn"],niang:["niāng","niáng","niǎng","niàng"],niao:["niāo","niáo","niǎo","niào"],nuan:["nuān","nuán","nuǎn","nuàn"],nuo:["nuō","nuó","nuǒ","nuò"],la:["lā","lá","lǎ","là"],lo:["lō","ló","lǒ","lò"],le:["lē","lé","lě","lè"],li:["lī","lí","lǐ","lì"],lu:["lū","lú","lǔ","lù"],"lü":["lǖ","lǘ","lǚ","lǜ"],lai:["lāi","lái","lǎi","lài"],lei:["lēi","léi","lěi","lèi"],lao:["lāo","láo","lǎo","lào"],lou:["lōu","lóu","lǒu","lòu"],liu:["liū","liú","liǔ","liù"],lie:["liē","lié","liě","liè"],"lüe":["lüē","lüé","lüě","lüè"],lan:["lān","lán","lǎn","làn"],lin:["līn","lín","lǐn","lìn"],lun:["lūn","lún","lǔn","lùn"],lang:["lāng","láng","lǎng","làng"],leng:["lēng","léng","lěng","lèng"],ling:["līng","líng","lǐng","lìng"],long:["lōng","lóng","lǒng","lòng"],lia:["liā","liá","liǎ","lià"],lian:["liān","lián","liǎn","liàn"],liang:["liāng","liáng","liǎng","liàng"],liao:["liāo","liáo","liǎo","liào"],luan:["luān","luán","luǎn","luàn"],luo:["luō","luó","luǒ","luò"],ga:["gā","gá","gǎ","gà"],ge:["gē","gé","gě","gè"],gu:["gū","gú","gǔ","gù"],gai:["gāi","gái","gǎi","gài"],gei:["gēi","géi","gěi","gèi"],gui:["guī","guí","guǐ","guì"],gao:["gāo","gáo","gǎo","gào"],gou:["gōu","góu","gǒu","gòu"],gan:["gān","gán","gǎn","gàn"],gen:["gēn","gén","gěn","gèn"],gun:["gūn","gún","gǔn","gùn"],gang:["gāng","gáng","gǎng","gàng"],geng:["gēng","géng","gěng","gèng"],gong:["gōng","góng","gǒng","gòng"],gua:["guā","guá","guǎ","guà"],guai:["guāi","guái","guǎi","guài"],guan:["guān","guán","guǎn","guàn"],guang:["guāng","guáng","guǎng","guàng"],guo:["guō","guó","guǒ","guò"],ka:["kā","ká","kǎ","kà"],ke:["kē","ké","kě","kè"],ku:["kū","kú","kǔ","kù"],kai:["kāi","kái","kǎi","kài"],kei:["kēi","kéi","kěi","kèi"],kui:["kuī","kuí","kuǐ","kuì"],kao:["kāo","káo","kǎo","kào"],kou:["kōu","kóu","kǒu","kòu"],kan:["kān","kán","kǎn","kàn"],ken:["kēn","kén","kěn","kèn"],kun:["kūn","kún","kǔn","kùn"],kang:["kāng","káng","kǎng","kàng"],keng:["kēng","kéng","kěng","kèng"],kong:["kōng","kóng","kǒng","kòng"],kua:["kuā","kuá","kuǎ","kuà"],kuai:["kuāi","kuái","kuǎi","kuài"],kuan:["kuān","kuán","kuǎn","kuàn"],kuang:["kuāng","kuáng","kuǎng","kuàng"],kuo:["kuō","kuó","kuǒ","kuò"],ha:["hā","há","hǎ","hà"],he:["hē","hé","hě","hè"],hu:["hū","hú","hǔ","hù"],hai:["hāi","hái","hǎi","hài"],hei:["hēi","héi","hěi","hèi"],hui:["huī","huí","huǐ","huì"],hao:["hāo","háo","hǎo","hào"],hou:["hōu","hóu","hǒu","hòu"],han:["hān","hán","hǎn","hàn"],hen:["hēn","hén","hěn","hèn"],hun:["hūn","hún","hǔn","hùn"],hang:["hāng","háng","hǎng","hàng"],heng:["hēng","héng","hěng","hèng"],hong:["hōng","hóng","hǒng","hòng"],hua:["huā","huá","huǎ","huà"],huai:["huāi","huái","huǎi","huài"],huan:["huān","huán","huǎn","huàn"],huang:["huāng","huáng","huǎng","huàng"],huo:["huō","huó","huǒ","huò"],ji:["jī","jí","jǐ","jì"],ju:["jū","jú","jǔ","jù"],jiu:["jiū","jiú","jiǔ","jiù"],jie:["jiē","jié","jiě","jiè"],jue:["juē","jué","juě","juè"],jin:["jīn","jín","jǐn","jìn"],jun:["jūn","jún","jǔn","jùn"],jing:["jīng","jíng","jǐng","jìng"],jia:["jiā","jiá","jiǎ","jià"],jian:["jiān","jián","jiǎn","jiàn"],jiang:["jiāng","jiáng","jiǎng","jiàng"],jiao:["jiāo","jiáo","jiǎo","jiào"],jiong:["jiōng","jióng","jiǒng","jiòng"],juan:["juān","juán","juǎn","juàn"],qi:["qī","qí","qǐ","qì"],qu:["qū","qú","qǔ","qù"],qiu:["qiū","qiú","qiǔ","qiù"],qie:["qiē","qié","qiě","qiè"],que:["quē","qué","quě","què"],qin:["qīn","qín","qǐn","qìn"],qun:["qūn","qún","qǔn","qùn"],qing:["qīng","qíng","qǐng","qìng"],qia:["qiā","qiá","qiǎ","qià"],qian:["qiān","qián","qiǎn","qiàn"],qiang:["qiāng","qiáng","qiǎng","qiàng"],qiao:["qiāo","qiáo","qiǎo","qiào"],qiong:["qiōng","qióng","qiǒng","qiòng"],quan:["quān","quán","quǎn","quàn"],xi:["xī","xí","xǐ","xì"],xu:["xū","xú","xǔ","xù"],xiu:["xiū","xiú","xiǔ","xiù"],xie:["xiē","xié","xiě","xiè"],xue:["xuē","xué","xuě","xuè"],xin:["xīn","xín","xǐn","xìn"],xun:["xūn","xún","xǔn","xùn"],xing:["xīng","xíng","xǐng","xìng"],xia:["xiā","xiá","xiǎ","xià"],xian:["xiān","xián","xiǎn","xiàn"],xiang:["xiāng","xiáng","xiǎng","xiàng"],xiao:["xiāo","xiáo","xiǎo","xiào"],xiong:["xiōng","xióng","xiǒng","xiòng"],xuan:["xuān","xuán","xuǎn","xuàn"],zha:["zhā","zhá","zhǎ","zhà"],zhe:["zhē","zhé","zhě","zhè"],zhi:["zhī","zhí","zhǐ","zhì"],zhu:["zhū","zhú","zhǔ","zhù"],zhai:["zhāi","zhái","zhǎi","zhài"],zhei:["zhēi","zhéi","zhěi","zhèi"],zhui:["zhuī","zhuí","zhuǐ","zhuì"],zhao:["zhāo","zháo","zhǎo","zhào"],zhou:["zhōu","zhóu","zhǒu","zhòu"],zhan:["zhān","zhán","zhǎn","zhàn"],zhen:["zhēn","zhén","zhěn","zhèn"],zhun:["zhūn","zhún","zhǔn","zhùn"],zhang:["zhāng","zháng","zhǎng","zhàng"],zheng:["zhēng","zhéng","zhěng","zhèng"],zhong:["zhōng","zhóng","zhǒng","zhòng"],zhua:["zhuā","zhuá","zhuǎ","zhuà"],zhuai:["zhuāi","zhuái","zhuǎi","zhuài"],zhuan:["zhuān","zhuán","zhuǎn","zhuàn"],zhuang:["zhuāng","zhuáng","zhuǎng","zhuàng"],zhuo:["zhuō","zhuó","zhuǒ","zhuò"],cha:["chā","chá","chǎ","chà"],che:["chē","ché","chě","chè"],chi:["chī","chí","chǐ","chì"],chu:["chū","chú","chǔ","chù"],chai:["chāi","chái","chǎi","chài"],chui:["chuī","chuí","chuǐ","chuì"],chao:["chāo","cháo","chǎo","chào"],chou:["chōu","chóu","chǒu","chòu"],chan:["chān","chán","chǎn","chàn"],chen:["chēn","chén","chěn","chèn"],chun:["chūn","chún","chǔn","chùn"],chang:["chāng","cháng","chǎng","chàng"],cheng:["chēng","chéng","chěng","chèng"],chong:["chōng","chóng","chǒng","chòng"],chua:["chuā","chuá","chuǎ","chuà"],chuai:["chuāi","chuái","chuǎi","chuài"],chuan:["chuān","chuán","chuǎn","chuàn"],chuang:["chuāng","chuáng","chuǎng","chuàng"],chuo:["chuō","chuó","chuǒ","chuò"],sha:["shā","shá","shǎ","shà"],she:["shē","shé","shě","shè"],shi:["shī","shí","shǐ","shì"],shu:["shū","shú","shǔ","shù"],shai:["shāi","shái","shǎi","shài"],shei:["shēi","shéi","shěi","shèi"],shui:["shuī","shuí","shuǐ","shuì"],shao:["shāo","sháo","shǎo","shào"],shou:["shōu","shóu","shǒu","shòu"],shan:["shān","shán","shǎn","shàn"],shen:["shēn","shén","shěn","shèn"],shun:["shūn","shún","shǔn","shùn"],shang:["shāng","sháng","shǎng","shàng"],sheng:["shēng","shéng","shěng","shèng"],shua:["shuā","shuá","shuǎ","shuà"],shuai:["shuāi","shuái","shuǎi","shuài"],shuan:["shuān","shuán","shuǎn","shuàn"],shuang:["shuāng","shuáng","shuǎng","shuàng"],shuo:["shuō","shuó","shuǒ","shuò"],re:["rē","ré","rě","rè"],ri:["rī","rí","rǐ","rì"],ru:["rū","rú","rǔ","rù"],rui:["ruī","ruí","ruǐ","ruì"],rao:["rāo","ráo","rǎo","rào"],rou:["rōu","róu","rǒu","ròu"],ran:["rān","rán","rǎn","ràn"],ren:["rēn","rén","rěn","rèn"],run:["rūn","rún","rǔn","rùn"],rang:["rāng","ráng","rǎng","ràng"],reng:["rēng","réng","rěng","rèng"],rong:["rōng","róng","rǒng","ròng"],rua:["ruā","ruá","ruǎ","ruà"],ruan:["ruān","ruán","ruǎn","ruàn"],ruo:["ruō","ruó","ruǒ","ruò"],za:["zā","zá","zǎ","zà"],ze:["zē","zé","zě","zè"],zi:["zī","zí","zǐ","zì"],zu:["zū","zú","zǔ","zù"],zai:["zāi","zái","zǎi","zài"],zei:["zēi","zéi","zěi","zèi"],zui:["zuī","zuí","zuǐ","zuì"],zao:["zāo","záo","zǎo","zào"],zou:["zōu","zóu","zǒu","zòu"],zan:["zān","zán","zǎn","zàn"],zen:["zēn","zén","zěn","zèn"],zun:["zūn","zún","zǔn","zùn"],zang:["zāng","záng","zǎng","zàng"],zeng:["zēng","zéng","zěng","zèng"],zong:["zōng","zóng","zǒng","zòng"],zuan:["zuān","zuán","zuǎn","zuàn"],zuo:["zuō","zuó","zuǒ","zuò"],ca:["cā","cá","cǎ","cà"],ce:["cē","cé","cě","cè"],ci:["cī","cí","cǐ","cì"],cu:["cū","cú","cǔ","cù"],cai:["cāi","cái","cǎi","cài"],cui:["cuī","cuí","cuǐ","cuì"],cao:["cāo","cáo","cǎo","cào"],cou:["cōu","cóu","cǒu","còu"],can:["cān","cán","cǎn","càn"],cen:["cēn","cén","cěn","cèn"],cun:["cūn","cún","cǔn","cùn"],cang:["cāng","cáng","cǎng","càng"],ceng:["cēng","céng","cěng","cèng"],cong:["cōng","cóng","cǒng","còng"],cuan:["cuān","cuán","cuǎn","cuàn"],cuo:["cuō","cuó","cuǒ","cuò"],sa:["sā","sá","sǎ","sà"],se:["sē","sé","sě","sè"],si:["sī","sí","sǐ","sì"],su:["sū","sú","sǔ","sù"],sai:["sāi","sái","sǎi","sài"],sui:["suī","suí","suǐ","suì"],sao:["sāo","sáo","sǎo","sào"],sou:["sōu","sóu","sǒu","sòu"],san:["sān","sán","sǎn","sàn"],sen:["sēn","sén","sěn","sèn"],sun:["sūn","sún","sǔn","sùn"],sang:["sāng","sáng","sǎng","sàng"],seng:["sēng","séng","sěng","sèng"],song:["sōng","sóng","sǒng","sòng"],suan:["suān","suán","suǎn","suàn"],suo:["suō","suó","suǒ","suò"],ya:["yā","yá","yǎ","yà"],yo:["yō","yó","yǒ","yò"],ye:["yē","yé","yě","yè"],yi:["yī","yí","yǐ","yì"],yu:["yū","yú","yǔ","yù"],yao:["yāo","yáo","yǎo","yào"],you:["yōu","yóu","yǒu","yòu"],yue:["yuē","yué","yuě","yuè"],yan:["yān","yán","yǎn","yàn"],yin:["yīn","yín","yǐn","yìn"],yun:["yūn","yún","yǔn","yùn"],yang:["yāng","yáng","yǎng","yàng"],ying:["yīng","yíng","yǐng","yìng"],yong:["yōng","yóng","yǒng","yòng"],yuan:["yuān","yuán","yuǎn","yuàn"],wa:["wā","wá","wǎ","wà"],wo:["wō","wó","wǒ","wò"],wu:["wū","wú","wǔ","wù"],wai:["wāi","wái","wǎi","wài"],wei:["wēi","wéi","wěi","wèi"],wan:["wān","wán","wǎn","wàn"],wen:["wēn","wén","wěn","wèn"],wang:["wāng","wáng","wǎng","wàng"],weng:["wēng","wéng","wěng","wèng"]},shengyun:{}},h=0;h<a.array.length;h++)for(var e=0;e<a.array[h].length;e++)if(""!=a.array[h][e]){var o={};o.sheng=a.shengmu[h],o.yun=a.yunmu[e],a.shengyun[a.array[h][e]]=o}a.get_shengyun=function(n){return a.shengyun[n]},a.lingshengmu=function(){for(var n=[],i=0;i<a.array[0].length;i++)""!=a.array[0][i]&&n.push(a.array[0][i]);return n}(),a.sheng_order=function(){for(var n=[],i=0;i<a.array.length;i++)for(var u=0;u<a.array[i].length;u++)""!=a.array[i][u]&&n.push(a.array[i][u]);return n}(),Array.prototype.shuffle||(Array.prototype.shuffle=function(){for(var n,i,u=this.length;u;n=parseInt(Math.random()*u),i=this[--u],this[u]=this[n],this[n]=i);return this}),a.sheng_random=function(){for(var n=[],i=0;i<a.array.length;i++){for(var u=[],g=0;g<a.array[i].length;g++)""!=a.array[i][g]&&u.push(a.array[i][g]);n.push.apply(n,u.shuffle())}return n},a.yun_order=function(){for(var n=[],i=0;i<a.array[0].length;i++)for(var u=0;u<a.array.length;u++)""!=a.array[u][i]&&n.push(a.array[u][i]);return n}(),a.yun_random=function(){for(var n=[],i=0;i<a.array[0].length;i++){for(var u=[],g=0;g<a.array.length;g++)""!=a.array[g][i]&&u.push(a.array[g][i]);n.push.apply(n,u.shuffle())}return n},a.all_random=function(){return a.sheng_order.concat().shuffle()},a.long_random=function(){for(var n=a.all_random(),i=[],u=0;u<n.length;u++)n[u].length>2&&i.push(n[u]);return i},a.practice_mode=["韵母序列","韵母随机","声母序列","声母随机","全部随机","零声母","特例","整体认读音节","3+随机","易错练习"],a.get_practice_list=function(){for(var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=a.practice_mode,u=[],h=0;h<i.length;h++){var e={};e.name=i[h],"韵母序列"==e.name?e.pinyin=a.yun_order:"韵母随机"==e.name?e.pinyin=a.yun_random():"声母序列"==e.name?e.pinyin=a.sheng_order:"声母随机"==e.name?e.pinyin=a.sheng_random():"全部随机"==e.name?e.pinyin=a.all_random():"零声母"==e.name?e.pinyin=a.lingshengmu:"特例"==e.name?e.pinyin=n?g["a"].step_special():[]:"整体认读音节"==e.name?e.pinyin=a.zhengti:"3+随机"==e.name?e.pinyin=a.long_random():"易错练习"==e.name&&(e.pinyin=a.error_list),u.push(e)}return u},a.practice_list=a.get_practice_list(),a.error_list=[],a.is_pinyin=function(n){return a.yun_order.indexOf(n)>-1},a.untone=function(n){return n=n.replace("ā","a"),n=n.replace("á","a"),n=n.replace("ǎ","a"),n=n.replace("à","a"),n=n.replace("ō","o"),n=n.replace("ó","o"),n=n.replace("ǒ","o"),n=n.replace("ò","o"),n=n.replace("ē","e"),n=n.replace("é","e"),n=n.replace("ě","e"),n=n.replace("è","e"),n=n.replace("ī","i"),n=n.replace("í","i"),n=n.replace("ǐ","i"),n=n.replace("ì","i"),n=n.replace("ū","u"),n=n.replace("ú","u"),n=n.replace("ǔ","u"),n=n.replace("ù","u"),n=n.replace("ǖ","ü"),n=n.replace("ǘ","ü"),n=n.replace("ǚ","ü"),n=n.replace("ǜ","ü"),n}}}]);