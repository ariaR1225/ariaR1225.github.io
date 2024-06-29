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

Quick intro about myself. I'm currently an undergrad majoring in Mechanical Engineering with a concentration on Robotics at Northwestern University. My passion lies at the intersection of Control Systems, Robot Learning, and Hardware Design. My skills bridge both hardware and software domains. My focus at this point on multi-agent localization and exploring reinforcement learning applications in autonomous vehicles. Moving forward, I'm looking into opportunities in control software and system integration in related fields. 

Looking forward to connecting and sharing ideas! 

<!--
My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 📓 Educations
- *💜 2022.09 - 2025.06*, **Northwestern University** B.S. in Mechanical Engineering (Robotics), certificate in HCI 
- *🧡 2020.08 - 2022.05 (Transferred)*, **University of Illinois at Urbana Champaign** B.S. in Mechanical Engineering, minor in Informatics

# 📨 Internships
- *🍀 2024.06 - 2024.09*, Ginkgo Bioworks - Mechatronics and Automation, Emeryville, CA
- *🚗 2024.01 - 2024.05*, Tesla - Power Electronics and Energy Product, Fremont, CA
- *🦿 2023.06 - 2023.08*, Shirley Ryan Abilitylab - Neurorehabilitation and Neural Engineering Lab, Chicago, IL

# 📏 Skills
- *💻 Programming*: Python, MATLAB, C/C++, SQL, Golang
- *🪄 Dev Tools*: Git, Linux, ROS 1&2PLC, OpenCV, TensorFlow, Pytorch, RoboDK, Tkinter, Docker
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

# 📝 Projects 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Localization</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<!-- (https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf) -->

<!-- **Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun -->

**Distributed Invariant Unscented Kalman Filter Based Target Tracking Algorithm** [Matrix Lie Group, Multi-agent SLAM, MATLAB]
<!-- (https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- In Progress
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CV, Localization</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Consistent Multi-Robot Cooperative Visual-Inertia-Odometry based on Lie Group** [Python, ROS, Multi-agent SLAM]
- In Progress
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
- Established UART communication with ESP32 as a Wi-Fi module to receive command from a higher-level controller,
integrated a circuit consisting of a power source and LEDs for computer vision

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Control System</div><img src='assets/proj_img/2Rdemo.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**2R Robot Impact Simulation** [Lagragian Mechanics, Numerical Analysis, Python]
- Modeled a rigid body (with elastic impact) inside a box handled by a 2R robot as an end effector via Lagrangian mechanics
and RK4, and implemented gravity compensation due to mass of the links and joints of the robot with optimal control
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

