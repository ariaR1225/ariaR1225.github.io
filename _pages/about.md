---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi y'all! 😆🤓🤖

I'm Aria and this is my digital portfolio. It will cover most of my experience, especially those relavent to Robotics, including past and ongoing research, projects, and internships. 

Quick intro about myself. I'm currently an undergrad majoring in Mechanical Engineering with a concentration on Robotics at Northwestern University. My passion lies at the intersection of Control Systems, Robot Learning, and Hardware Design. My skills bridge both hardware and software domains. My focus at this point is on multi-agent reinforcement learning and robot learning for manipulation. Moving forward, I'm looking into opportunities in software and machine learning engineering in related fields. 

Looking forward to connecting and sharing ideas! 


# Educations
- *💜 2022.09 - 2025.06*, **Northwestern University** B.S. in Mechanical Engineering (Robotics), minor in CS, certificate in HCI
- *🧡 2020.08 - 2022.05 (Transferred)*, **University of Illinois at Urbana Champaign** B.S. in Mechanical Engineering, minor in Informatics

# Internships
- *🍀 2024.06 - 2024.09*, **Mechatronics Engineer, System Integration & Internal Software** @Ginkgo Bioworks - Automation, Emeryville, CA
- *🚗 2024.01 - 2024.05*, **Manufacturing Engineer, Software Automation** @Tesla - Power Electronics and Energy Product, Fremont, CA
- *🦿 2023.06 - 2023.08*, **Research Engineer, Robotics Control** @Shirley Ryan Abilitylab, Chicago, IL

# Skills
- *💻 Programming*: Python, C/C++, MATLAB, SQL
- *🪄 Dev Tools*: Git, Linux, ROS 1&2, Pytorch, TensorFlow, OpenCV, RoboDK, Tkinter, Docker
- *🔩 Hardware*: CAD (SOLIDWORKS, Siemens NX, Fusion 360), CAM, microcontroller (Raspberry Pi, PIC 32, EPS 32, Arduino), rapid prototyping (3D printing, laser cutting), TwinCAT PLC, communication protocols (UART, I2C, SPI, CAN), IPC, machine shop, soldering, oscilloscope, PCB design 

<!-- # 🔥 News
- *2024.06*: &nbsp;🎉🎉 Joined IDEAS Lab, Northwetsern. 
- *2024.06*: &nbsp;🎉🎉 Started my interhsip at Ginkgo Bioworks - Mechatronics. 
- *2024.01*: &nbsp;🎉🎉 Started my interhsip at Tesla - Power Electronics and Energy Product.
✏️- *2023.03*: &nbsp;🎉🎉 Joined MacIver Lab, Center for Robotics and Biosystems, Northwestern. 
- *2022.09*: &nbsp;🎉🎉 Joined Bionics Lab, Shirley Ryan Abilitylab.  
- *2022.09*: &nbsp;🎉🎉 Transferred to Northwestern University. 
- *2021.07*: &nbsp;🎉🎉 Joined Human Dynamics and Control Lab, UIUC. 
- *2020.08*: &nbsp;🎉🎉 Started my BS in MechE at UIUC.  -->

# Publications 

**Inverse Delayed Reinforcement Learning** 
- *Simon Sinong Zhan, Qingyuan Wu, **Zhian Ruan**, Frank Yang, Philip Wang, Yixuan Wang, Ruochen Jiao, Chao Huang, Qi Zhu*
- [Paper Link](https://arxiv.org/abs/2412.02931)
- Submitted to L4DC

**Distributed Invariant Unscented Kalman Filter based on Inverse Covariance Intersection with Intermittent Measurements** 
- ***Zhian Ruan**, Yizhi Zhou*
- [Paper Link](https://arxiv.org/abs/2409.17997)
- Submitted to L-CSS and ACC

# Projects
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Sensing & Actuation, Haptics Feedback, Sim2Real</div><img src='assets/proj_img/hand.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Robotic Dexirty Hand** [Control software]
- Senior capstone in [HAND ERC](https://hand-erc.org/)
- Responsible for control software development for robotic dexterity hand

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Odometry, Feedfoward & Feedback Control</div><img src='assets/proj_img/kuka.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**KUKA youBot Pick and Place** [Python]
- Created a robotic manipulation simulation for KUKA youBot (4-wheeled omnidirectional mobile base + 5R arm), implementing trajectory generation using screw theory, SE(3) transformations, and Mecanum wheel kinematics
- Built PI feedback control system with pseudoinverse Jacobian for end-effector tracking, incorporating joint limit constraints and singularity handling for stable pick-and-place operations
- Designed modular codebase with configuration management and comprehensive error visualization, enabling autonomous manipulation tasks with error convergence across test scenarios
- [View on GitHub](https://github.com/ariaR1225/KUKA_youBot_Pick_and_Place)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CV, Simulation</div><img src='assets/proj_img/vp_sim.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Vision Pro Simulator** [Python, TensorFlow]
- Developed lightweight Vision Pro simulator with real-time hand gesture and motion recognition achieving >90% accuracy using custom MLP and LSTM neural networks, trained under 90 seconds on CPU
- Implemented interactive photo manipulation features including drag-and-drop, scaling, rotation, and drawing tools using computer vision techniques and bilinear interpolation
- Devised robust hand tracking system maintaining accuracy across varied lighting conditions and multi-user scenarios, with modular pipeline for detection, tracking, and gesture recognition
- [View on GitHub](https://github.com/ariaR1225/Vision_Pro_Simulator)
- [See full video on YouTube](https://youtu.be/KKkD_yFPp-U)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Distributed State Estimation</div><img src='assets/proj_img/ukf.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Invariant Unscented Kalman Filter for Distributed Robotic System** [Matrix Lie Group, Multi-agent SLAM, Sensor Fusion]
- Proposed a target tracking algorithm for distributed time-variant system in 3D with invariant (using matrix Lie group and Lie algebra) UKF for distributed state estimation 
- Applied Inverse Covariance Intersection sensor fusion algorithm as a consistent and less conservative method while handling unknown distributed covariance
- Performed 50 trials of Monte-Carlo simulation at different communication rate (including centralized system) and calculated position and orientation RMSE to show algorithm is robust to time-varying communication topology

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Search Algorithms</div><img src='assets/proj_img/Astar.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Search Algorithm Visualization** [C++]
- Created a visualization tool for search algorithm including A*, Dijkstra and BFS with different types of distance measurement (Euclidean, Manhattan, Chebyshev)
- [View on GitHub](https://github.com/ariaR1225/Search_Algorithm_Visualization)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Planning, Vehicle Dynamics</div><img src='assets/proj_img/PNC.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Planning and Control based on Vehicle Dynamics** [C++]
- Implemented a Planning and Control algorithm based on vehicle dynamics to simulate and analyze vehicle behavior in complex driving scenarios such as overtaking, navigating crosswalks, and executing precise parking maneuvers
- [View on GitHub](https://github.com/ariaR1225/Vehicle_Dynamics_PnC)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Haptics Rendering</div><img src='assets/proj_img/SRA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Lower Limb Exoskeleton Transparency Control** [Python, ROS, Testing]
- Developed a test system for transparent haptics rendering on lower-limb exoskeleton using ROS Noetic
- Evaluated and validated parameters for PID and IIR filter by generating Bode plot and shift in RMSE in Python
- Achieved near zero output at human movement frequency with a less than 10ms delay in real-time

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Embedded Control</div><img src='assets/proj_img/linefollow.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Line Following Robot** [Embedded C++, PID]
- Devised a path following robot based on ATmega32U4 for at 4m/s in low lighting condition
- Tuned PID position controller based on IR sensors and PD speed controller based on encoder via trial-and-error, and attained an over 95% success rate
- Established UART communication with ESP32 as a Wi-Fi module to receive command from a higher-level controller, integrated a circuit consisting of a power source and LEDs for computer vision

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Control System</div><img src='assets/proj_img/2Rdemo.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**2R Robot Impact Simulation** [Lagragian Mechanics, Numerical Analysis, Python]
- Modeled a rigid body (with elastic impact) inside a box handled by a 2R robot as an end effector via Lagrangian mechanics and RK4, and implemented gravity compensation due to mass of the links and joints of the robot with optimal control
- [View on GitHub](https://github.com/ariaR1225/NU_MECHE_314)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">FEA</div><img src='assets/proj_img/bracket.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**CNC Milling Bracket Design and Manufacture** [Siemens NX, FEA]
- Redesigned a bracket for tool holder on a CNC mill, with material changed from steel to Nylon 12, meeting the requirement to remain in one piece, keep end deflection within 0.1mm when 100N force and, reduce more than 50% weight
- Practiced GD&T in the bracket's engineering drawing which ensures manufacturing accuracy and consistency
- Conducted FEA in Siemens NX stress and deflection, calculated bolt torque for fasteners, and then improved the design with features to address stress concentration according to the simulation

</div>
</div>

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->
  
<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->
 -->
