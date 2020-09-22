import './App.css';
import React, { useState ,Component} from 'react'

/////////////////////DATA FIELD//////////////////////////////////////////
/*跑馬燈文字(不要用 ` 符號)*/
const marquee=`Welcome to Sage's homepage. 新網頁上線全面特價供應中！ 本期特價商品快速起毬試驗機耗材組，詳情請來電洽詢，謝謝！  `;

/*  ['中文','英文','簡介',[標準],[圖片位置]],*/
//檢驗儀器設備
/*織物檢驗*/const tp=[
  /*DONT TOUCH THIS LINE*/['','','',[],''],
  ['萬能拉力試驗機','Universal Testing Machine1','全電腦控制，精確度高，多種夾具及荷重元供選擇，功能性強，可測試紗線、織物 強力、彈性回覆力、布撕裂強度及抗壓縮試驗，符合各式標準。',['ISO 13934-1','ISO 13934-2','ASTM D 4345','ASTM D 3107','ASTM D 4964','ASTM D 5034','ASTMD  5035','BS 3424','BS 4304'],["images/tp/SGT-1.jpg","images/tp/SGT-1-2.jpg"]],
  ['Safguard鈕扣拉力試驗機','Safguard','備有各式夾具可供各種不同鈕扣使用',["ASTM F 963","ASTM D 4846-96","EN 71","M&S P115A","M&S P115"],["images/tp/SGT-40.gif"]],
  ['WASHTEC 程控式耐水洗試驗機','WASHTEC Colour Fastness Tester','內建程式大杯及小杯兩用機台。有單、雙槽可供選擇，最大容量達24杯位，符合各式標準。',["ISO 105","AATCC 28","AATCC 61","AATCC 86","AATCC 132","AATCC 151"],["images/tp/Washtec_MK4_Pot_Dispenser_Colour.jpg","images/tp/Washtec_MK4_01.png"]], 
  ['DURAWASH 程控式印花牢度試驗機','DURAWASH The Original Print Durability Tester','內建程式，有單槽及雙槽可供選擇。',['ARCADIA GROUP','BS 7907','CEN TR 16792','M&S C15','M&S P5','M&S P6','M&S P7','M&S P69','NEXT TM8'],['images/tp/DSC_0214.jpg','images/tp/Durawash_&_Plus.jpg']],
  ['OPTI-DRY 標準實驗室乾衣機','OPTI-DRY Laboratory Tumble Dryer','符合各式標準，精確的溫度控制，簡單易操作，乾衣容量5kg。',["ISO 6330","ISO 26330","AATCC 135"],["images/tp/Opti-Dry.png"]],  
  ['Wascator程控式水洗縮率試驗機','Wascator Washer-Extractor','微電腦控制，晶片卡內建標準洗程，操作簡單，最高達999次洗衣行程設定。',["ISO 5077","ISO 6330"],["images/tp/SGT-4.jpg"]],
  ['Miele洗衣機','Miele Washing Machine','Professional系列可程式設定，操作簡單，符合Nike、adidas、PUMA等各品牌規範。',[],["images/tp/SGT-33.gif"]],
  ['AATCC洗衣機','AATCC Washing Machine','AATCC 推薦使用。符合AATCC M6-2018標準。',['AATCC 88B','AATCC 88C','AATCC 124','AATCC 135','AATCC 143','AATCC 150','NIKE'],['images/tp/LABTEX-M6-1.jpg','images/tp/LABTEX-M6-2.jpg','images/tp/aatccwashinfo.png']],
  ['AATCC乾衣機','AATCC Drying Machine','AATCC 推薦使用。符合AATCC M6-2018標準。',['AATCC 124','AATCC 135','AATCC 143','AATCC 150','AATCC 172','AATCC 179','AATCC 188','NIKE'],['images/tp/LABTEX-M6D-1.jpg','images/tp/LABTEX-M6D-2.jpg','images/tp/aatccdryerinfo.png']],
  ['氣冷式氙弧光耐光耐候試驗機','Xenon Arc Light and Weathering Fastness Tester','觸控面板，氣冷式冷卻設計，內建操作規範，操作簡便。',['ISO 105 B02','ISO 105 B04','M&S C9','M&S C9A'],['images/tp/SGT-5.gif']],
  ['簡易型耐光試驗機','Light Fastness Tester','利用500W鎢絲燈模擬日光照射，測試織物的耐光牢度。',["BS 1006 UK/TN"],['images/tp/SGT-6.gif']],
  ['乾洗試驗機','Dry Cleaning Tester','測試織物乾洗色牢度及耐氯水洗試驗，並可做為防火試驗之前處理設備。',['AATCC 162'],['images/tp/SGT-7.gif']],
  ['耐昇華試驗機','Scorch / Sublimation Testers','單片控溫設計，測試織物耐昇華牢度及乾熱試驗。',['ISO 105','JIS L 0850','JIS L 0879','JIS L 0880','JIS L 1041'],['images/tp/SGT-8.gif']],
  ['全自動乾溼熱燙縮試驗機','Automatic Test-press Machine','利用蒸氣及電熱功能，測試織物乾、濕式縮率試驗',['JIS L 1042 (H1~H4)'],['images/tp/SGT-9.jpg']],
  ['乾熱收縮(熱壓牢度)試驗機','CONTACT HEAT-Thermal Stability Test Colour fastness to hot pressing','利用熱燙板平均施壓於織物上，測試織物的熱收縮性及熱壓色牢度。',['ISO 105X11','M&S P10'],['images/tp/contact-heat-thermal-stability-test-533x426.png']],
  ['蒸氣收縮試驗機','Wira Steaming Cylinder','快速測試織物蒸氣收縮情形，操作簡單安全。',['ISO 3005:1978','BS 4323:1979[1995]','IWTO-299-76[E]','M&S P8'],['images/tp/SGT-38.gif']],
  ['織物硬挺度試驗','Fabric Stiffness Tester','氣動定壓式設計，可瞬間紀錄測試數據。',['ASTM D 4032'],['images/tp/SGT-34.gif']],
  ['保溫性試驗機','Warmth Retaining Tester','機能性檢測，利用恆溫控制來檢測織物的保溫率及熱傳導係數。',['ASTM D 1518','JIS L 1096'],['images/tp/SGT-11.gif']],
  ['織物垂落試驗機','Cusick Drape Tester','利用自由垂落陰影法，測試織物之柔軟度，藉此評估織物之手感。',['ISO 9073-9','JIS L 1096','JIS L 1018','JIS L 1085'],['images/tp/SGT-12.gif']],
  ['Martindale 織物耐磨耐穿試驗機','Martindale Abrasion & Pilling Tester','測試織物之耐磨性、耐穿及起球性，藉以評估織物之耐磨等級。備有4、6、8及10個測試座供選配。',['ISO 12947-1','ISO 12945-2','ASTM D 4966','ASTM D 4970','JIS L 1096'],['images/tp/Martindale_MK3_Draw_01.png','images/tp/Martindale_MK3_Insert_01.jpg']],
  ['萬能磨耗試驗機','Universal Wear Tester','可測試織物及鞋材之平面摩擦、彎曲摩擦及邊緣摩擦，藉以評定被測物之耐磨等級。',['ASTM D 3514','ASTM D 3885','ASTM D 3886','AATCC 119','AATC 120'],['images/tp/SGT-14.gif']],
  ['ASTM特殊織物摩擦試驗機','Wyzenbeek','利用被測物與鐵網的摩擦，藉以評定摩擦等級，適用於家飾布、皮革、汽車內裝等摩擦試驗。',['ASTM D 4157'],['images/tp/SGT-35.gif']],
  ['滾筒快速式耐磨試驗機','Acceleroter-type Abrasion Tester','利用攪拌翼快速的旋轉，使織物與槽內壁產生摩擦，來測試織物重量及強度的改變情形。',['AATCC 93','M&S P26'],['images/tp/SGT-39.gif']],
  ['織物摩擦帶電試驗機','Rotary Static Tester','機能性檢測，測試織物與標準布摩擦後的帶電量，並記錄測試期間電量值之變化。',['JIS L 1094'],['images/tp/SGT-15-1.gif','images/tp/SGT-15-2.gif']],
  ['VERIVIDE 多光源標準對色燈','Verivide Color Match Cabinet','木製機台，耐酸鹼、防腐蝕，全機台英國製造，提供D65、TL84、UVB、F、CWF等多種光源選擇。為Adidas及M&S指定對色用機台。',[],['images/op/SGO-6.jpg']],
  ['VERIVIDE 評級觀察箱','Pilling Assessment Viewer','提供標準光源及標準視角，配合標準評級圖來判定被測物之測試等級。',['BS 5811','ASTM D 3512','Martindale Method'],['images/tp/SGT-16.gif']],
  ['平面摩擦牢度試驗機','Crock Meter','往復平面式摩擦，來測試織物摩擦色牢度等級。',['ISO 105 X12','ISO D 02','AATCC 8','AATCC 165'],['images/tp/SGT-17.gif','images/tp/Motorised_Crocktec.png']],
  ['JIS摩擦色牢度試驗機','Dyeing Rubbing Tester','圓弧型測試座，配合輔助荷重可測試織物乾式及濕式之摩擦色牢度',['JIS L 0801','JIS L 0823','JIS L 0849','JIS L 1006','JIS L 1084'],['images/tp/SGT-18.gif']],
  ['潑水度試驗機(雨淋法)','Bundesmann Water Repellency Tester','模擬下雨原理，測試織物之防水等級',['ISO 9865'],['images/tp/SGT-19.gif']],
  ['AATCC雨淋試驗機','Rain Tester','測試紡織品經過後處理等加工流程後，表面之潑水程度。',['AATCC 35'],['images/tp/SGT-20.jpg']],
  ['AATCC潑水度試驗機','Spary Tester','測試紡織品經過後處理等加工流程後，表面之沾水程度。',['AATCC 22'],['images/tp/SGT-21(N).jpg','images/tp/SGT-21.jpg']],
  ['高低壓耐水壓試驗機','Water Resistance Tester','全自動微電腦控制，加壓速度可三段設定，適用高水壓法與低水壓法測試，油壓式夾具織物不易滑脫，雙鍵式按鈕，安全性高，附有熱感式自動印表機。',['ISO 811','AATCC 127','JIS L 1092 A&B'],['images/tp/SGT-23.gif']],
  ['垂直吸濕試驗機','Vertical Wicking Test','可同時測試六個樣品滑動式壓克力水槽，使用簡單、易讀值。',['Adidas 6.09','AATCC 79'],['images/tp/SGT-36.JPG']],
  ['織物撕裂強度試驗機','Elmendor Tearing Tester','數字型與指針式可供選擇，附有校正重錘，雙鍵式設計，安全性高。',['ISO 13937','ISO 9290','ASTM D 1424','JIS L 1096'],['images/tp/SGT-24(N).jpg']],
  ['織物透氣度試驗機','Air Permeability Tester','針對紡織品研發，電腦控制，利用氣流壓差原理，測試氣體的透過率，操作簡單，附有校正試驗組。',['ISO 9237','ASTM D 737','ASTM D 3574','ASTM F 778','JIS L 1096'],['images/tp/SGT-25.gif']],
  ['ASTM(Mullen)織物爆破強度試驗機','Bursting Strength Tester','Mullen Type 油壓式爆破試驗機，用以測試織物織爆破強度',['ASTM D 3786'],['images/tp/SGT-26.JPG','images/tp/SGT-26(N).jpg']],
  ['OPTI-BURST 氣壓式爆破試驗機','Pneumatic Bursting Strength Tester','',['ISO 13938-2','ASTM D 3786','M&S P27','adidas 4.09','Woolmark TM29','NEXT TM22','IWTO TM29'],['images/tp/opti-burst-bursting-strength-tester2-533x426.png','images/tp/Domes.jpg']],
  ['ICI起毬試驗機(Adidas抗抓鉤)','ICI Pilling Tester (Adidas snagging)','有兩箱式及四箱式可供選擇，利用織物與測試箱內壁摩擦，來測試織物表面之起毬或抗抓鉤程度。',['ISO 12945-1','BS 5811'],['images/tp/ici-pilling-tester-2-533x426.png']],
  ['ICI抗抓鉤試驗機','ICI MACE Snag Tester','流星錘式針球，可均勻於布面滾動，特殊設計針球座，易拿取不傷手。附專用標準判級圖及判級箱。',['ASTM D 3939'],['images/tp/ici-mace-snag-tester-533x426.png']],
  ['快速起毬試驗機','Random Tumble Pilling Tester','有兩槽式及四槽式可供選擇，利用攪拌翼快速旋轉及氣流衝擊，讓織物與槽內壁產生摩擦，來測試織物起毬等級。',['ASTM D 3512','JIS L 1076'],['images/tp/SGT-28(N).jpg']],
  ['織物取樣機','Sample Cutter','利用四片刀片旋轉切割下100cm²大小之樣布，秤其重量藉以計算出m²之重量',['ASTM D 3776'],['images/tp/SGT-29.gif']],
  ['垂直式燃燒試驗機','Vertical Flammability Tester','垂直式燃燒試驗機，搭配不同的火焰控制器，可符合美國防火檢驗及兒童睡衣防火檢驗標準。',['FEDERAL TEST METHOD 5903','CAPI 84','NFPA 701-1989','CFR 1615/1616'],['images/tp/SGT-30.gif']],
  ['45度防火試驗機','45° Flammability Tester','45度傾斜式燃燒，可測試織物表面的防火性，適用於玩具及家飾布等燃燒檢驗標準。',['CFR 1610','ASTM D 1230','NFPA 702'],['images/tp/SGT-31.gif']],
  ['水平式燃燒試驗機','Horizontal Flammability Tester','水平式燃燒法，可測試織物表面的延燒性，適用於汽車及航空器內裝等燃燒檢驗標準。',['FMVSS 302','Aircraft Interiors','SAE J 369','ASTM D 5132','ISO 3795'],['images/tp/SGT-32.gif']],
  ['ASTM D2594 拉伸架','STRETCH & RECOVERY TESTER','',['ASTM D 2594','nike','Under Armour','Columbia D3107'],['images/tp/001.jpg']]
];
/*紗線檢驗*/const yp=[
  ['撚度試驗機','Twist Tester','全自動單、雙股紗及S.Z撚均可測試，變速馬達，方便易操作，精密度達0.1撚。',['ISO 2061','ASTM D 1422 / 1423'],['images/yp/SGY-1.jpg']],
  ['電動搖紗機','Wrap Reel Electronic','電子控制可任意設定長度，附恆動及自停裝置，可測試紗支數、丹尼數及里紗強力，省力易操作。',['ISO 2060','ASTM D 1907 / 2260'],['images/yp/SGY-2.jpg']],
  ['紗線外觀檢測器','Yarn Examining Machine','利用紗線均勻的繞於黑板或白板上，檢測紗線棉節粗細或外觀。機台可調整繞紗密度。',['ASTM D D2255'],['images/yp/SGY-3.jpg']],
  ['閃光測速器','Movistrob','LED顯示，攜帶型設計。測試範圍大，精確度高。',[],['images/yp/SGY-5.gif']],
  ['紗線摩擦係數測試儀','Frictiometer','測試紗線對各式羅拉所產生之摩擦係數，藉以評定紗線於生產或後製過程之平滑性，提高生產或加工速度。',[],['images/yp/SGY-4.gif']],
];
/*纖維檢驗*/const fp=[
  ['手提式電子水份測試器','Moisture Meter','配合不同測試頭可測得各種紡織品及原料的含水率，立即顯示測試結果，精確易操作。',[],['images/fp/SGF-1.jpg']],
  ['回潮率水份天平','Moisture Analyzers','利用400w鹵素燈直接照射，最高溫達200°C，最大秤量71g，最高精度0.0001g。',[],['images/fp/SGF-2.gif']],
  ['靜電測試箱','Electroneter','操作精確，配合環境試驗箱，可測得低溫、低濕環境中織物的帶電性',['AATCC 76'],['images/fp/SGF-3-2.jpg','images/fp/SGF-3-1.jpg']],
  ['環境試驗箱','Environment Chamber','PID控制，利用CO2可精確的設定溫度及濕度，達到低溫低濕的測試環境。',[],['images/fp/SGF-4.gif']],
];
/*其他*/const op=[
  ['熱風循環式精密烘箱','Precision Drying Oven','桌上型熱風循環式設計，PID溫控器控溫精準，過載保護裝置安全性高，附玻璃視窗可輕易觀察樣品變化。(標準內箱尺寸: 45×40×40 cm)',[],['images/op/SGO-1.jpg']],
  ['恆溫恆濕試驗機','Constant Temp & Hum Chamber','微電腦控制，各種特殊規格接受訂製，配合透濕試驗裝置可符合ASTM、JIS等透濕試驗規範',[],['images/op/SGO-2.gif']],
  ['壓吸試驗機','Padder','氣壓式設計，壓力分佈均勻，速度及壓力可依需求調整。',[],['images/op/SGO-3.gif']],
  ['電動塗佈試驗機','Auto Printing Machine','採用電動式刮漿，刮刀角度及刮刀厚度可以調整，可得到均勻且平整的塗層效果。',[],['images/op/SGO-4.gif']],
  ['自記式溫濕度記錄器','HYGROTHERMOGRAPH','毛髮式設計，感應度高，可選擇紀錄1日及1周。',[],['images/op/SGO-5.gif']],
  ['VERIVIDE 45度觀察斜板','Fix Angel Table','備有GREY 5574及N7兩種表面漆可供選擇。',[],['images/op/SGO-22.jpg']],
  ['耐汗染色堅牢度試驗機','Perspirometer','測試織物的耐汗、耐氯、耐海水染色堅牢度，本機台可同時提供ISO/AATCC等規範要求。',['ISO 105','AATCC 15','AATCC 106','AATCC 107','AATCC 165'],['images/op/SGO-7.GIF']],
  ['水平震盪試驗機','Dyeing Shaking Tester','往復式運轉供6、12、24杯位機台選擇，另有各種夾具盤可互換。',[],['images/op/SGO-8.gif']],
  ['實驗室型酸鹼測定計','PH Meter','pH：-2.00 ~ +16.00pH  ±0.01pH，mV：-1999 ~ +1999mV ±0.05%，Temp.：-10 ~ 100℃ ±0.2℃',[],['images/op/SGO-9.gif']],
  ['手提式酸鹼度測定計','Portable PH Meter','pH：±0.00 ~ 14.00pH，mV：-1999 ~ +1999mV',[],['images/op/SGO-10.gif']],
  ['紡織專用硬度計','Hadness Tester','筒子紗、管紗等硬度測試用。(壓力測試:約12.5N)',[],['images/op/SGO-11.jpg']],
  ['厚度計','Thickness Tester','量測範圍：10mm±、精度：15µm、測定深度：26mm',[],['images/op/SGO-12.gif']],
  ['數字型風溫風速測定計','Digital Thermometer','風速範圍: 0.4~30.0公尺/秒，風溫範圍: 0~50°C，可記錄16000筆資料。',[],['images/op/SGO-13.gif']],
  ['織物密度計','Densimeter','檢查織物經緯紗每吋的密度。A型：100-170 dpi、B型：40-110 dpi、C型：20-90 dpi、LH型：20-100 dpi、E型：50-120 dpi、G型：170-240dpi',[],['images/op/SGO-16.jpg']],
  ['精密電子天平','Electronic Top Balance','紡織專用高精密度分析天平，多種規格可供選擇。',[],['images/op/SGO-18.gif']],
  ['顯微鏡','Microscope','依據需求可搭配多種不同放大倍率，外接CCD可與電腦連線作業。',[],['images/op/SGO-19.gif']],
  ['裁布機','Pinking Machine','手動式，利用槓桿原理輕鬆裁切布樣，有鋸齒刀及直刀可供選擇。',[],['images/op/SGO-20.gif']],
  ['透濕試驗杯','Vapour Permeability Accessories','各式透濕試驗設備訂製，可符合ASTM、JIS、Adidas等檢驗規範。',[],['images/op/SGO-21-1.JPG',['images/op/SGO-21-2.JPG']]],
];
  
//消耗性材料
/*AATCC*/const aatcc=[
  ['美規六種纖維水洗附布','AATCC MULTIFIBER FABRIC #10',[`布寬: 34" (每種纖維寬1cm)`],[['SPUN ACETATE','聚酯纖維'],['BLEACH COTTON','棉'],['SPUN NYLON','尼龍'],['SPUN POLYESTER','聚酯'],['ACRYLIC','亞克力'],['WORSTED WOOL','羊毛']],['images/th/DSC00309.jpg']],
  ['美規六種纖維水洗附布(NIKE專用)','AATCC MULTIFIBER FABRIC #10A',['布寬: 34"(每種纖維寬1.5cm)'],[['SPUN ACETATE','醋酸纖維'],['BLEACH COTTON','棉'],['SPUN NYLON','尼龍'],['SPUN POLYESTER','聚酯'],['ACRYLIC','亞克力'],['WORSTED WOOL','羊毛']],['images/th/DSC00356.jpg']],
  ['美規摩擦附布','AATCC CROCK CLOTH',['1000 片/盒','45"幅寬，5 m/pack'],[],['images/th/DSC00355.jpg']],
  ['美國陪洗布','AATCC DUMMY III',['16 pcs/包'],[],['images/th/DSC00313.jpg']],
  ['WOB清潔劑','AATCC WOB DETERGENT',['2 lb/包','24 lb/桶'],[],['images/th/DSC00344.jpg']],
  ['AATCC 灰色標','AATCC GRAY SCALE',['染污，變褪色'],[],['images/th/P1050027.JPG']],
  ['撥水度試驗機噴頭','Nozzle for Spray Test Apparatus','',[],['images/th/Nozzle for Spray.jpg']],
];
/*ISO */const iso=[
  ['歐規六種纖維水洗附布','ISO MULTIFIBER FABRIC DW',['布寬: 10cm(每種纖維寬1.5cm)'],[['SPUN ACETATE','醋酸纖維'],['BLEACH COTTON','棉'],['SPUN NYLON 6.6','尼龍6.6'],['SPUN POLYESTER','聚酯'],['ACRYLIC','亞克力'],['WORSRED','羊毛']],['images/th/DSC00325.jpg']],
  ['歐規摩擦附布','SDC COTTON LAWN',['500 片/盒'],[],['images/th/DSC00353.jpg']],
  ['ISO藍色標準附布','SDC BLUE WOOL',['1~8級'],[],['images/th/DSC00338.jpg']],
  ['ECE(B) 含磷清潔劑','SDC ECE PHOSPHATE REFERENCE DETERGENT (B)',['15 kg/box','2 kg/pack'],[],['images/th/DSC00349.jpg']],
  ['IEC(A) 不含磷清潔劑','SDC IEC NON PHOSPHATE REFERENCE DETERGENT (A)',['15 kg/box','2 kg/pack'],[],['images/th/DSC00351.jpg']],
  ['MARTINDALE 耗材','SDC MARTINDALE CONSUMABLES',['SDC Wool Abradent Fabric 5m/pack','SDC Woven Felt Pads (90mm) 24pcs/pack','SDC Woven Felt Pads (140mm) 24pcs/pack','SDC Non Woven Felt Pads (90mm) 24pcs/pack','SDC Non Woven Felt Pads (140mm) 24pcs/pack','SDC Polyetherurethane Foam Sheets 25×20cm'],[],['images/th/DSC00330.jpg']],
];
/*黃化試驗 */const y=[
  ['SDC黃化試驗組','SDC Yellowing Test',[],[],['images/th/yt.jpg']],
  ['SDC黃化試驗紙','SDC Yellowing Test Papers',['100 × 75mm , 50pcs / pack'],[],['images/th/ytp.jpg']],
  ['SDC黃化試驗布','SDC Yellowing Control Fabrics',['100 × 30mm , 25pcs / pack'],[],['images/th/ytf.jpg']],
  ['SDC黃化試驗膠膜','SDC BHT-free 63 micron Film',['400 × 200mm , 100pcs / box'],[],['images/th/yth.jpg']],
  ['SDC黃化試驗玻璃片','Glass Plates for Yellowing Test',['100 × 40 × 3mm , 10pcs / pack'],[],['images/th/ytg.jpg']],
  ['JAMES 黃化試驗組','JAMES YELLOWING TEST',[],[],['images/th/James-yt.jpg']],
];
/*其他耗材 */const oc=[
  ['紡織專用漆筆','TEXTILE MARKER',['DALO YELLOW COLOR','DALO BLACK COLOR','TEXPEN YELLOW COLOR','TEXPEN BLACK COLOR'],[],['images/th/other/DSC00025.JPG','images/th/other/DSC00027.JPG','images/th/other/DSC00318.jpg','images/th/other/DSC00320.jpg']],
  ['VERIVIDE 對色燈專用漆','VERIVIDE MATT EMULSION PAINT (N7 & 5574)',['N7，0.5L/can','5574，0.5L/can'],[],['images/th/other/DSC00321.jpg']],
  ['VERIVIDE 對色燈專用燈管','VERIVIDE LAMP (D65,TL84,CWF,UV,F)',['D65：600mm/18w、1200mm/36w','TL84：600mm/18w、1200mm/36w','CWF：600mm/20w、1200mm/40w','UVB：600mm/20w','U3000：600mm/20w'],[],['images/th/other/DSC00006.JPG']],
  ['ICI 起毬(抗抓鈎)試驗機專用耗材','ICI PILLING SPARE PARTS',['CORK LINERS FOR PILLING BOXES ( Pack of 6)','ICI PILLING TUBE (Pack of 4)','ICI SNAGGING POINT (pack of 6)'],[],['images/th/other/DSC00019.JPG','images/th/other/DSC00020.JPG','images/th/other/DSC00334.jpg','images/th/other/DSC00339.jpg','images/th/other/point.jpg']],
  ['ASTM D3512快速起毬試驗機專用耗材','RANDOM TUMBLE PILLING SPARE PARTS',['CORK LINER 50pcs/pack','Elmer’s Glue 白膠','COTTON SLIVER 1yard/pack'],[],['images/th/other/DSC00336.jpg']],
  ['ASTM D3939 抗抓鈎試驗機專用耗材','ICI MACE SNAG SPARE PARTS',['FELT SLEEVES TYPE : M078B'],[],['images/th/other/DSC00332.jpg']],
  ['MULLEN 爆破試驗機專用耗材','MULLEN BUSTING SPARE PARTS',['TEST FOIL Range B  21~30 P.S.I','TEST FOIL Range C 31~50 P.S.I','TEST FOIL Range D 51~65 P.S.I','TEST FOIL Range E 51~80 P.S.I','TEST FOIL Range F 81~110 P.S.I','TEST FOIL Range G 111~150 P.S.I','520 RUBBER DIAPHRAGM'],[],['images/th/other/DSC00343.jpg']],
  ['JIS 各式測試布','JIS TEST FABRIC',['JIS TESTER FABRIC-COTTON','JIS TESTER FABRIC-POLYESTER'],[],['images/th/other/DSC00340.jpg']],
];

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////DONT EDIT THE THINGS BELOW///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


const plist=[tp,yp,fp,op,aatcc,iso,y,oc];
let lastpage=0;
///////////////////////APP START////////////////////////////////////////////
function App() {
///////////////////////SET VARAIBLES////////////////////////////////////////
  const [page,setpage]=useState(0);
  const [item,setitem]=useState({category:0,index:0});

  const [showlist,setshowlist]=useState(["none","none","none","none","none","none","none","none"]);
  let user="",email="",phone="",subject="",body="";
  const [sentdata,setsentdata]=useState({user,email,phone,subject,body});

  let htmls=(<div></div>);
  let subhtml1,subhtml2;

  const tpli = Array.from({ length: plist[0].length }, (_, index) => index);
  const ypli = Array.from({ length: plist[1].length }, (_, index) => index);
  const fpli = Array.from({ length: plist[2].length }, (_, index) => index);
  const opli = Array.from({ length: plist[3].length }, (_, index) => index);
  const aatccli = Array.from({ length: plist[4].length }, (_, index) => index);
  const isoli = Array.from({ length: plist[5].length }, (_, index) => index);
  const yli = Array.from({ length: plist[6].length }, (_, index) => index);
  const ocli = Array.from({ length: plist[7].length }, (_, index) => index);

//////////////////////////////subhtml////////////////////////////////////
  if(page==1){
    if(lastpage==1){
      subhtml1=(
        <div id="all">
              <div id="page" class="container">
                <div id="content">
                  <div class="title">
                    <h2 id="productname">{plist[item.category][item.index][0]}</h2>
                    <span class="byline">{plist[item.category][item.index][1]}</span>
                  </div>
                  <p>{plist[item.category][item.index][2]}</p>
                  
                  {plist[item.category][item.index][3].length!=0&&(
                  <div style={{float:"left", display:"inline",fontSize:12}}>
                    <p>適用標準 :</p>
                    <p>{getstdlist(item)}</p>
                  </div>
                  )}
                  <div style={{float:"right", display:"inline"}}>
                    {getpic(item)}
                  </div>
                  
                </div>
  
                <div id="sidebar">
                  <div class="box2">
  
                    <div class="title" onClick={()=>{setshowlist([showlist[0]=="none"?"":"none","none","none","none","none","none","none","none"]);}}>
                      <h2>織物檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[0]}} >
                      {tpli.map(i=>(
                      <li style={{background:(item.category==0 && item.index==i)&&"#525353"}} onClick={()=>{
                        window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);
                        setitem({category:0,index:i});
                      }}><a style={{color:(item.category==0 && item.index==i)&&"#FFFFFF"}}>{plist[0][i][0]}</a></li>))}
                    </ul>
  
                    <div class="title" onClick={()=>{setshowlist(["none",showlist[1]=="none"?"":"none","none","none","none","none","none","none"]);}}>
                      <h2>紗線檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[1] }} >
                      {ypli.map(i=>(<li style={{background:(item.category==1 && item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:1,index:i});}}><a style={{color:(item.category==1 && item.index==i)&&"#FFFFFF"}}>{plist[1][i][0]}</a></li>))}
                    </ul>
                    
                    <div class="title" onClick={()=>{setshowlist(["none","none",showlist[2]=="none"?"":"none","none","none","none","none","none"]);}}>
                      <h2>纖維檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[2] }} >
                      {fpli.map(i=>(<li style={{background:(item.category==2 && item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:2,index:i});}}><a style={{color:(item.category==2 && item.index==i)&&"#FFFFFF"}}>{plist[2][i][0]}</a></li>))}
                    </ul>
  
                    <div class="title" onClick={()=>{setshowlist(["none","none","none",showlist[3]=="none"?"":"none","none","none","none","none"]);}}>
                      <h2>其他檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[3] }} >
                      {opli.map(i=>(<li style={{background:(item.category== 3&& item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:3,index:i});}}><a style={{color:(item.category==3 && item.index==i)&&"#FFFFFF"}}>{plist[3][i][0]}</a></li>))}
                    </ul>
  
                  </div>
                </div>
  
              </div>
          </div>
      );
    }else{
      subhtml1=(
        <div id="all">
              <div id="page" class="container">
  
              <div id="content">
                  <div class="title">
                    <h2 id="productname">{plist[item.category][item.index][0]}</h2>
                    <span class="byline">{plist[item.category][item.index][1]}</span>
                  </div>
                  <p>{plist[item.category][item.index][2]}</p>
                  
                  {plist[item.category][item.index][3].length!=0&&(
                  <div style={{float:"left", display:"inline",fontSize:12}}>
                    <p>適用標準 :</p>
                    <p>{getstdlist(item)}</p>
                  </div>
                  )}
                  <div style={{float:"right", display:"inline"}}>
                     <img id="logos" src="images/logos.png"></img>
                  </div>
                  
                </div>
  
                <div id="sidebar">
                  <div class="box2">
  
                    <div class="title" onClick={()=>{setshowlist([showlist[0]=="none"?"":"none","none","none","none","none","none","none","none"]);}}>
                      <h2>織物檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[0]}} >
                      {tpli.map(i=>(
                      <li onClick={()=>{
                        window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);
                        setitem({category:0,index:i});
                        lastpage=1;
                      }}><a>{plist[0][i][0]}</a></li>))}
                    </ul>
  
                    <div class="title" onClick={()=>{setshowlist(["none",showlist[1]=="none"?"":"none","none","none","none","none","none","none"]);}}>
                      <h2>紗線檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[1] }} >
                      {ypli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=1;setitem({category:1,index:i});}}><a>{plist[1][i][0]}</a></li>))}
                    </ul>
  
                    <div class="title" onClick={()=>{setshowlist(["none","none",showlist[2]=="none"?"":"none","none","none","none","none","none"]);}}>
                      <h2>纖維檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[2] }} >
                      {fpli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=1;setitem({category:2,index:i});}}><a>{plist[2][i][0]}</a></li>))}
                    </ul>
  
                    <div class="title" onClick={()=>{setshowlist(["none","none","none",showlist[3]=="none"?"":"none","none","none","none","none"]);}}>
                      <h2>其他檢驗</h2>
                    </div>
                    <ul class="style2" style={{display: showlist[3] }} >
                      {opli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=1;setitem({category:3,index:i});}}><a>{plist[3][i][0]}</a></li>))}
                    </ul>
  
                  </div>
                </div>
  
              </div>
          </div>
      );
    }
  }else if(page==2){
    if(lastpage==2){
      subhtml2=(
        <div id="all">
        <div id="page" class="container">
      
          <div id="content">
            <div class="title">
              <h2 id='productname'>{plist[item.category][item.index][0]}</h2>
              <span class="byline">{plist[item.category][item.index][1]}</span>
            </div>

            {plist[item.category][item.index][2]!=''&&(
              <div style={{float:"left",fontSize:12}}>
                <p>規格 :</p>
                <p>{getformatlist(item)}</p>
              </div>
            )}

            {plist[item.category][item.index][3].length!=0&&(
            <div style={{float:"left", display:"inline",fontSize:12}}>
              <p style={{marginLeft:"5em"}}>內容成分 :</p>
              <p>{getcontentlist(item)}</p>
            </div>
            )}

            <div style={{float:"right", display:"inline"}}>
              {getpic(item)}
            </div>
            
          </div>
      
          <div id="sidebar">
            <div class="box2">
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none",showlist[4]=="none"?"":"none","none","none","none"]);}}>
                <h2>AATCC</h2>
              </div>
              <ul class="style2" style={{display: showlist[4] }} >
                {aatccli.map(i=>(<li style={{background:(item.category==4 && item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:4,index:i});}}><a style={{color:(item.category==4 && item.index==i)&&"#FFFFFF"}}>{plist[4][i][0]}</a></li>))}
              </ul>
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none","none",showlist[5]=="none"?"":"none","none","none"]);}}>
                <h2>ISO</h2>
              </div>
              <ul class="style2" style={{display: showlist[5] }} >
                {isoli.map(i=>(<li style={{background:(item.category==5 && item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:5,index:i});}}><a style={{color:(item.category==5 && item.index==i)&&"#FFFFFF"}}>{plist[5][i][0]}</a></li>))}
              </ul>
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none","none","none",showlist[6]=="none"?"":"none","none"]);}}>
                <h2>黃化試驗</h2>
              </div>
              <ul class="style2" style={{display: showlist[6] }} >
                {yli.map(i=>(<li style={{background:(item.category==6 && item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:6,index:i});}}><a style={{color:(item.category==6 && item.index==i)&&"#FFFFFF"}}>{plist[6][i][0]}</a></li>))}
              </ul>
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none","none","none","none",showlist[7]=="none"?"":"none"]);}}>
                <h2>其他耗材</h2>
              </div>
              <ul class="style2" style={{display: showlist[7] }} >
                {ocli.map(i=>(<li style={{background:(item.category==7 && item.index==i)&&"#525353"}} onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);setitem({category:7,index:i});}}><a style={{color:(item.category==7 && item.index==i)&&"#FFFFFF"}}>{plist[7][i][0]}</a></li>))}
              </ul>
      
            </div>
          </div>
      
        </div>
      </div>
      );
    }else{
      subhtml2=(
        <div id="all">
        <div id="page" class="container">
      
          <div id="content">
            <div class="title">
              <h2 id='productname'>{plist[0][0][0]}</h2>
              <span class="byline">{plist[0][0][1]}</span>
            </div>

            {plist[0][0][2]!=''&&(
              <div style={{float:"left",fontSize:12}}>
                <p>規格 :</p>
                <p>{getformatlist({category:0,index:0})}</p>
              </div>
            )}

            {plist[0][0][0].length!=0&&(
            <div style={{float:"left", display:"inline",fontSize:12}}>
              <p style={{marginLeft:"5em"}}>內容成分 :</p>
              <p>{getcontentlist({category:0,index:0})}</p>
            </div>
            )}

              <div style={{float:"right", display:"inline"}}>
                     <img id="logos" src="images/logos.png"></img>
              </div>
            
          </div>
      
          <div id="sidebar">
            <div class="box2">
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none",showlist[4]=="none"?"":"none","none","none","none"]);}}>
                <h2>AATCC</h2>
              </div>
              <ul class="style2" style={{display: showlist[4] }} >
                {aatccli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=2;setitem({category:4,index:i});}}><a>{plist[4][i][0]}</a></li>))}
              </ul>
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none","none",showlist[5]=="none"?"":"none","none","none"]);}}>
                <h2>ISO</h2>
              </div>
              <ul class="style2" style={{display: showlist[5] }} >
                {isoli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=2;setitem({category:5,index:i});}}><a>{plist[5][i][0]}</a></li>))}
              </ul>
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none","none","none",showlist[6]=="none"?"":"none","none"]);}}>
                <h2>黃化試驗</h2>
              </div>
              <ul class="style2" style={{display: showlist[6] }} >
                {yli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=2;setitem({category:6,index:i});}}><a>{plist[6][i][0]}</a></li>))}
              </ul>
      
              <div class="title" onClick={()=>{setshowlist(["none","none","none","none","none","none","none",showlist[7]=="none"?"":"none"]);}}>
                <h2>其他耗材</h2>
              </div>
              <ul class="style2" style={{display: showlist[7] }} >
                {ocli.map(i=>(<li onClick={()=>{window.scrollTo(0,document.getElementById('header').offsetHeight+document.getElementById('productname').offsetTop);lastpage=2;setitem({category:7,index:i});}}><a>{plist[7][i][0]}</a></li>))}
              </ul>
      
            </div>
          </div>
      
        </div>
      </div>
      );
    }
  }
///////////////////////////////htmls/////////////////////////////////////
  if(page==0){
    window.scrollTo(0,0);
    htmls=(
      <body class="homepage">
        <div id="header">
          <div id="nav-wrapper"> 
            <marquee style={{fontsize: 20,color:"FFFFFF"}}>{marquee}</marquee>
              <div class="link-top"></div>
            
              <ul class="drop-down-menu">
                <li><a onClick={()=>{setpage(0);}}>introdution</a></li>
                
                <li><a>products</a>
                  <ul>
                    <li><a onClick={()=>{setpage(1);}}>檢測儀器設備</a>
                    </li>
                    <li><a onClick={()=>{setpage(2);}}>消耗性材料</a>
                    </li>
                  </ul>
                </li>
                
                <li><a onClick={()=>{setpage(3);}}>service</a></li>
                <li><a onClick={()=>{setpage(4);}}>contact</a></li>
              </ul>
            
          </div>
          <div class="container"> 
            <div id="logo">
              <h1><a style={{fontSize:72, color:"682D89"}}>Introduction</a></h1>
            </div>
          </div>
        </div>
    
        <div id="featured">
          <div class="container">
            <header>
              <h2>歡迎來到思聚國際企業有限公司</h2>
            </header>
            <p>思聚公司擁有超過三十年紡織檢驗實務經驗，以專業、服務、迅速、合理等精神立足於紡織業界，並為客戶提供纖維、紗線、織物、成衣、染整等紡織檢驗儀器、設備、耗材全系列產品，另提供紡織實驗室規劃、施工之服務；同時成立專業技術服務處，用細心認真的態度為客戶及各種儀器設備實施定期校正、保養、維修等服務。</p>
            <hr />
    </div>
        </div>

        <div id="tweet">
          <div class="container">
            <section>
              <blockquote style={{fontsize: 22}}>&ldquo;儀器的完善是我們努力的目標，客戶的肯定是我們進步的動力，與您一同成長。&rdquo;</blockquote>
            </section>
          </div>
        </div>
    
        <div id="footer">
          <div class="container">
            <section>
              <header>
                <h2>Get in touch</h2>
                <span class="byline">思聚國際企業有限公司</span><p>新北市永和區中和路423號3樓 </p><p>電話：(02)2231-0266</p><p>傳真：(02)2231-0098</p><span class="byline">SAGE Global Co.,Ltd.</span><p> 3F., No.423, Zhonghe Rd., Yonghe Dist., New Taipei City 234, Taiwan(R.O.C.)</p><p>Tel:886-2-2231-0266</p><p>Fax:886-2-2231-0098</p>
              </header>
            </section>
          </div>
        </div>
      </body>
    );
  }else if(page==1){
    htmls=(
      <body>
        <div id="header">
          <div id="nav-wrapper"> 
            <marquee style={{fontsize: 20,color:"FFFFFF"}}>{marquee}</marquee>
            <div class="link-top"></div>
            <ul class="drop-down-menu" style={{marginleft: 350}}>
                <li><a onClick={()=>{setpage(0);}}>introdution</a></li>
                
                <li><a>products</a>
                  <ul>
                    <li><a onClick={()=>{setpage(1);}}>檢測儀器設備</a>
                    </li>
                    <li><a onClick={()=>{setpage(2);}}>消耗性材料</a>
                    </li>
                  </ul>
                </li>
                
                <li><a onClick={()=>{setpage(3);}}>service</a></li>
                <li><a onClick={()=>{setpage(4);}}>contact</a></li>
              </ul>
          </div>
          <div class="container"> 
            <div id="logo">
              <h1><a style={{fontSize:72, color:"#308F8A"}}>Products</a></h1>
            </div>
          </div>
        </div>
        
        <div id="featured-wrapper">
          <div id="featured" class="extra2 margin-btm container">
            {subhtml1}
          </div>
        </div>
  
        <div id="tweet">
          <div class="container">
            <section>
              <blockquote style={{fontsize: 22}}>&ldquo;儀器的完善是我們努力的目標，客戶的肯定是我們進步的動力，與您一同成長。&rdquo;</blockquote>
            </section>
          </div>
        </div>
        
        <div id="footer">
          <div class="container">
            <section>
              <header>
                <h2>Get in touch</h2>
                <span class="byline">思聚國際企業有限公司</span><p>新北市永和區中和路423號3樓 </p><p>電話：(02)2231-0266</p><p>傳真：(02)2231-0098</p><span class="byline">SAGE Global Co.,Ltd.</span><p> 3F., No.423, Zhonghe Rd., Yonghe Dist., New Taipei City 234, Taiwan(R.O.C.)</p><p>Tel:886-2-2231-0266</p><p>Fax:886-2-2231-0098</p>
              </header>
                
            </section>
          </div>
        </div>
      </body>
    );
    
  }else if(page==2){
    htmls=(
      <body>
        <div id="header">
          <div id="nav-wrapper"> 
            <marquee style={{fontsize: 20,color:"FFFFFF"}}>{marquee}</marquee>
            <div class="link-top"></div>
            <ul class="drop-down-menu" style={{marginleft: 350}}>
                <li><a onClick={()=>{setpage(0);}}>introdution</a></li>
                
                <li><a>products</a>
                  <ul>
                    <li><a onClick={()=>{setpage(1);}}>檢測儀器設備</a>
                    </li>
                    <li><a onClick={()=>{setpage(2);}}>消耗性材料</a>
                    </li>
                  </ul>
                </li>
                
                <li><a onClick={()=>{setpage(3);}}>service</a></li>
                <li><a onClick={()=>{setpage(4);}}>contact</a></li>
              </ul>
          </div>
          <div class="container"> 
            <div id="logo">
              <h1><a style={{fontSize:72, color:"#308F8A"}}>Products</a></h1>
            </div>
          </div>
        </div>
        
        <div id="featured-wrapper">
          <div id="featured" class="extra2 margin-btm container">
              {subhtml2}
          </div>
        </div>
  
        <div id="tweet">
          <div class="container">
            <section>
              <blockquote style={{fontsize: 22}}>&ldquo;儀器的完善是我們努力的目標，客戶的肯定是我們進步的動力，與您一同成長。&rdquo;</blockquote>
            </section>
          </div>
        </div>
        
        <div id="footer">
          <div class="container">
            <section>
              <header>
                <h2>Get in touch</h2>
                <span class="byline">思聚國際企業有限公司</span><p>新北市永和區中和路423號3樓 </p><p>電話：(02)2231-0266</p><p>傳真：(02)2231-0098</p><span class="byline">SAGE Global Co.,Ltd.</span><p> 3F., No.423, Zhonghe Rd., Yonghe Dist., New Taipei City 234, Taiwan(R.O.C.)</p><p>Tel:886-2-2231-0266</p><p>Fax:886-2-2231-0098</p>
              </header>
                
            </section>
          </div>
        </div>
      </body>
    );
    
  }else if(page==3){
    htmls=(
    <body>
      <div id="header">
        <div id="nav-wrapper"> 
      <marquee style={{fontsize: 20,color:"FFFFFF"}}>{marquee}</marquee>
            <div class="link-top"></div>
          
            <ul class="drop-down-menu" style={{marginleft: 350}}>
                <li><a onClick={()=>{setpage(0);}}>introdution</a></li>
                
                <li><a>products</a>
                  <ul>
                    <li><a onClick={()=>{setpage(1);}}>檢測儀器設備</a>
                    </li>
                    <li><a onClick={()=>{setpage(2);}}>消耗性材料</a>
                    </li>
                  </ul>
                </li>
                
                <li><a onClick={()=>{setpage(3);}}>service</a></li>
                <li><a onClick={()=>{setpage(4);}}>contact</a></li>
              </ul>
        </div>
        <div class="container"> 
          <div id="logo">
            <h1><a style={{fontSize:72, color: "96B700"}}>Service</a></h1>
          </div>
        </div>
      </div>
      
      <div id="main">
        <div class="container">
          <div class="row">
            <div id="content" class="8u skel-cell-important">
              <section>
                <header>
                  <h2 style={{marginleft: 10}}>技術服務</h2>
                  <span class="byline" style={{marginleft: 10}}>安心全面的服務</span></header>
                <p style={{marginleft: 10}}>思聚公司技術服務處擁有超過三十年儀器維護經驗，並通過歐、美、日多家原廠認證，採用原廠零件以細心認真的態度為客戶及各種儀器設備實施定期校正、保養、維修等服務。 並於2013年9月成立教育訓練檢測服務中心，提供多種機台現場實作及實測；每一台經由思聚公司銷售之儀器設備，皆包含有安裝、教育訓練及乙年的保固，我們的用心讓客戶放心。</p>
    </section>
            </div>
            <div id="sidebar" class="4u">
              <img src="images/sagelogo.jpg" height="300" alt=""/> </div>
            
          </div>
        </div>
      </div>

      <div id="tweet">
        <div class="container">
          <section>
            <blockquote>我們的用心讓客戶放心。</blockquote>
          </section>
        </div>
      </div>

      <div id="footer">
        <div class="container">
          <section>
            <header>
              <h2>Get in touch</h2>
              <span class="byline">思聚國際企業有限公司</span><p>新北市永和區中和路423號3樓 </p><p>電話：(02)2231-0266</p><p>傳真：(02)2231-0098</p><span class="byline">SAGE Global Co.,Ltd.</span><p> 3F., No.423, Zhonghe Rd., Yonghe Dist., New Taipei City 234, Taiwan(R.O.C.)</p><p>Tel:886-2-2231-0266</p><p>Fax:886-2-2231-0098</p>
              </header>
            
          </section>
        </div>
      </div>
    </body>
    );
  }else if(page==4){
    htmls=(
    <body>
		<div id="header">
			<div id="nav-wrapper"> 
		<marquee style={{fontsize: 20,color: "FFFFFF"}}>{marquee}</marquee>
					<div class="link-top"></div>
				
					<ul class="drop-down-menu" style={{marginleft: 350}}>
                <li><a onClick={()=>{setpage(0);}}>introdution</a></li>
                
                <li><a>products</a>
                  <ul>
                    <li><a onClick={()=>{setpage(1);}}>檢測儀器設備</a>
                    </li>
                    <li><a onClick={()=>{setpage(2);}}>消耗性材料</a>
                    </li>
                  </ul>
                </li>
                
                <li><a onClick={()=>{setpage(3);}}>service</a></li>
                <li><a onClick={()=>{setpage(4); }}>contact</a></li>
              </ul>
				
			</div>
			<div class="container"> 
				<div id="logo">
					<h1><a  style={{fontSize:72, color: "FB5874"}}>Contact us</a></h1>
				</div>
			</div>
		</div>
    
		<div id="main">
			<div  class="container">
				<section id="mycontent">
					<header>
						<h2>思聚國際企業有限公司</h2>
						<span class="byline">如有任何紡織儀器相關問題，歡迎與我們聯絡。</span>
					</header>
					<p>地址：新北市永和區中和路423號3樓</p>
					<p>電話：886-2-2231-0266 (業務處分機10、技服處分機11)</p>
					<p>傳真：886-2-2231-0098</p>							
					<p>E-mail：sage.global@msa.hinet.net</p>
				</section>
			</div>
		</div>
    
		<div id="mytweet">
			<div class="w3ls-main">
    <div class="w3ls-form">
    <div><myh>回饋我們</myh></div>
    <form action="#" method="post">
    <ul class="fields" >
      <table border="1" >
      <tr>
        <td><label class="w3ls-opt">Your name:</label></td>
        <td><input type="text" id="username" value={sentdata.user} onChange={(e)=>{setsentdata({user:e.target.value,email:sentdata.email,phone:sentdata.phone,subject:sentdata.subject,body:sentdata.body});}} placeholder="name" required=""/></td>
      </tr>
      <tr>
    <td><label class="w3ls-opt">Phone number:</label></td>
        <td><input type="text" id="phonenumber" placeholder="phone number" required="" value={sentdata.phone} onChange={(e)=>{setsentdata({user:sentdata.user,email:sentdata.email,phone:e.target.value,subject:sentdata.subject,body:sentdata.body});}}/></td>
      </tr>
      <tr>
        <td><label class="w3ls-opt">E-mail:</label></td>
        <td><input type="emailText" id="email" placeholder="enter your e-mail" required="" value={sentdata.email} onChange={(e)=>{setsentdata({user:sentdata.user,email:e.target.value,phone:sentdata.phone,subject:sentdata.subject,body:sentdata.body});}}/></td>
      </tr>
      <tr>
        <td><label class="w3ls-opt">Subject:</label></td>
        <td><input type="text" id="subText" placeholder="subject" required="" value={sentdata.subject} onChange={(e)=>{setsentdata({user:sentdata.user,email:sentdata.email,phone:sentdata.phone,subject:e.target.value,body:sentdata.body});}}/></td>
      </tr>
      <tr>
        <td><label class="w3ls-opt1">Suggestions or questions<span> ?</span></label></td>
        <td></td>
      </tr>
      
      </table>
      <span class="w3ls-input"><textarea id="body" style={{width:800,height:150}} placeholder="write down your suggestion" value={sentdata.body} onChange={(e)=>{setsentdata({user:sentdata.user,email:sentdata.email,phone:sentdata.phone,subject:sentdata.subject,body:e.target.value});}}></textarea></span>
    </ul>
    <div class="clear"></div>
      <div class="w3ls-btn" style={{marginleft: 100}}>
        <div id="submit">
          <a href={getherf(sentdata)}style={{ marginLeft:150,height:30,width:60}}><img style={{height:30,width:80,marginBottom:100}} src="images/submit.svg"></img></a>
        </div>
        
      </div>
    </form>
      
    </div>
    </div>
        </div>

        <div id="footer">
          <div class="container">
            <section>
              <header>
                <h2>Get in touch</h2>
                <span class="byline">思聚國際企業有限公司</span><p>新北市永和區中和路423號3樓 </p><p>電話：(02)2231-0266</p><p>傳真：(02)2231-0098</p><span class="byline">SAGE Global Co.,Ltd.</span><p> 3F., No.423, Zhonghe Rd., Yonghe Dist., New Taipei City 234, Taiwan(R.O.C.)</p><p>Tel:886-2-2231-0266</p><p>Fax:886-2-2231-0098</p>
              </header>
              
            </section>
          </div>
        </div>
    </body>
    );
  }
//////////////////////////////return/////////////////////////////////////
  return (
    htmls
  );
}
//////////////////////////////functions//////////////////////////////////
let getstdlist=(getdata)=>{
  const temp = Array.from({ length: plist[getdata.category][getdata.index][3].length }, (_, index) => index);
  return(
    temp.map(i=>(<p style={{marginLeft:20, lineHeight:0.5}}>{plist[getdata.category][getdata.index][3][i]}</p>))
  );
}
let getcontentlist=(getdata)=>{
  const temp = Array.from({ length: plist[getdata.category][getdata.index][3].length }, (_, index) => index);
  return(
    <table border='1' id="contentlist">
      {temp.map(i=>(<tr style={{lineHeight:1.5}}><td>{(i+1)+'.'}</td><td>{plist[getdata.category][getdata.index][3][i][0]}</td><td>{plist[getdata.category][getdata.index][3][i][1]}</td></tr>))}
    </table>
  );
}
let getpic=(getdata)=>{
  const temp = Array.from({ length: plist[getdata.category][getdata.index][4].length }, (_, index) => index);
  return(
    temp.map(i=>(<img style={{width:300}} src={ plist[getdata.category][getdata.index][4][i] }></img>))
  );
}
let getherf=(getdata)=>{
    var to = "sage.global@msa.hinet.net";
    var name = getdata.user;
    var email = getdata.email;
    var tel = getdata.phone;
    var subject = getdata.subject;
    var mybody=(getdata.body).replace(/\n/g,'%0A');
  
    var body = ""+mybody+'%0A%0A%0A';
        body += "From："+name+'%0A';
        body += "Email："+email+'%0A';
        body += "Tel："+tel;
  
    return("mailto:"+to+"?subject="+subject+"&body="+body);
}
let getformatlist=(getdata)=>{
  const temp = Array.from({ length: plist[getdata.category][getdata.index][2].length }, (_, index) => index);
  return(
      temp.map(i=>(<tr style={{lineHeight:1.5}}><td>{plist[getdata.category][getdata.index][2][i]}</td></tr>))
  );
}

export default App;
