document.addEventListener("DOMContentLoaded", ()=>{

const articles=[
    {id:1, title:"Article 1 ", content:"Name and territory of the union."},
        {id:2, title:"Article 2", content:"Admission and establishment of the new state."},
        {id:3, title:"Article 3", content:"Formation of new states and alteration of areas, boundaries, and name of existing states."},
        {id:5, title:"Article 4", content:"Citizenship at the commencement of the constitution."},
        {id:6, title:"Article 6", content:"Rights of citizenship of a certain person who has migrated to India from Pakistan."},
        {id:10, title:"Article 10", content:"Continuance of rights of citizenship."},
        {id:11, title:"Article 11", content:"Parliament to regulate the right of citizenship by law"},
        {id:12, title:"Article 12", content:"Definition of the state."},
        {id:13, title:"Article 13", content:"Laws inconsistent with or in derogation of the fundamental rights."},
        {id:14, title:"Article 14", content:"Equality before the law."},
        {id:15, title:"Article 15", content:"Prohibition of discrimination on the grounds of religion, race, caste, sex, or place of birth."},
        {id:16, title:"Article 16", content:"Equality of opportunity in matters of public employment."},
        {id:17, title:"Article 17", content:"Abolition of the untouchability."},
        {id:18, title:"Article 18", content:"Abolition of titles."},
    ]

    const amendments=[
        {id:6, title:"69th Amendment Act, 1991", content:"Delhi was made a National Capital Region. The Act also made provision for a Legislative assembly and a council of ministers for Delhi."},
        
        {id:7, title:"73rd Amendment Act, 1992", content:" A new section IX was added to the Constitution, with the inclusion of the powers and duties of Panchayati Raj Institutions in Article 243A and the fresh schedule called the Eleventh Schedule"},
        
        {id:8, title:"74th Amendment Act, 1992", content:"Granted constitutional status and protection to the urban local bodies. It also added Part IX, a new Twelfth Schedule."},
        
        {id:9, title:" 86th Amendment Act, 2002", content:"Provides the Right to Education until the age of fourteen and early childhood care until the age of six."},
        
        {id:10, title:"88th Amendment Act, 2003", content:"Provision of Service Tax was made under Article 268-A – Service tax levied by Union and collected and appropriated by the Union and the States."},

        {id:12, title:"95th Amendment Act, 2009", content:"Extended the reservation of seats for the SCs and STs and special representation for the Anglo-Indians in the Lok Sabha and the state legislative assemblies for a further period of ten years i.e., up to 2020 (Article 334)."},

        {id:13, title:"97th Amendment Act, 2011", content:"Co-operative Societies were granted constitutional status: (i)Right to form cooperative societies made a fundamental right (Article 19). (ii)A new Directive Principle of State Policy ( Article 43-B) to promote cooperative societies. (iii)A new part IX-B was added in the constitution for cooperative societies."},

        {id:14, title:"100th Amendment Act, 2015", content:"(i)To pursue land boundary agreement 1974 between India and Bangladesh, exchange of some enclave territories with Bangladesh mentioned. (ii)Provisions relating to the territories of four states (Assam, West Bengal, Meghalaya) in the first schedule of the Indian Constitution, amended."},

        {id:15, title:"101st Amendment Act, 2016", content:"Goods and Service Tax (GST) was introduced. Read more about GST in the linked article."},

        {id:16, title:"102nd Amendment Act, 2018", content:"Constitutional Status was granted to  National Commission for Backward Classes (NCBC)."},

        {id:17, title:"103rd Amendment Act, 2019", content:"(i)A maximum of 10% Reservation for Economically Weaker Sections of citizens of classes other than the classes mentioned in clauses (4) and (5) of Article 15, i.e. Classes other than socially and educationally backward classes of citizens or the Scheduled Castes and the Scheduled Tribes. (ii)AS Exam aspirants might want to learn about EWS Criteria for UPSC which they can check in the linked article."},

        {id:18, title:"104th Amendment Act, 2020", content:"Extended the deadline for the cessation of seats for SCs and STs in the Lok Sabha and state assemblies from seventy years to eighty. Removed the reserved seats for the Anglo-Indian community in the Lok Sabha and state assemblies."},

        {id:18, title:"105th Amendment Act, 2021", content:"Restored state governments’ power to prepare the Socially and Educationally Backward Classes (SEBC) list."},

        {id:18, title:"106th Amendment Act, 2023", content:"This was the women’s reservation bill which reserves one-third of all seats for women in Lok Sabha, State legislative assemblies, and the Legislative Assembly of the National Capital Territory of Delhi, including those reserved for SCs and STs."}      
]

function loadArticles(){
    const articleContainer=document.getElementById("article-container");
    articles.forEach(article => {
        const articleDiv=document.createElement("Div")
        articleDiv.classList.add("article");

        const articleTitle=document.createElement("h3")
        articleTitle.textContent=article.title;
        articleTitle.classList.add("collapsible");

        const articleContent=document.createElement("p");
        articleContent.textContent=article.content;
        articleContent.style.display="none";  // Collapsed by default

        articleTitle.addEventListener("click",()=>{
            const isVisible=articleContent.style.display==="block";
            articleContent.style.display=isVisible ? "none":"block";
        });

        articleDiv.appendChild(articleTitle);

        articleDiv.appendChild(articleContent);

        articleContainer.appendChild(articleDiv);
    });
}

function loadAmendments(){
    const amendContainer = document.getElementById("amendment-container");
    amendments.forEach(amendment=>{
        const amendDiv=document.createElement("Div")
        amendDiv.classList.add("amendment");

        const amendmentTitle=document.createElement("h3")
        amendmentTitle.textContent=amendment.title;
        amendmentTitle.classList.add("collapsible")

        const amendContent=document.createElement("p");
        amendContent.textContent=amendment.content;
        amendContent.style.display="none";  //collapsed by default

        amendmentTitle.addEventListener("click",()=>{
            const isVisible=amendContent.style.display==="block";
            amendContent.style.display=isVisible ? "none":"block";
        });

            amendDiv.appendChild(amendmentTitle);

            amendDiv.appendChild(amendContent)

            amendContainer.appendChild(amendDiv);
        
    })
}

loadArticles();
loadAmendments();

})

const menuItems=document.querySelectorAll('.menu li');
const contentDiv=document.getElementById('content');
let activeitem=null;

menuItems.forEach(item=>{
    item.addEventListener('click',function(){
        //get content from the data attribute
        const content=this.getAttribute('data-content')
        if(activeitem===this){
        //set the content in the content div
        contentDiv.innerHTML='';
        activeitem=null;
        }else{
            contentDiv.innerHTML=content;
            activeitem=this; 
        }

    })
})