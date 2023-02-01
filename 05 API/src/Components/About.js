import React, { useState } from 'react';


const Section=({heading,desc,isVisible,setIsVisible})=>{
  

  return (
    <>
    <h3>{heading}</h3>

    {isVisible && <p>{desc}</p>}

    {isVisible ? <button onClick={()=>{

          setIsVisible(false);

      }}>
        Hide</button> : 

      <button onClick={()=>{

        setIsVisible(true);

      }}>
        Show</button>}
    </>
  )

}

const About = () => {

  const [sectionCongif,setSectionConfig]=useState({

    showAbout:false,
    showTeam:false,
    showCarrer:false,

  });

  return (
    <>
      <div>
        <Section  heading={"About Us"} 
        desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} 

        isVisible={sectionCongif.showAbout}
        setIsVisible={()=> setSectionConfig({
          showAbout:true,
          showTeam:false,
          showCarrer:false,
        })}
        />

      </div>

      <div>

        <Section  heading={"Team"} 
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}

        isVisible={sectionCongif.showTeam}

        setIsVisible={()=> setSectionConfig({
          showAbout:false,
          showTeam:true,
          showCarrer:false,
        })}
        />
       
      </div>

      <div>

        <Section heading={"Carrers"} 
        desc={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}

        isVisible={sectionCongif.showCarrer}

        setIsVisible={()=> setSectionConfig({
          showAbout:false,
          showTeam:false,
          showCarrer:true,
        })}
        />
       
      </div>
    </>
  )
}

export default About