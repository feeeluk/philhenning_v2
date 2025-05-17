import ItemSkill from "@/app/components/ItemSkill"
import ItemAgile from "@/app/components/ItemAgile"
import ItemTool from "@/app/components/ItemTool"
import ItemDb from "@/app/components/ItemDb"

export default function Home() {

  return(
    <>
      <p>
        I am an experienced Business Analyst and Product Owner with over 
  10 years of industry experience, who is seeking to transition into the 
  software development industry. I have a passion for technology, and 
  a strong foundation in coding (supported by the recent completion 
  of a software development bootcamp in August 2024). My technical 
  skills span a range of languages and frameworks, including C#, 
  JavaScript, PHP, React, Next.js, HTML and CSS. I also have 
  experience with various database systems and tools, including 
  MySQL, phpMyAdmin, MS SQL, SSMS, PostgreSQL, and Supabase.
      </p>
      <p>  
  My passion for coding dates to my undergraduate studies, where I 
  focused on web technologies, and in 2015 I completed a Master’s 
  degree in Information, Systems and Technology which gave me 
  even more insight into the world of software development. I have 
  recently had a change in personal circumstances; however, I am 
  now fully committed to furthering my career in this field.  
      </p>

      <h3>Dev Skills</h3>

      <div className="ItemContainer">
        <ItemSkill
          name="C#"
          image="CSharp.png"
          description="Self-taught, several tutorials and projects."
        />

        <ItemSkill
          name="Entity Framework"
          image="EntityFramework.png"
          description="Self-taught."
        />

        <ItemSkill
          name=".Net"
          image="DotNET.png"
          description="Learning alongside C#, e.g. I am learning Entity Framework."
        />
          
        <ItemSkill
          name="JavaScript"
          image="JS.png"
          description="Self taught and instructor led (software development bootcamp)."
        />
          
        <ItemSkill
          name="React"
          image="React.png"
          description="Self taught and instructor led (software development bootcamp)."
        />
          
        <ItemSkill
          name="Next.js"
          image="Next.png"
          description="Self taught and instructor led (software development bootcamp)."
        />
          
        <ItemSkill
          name="HTML"
          image="HTML.png"
          description="Experienced - created several web sites."
        />
          
        <ItemSkill
          name="CSS"
          image="CSS.png"
          description="Experienced - created several web sites."
        />
          
        <ItemSkill
          name="PHP"
          image="PHP.png"
          description="Somewhat experienced - created several database driven sites."
        />
          
      </div>

      <h3>Experience with database systems</h3>

      <div className="ItemContainer">
        <ItemDb
          name="SQL"
          image="SQL.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="MySQL"
          image="MySQL.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="phpMyAdmin"
          image="phpMyAdmin.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="MSSQLS"
          image="MSSQLS.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="SQL Server Management Studio"
          image="MSSMS.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="PostgreSQL"
          image="Postgre.png"
          description="Somewhat experienced."
        />

      </div>

      <h3>Experience with Agile Methodologies</h3>

      <div className="ItemContainer">
        <ItemAgile
          name="SCRUM"
          image="SCRUM.png"
          description="Experienced (5+ years). I am a SCRUM advocate."
        />

        <ItemAgile
        name="SAFE"
        image="SAFE.png"
        description="Some experience (6 months)."
        />
      </div>

      <h3>Experience with Tools</h3>

      <div className="ItemContainer">
        <ItemTool
        name="GIT"
        image="GIT.png"
        description="Daily use, familiar with branching & pull requests."
        />

        <ItemTool
        name="Trello"
        image="Trello.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Azure Boards"
        image="Azure.png"
        description="Experienced."
        />

        <ItemTool
        name="Miro"
        image="Miro.png"
        description="Experienced. Regular use."
        />

        <ItemTool
        name="Visual Studio"
        image="VisualStudio.png"
        description="Somewhat experienced."
        />

        <ItemTool
        name="VS Code"
        image="VSCode.png"
        description="Somewhat experienced."
        />

        <ItemTool
        name="Teams"
        image="Teams.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Slack"
        image="Slack.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Discord"
        image="Discord.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Ubuntu"
        image="Ubuntu.png"
        description="Somewhat experienced. Daily use."
        />

      </div>
      
    </>
  )
}