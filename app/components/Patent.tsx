"use client";

function Patent() {
  return (
    <div id="patent" className="patent">
      <div className="patentTitle">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960">
          <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"></path>
        </svg>
        <span className="h1">Patent</span>
      </div>
      <div className="patentSection">
          <div className="mt-4 patentContent">
            <h2>QUANTUM HARDWARE DESIGN AND FABRICATION & QUANTUM ALGORITHMS FOR MACHINE LEARNING</h2>
            <h3>202321086733 · Issued Jan 19, 2024</h3>
            <span>Our invention is related to enhancement of algorithms in quantum computing processors. </span>
            <span>Quantum computing, built on the principles of quantum mechanics, introduces qubits as the fundamental unit of information, enabling parallel processing through superposition and entanglement. Contributed to quantum hardware innovations, developing a 25-qubit processor with 99.9% gate fidelity. Optimized qubit coherence by 60%, engineered machine learning algorithms, and integrated error correction for enhanced resilience.</span>
            <span>The integration of these advancements showcases the potential for exponential acceleration in solving complex problems previously beyond the capabilities of classical computers. The application of quantum computing spans diverse sectors, from cryptography and drug discovery to materials science and artificial intelligence, promising a transformative impact on numerous industries.</span>
          </div>
        </div>
    </div>
  );
}

export default Patent;
