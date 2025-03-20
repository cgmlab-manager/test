var year = 2021
var number = 3
var leap = false;
var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var meetDateArray = [];
var evenDate = [];
var oddDate = [];
var firstWeek = true;
var preMonth = 1;
for (var month = 7; month < 12; month++) {
    var day = monthDay[month];
    firstWeek = true;
    for (var i = 0; i < day; i++) {
		if(month == 7 && firstWeek){
			i=10;
			firstWeek = false;
			continue;
		}
        var date = new Date(year, month, i + 1)
        var week = date.getDay();
        if (week == 4) {
            var index = date.toLocaleDateString("en-US").lastIndexOf("/");
            var meetDate = date.toLocaleDateString("en-US").substring(0, index);
            meetDateArray.push(meetDate);
            if(firstWeek){
               if((month+1)%2 ==0){
                evenDate.push(meetDate);
               }else{
                oddDate.push(meetDate);
               }
               firstWeek = false;
            }
        }
    }

}
console.log(oddDate);
console.log(evenDate);
var student = ["Richard", "徐晟紘", "宋逸慈" ,"林紀揚", "Ann", "趙姵璇", "張宗雅", "Yohanes", "Tim", "Mojib", "李一峯", "葉三吉", "老師上課" ];
var newStudentArray = [
	{
		"name" : "雯筑",
		"date" : "9/1",
		"addStatus" : false
    },
    {
		"name" : "姿廷",
		"date" : "9/1",
		"addStatus" : false
    }
];

var graduate = new Map();
/* //畢業生畢業日期 */
/* // graduate.set("姿廷","10/27"); */
/* graduate.set("葉三吉","10/13"); */

var reportTitle = [
{
    "abstract":`1. Image Compression with Mean Shift Based Inverse Colorization 
2. Reducing Image Compression Artifacts for Deep Neural Networks
3. Adaptive Colorization-based Compression For Stereoscopic Images
4.Colorization based compression Using Fuzzy C- Means and smooth L0 minimization 
5.Generative Adversarial Networks for Extreme Learned Image Compression`,
"paper":`From Shadow Generation to Shadow Removal. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021. p. 4927-4936.`
},
{
    "abstract":`01:3DCapture: 3D Reconstruction for a Smartphone Published in: 2016 IEEE Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)
    02:Mobile3DRecon: Real-time Monocular 3D Reconstruction on a Mobile Phone Published in: IEEE Transactions on Visualization and Computer Graphics, 2020
    03:3D-R2N2: A Unified Approach for Single and Multi-view 3D Object Reconstruction Published in: European Conference on Computer Vision, 2016
    04:A Point Set Generation Network for 3D Object Reconstruction from a Single Image Published in: Computer Vision and Pattern Recognition, 2017
    05:Learning Efficient Point Cloud Generation for Dense 3D Object Reconstruction Published in: AAAI Conference on Artificial Intelligence (AAAI), 2018`,
    "paper":`Generative Adversarial Networks for Extreme Learned Image Compression`
},
{
    "abstract":`A Local-to-Global Approach to Multi-modal Movie Scene Segmentation
    Scene Segmentation Using Temporal Clustering For Accessing And Re-using Broadcast Video
    Unifying Identification and Context Learning for Person Recognition
    Value of Temporal Dynamics Information in Driving Scene Segmentation
    A Graph-Based Framework to Bridge Movies and Synopses`,
    "paper":`A Point Set Generation Network for 3D Object Reconstruction from a Single Image Published in: Computer Vision and Pattern Recognition, 2017`
},
{
    "abstract":``,
    "paper":``
},
{
    "abstract":`1. Learning Spatiotemporal Features with 3D Convolutional Networks
    2. Quo Vadis, Action Recognition? A New Model and the Kinetics Dataset
    3. Co-occurrence Feature Learning for Skeleton based Action Recognition using Regularized Deep LSTM Networks
    4. Long-term Recurrent Convolutional Networks for Visual Recognition and Description
    5. MS-ASL: A Large-Scale Data Set and Benchmark for Understanding American Sign Language`,
    "paper":`A Graph-Based Framework to Bridge Movies and Synopses`
},
{
    "abstract":`1. Acquiring the Reflectance Field of a Human Face
    2. A Layered, Heterogeneous Reflectance Model for Acquiring and Rendering Human Skin
    3. From Faces to Outdoor Light Probes
    4. Faces as Lighting Probes via Unsupervised Deep Highlight Extraction
    5. Single Image Portrait Relighting`,
    "paper":`MS-ASL: A Large-Scale Data Set and Benchmark for Understanding American Sign Language`
},
{
    "abstract":`1- Thermal Imaging Dataset for Person Detection

    2- Detection of humans in drone images for search and rescue operations
    
    3- Person Detection in Drone Imagery
    
    4- Robust Real-time Pedestrian Detection in Aerial Imagery on Jetson TX2
    
    5- Human Detection and Motion Analysis from a Quadrotor UAV`,
    "paper":`Single Image Portrait Relighting`
},
{//9/30
    "abstract":`1.	Omnimatte: Associating Objects and Their Effects in Video
	(Computer Vision And Pattern Recognition 2021 )

2.  NeX: Real-time View Synthesis With Neural Basis Expansion
      (Computer Vision And Pattern Recognition 2021 )

3.	  Neural Super-sampling for Real-time Rendering
(ACM Transactions on Graphics 2020)

4.	Endless Loops: Detecting and Animating Periodic Patterns in Still Images 	 	
(ACM Transactions on Graphics 2021)
5.	Total Relighting: Learning to Relight Portraits for Background Replacement	
(ACM Transactions on Graphics 2021)`,
    "paper":`Human Detection and Motion Analysis from a Quadrotor UAV`
},
{
    "abstract":`1. 2D Human Pose Estimation: New Benchmark and State of the Art Analysis   (Published in: 2014 IEEE (CVPR))
    2. Learned Initializations for Optimizing Coordinate-Based Neural Representations    (Published in:
    IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2021)
    3. Generative Multi-View Human Action Recognition  (Accepted by 2019 IEEE/CVF International Conference on Computer Vision (ICCV))
    4. Combining detection and tracking for human pose estimation in videos      (Accepted by 2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR))
    5. SFV: Reinforcement Learning of Physical Skills from Videos     (Published in: SIGGRAPH Asia 2018)`,
    "paper":`Total Relighting: Learning to Relight Portraits for Background Replacement	
    (ACM Transactions on Graphics 2021)`
},
{//10/14
    "abstract":`1. Biometric Identification Using Gait Analysis by Deep Learning
    (Published in: 2020 IEEE International Conference for Innovation in Technology (INOCON))
    2. Limbs and Muscle Movement Detection using Gait Analysis
    (Published in: 2018 International Conference on Computer, Communication, Chemical, Material and Electronic Engineering (IC4ME2))
    3. A Sport Athlete Object Tracking Based on Deep Sort and Yolo V4 in Case of Camera Movement
    (Published in: 2020 IEEE 6th International Conference on Computer and Communications)
    4. Tracking of Moving Objects With Regeneration of Object Feature Points
    (Published in: 2018 Global Smart Industry Conference (GloSIC))
    5. Moving object tracking using hybrid method
    (Published in: 2018 International Conference on Information and Communications Technology (ICOIACT))`,
    "paper":`SFV: Reinforcement Learning of Physical Skills from Videos     (Published in: SIGGRAPH Asia 2018)`
},
{
    "abstract":`X`,
    "paper":`X`
},
{
    "abstract":`1.A Collision Warning Oriented Brake Lights Detection and Classification Algorithm Based on a Mono Camera Sensor(2019 IEEE Intelligent Transportation Systems Conference (ITSC))
    2.Vision based obstacle warning system for on-road driving(Proceedings 2003 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2003) (Cat. No.03CH37453))
    3.A general approach for getting optimal speed of vehicles using spatial data(2013 2nd International Conference on Information Management in the Knowledge Economy)
    4.Brake-Vision: A Machine Vision-Based Inference Approach of Vehicle Braking Detection for Collision Warning Oriented System(2021 International Conference on Computational Intelligence and Knowledge Economy (ICCIKE))
    5.Front Vehicle Detection and Distance Estimation Using Single-Lens Video Camera(2015 Third International Conference on Robot, Vision and Signal Processing (RVSP))
    `,
    "paper":`Moving object tracking using hybrid method
    (Published in: 2018 International Conference on Information and Communications Technology (ICOIACT))`
},
{
    "abstract":`X`,
    "paper":`X`
},//11/11
{
    "abstract":`1. Learning 3D Global Human Motion Estimation from Unpaired, Disjoint Datasets
    Habekost, J., Shiratori, T., Ye, Y., & Komura, T. 
    BMVC (2020)
    2. QuaterNet: A Quaternion-based Recurrent Model for Human Motion
    Pavllo, Dario & Grangier, David & Auli, Michael
    British Machine Vision Conference (BMVC), 2018
    3. 3D Human Motion Estimation via Motion Compression and Refinement
    Zhengyi Luo, S. Alireza Golestaneh, Kris M. Kitani
    Proceedings of the Asian Conference on Computer Vision (ACCV), 2020
    4. 3D Human Pose Estimation with 2D Marginal Heatmaps
    Nibali, A., He, Z., Morgan, S., & Prendergast, L.
    2019 IEEE Winter Conference on Applications of Computer Vision (WACV) (2019): 1477-1485.
    5. XNect: Real-time Multi-Person 3D Motion Capture with a Single RGB Camera
    Mehta, D., Sotnychenko, O., Mueller, F., Xu, W., Elgharib, M.A., Fua, P., Seidel, H., Rhodin, H., Pons-Moll, G., & Theobalt, C. 
    SIGGRAPH 2020.`,
    "paper":`Front Vehicle Detection and Distance Estimation Using Single-Lens Video Camera(2015 Third International Conference on Robot, Vision and Signal Processing (RVSP))
    `
},
{
    "abstract":`1. One Shot 3D Photography
    SIGGRAPH 2020
    2. StyleCLIP: Text-Driven Manipulation of StyleGAN Imagery 
    Computer Vision and Pattern Recognition
    March 2021
    3. Sound Source Distance Estimation Using Deep Learning: An Image Classification Approach
    Special Issue "Speech, Acoustics, Audio Signal Processing and Applications in Sensors"
    October 2019
    4. Distance Estimation and Localization of Sound Sources in Reverberant Conditions using Deep Neural Networks
    International Journal of Applied Engineering Research
    January 2017
    5. Zero-Shot Detection via Vision and Language Knowledge Distillation
    Google Research
    April 2021`,
    "paper":`XNect: Real-time Multi-Person 3D Motion Capture with a Single RGB Camera
    Mehta, D., Sotnychenko, O., Mueller, F., Xu, W., Elgharib, M.A., Fua, P., Seidel, H., Rhodin, H., Pons-Moll, G., & Theobalt, C. 
    SIGGRAPH 2020.`
},
{
    "abstract":`1.Hidden Markov Map Matching Through Noise and Sparseness(GIS '09: Proceedings of the 17th ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems (November 2009))
    2.Map Matching with Hidden Markov Model on Sampled Road Network(Proceedings of the 21st International Conference on Pattern Recognition (ICPR2012))
    3.Shape band: A deformable object detection approach(2009 IEEE Conference on Computer Vision and Pattern Recognition (CVPR))
    4.Active skeleton for non-rigid object detection(2009 IEEE 12th International Conference on Computer Vision (ICCV))
    5.DFM: A Performance Baseline for Deep Feature Matching(Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2021, pp. 4284-4293)`,
    "paper":``
},//12/2 林紀揚
{
    "abstract":`1.Deep dual-resolution networks for real-time and accurate semantic segmentation of road scenes. arXiv preprint arXiv:2101.06085, 2021.
    2.SCNet: Training Inference Sample Consistency for Instance Segmentation. In: Proceedings of the AAAI Conference on Artificial Intelligence. 2021. p. 2701-2709.
    3.End-to-End Semi-Supervised Object Detection with Soft Teacher. arXiv preprint arXiv:2106.09018, 2021.  
    4.Swin Transformer V2: Scaling Up Capacity and Resolution. arXiv preprint arXiv:2111.09883, 2021.  
    5.Yolox: Exceeding yolo series in 2021. arXiv preprint arXiv:2107.08430, 2021.`,
    "paper":``
},//12/9 Ann
{
    "abstract":`1.DWT, DCT and SVD Based Hexagonal Image Compression
    2.Towards Intelligent Compression of Hyperspectral Imagery 
    3.Image Compression using Huffman Coding Scheme with Partial/Piecewise Color Selection 
    4.Enhanced Image Compression Using Fractal and Tree Seed-bio Inspired 
    5.Towards improved lossy image compression:Human image reconstruction with public-domain images`,
    "paper":``
},
{
    "abstract":`1.MULTI-OBJECT TRACKING WITH A HIERARCHICAL SINGLE-BRANCH NETWORK Published in: Computer Vision and Pattern Recognition (2021)

    2.Mask R-CNN Published in: Computer Vision and Pattern Recognition (2017)
    
    3.Object Detection in Video with Spatiotemporal Sampling Networks Published in: Computer Vision and Pattern Recognition (2018)
    
    4.Hybrid Task Cascade for Instance Segmentation Published in: Computer Vision and Pattern Recognition (2019)
    
    5.Classifying, Segmenting, and Tracking Object Instances in Video with Mask Propagation Published in: Computer Vision and Pattern Recognition (2020)`,
    "paper":``
},
{
    "abstract":`1.Textual description-based video summarization for video blogs
    2.Automatic Consumer Video Summarization By Audio And Visual Analysis
    3.Video Summarization by Learning from Unpaired Data
    4.Unsupervised video summarization framework using keyframe extraction and video skimming
    5.Video Summarization using Deep Semantic Features`, 
    "paper":``
},
{
    "abstract":`1. Important Scene Prediction of Baseball Videos Using Twitter and Video Analysis Based on LSTM
    2. Human Action Recognition in Video Using DB-LSTM and ResNet
    3. Two-Stream Convolutional Networks for Action Recognition in Videos
    4. A Closer Look at Spatiotemporal Convolutions for Action Recognition
    5. FASTER Recurrent Networks for Efficient Video Classification`, 
    "paper":``
}
]

var specialHoliday = new Map();
// 特殊情況暫停報論文一周
// specialHoliday.set("1/6","SpecialTopic(一個人15分鐘)");
/* specialHoliday.set("2/3","過年"); */

var report = "";




var LinLab = true;
var YangLab = true;
var netNumber = 0;
for(var i = 0; i < meetDateArray.length;i++){
   
    title = reportTitle[i];
    if(title != undefined){
        
        paper = title.paper;
        if(paper === ""){
            index = (abstract.lastIndexOf('5.')!==-1 ? abstract.lastIndexOf('5.') : abstract.lastIndexOf('5-'))
            paper = abstract.substring(index+2);
        }
        console.log(paper);
        abstract = title.abstract;
        var abstractArray = abstract.split("\n");
        var abstractPlusbr = "";
        for(var j = 0; j < abstractArray.length; j++){
            var singleAbstract = abstractArray[j];
            abstractPlusbr += singleAbstract+"<br>";
        }
        abstract = abstractPlusbr;
       
    }else{
        paper = "";
        abstract = "";
    }
    var meetDate = meetDateArray[i]
    var month = Number(meetDate.split("/")[0]);
    var day = Number(meetDate.split("/")[1]);
    
    var numberOfStudent = student.length;
    var abstractStudent = student[(number+1)%numberOfStudent]
    var paperStudent = student[number%numberOfStudent];
    
    var nowDate = new Date(year,month,day);
    
    
    var teacher = false;
    var isSpecialHoliday = false;
    var specialHolidayIndex=0;
   
    if(specialHoliday.get(meetDate)!=undefined){
        isSpecialHoliday = true;
        specialHolidayIndex = meetDate;
    }
    if(isSpecialHoliday){
        paperStudent = "X";
        abstractStudent = "X"
        paper = specialHoliday.get(meetDate)
        abstract =  specialHoliday.get(meetDate)
        if(month%2 == 0){
            YangLab = false;
        }else{
            LinLab = false;
        }
    }else if( meetDate == "9/2" || meetDate == "11/4"||!LinLab){
        paperStudent = "X";
        abstractStudent = "X"
        paper = "與林伯慎老師實驗室Meeting"
        abstract =  "與林伯慎老師實驗室Meeting"
        LinLab = true;
    }else {
        if(meetDate == "10/7" || meetDate == "12/2" || !YangLab){
            paper = "與林伯慎老師實驗室Meeting(our turn)<br>" + paper;
            abstract =  "與林伯慎老師實驗室Meeting(our turn)<br>" +abstract;
            YangLab = true;
        }
        number++;
        var graduateDateStr = graduate.get(abstractStudent);
        if(graduateDateStr !=undefined){
            var graduateDate = new Date(year,graduateDateStr.split("/")[0],graduateDateStr.split("/")[1]);
           
            if(graduateDate <= nowDate){    
                abstractStudent = student[(number+1)%numberOfStudent]
                number++;
            }
        }
        if(abstractStudent == "老師上課"){
            abstractStudent = student[(number+1)%numberOfStudent]
            teacher = true;
        }else if(paperStudent == "老師上課"){
            paperStudent = student[number%numberOfStudent];
            abstractStudent = student[(number+1)%numberOfStudent]
            number++
        }
       
        
    }
        report = `<tr>
        <td rowspan="2" bgcolor="#FAF4EB">
            <div align="center">${meetDate}</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleTopic" align="center">Paper</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleSpeaker" align="center">
                <div align="center">${paperStudent}</div>
        </td>
        
        <td bgcolor="#FAF4EB">
            <div class="styleTitle" align="left">
                ${paper}
            </div>
        </td>
        </tr>
        <tr>
        <td bgcolor="#FAF4EB">
            <div class="styleTopic" align="center">Abstract</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleSpeaker" align="center">
                <div align="center">${abstractStudent}</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleTitle" align="left">
                ${abstract}
            </div>
        </td>
        </tr>`+report;
        if(teacher){
            report = `<tr>
        <td rowspan="2" bgcolor="#FAF4EB">
            <div align="center">${meetDateArray[++i]}</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleTopic" align="center">Paper</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleSpeaker" align="center">
                <div align="center">老師上課</div>
        </td>
        
        <td bgcolor="#FAF4EB">
            <div class="styleTitle" align="left">
               X
            </div>
        </td>
        </tr>
        <tr>
        <td bgcolor="#FAF4EB">
            <div class="styleTopic" align="center">Abstract</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleSpeaker" align="center">
                <div align="center">老師上課</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleTitle" align="left">
               X
            </div>
        </td>
        </tr>`+report;
            
        }  
        for(var j = 0 ; j < newStudentArray.length;j++){
            var newStudent = newStudentArray[j]
            var newStudentDateArray = newStudent.date.split("/"); 
           
            var newStudentDate = new Date(year,newStudentDateArray[0],newStudentDateArray[1]);
            if(nowDate >= newStudentDate && !newStudent.addStatus && (number+1)%numberOfStudent !=0){
                student.push(newStudent.name);
                 newStudent.addStatus = true;
                number = number%numberOfStudent;
            }
        }
}
document.write(report);