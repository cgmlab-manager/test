var student = [ "Mojib", "李一峯", "葉三吉", "吳家霖",  "老師上課", "雯筑", "姿廷", "Rini", "Molion", "Edwin", "張宗雅", "Vicky", "Jenny", "Allen", "Summer", "Hank", "Jack", 'Marcell', 'Haile', 'Nigus'];

var startNumber = 2
var newStudentArray = [
    // {
    //     "name" : "Marcell",
    //     "date" : "5/18",
    //     "addStatus" : false
    // },
    // {
    //     "name" : "Haile",
    //     "date" : "5/25",
    //     "addStatus" : false
    // },
    // {
    //     "name" : "Nigus",
    //     "date" : "6/1",
    //     "addStatus" : false
    // },
];

var graduate = new Map();
//畢業生畢業日期

// Start: 博士生
// graduate.set("林捷","1/1");
// graduate.set("Mojib","1/1");
// End: 博士生

// Start: 恭喜畢業
// graduate.set("Yohanes","5/1");
// graduate.set("姵璇", "");
// graduate.set("宗雅", "");
// graduate.set("Tim", "");
graduate.set("雯筑", "6/1");
graduate.set("姿廷", "6/1");
graduate.set("Rini", "6/1");
graduate.set("張宗雅", "6/1");
graduate.set("Mojib", "6/1");
// End: 恭喜畢業

var newStudentInsertEarly = new Map();
var specialHoliday = new Map();
var teacherDelayTime = new Map();
// teacherDelayTime.set("6/8",2);
var specialTeacherTime = new Map();
specialTeacherTime.set("1/19","老師上課");
specialTeacherTime.set("7/20","老師上課");
specialTeacherTime.set("11/30","老師上課");

// 特殊情況暫停報論文一周
specialHoliday.set("1/26","過年");
specialHoliday.set("1/12","SpecialTopic(一個人15分鐘)");
specialHoliday.set("5/18","老師出國(Professor going abroad)");
specialHoliday.set("6/8","SpecialTopic(一個人15分鐘)");
specialHoliday.set("6/22","端午節");
specialHoliday.set("8/3","颱風假")

var reportTitle = [
    {
        "abstract":``,
        "paper":``
    }, 
    {
        "abstract":``,
        "paper":``
    }, 
    {
        "abstract":``,
        "paper": ``
    },
    {
        "abstract":``,
        "paper": ``
    },    
    {
        "abstract":`
            1. Improving Deepfake Detection by Mixing Top Solutions of the DFDC            
            2. Exposing Deep Fakes Using Inconsistent Head Poses            
            3. Adversarial Threats to DeepFake Detection: A Practical Perspective            
            4. Towards Robust Blind Face Restoration with Codebook Lookup Transformer            
            5. Perspective Reconstruction of Human Faces by Joint Mesh and Landmark Regression
        `,
        "paper":`
            Fall detection based on OpenPose and MobileNetV2 network
        `
    },             
    {
        "abstract":`
            1. Deepfakes for Medical Video De-Identification: Privacy Protection and Diagnostic Information Preservation
            2. De-identification Without Losing Faces
            3. Deep Motion Flow Aided Face Video De-identification
            4. Query-guided End-to-End Person Search
            5. Video Summarization by Learning from Unpaired Data
        `,
        "paper":`
            Perspective Reconstruction of Human Faces by Joint Mesh and Landmark Regression
        `
    },
    {
        "abstract":`
            1. Style Compatibility for 3D Furniture Models
            2. A Search-Classify Approach for Cluttered Indoor Scene Understanding
            3. Human-centric metrics for indoor scene assessment and synthesis Graph Models 110
            4. SceneFormer: Indoor Scene Generation with Transformers
            5. Interactive Furniture Layout Using Interior Design Guidelines
        `,
        "paper":`
            Video Summarization by Learning from Unpaired Data
        `
    },
    {
        "abstract":`
            1. PoseTrack: A Benchmark for Human Pose Estimation and Tracking
            2. Detect-and-Track: Efficient Pose Estimation in Videos
            3. MediaPipe Hands: On-device Real-time Hand Tracking
            4. Pen Spinning Hand Movement Analysis Using MediaPipe Hands
            5. Pose Trainer: Correcting Exercise Posture using Pose Estimation
        `,
        "paper":`
            Interactive Furniture Layout Using Interior Design Guidelines
        `
    },      

    {
        "abstract":`
        `,
        "paper":`
            
        `
    }, 
    {
        "abstract":`
            1. AUDIO STYLE TRANSFER
            2. MelGAN-VC: Voice Conversion and Audio Style Transfer on arbitrarily long samples using Spectrograms
            3. Timbre-enhanced Multi-modal Music Style Transfer with Domain Balance Loss
            4. Audio Mixing using Image Neural Style Transfer Networks
            5. Audio Style Transfer Using Shallow Convolutional Networks And Random Filters
        `,
        "paper":`
            Pose Trainer: Correcting Exercise Posture using Pose Estimation
        `
    }, 
    {
        "abstract":`
            1. Object Distance Measurement System Using Monocular Camera on Vehicle
            2. Aggressive Driving Detection Using Deep Learning-based Time Series Classification
            3. Drivable Area Detection Using Deep Learning Models for Autonomous Driving
            4. Distance Estimation Between Camera and Vehicles from an Image using YOLO and Machine Learning
            5. Dist-YOLO: Fast Object Detection with Distance Estimation 
        `,
        "paper":`
            Audio Style Transfer Using Shallow Convolutional Networks And Random Filters
        `
    }, 
    {
        "abstract":`
            1. Locate and Label: A Two-stage Identifier for Nested Named Entity Recognition 
            2. Multi-modal Graph Fusion for Named Entity Recognition with Targeted Visual
            3. Playing a Part: Speaker Verification at the movies
            4. Speaker Naming in TV programs Based on Speaker Role Recognition
            5. Cinematographic Shot Classification with Deep Ensemble Learning
        `,
        "paper":`
            Dist-YOLO: Fast Object Detection with Distance Estimation 
        `
    }, 
    {
        "abstract":`
            1. Geometry-Guided Adaptation for Road Segmentation        
            2. Recognizing the style of a fine-art painting with EfficientNet and Transfer learning        
            3. Plant Disease Identification from Leaf Images using Deep CNN’s EfficientNet        
            4. Shadow Removal via Shadow Image Decomposition        
            5. Visualizing Paired Image Similarity in Transformer Networks    
        `,
        "paper":`
            Cinematographic Shot Classification with Deep Ensemble Learning
        `
    }, 
    {
        "abstract":`
            1. Storyline Visualizations of Eye Tracking of Movie Viewing
            2. Book Cover Synthesis from the Summary
            3. StoryPrint: an interactive visualization of stories
            4. 4W1H Keyword Extraction basedSummarization Model  
            5. BANMo: Building Animatable 3D Neural Models from Many Casual Videos        
        `,
        "paper":`
            Visualizing Paired Image Similarity in Transformer Networks
        `
    }, 
    {
        "abstract":`
            1. A Mobile Robot Generating Video Summaries of Seniors' Indoor Activities
            2. A Web Service for Video Summarization
            3. Data Visualization and Analysis of Agricultural Land Use System Employing GI
            4. Towards Multimodal Search and Visualization of Movies Based on Emotions
            5. A new multimodal deep-learning model to video scene segmentation
        `,
        "paper":`
            BANMo: Building Animatable 3D Neural Models from Many Casual Videos
        `
    }, 
    {
        "abstract":`
            1. Continuous Sign Language Recognition with Correlation Network
            2. 3D Cinemagraphy from a Single Image
            3. Kubric: A scalable dataset generator
            4. CASIA-E: A Large Comprehensive Dataset for Gait Recognition
            5. GaitEdge: Beyond Plain End-to-end Gait Recognition for Better Practicality
        `,
        "paper":`
            A new multimodal deep-learning model to video scene segmentation
        `
    }, 
    {
        "abstract":`
            1. In-Pulse: Inducing Fear and Pain in Virtual Experiences
            2. Catching a Real Ball in Virtual Reality
            3. VR system to simulate tightrope walking with a standalone VR headset and slack rails
            4. A Tangible Haptic Feedback Box for Mixed Reality Billiard in Tight Spaces
            5. A Fast Deep Learning Based Approach for Basketball Video Analysis
        `,
        "paper":`
            GaitEdge: Beyond Plain End-to-end Gait Recognition for Better Practicality
        `
    }, 
    {
        "abstract":`
            
        `,
        "paper":`
            
        `
    }, 
    {
        "abstract":`
            1. Assist Home Training Table Tennis Skill Acquisition via Immersive Learning and Web Technologies
            2. BetterSight: Immersive Vision Training for Basketball Players
            3. GroundFlow: Liquid-based Haptics for Simulating Fluid on the Ground in Virtual Reality
            4. Augmented Tai-Chi Chuan Practice Tool with Pose Evaluation
            5. Push-Ups: Enhancing Kinesthetic Experience with Shape-Forming Devices on the Feet Soles            
        `,
        "paper":`
            A Fast Deep Learning Based Approach for Basketball Video Analysis
        `
    }, 
    {
        "abstract":`

        `,
        "paper":`
            
        `
    }, 
    {
        "abstract":`
            1. Detection and tracking of pianist hands and fingers 
            2. Marker-less piano fingering recognition using sequential depth images 
            3. Attention! A Lightweight 2D Hand Pose Estimation Approach 
            4. 3D Hand Shape and Pose Estimation from a Single RGB Image 
            5. LG-Hand: Advancing 3D Hand Pose Estimation with Locally and Globally Kinematic Knowledge
        `,
        "paper":`
            Push-Ups: Enhancing Kinesthetic Experience with Shape-Forming Devices on the Feet Soles
        `
    },     
    {
        // 20230601
        "abstract":`
            1. Acoustic Classification of Bird Species Using an Early Fusion of Deep Features
            2. Investigation of Different CNN-Based Models for Improved Bird Sound Classification
            3. Sound Source Distance Estimation Using Deep Learning: An Image Classification Approach
            4. Drone sound detection system based on feature result-level fusion using deep learning
            5. Sound Source Localization Using a Convolutional Neural Network and Regression Model
        `,
        "paper":`
            Attention! A Lightweight 2D Hand Pose Estimation Approach
        `
    }, 
    {
        // 20230608
        "abstract":`

        `,
        "paper":`

        `
    }, 
    {
        // 20230615
        "abstract":`
            1. Innovative lane detection method to increase the accuracy of lane departure warning system
            2. Spatial As Deep: Spatial CNN for Traffic Scene Understanding
            3. A Deep Learning Approach for Lane Detection
            4. Applying deep neural networks for multi-level classification of driver drowsiness using Vehicle-based measures
            5. LLDNet: A Lightweight Lane Detection Approach for Autonomous Cars Using Deep Learning. Sensors
        `,
        "paper":`
            Sound Source Localization Using a Convolutional Neural Network and Regression Model
        `
    }, 
    {
        // 20230622
        "abstract":`

        `,
        "paper":`
            
        `
    }, 
    {
        // 20230629
        "abstract":`
            1. Explaining and Harnessing Adversarial Examples
            2. Adversarial Examples in the Physical World
            3. Adversarial Patch
            4. One Pixel Attack for Fooling Deep Neural Networks
            5. Accessorize to a Crime: Real and Stealthy Attacks on State-of-the-Art Face Recognition        
        `,
        "paper":`
            LLDNet: A Lightweight Lane Detection Approach for Autonomous Cars Using Deep Learning. Sensors
        `
    }, 
    {
        // 20230706與林伯慎老師實驗室Meeting
        "abstract":`

        `,
        "paper":`
            
        `
    }, 
    {
        // 20230713
        "abstract":`
            1 Reliability and validity of OpenPose  for measuring hip‑knee‑ankle angle  in patients with knee osteoarthritis
            2 Automated Implementation of the Edinburgh Visual Gait Score (EVGS) Using OpenPose and Handheld Smartphone Video
            3 Robust Abnormal Human-Posture Recognition Using OpenPose and Multiview Cross-Information
            4 Human’s Reaction Time Based Score Calculation of  Self-practice Dynamic Yoga System for User’s Feedback by OpenPose and Fuzzy Rules 
            5 Tele-Snap: a joint impedance estimation system using snap motor and openPose for remote rehabilitation diagnosis
        `,
        "paper":`
            Accessorize to a Crime: Real and Stealthy Attacks on State-of-the-Art Face Recognition
        `
    }, 
    {
        // 20230720
        "abstract":`

        `,
        "paper":`
        
        `
    }, 
    {
        // 20230727
        "abstract":`
            1. Traffic Lights Detection and Recognition Method Based on the Improved YOLOv4 Algorithm
            2. An Enhanced Deep Learning Model for Obstacle and Traffic Light Detection Based on YOLOv5
            3. Deep learning-based vehicle speed estimation using the YOLO detector and 1D-CNN
            4. An End to End Learning based Ego Vehicle Speed Estimation System
            5. EGO VEHICLE SPEED ESTIMATION USING 3D CONVOLUTION WITH MASKED ATTENTION
        `,
        "paper":`
            Tele-Snap: a joint impedance estimation system using snap motor and openPose for remote rehabilitation diagnosis
        `
    }, 
    {
        // 20230803
        "abstract":`
            
        `,
        "paper":`

        `
    },    
    {
        // 20230810
        "abstract":`
            1. MuscleSense: Exploring Weight Sensing using Wearable Surface Electromyography (sEMG)
            2. StrengthGaming: Enabling Dynamic Repetition Tempo in Strength Training-based Exergame Design            
            3. Reality Rifts: Wonder-ful Interfaces by Disrupting Perceptual Causality            
            4. Miniature Haptics: Experiencing Haptic Feedback through Hand-based and Embodied Avatars            
            5. ProGesAR: Mobile AR Prototyping for Proxemic and Gestural Interactions with Real-world IoT Enhanced Spaces            
        `,
        "paper":`
            EGO VEHICLE SPEED ESTIMATION USING 3D CONVOLUTION WITH MASKED ATTENTION
        `
    },   
    {
        // 20230817
        "abstract":`

        `,
        "paper":`
            ProGesAR: Mobile AR Prototyping for Proxemic and Gestural Interactions with Real-world IoT Enhanced Spaces   
        `
    },   
    {
        // 20230824
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        // 20230831
        "abstract":`

        `,
        "paper":`            
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
    {
        "abstract":`

        `,
        "paper":`
        `
    },
]