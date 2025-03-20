var student = ["徐晟紘", "宋逸慈" ,"林紀揚", "Ann", "趙姵璇", "張宗雅", "Yohanes", "Tim", "Mojib", "李一峯", "葉三吉", "老師上課" ,"雯筑", "姿廷","林捷","吳家霖","Rini","Molion"];
var startNumber = 6;
var newStudentArray = [
    {
        "name" : "Edwin",
        "date" : "6/24",
        "addStatus" : false
    },
    {
        "name" : "王怡淳",
        "date" : "10/20",
        "addStatus" : false
    },
    {
        "name" : "林欣華",
        "date" : "10/20",
        "addStatus" : false
    },
    {
        "name" : "胡恩維",
        "date" : "10/20",
        "addStatus" : false
    },
    {
        "name" : "左夏強",
        "date" : "10/20",
        "addStatus" : false
    },
    {
        "name" : "蔡明達",
        "date" : "10/20",
        "addStatus" : false
    },
    {
        "name" : "江柏宏",
        "date" : "10/20",
        "addStatus" : false
    }
];

var newStudentInsertEarly = new Map();
newStudentInsertEarly.set("6/23", "Edwin");
newStudentInsertEarly.set("10/20", "王怡淳,林欣華,胡恩維,左夏強,蔡明達,江柏宏");

newStudentInsertEarly.set("12/15", "Mojib");

var teacherDelayTime = new Map();
// teacherDelayTime.set("12/29",2)
var specialTeacherTime = new Map();
specialTeacherTime.set("7/28", "老師上課");
var graduate = new Map();

//畢業生畢業日期
graduate.set("徐晟紘", "6/1");
graduate.set("宋逸慈", "6/1");
graduate.set("林紀揚", "6/1");
graduate.set("Ann", "6/1");
graduate.set("林捷", "4/1");
graduate.set("Mojib", "4/1");

var reportTitle = [
{
"abstract":``,
"paper":``
},
{
"abstract":`1. Pyramid Scene Parsing Network
2. SfSNet: Learning Shape, Reflectance and Illuminance of Faces in the Wild
3. PhySG: Inverse Rendering with Spherical Gaussians for Physics-based Material Editing and Relighting
4. Learning a Discriminative Feature Network for Semantic Segmentation
5. Self-supervised Outdoor Scene Relighting`,
"paper":`FASTER Recurrent Networks for Efficient Video Classification`
},
{
    "abstract":``,
    "paper":``
},
//1/27
{
"abstract":`1-Deep-COVID: Predicting COVID-19 from chest X-ray images using deep transfer learning

Published in: sciencedirect Oct 2020.
Subject: Medical Image Analysis

2-Deep learning for freezing of gait detection in Parkinson’s disease patients in their homes using a waist-worn inertial measurement unit

Published in: sciencedirect January 2018.
Subject: Medical Image Analysis

3-Implementation of machine learning algorithms for gait recognition

Published in: sciencedirect August 2020.
Subject: Engineering Science and Technology, an International Journal

4-Multi-stream part-fused graph convolutional networks for skeleton-based gait recognition

Published in: Connection Science Jan 2022.

5-Learning Rich Features for Gait Recognition by Integrating Skeletons and Silhouettes

Published in: arXiv 26 Oct 2021.
Subject: Computer Vision and Pattern Recognition`,
"paper":`Self-supervised Outdoor Scene Relighting`
},
{
"abstract":`  `,
"paper":`  `
},
{
"abstract":`1.Image Super-Resolution via Iterative Refinement
(Computer Vision And Pattern Recognition, 2021)
2.DONeRf: Towards Real-Time Rendering of Compact Neural Radiance Fields Using Depth Oracle Networks 
(Eurographics Symposium on Rendering, 2021)
3.ADOP: Approximate Differentiable One-Pixel Point Rendering			             
(Computer Vision And Pattern Recognition, 2021)
4.Plenoxels: Radiance Fields Without Neural Networks
(Computer Vision And Pattern Recognition, 2021)
5.Layered Neural Atlases for Consistent Video Editing	
(Computer Vision And Pattern Recognition, 2021)
`,
"paper":`5-Learning Rich Features for Gait Recognition by Integrating Skeletons and Silhouettes
Published in: arXiv 26 Oct 2021.
Subject: Computer Vision and Pattern Recognition`
},
{
"abstract":`1.Learning Skeletal Articulations with Neural Blend Shapes
(Computer Vision And Pattern Recognition 2021)
2.Arbitrary-View Human Action Recognition: A Varying-View RGB-D Action Dataset 
(Computer Vision And Pattern Recognition:2021)
3.ManipNet: Neural Manipulation Synthesis with a Hand-Object Spatial Representation
(Published at Computer Vision And Pattern Recognition 2021)
4.CARL: Controllable Agent with Reinforcement Learning for Quadruped Locomotion
(Computer Vision And Pattern Recognition 2020)
5.AMP: Adversarial Motion Priors for Stylized Physics-Based Character Control
(Computer Vision And Pattern Recognition 2021)`,
"paper":``
},
{
"abstract":`1. Frontal Gait Recognition Combining 2D and 3D Data
(Published in: 2012 MM&Sec '12: Proceedings of the on Multimedia and security)
2. Gaitgraph: Graph Convolutional Network for Skeleton-Based Gait Recognition
(Published in: 2021 IEEE International Conference on Image Processing (ICIP))
3. Hybrid Silhouette-skeleton Body Representation for Gait Recognition
(Published in: 2021 13th International Conference on Intelligent Human-Machine Systems and Cybernetics (IHMSC))
4. Scaling and occlusion robust athlete tracking in sports videos
(Published in: 2016 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP))
5. Virtual Reality Sickness Predictor: Analysis of visual-vestibular conflict and VR contents
(Published in: 2018 Tenth International Conference on Quality of Multimedia Experience (QoMEX))`,
"paper":``
},
{
"abstract":``,
"paper":``
},
{
"abstract":``,
"paper":``
},
{
"abstract":`1.Shape Completion using 3D-Encoder-Predictor CNNs and Shape Synthesis
2.3DMV: Joint 3D-Multi-View Prediction for 3D Semantic Scene Segmentation
3.ScanComplete: Large-Scale Scene Completion and Semantic Segmentation for 3D Scans
4.Ultra Fast Structure-aware Deep Lane Detection
5.RESA: Recurrent Feature-Shift Aggregator for Lane Detection`,
"paper":`Virtual Reality Sickness Predictor: Analysis of visual-vestibular conflict and VR contents
(Published in: 2018 Tenth International Conference on Quality of Multimedia Experience (QoMEX))`
},
{
"abstract":`1. Arbitrary Style Transfer in Real-time with Adaptive Instance Normalization - Xun, computer vision 2017
2. A Style-Based Generator Architecture for Generative Adversarial Networks - Karras, computer vision and pattern recognition 2019
3. Encoding in Style: a StyleGAN Encoder for Image-to-Image Translation - Richardson, computer vision and pattern recognition 2019
4. Only a Matter of Style: Age Transformation Using a Style-Based Regression Model - Alaluf, Transactions on Graphics 2021
5. SWAGAN: A style-based wavelet-driven generative model - Rinon,  Transactions on Graphics 2021 *`,
"paper":``
},
{
"abstract":`1.Deepfake Detection: Current Challenges and Next Steps
Published in: 2020 IEEE International Conference on Multimedia & Expo Workshops (ICMEW)

2.EfficientNets for DeepFake Detection: 
Comparison of Pretrained Models

Published in: 2021 IEEE Conference of Russian Young Researchers in Electrical and Electronic Engineering (ElConRus)

3.In Ictu Oculi: Exposing AI Created Fake Videos by Detecting Eye Blinking
Published in: 2018 IEEE International Workshop on Information Forensics and Security (WIFS)

4.Exposing GAN-Generated Faces Using Inconsistent Corneal Specular Highlights
Published in: ICASSP 2021 - 2021 IEEE International Conference on Acoustics, 
Speech and Signal Processing (ICASSP)

5.img2pose: Face Alignment and Detection via 6DoF, Face Pose Estimation
Published in: 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
`,
"paper":``
},
{
"abstract":`1. Show Me Your Face and I Will Tell You Your Height, Weight and Body Mass Index
Antitza Dantcheva, Francois Bremond, Piotr Bilinski
2018 24th International Conference on Pattern Recognition (ICPR) Beijing, China, August 20-24, 2018

2. Deep Learning Based Object Detection Using Mask RCNN
Triphena Delight D, Karunakaran V
Proceedings of the 6th International Conference on Communication and Electronics Systems (ICCES-2021)

3. Brain Tumor Localization and Segmentation Using Mask RCNN
Momina Masood, Tahira Nazir, Marriam Nawaz, Ali Javed, Munwar Iqbal, Awais Mehmood
Front. Comput. Sci., 2021, 15(6): 156338

4. A Comparison of YOLO and Mask R-CNN for Segmenting Head and Tail of Fish
Eko Prasetyo, Nanik Suciati, Chastine Fatichah,
2020 4th International Conference on Informatics and Computational Sciences (ICICoS)

5. Mesh R-CNN
Georgia Gkioxari, Jitendra Malik, Justin Johnson
2019 IEEE/CVF International Conference on Computer Vision (ICCV)`,
"paper":``
},
{
"abstract":`1.1D CNN Architectures for Music Genre Classification.
IEEE Symposium Series on Computational Intelligence (SSCI) 2021

2.Transfer and Active Learning for High Accuracy Music Genre Classification Method.
IEEE 2nd International Conference on Big Data, Artificial Intelligence and Internet of Things Engineering (ICBAIE) 2021

3. Coated VGG16 Architecture: An Enhanced Approach for Genre Classification of Spectrographic Representation of Musical Pieces.
IEEE 22nd International Conference on Computer and Information Technology (ICCIT) 2019

4. Classification using Spectrograms as input to CNN on Indian Music.
IEEE International Conference on Emerging Techniques in Computational Intelligence (ICETCI) 2021

5. Detection of Indonesian Dangdut Music Genre with Foreign Music Genres Through Features Classification Using Deep Learning.
IEEE International Seminar on Machine Learning, Optimization, and Data Science (ISMODE) 2022

`,
"paper":``
},
{
"abstract":`1. A Simple Microphone Array For Source Direction and Distance Estimation
2. Sound Source Localisation on Android Smartphones: A first step to using smartphones as auditory sensors for training A.I systems with Big Data
3. Data augmentation approaches for improving animal audio classification
4. R-MNet: A Perceptual Adversarial Network for Image Inpainting
5. Real-Time Estimation of Direction of Arrival of Speech Source using Three Microphones
`,
"paper":`Coated VGG16 Architecture: An Enhanced Approach for Genre Classification of Spectrographic Representation of Musical Pieces.
IEEE 22nd International Conference on Computer and Information Technology (ICCIT) 2019`
},
{
"abstract":`1.TILDE: A Temporally Invariant Learned DEtector (Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015, pp. 5279-5288)
2.Image Feature Matching Based on Deep Learning (2018 IEEE 4th International Conference on Computer and Communications (ICCC))
3.Two-stage Discriminative Re-ranking for Large-scale Landmark Retrieval (Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2020, pp. 1012-1013)
4.Match or No Match: Keypoint Filtering based on Matching Probability (Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2020, pp. 1014-1015)
5.SuperPoint: Self-Supervised Interest Point Detection and Description(Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2018, pp. 224-236)
`,
"paper":``
},
{
"abstract":``,
"paper":``
},
{
"abstract":`1.The 5th ai city challenge. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021. p. 4263-4273.
2.City-scale multi-camera vehicle tracking guided by crossroad zones. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021. p. 4129-4137.
3.Swin transformer: Hierarchical vision transformer using shifted windows. In: Proceedings of the IEEE/CVF International Conference on Computer Vision. 2021. p. 10012-10022.
4.Extracting Triangular 3D Models, Materials, and Lighting From Images. arXiv preprint arXiv:2111.12503, 2021.
5.Color-complexity enabled exhaustive color-dots identification and spatial patterns testing in images. PloS one, 2021, 16.5: e0251258.`,
"paper":`SuperPoint: Self-Supervised Interest Point Detection and Description(Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2018, pp. 224-236)
`
},
{
"abstract":`1.Image Companding and Inverse Halftoning using Deep Convolutional Neural Networks 
2.Deep Neural Inverse Halftoning

3. Lossless Compression of Dithered Images 
4.Inverse Halftoning Through Structure-Aware Deep Convolutional Neural Networks 
5.Inverse halftoning colorization: Making halftone print color photos`,
"paper":``
},
{
"abstract":`01: Matching Buildings Between 2.5D Maps and Dash Cam Images for Building Identification （2021, International Conference on Advances in Geographic Information Systems)


02:Driving Style Representation in Convolutional Recurrent Neural Network Model of Driver Identification(Computer Vision and Pattern Recognition, 2021 )

03:Distinguishing Trajectories from Different Drivers using Incompletely Labeled Trajectories (2018, Proceedings of the 27th ACM International Conference on Information and Knowledge Management )

04:Lane detection with Position Embedding (Computer Vision and Pattern Recognition, 2022)

05:LaneAF Robust Multi-Lane Detection with Affinity Fields
(Computer Vision and Pattern Recognition, 2021)`,
"paper":``
},
{
"abstract":`1. Online Multi-modal Person Search in Videos
2. Person Search in Videos with One Portrait
3. Single Image Reflection Removal Beyond Linearity
4. Structure-Aware Abstractive Conversation Summarization
5. Topic-Aware Contrastive Learning for Abstractive Dialogue`,
"paper":``
},
{
"abstract":`1.Real-Time Sign Language Detection Using Human Pose Estimation (ECCV 2020)
2. Evaluating The Immediate Applicability of Pose Estimation For Sign Language Recognition (CVPR 2021)
3. Sign Language Recognition With Transformer Networks (LREC 2020)
4. Rethinking Spatiotemporal Feature Learning: Speed-Accuracy Trade-offs in Video Classification (ECCV 2018)
5. ASL Recognition With Metric-Learning Based Lightweight Network (ECCV 2018)`,
"paper":``
},
{
"abstract":``,
"paper":``
},
{
"abstract":`1. An Overview of Deep Learning Techniques for Autonomous Driving Vehicles
2. 3D LiDAR Automatic Driving Environment Detection System Based on MobileNetv3-YOLOv4
3. Driving style recognition using machine learning and smartphones
4. Real-time driving behavior identification based on multi-source data fusion
5. Traffic Landmark Matching Framework for HD-Map Update:Dataset Training Case Study`,
"paper":`ASL Recognition With Metric-Learning Based Lightweight Network (ECCV 2018)`
},
{
"abstract":`1. Deep Parametric Indoor Lighting Estimation
2. Learning to Estimate Indoor Lighting from 3D Objects
3. Learning to Separate Multiple Illuminants in a Single Image
4. Neural Inverse Rendering of an Indoor Scene From a Single image
5. Outdoor inverse rendering from a single image`,
"paper":``
},
{
"abstract":``,
"paper":``
},
{
"abstract":`1.	Mip-Nerf: A Multiscale Representation for Anti-aliasing Neural Radiance Fields	
(Proceedings of the IEEE/CVF International Conference on Computer Vision, 2021)
2.  Mip-NeRF 360: Unbounded Anti-aliased Neural Radiance Fields
      (Computer Vision And Pattern Recognition, 2022)
3.	Efficient Geometry-aware 3D Generative Adversarial Networks
      (Computer Vision And Pattern Recognition, 2021)
4.	 SketchHairsSalon: Deep Sketch-based Hair Image Synthesis
 (SIGGRAPH Asia 2021)
5.	Barbershop: Gan-based Image Compositing Using Segmentation Masks	
(Computer Vision And Pattern Recognition, 2021)
`,
"paper":`Learning to Separate Multiple Illuminants in a Single Image`
},
{
"abstract":`1. A Comparative analysis for Single person and Multi  person Pose estimation using Deep learning  algorithms
(2021 International Conference on Circuits, Controls and Communications (CCUBE))

2.Yoga Pose Detection Using Posenet and k-NN
(2021 International Conference on Computing, Communication and Green Engineering (CCGE))

3. Multi Pose Trajectory Tracking based  on OpenPose Keypoints 
(2021 11th IEEE International Conference on Intelligent Data Acquisition and Advanced Computing Systems: Technology and Applications (IDAACS))

4.Improvement in Multi-Person 2D Pose Estimation:  Applying Polar Representation in OpenPose
(2021 2nd International Conference on Computing and Data Science (CDS))

5.Teaching Robots to Predict Human Motion
(2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS))`,
"paper":``
},
{
"abstract":``,
"paper":``
},
{
"abstract":`1. GaitPart: Temporal Part-based Model for Gait Recognition
(Published in: 2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR))
2. Deep High-Resolution RepresentationLearning for Human Pose Estimation
(Published in: 2019 Computer Vision and Pattern Recognition (CVPR))
3. TubeExtractor a Crawler and Converter for Generating Research DataSet from YouTube Videos
(Published in: 2019 International Journal of Computer Applications)
4. Research on Scrapy-Based Distributed Crawler System for Crawling Semi-structure Information at High Speed
(Published in: 2018 IEEE 4th International Conference on Computer and Communications)
5. COIN: A Large-scale Dataset for Comprehensive Instructional Video Analysis
(Published in: 2019 Computer Vision and Pattern Recognition (CVPR))`,
"paper":`Teaching Robots to Predict Human Motion
(2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS))`
},
{
"abstract":`1. Context-Based Search for 3D Models
In Proc. SIGGRAPH Asia, ACM, 2010
Fisher, M., and Hanrahan, P
2. Contextual Part Analogies in 3D Objects
International Journal of Computer Vision 89(2):309-326
L. Shapira · S. Shalom · A. Shamir · D. Cohen-Or · H. Zhang
3. Structure recovery by part assembly
ACM Transactions on Graphics (TOG), 2012
Chao-Hui Shen, Hongbo Fu, Kang Chen, and Shi-Min Hu
4. Characterizing Structural Relationships in Scenes Using Graph Kernels
In ACM SIGGRAPH 2011 papers, 2011.
M. Fisher, M. Savva, and P. Hanrahan
5. Example-based Synthesis of 3D Object Arrangements
ACM TOG, 31(6):135, 2012
Matthew Fisher, Daniel Ritchie, Manolis Savva, Thomas Funkhouser, and Pat Hanrahan`,
"paper":`
    COIN: A Large-scale Dataset for Comprehensive Instructional Video Analysis
    (Published in: 2019 Computer Vision and Pattern Recognition (CVPR))
`
},
{
"abstract":`
    1. Generalized Deepfake Video Detection Through Time-Distribution and Metric Learning 
    Published in: IT Professional
    2. Identifying Reflected Images From Object Detector in Indoor Environment Utilizing Depth Information  2021
    Submitted to IEEE Robotics and Automation Letters
    3. A YOLOR Based Visual Detection of Amateur Drones 
    2022 International Conference on Decision Aid Sciences and Applications (DASA)
    4. 6D Rotation Representation For Unconstrained Head Pose Estimation 
    Submitted to IEEE International Conference on Image Processing (ICIP)
    5. L2CS-Net: Fine-Grained Gaze Estimation in Unconstrained Environments
    Submitted to IEEE International Conference on Image Processing (ICIP)
`,
"paper":`
    Example-based Synthesis of 3D Object Arrangements
    ACM TOG, 31(6):135, 2012
    Matthew Fisher, Daniel Ritchie, Manolis Savva, Thomas Funkhouser, and Pat Hanrahan
`
}, 
{
"abstract": `
    1. Objectron: A Large Scale Dataset Of Object-Centric Videos In The Wild With Pose Annotations, 
    2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
    2. Simple Online and Realtime Tracking,
    2016 IEEE International Conference on Image Processing (ICIP) 
    3. Simple Online and Realtime Tracking With A Deep Association Metric,
    2017 IEEE International Conference on Image Processing (ICIP)
    4. Center-Based 3D Object Detection and Tracking,
    2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
    5. Dancetrack: Multi-Object Tracking In Uniform Appearance and Diverse Motion,
    2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
`, 
"paper": `
    6D Rotation Representation For Unconstrained Head Pose Estimation 
    Submitted to IEEE International Conference on Image Processing (ICIP)
`
},
{
    "abstract":``,
    "paper":``
},
{
    "abstract": `
        1. AUDIO STYLE TRANSFER - IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) 2018
        2. MelGAN-VC: Voice Conversion and Audio Style Transfer on arbitrarily long samples using Spectrograms - Electrical Engineering and Systems Science, Audio and Speech Processing (arXiv) 2019
        3. Timbre-enhanced Multi-modal Music Style Transfer with Domain Balance Loss - International Conference on Technologies and Applications of Artificial Intelligence (TAAI) 2020
        4. Audio Mixing using Image Neural Style Transfer Networks - International Conference on Computer Analysis of Images and Patterns (CAIP) 2019.
        5. Audio Style Transfer Using Shallow Convolutional Networks And Random Filters - Multimedia Tools & Applications (Springer) 2020
    `, 
    "paper": `
        Dancetrack: Multi-Object Tracking In Uniform Appearance and Diverse Motion,
        2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
    `
},
{
    "abstract":``,
    "paper":``
}, 
{
    "abstract": `
        1. Improvement of optical flow estimation by using the hampel filter for low end embedded systems
        2. Comparative performance analysis of optical flow algorithms for anomaly detection
        3. Pwc-net cnns for optical flow using pyramid warping and cost volume
        4. Deep learning for vehicle speed prediction
        5. Driver behavior profiling and recognition using deep-learning methods in accordance with traffic regulations and experts guidelines
    `, 
    "paper": `
        Audio Style Transfer Using Shallow Convolutional Networks And Random Filters - Multimedia Tools & Applications (Springer) 2020
    `
}, 
{
    "abstract": `
        1: Automatic Generation of Road Trip Summary Video for Reminiscence and Entertainment using Dashcam Video
        (Published in: 13th International Conference on Automotive User Interfaces and Interactive Vehicular Applications, September 2021)
        2: Detection of Stop Sign Violations From Dashcam Data
        (Published in: IEEE TRANSACTIONS ON INTELLIGENT TRANSPORTATION SYSTEMS, June 2022)
        3: MM-trafficEvent: An Interactive Incident Retrieval System for First-view Travel-log Data
        (Published in: 2021 IEEE International Conference on Big Data (Big Data))
        4: DBUS: Human Driving Behavior Understanding System
        (Published in: 2019 IEEE/CVF International Conference on Computer Vision Workshop (ICCVW))
        5: Focus on Local: Detecting Lane Marker from Bottom Up via Key Point
        (Published in: 2021 Computer Vision and Pattern Recognition)
    `, 
    "paper": `
        Driver behavior profiling and recognition using deep-learning methods in accordance with traffic regulations and experts guidelines
    `
}, 
{
    "abstract": `
        1. Fully Supervised Speaker Diarization
        2. Single Image Reflection Removal through Cascaded Refinement
        3. DeepFace: Closing the Gap to Human-Level Performance in Face Verification
        4. CoCa: Contrastive Captioners are Image-Text Foundation Models
        5. Socratic Models : Composing Zero-Shot Multimodal Reasoning with Language
    `, 
    "paper": `
        Focus on Local: Detecting Lane Marker from Bottom Up via Key Point
        (Published in: 2021 Computer Vision and Pattern Recognition)
    `
}, 
{
    "abstract": `
        1. Mobile-Former: Bridging MobileNet and Transformer
        2. ShuffleNet: An Efficient Convolutional Neural Network for Mobile Devices
        3. Rethinking Spatial Dimension of Vision Transformers
        4. Lightweight Network Architecture for Real-Time Action Recognition
        5. Evaluating Transformers for Lightweight Action Recognition
    `, 
    "paper": `
        Socratic Models : Composing Zero-Shot Multimodal Reasoning with Language
    `
},  
{
    "abstract": `
        1. Development of Computer Vision based Robust Approach for Joggled Fish Plate Detection in Drone Images
        2. Real Time Traffic Density Measurement using Computer Vision and Dynamic Traffic Control
        3. Automatic Leaf Counting Using Improved YOLOv3
        4. A computer vision approach to diagnose Parkinson Disease using Brain CT Images
        5. Plants Diseases Prediction Framework: A Image-Based System Using Deep Learning
    `, 
    "paper": `
        Evaluating Transformers for Lightweight Action Recognition
    `
},
{
    "abstract": `
        1. Generating Character Descriptions for Automatic Summarization of Fiction
        2. BOOKSUM: A Collection of Datasets for Long-form Narrative Summarization        
        3. Pet Cat Behavior Recognition Based on YOLO Model   
        4. Audio Summarization for Podcasts        
        5. Animating Pictures with Eulerian Motion Fields
    `, 
    "paper": `
        Plants Diseases Prediction Framework: A Image-Based System Using Deep Learning
    `
}, 
{
    "abstract":``,
    "paper":``
}, 
{
    "abstract": `
        1. Indoor Scene Recognition in 3D
        2. A Movie Summary Generation System
        3. Deep Learning Based Application for Indoor Scene Recognition
        4. To Paint in Tongues - Interactive, Artistic and Mobile Information Visualization for Social Media Texts - Creativity Enhancement by Painting with Tweets on a Smart Tablet
        5. Face Detection and Recognition System using Digital Image Processing
    `, 
    "paper": `
        Animating Pictures with Eulerian Motion Fields
    `
},
{
    "abstract": `
        1. Playable Environments: Video Manipulation in Space and Time
        2. Bringing Old Films Back to Life
        3. GaitFM: Fine-grained Motion Representation for Gait Recognition
        4. Gait Recognition in the Wild with Dense 3D Representations and A Benchmark
        5. Combining the Silhouette and Skeleton Data for Gait Recognition
    `, 
    "paper": `
        Face Detection and Recognition System using Digital Image Processing
    `
},
{
    "abstract": `
        1. AE TextSpotter: Learning Visual and Linguistic Representation for Ambiguous Text Spotting
        2. HybrIK: A Hybrid Analytical-Neural Inverse Kinematics Solution for 3D Human Pose and Shape Estimation
        3. MotionAug: Augmentation with Physical Correction for Human Motion Prediction
        4. YOLOv7: Trainable bag-of-freebies sets new state-of-the-art for real-time object detectors
        5. CDistNet: Perceiving Multi-Domain Character Distance for Robust Text Recognition
    `, 
    "paper": `
        Combining the Silhouette and Skeleton Data for Gait Recognition
    `
}, 
{
    "abstract": `
        1. VibroWeight : Simulating Weight and Center of Gravity Changes of Objects in Virtual Reality for Enhanced Realism
        2. Anywhere Hoop : Virtual Free Throw Training System
        3. Vision Extension for a Ball Camera by Using Image Completion
        4. Computer-assisted Billiard Self-Training Using Intelligent Glasses
        5. Macro and Micro Reinforcement Learning for Playing Nine-ball pool
    `, 
    "paper": `
        CDistNet: Perceiving Multi-Domain Character Distance for Robust Text Recognition
    `
}, 
{
    "abstract": `
        1. UNSUPERVISED REPRESENTATION LEARNING WITH DEEP CONVOLUTIONAL GENERATIVE ADVERSARIAL NETWORKS
        2. Learning a Probabilistic Latent Space of Object Shapes via 3D Generative-Adversarial Modeling
        3. Self-Attention Generative Adversarial Networks
        4. PROGRESSIVE GROWING OF GANS FOR IMPROVED QUALITY, STABILITY, AND VARIATION
        5. Analyzing and Improving the Image Quality of StyleGAN
    `, 
    "paper": `
        Macro and Micro Reinforcement Learning for Playing Nine-ball pool
    `
},
{
    "abstract": `
        1. Human Gait Recognition Based on Multiple Feature Combination and Parameter Optimization Algorithms
        2. Real-world smartphone-based gait recognition
        3. Human gait recognition subject to different covariate factors in a multi-view environment
        4. Time-sliced averaged motion history image for gait recognition
        5. Gait Recognition via Effective Global-Local Feature Representation and Local Temporal Aggregation
    `, 
    "paper": `
        Analyzing and Improving the Image Quality of StyleGAN
    `
},
{
    "abstract": `
        How Netflix Uses Analytics To Select Movies, Create Content, and Make Multimillion Dollar Decisions
    `, 
    "paper": `
        Gait Recognition via Effective Global-Local Feature Representation and Local Temporal Aggregation
    `
}, 
{
    "abstract": `
        1. Research and Development of Intelligent  Recognition system for pull-up Action Norms  Based on OpenPose
        2. Activity and Stress Estimation Based on OpenPose and Electrocardiogram for User-Focused Level-4-Vehicles
        3. Relationship Between the Results of Arm Swing Data From the OpenPose-Based Gait Analysis System and MDS-UPDRS Scores
        4. Lightweight OpenPose Based Body Posture  Estimation for Badminton Players 
        5. Fall detection based on OpenPose and MobileNetV2 network
    `, 
    "paper": `
        Deep Laplacian Pyramid Networks for Fast and Accurate Super-Resolution (2017 CVPR)`    
}
]

var specialHoliday = new Map();
// 特殊情況暫停報論文一周
specialHoliday.set("2/3","過年");
specialHoliday.set("1/20","SpecialTopic(一個人15分鐘)");
specialHoliday.set("6/16","SpecialTopic(一個人15分鐘)");
specialHoliday.set("9/15","老師出國(Professor going abroad)");