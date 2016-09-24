
$("#main").append("Le Thu Nguyen");
$("#workExperience").append("coding");
var bio={
	"name":"jonhs Doe",
	"age":37,
	"job":"course dev",
	"skill":skill
}
function textAppear(){
var HTMLheaderName="<h1>%data%</h1>"
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#workExperience").append(formattedName);
	console.log("testing");
};

textAppear();

var skill=["programming", "teaching", "householding"];
var forInLoop =function(){
	for(var s in skill){
		/*print index*/
		console.log(s);
		/*print value of array*/
		console.log(skill[s]);
		
	}
}
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
var locationArray=[];
	for(var loc in work_obj.jobs){
		var newArray=work_obj.jobs[loc].location;
		console.log(newArray);
		locationArray.push=newArray;
		
	}
	return locationArray;
	var HTMLLocation="<h1><span>%data%</span></h1>"
	var location=HTMLLocation.replace("%data%", locationArray);
	$("#workExperience").append(locationizer(work));
}

locationizer(work);


// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
var workAd=function(){
	$("#workExperience").append(work.currentJobPostion);
}
workAd();
forInLoop();


if(bio.skill!=''){
	$("#header").append(bio.skill);
}
var makeCourse=function(){
	console.log("Make course");
	
}
var course=0;
while(bio.job==="course dev"){
	makeCourse();
	course=course+1;
	if(course===10){
		bio.job="Learning something else";
	}
}
console.log(bio.job);
var forLoop =function(){
	for (i=0; i<9; i++){
		console.log(i);
	}
	

}
forLoop();	