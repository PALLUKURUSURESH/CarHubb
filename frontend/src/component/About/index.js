import React from 'react';
import { CircleDot, Settings, ShieldCheck, Gauge, Car, Wrench } from 'lucide-react';
import './index.css'

const carInfo = [
  {
    title: 'Engine & Performance',
    icon: CircleDot,
    items: [
      { name: 'Inline Engine', desc: 'Cylinders arranged in a straight line, common in everyday vehicles' },
      { name: 'V-Type Engine', desc: 'Cylinders in V-shape, found in high-performance vehicles' },
      { name: 'Electric Motor', desc: 'Powered by electricity, offering instant torque and zero emissions' },
      { name: 'Hybrid System', desc: 'Combines combustion engine with electric motor for efficiency' }
    ]
  },
  {
    title: 'Transmission Systems',
    icon: Settings,
    items: [
      { name: 'Manual Transmission', desc: 'Driver controls gear changes using clutch and shifter' },
      { name: 'Automatic Transmission', desc: 'Self-shifting gears for convenient driving experience' },
      { name: 'CVT', desc: 'Continuously Variable Transmission for smooth, stepless acceleration' },
      { name: 'DCT', desc: 'Dual-Clutch Transmission for lightning-fast gear changes' }
    ]
  },
  {
    title: 'Drive Systems',
    icon: Car,
    items: [
      { name: 'Front-Wheel Drive', desc: 'Better fuel economy and handling in everyday conditions' },
      { name: 'Rear-Wheel Drive', desc: 'Superior performance dynamics and weight distribution' },
      { name: '4-Wheel Drive', desc: 'Enhanced off-road capability with selectable power delivery' },
      { name: 'All-Wheel Drive', desc: 'Continuous power to all wheels for maximum traction' }
    ]
  },
  {
    title: 'Safety Systems',
    icon: ShieldCheck,
    items: [
      { name: 'Active Safety', desc: 'Systems like ABS, ESC, and Traction Control to prevent accidents' },
      { name: 'Passive Safety', desc: 'Airbags, crumple zones, and reinforced cabin structure' },
      { name: 'ADAS Features', desc: 'Lane keeping, automatic emergency braking, adaptive cruise control' },
      { name: 'Safety Ratings', desc: 'NCAP crash test standards and safety certifications' }
    ]
  },
  {
    title: 'Performance Metrics',
    icon: Gauge,
    items: [
      { name: 'Torque', desc: 'Rotational force that determines acceleration and pulling power' },
      { name: 'Horsepower', desc: 'Engine power output affecting top speed and acceleration' },
      { name: 'Power-to-Weight', desc: 'Ratio between engine power and vehicle weight' },
      { name: '0-100 km/h', desc: 'Acceleration time from standstill to 100 kilometers per hour' }
    ]
  },
  {
    title: 'Maintenance',
    icon: Wrench,
    items: [
      { name: 'Regular Service', desc: 'Scheduled maintenance for optimal performance and longevity' },
      { name: 'Oil Changes', desc: 'Regular oil changes to maintain engine health and efficiency' },
      { name: 'Brake System', desc: 'Periodic brake pad and rotor inspection and replacement' },
      { name: 'Tire Care', desc: 'Rotation, alignment, and pressure maintenance for safety' }
    ]
  }
];

export default function About() {
  return (
    <div className="About-container">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Understanding Your Vehicle
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        From engine types to safety features, learn everything you need to know about modern vehicles
        and make informed decisions about your next car purchase.
      </p>
      
      <div className="space-y-16">
        {carInfo.map((section) => {
          const IconComponent = section.icon;
          return (
            <div key={section.title} className="card">
              <div className="card-header">
                <IconComponent className="icons" />
                <h2 >
                  {section.title}
                </h2>
              </div>
              
              <div className="card-info">
                {section.items.map((item) => (
                  <div 
                    key={item.name}
                    className="card-file"
                  >
                    <h3 >
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="remaind-card">
        <h2 >
          Need Expert Advice?
        </h2>
        <p >
          Our automotive experts are here to help you understand your vehicle better
        </p>
        <button className="btn-expert">
          Contact an Expert
        </button>
      </div>
    </div>
  );
}