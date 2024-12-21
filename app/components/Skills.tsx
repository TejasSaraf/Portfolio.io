"use client";
import Image from 'next/image';

function Skills() {
  
  
  return (
    <div className="skills">
        <section>
            <h1>Skills</h1>
            <div>
                <button className="languages">languages</button>
            <div className="technical">
                <div className="competencies">
                    <div>
                    <Image className="pythonLogo" src="/python.png" 
                            alt="Python Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>Python</h3>
                    </div>
                </div>

                <div className="competencies">
                    <div>
                    <Image className="javaLogo" src="/java.png" 
                            alt="Java Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>Java</h3>
                    </div>
                </div>

                <div className="competencies">
                    <div>
                    <Image className="javascriptLogo" src="/javascript.png" 
                            alt="javascript Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>Javascript</h3>
                    </div>
                </div>

                <div className="competencies">
                    <div>
                    <Image className="typescriptLogo" src="/typescript.png" 
                            alt="Typescript Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>Typescript</h3>
                    </div>
                </div>

                <div className="competencies">
                    <div>
                    <Image className="htmlLogo" src="/html.png" 
                            alt="Html Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>HTML</h3>
                    </div>
                </div>

                <div className="competencies">
                    <div>
                    <Image className="cssLogo" src="/css.png" 
                            alt="CSS Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>CSS</h3>
                    </div>
                </div>

                <div className="competencies">
                    <div>
                    <Image className="cppLogo" src="/C++.png" 
                            alt="C++ Logo" 
                            width={200} 
                            height={100} />
                    </div>
                    <div>
                    <h3>C++</h3>
                    </div>
                </div>
            </div>
            </div>
        </section>
      
      
    </div>
  );
}

export default Skills;