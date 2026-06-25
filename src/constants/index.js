import {
  mobile,
  backend,
  creator,
  web,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  c,
  cpp,
  python,
  stm32,
  esp32,
  freertos,
  linux,
  canbus,
  gdb,
  gcc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Embedded C Development",
    icon: web,
  },
  {
    title: "STM32 Firmware Development",
    icon: mobile,
  },
  {
    title: "Linux Device Drivers",
    icon: backend,
  },
  {
    title: "RTOS & Communication Protocols",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Embedded C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "STM32",
    icon: stm32,
  },
  {
    name: "ESP32",
    icon: esp32,
  },
  {
    name: "FreeRTOS",
    icon: freertos,
  },
  {
    name: "Linux Internals",
    icon: linux,
  },
  {
    name: "CAN BUS",
    icon: canbus,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "GDB",
    icon: gdb,
  },
  {
    name: "GCC",
    icon: gcc,
  },
];

const experiences = [
  {
    title: "Embedded systems and design Trainee",
    company_name: "C-DAC Sunbeam Institute",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2026 - Present",
    points: [
      "Completed intensive training in Embedded Systems Design covering Embedded C, C++, ARM Cortex-M architecture, STM32 microcontrollers, and firmware development.",
      "Developed hands-on expertise in peripheral interfacing including GPIO, ADC, Timers, PWM, UART, SPI, I2C, CAN, and interrupt-driven programming on STM32 platforms.",
      "Worked with FreeRTOS concepts such as task scheduling, semaphores, mutexes, queues, and real-time application development.",
      "Gained practical experience in Linux system programming, Linux Device Drivers, kernel modules, file_operations, and user-space/kernel-space communication.",
      "Designed and implemented embedded projects involving CAN communication, sensor interfacing, hardware debugging, and real-time system integration using STM32 and ESP32."
    ]
  },
  {
    title: "Embedded Systems & IoT Development Intern",
    company_name: "Pragyakalp Innovations",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2023 - April 2023",
    points: [
      "Learned the fundamentals of Embedded Systems and IoT development using ESP32 microcontrollers.",
      "Worked on basic interfacing of sensors and peripherals using communication protocols such as UART, SPI, and I2C.",
      "Gained hands-on experience with Embedded C programming, GPIO control, and microcontroller-based applications.",
      "Participated in testing, debugging, and troubleshooting embedded hardware and firmware under the guidance of senior engineers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wearable EMG Robotic Control",
    description:
      "Designed a wearable EMG signal acquisition platform using STM32 Discovery Board, AD8232-based analog front-end circuitry, and embedded C to capture and condition low-amplitude muscle bio-signals in real time to drive a 5-DOF robotic arm.",
    tags: [
      {
        name: "STM32F407G",
        color: "blue-text-gradient",
      },
      {
        name: "ESP32-C3",
        color: "green-text-gradient",
      },
      {
        name: "Embedded-C",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "CAN Vehicle Monitoring System",
    description:
      "Developed a distributed CAN-based vehicle monitoring system on STM32F407, enabling reliable real-time communication between sensing (LM35, HC-SR04) and alert modules using the Controller Area Network protocol.",
    tags: [
      {
        name: "STM32F407",
        color: "blue-text-gradient",
      },
      {
        name: "CAN-Bus",
        color: "green-text-gradient",
      },
      {
        name: "STM32CubeIDE",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/heymayur69/CAN-Based-Vehicle-Monitoring-System",
  },
  {
    name: "Railway Accident Prevention System",
    description:
      "Built a distributed safety pipeline on a dual-core ESP32 by orchestrating FreeRTOS deterministic task scheduling to prioritize safety-critical sensor data (LiDAR/IR arrays) using ISRs and binary semaphores.",
    tags: [
      {
        name: "ESP32",
        color: "blue-text-gradient",
      },
      {
        name: "FreeRTOS",
        color: "green-text-gradient",
      },
      {
        name: "Bare-Metal C",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/heymayur69/RAPS",
  },
];

const labTools = [
  { name: "Oscilloscope", description: "Signal analysis & wave tracking" },
  { name: "Logic Analyzer", description: "Protocol debugging (I2C/SPI/UART)" },
  { name: "JTAG / SWD Debuggers", description: "Hardware flashing & debugging" },
  { name: "Digital Multimeter", description: "Voltage, current, & continuity checks" },
  { name: "Function Generator", description: "Signal simulation & clock injection" },
  { name: "Soldering & SMD Rework", description: "PCB prototyping & assembly" },
  { name: "PCB Designing", description: "Schematics & board layout using KiCad & Altium" }
];

export { services, technologies, experiences, testimonials, projects, labTools };