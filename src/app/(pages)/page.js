import ItemSkill from "@/app/components/ItemSkill"
import ItemAgile from "@/app/components/ItemAgile"
import ItemTool from "@/app/components/ItemTool"
import ItemDb from "@/app/components/ItemDb"

export default function Home() {

  return(
    <>

      <p>
        I’m an experienced Business Analyst who is now moving fully into software development. A significant change in my circumstances led me to refocus my career, and I’ve committed to building on the technical foundations I’ve had for many years. I work across the full stack with C#, PHP, JavaScript, Next.js, React, CSS3, and HTML5, and I’m developing my backend capabilities further with Laravel.
      </p>

      <p>
        My interest in development began during my academic studies and has remained a consistent thread throughout my career. That long-standing foundation now supports my continued growth as a full-stack developer.
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
        image="GitHub.png"
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