import React from 'react';
import './DashboardDemo.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const DashboardDemo = () => {
  return (
    <section className="dashboard-demo">
      <h2 className="dashboard-title">📈 4. Real-Time Dashboard Demo</h2>
      <p className="dashboard-subtext">
        Explore a smart healthcare dashboard in action – monitoring vitals, predicting risks, and enabling AI-driven care.
      </p>

      <div className="dashboard-mockup ">
        {/* Live Vitals */}
        <div className="dashboard-card live-card">
          <h3>🫀 Live Vitals</h3>
          <ul>
            <li>Heart Rate: <strong>78 bpm</strong></li>
            <li>Blood Pressure: <strong>120/80</strong></li>
            <li>O₂ Saturation: <strong>97%</strong></li>
          </ul>
        </div>

        {/* Risk Prediction Chart */}
        <div className="dashboard-card risk-card">
          <h3>📊 Risk Prediction</h3>
          <DotLottieReact
          src="/image/Animation - 1745499089153.json"  // Path to the Lottie JSON file in the public folder
          loop={true}                      // Make the animation loop
          autoplay={true}                  // Start the animation automatically
          className="mock-chart"
        />
        </div>

        {/* Patient Alerts */}
        <div className="dashboard-card alert-card">
          <h3>⚠️ Patient Alerts</h3>
          <ul>
            <li>🟡 Elevated blood pressure</li>
            <li>🔴 Irregular heartbeat detected</li>
          </ul>
        </div>

        {/* AI Recommendations */}
        <div className="dashboard-card ai-card">
          <h3>🤖 AI-Recommended Actions</h3>
          <ul>
            <li>Start low-dose beta-blocker</li>
            <li>Schedule cardiology consult</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;
