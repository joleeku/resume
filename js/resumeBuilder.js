/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio ={
    'name':"谷某人",
    'role':'Web Developer',
    'contacts':{
       'mobile' :'186XXXXXXXX',
       'email' : 'juanjuan_1989@126.com',
       'github' : 'joleeku',
       'twitter' :'jolee',
       'location' :'北京'
    },
    'pictureURL':'images/photo.jpg',
    'welcomeMessage':'I can become a awesome web developer sooner or later',
    'skills':['html5+css3','js','ajax','grunt','php'],
    "display":function(){
      for(var key in bio.contacts){
        return 'block';
      }
      return 'none';
    }
};

var formattedName = HTMLheaderName.replace("%data%",'jolee');
var formattedRole = HTMLheaderRole.replace("%data%",'web Developer');
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").prepend(formattedwelcomeMsg);

if(bio.name === ''){
  document.getElementById('header').style.display = 'none';
}


if(bio.display() ==='none'){
  document.getElementById('topContacts').style.display = 'none';
}else{

  HTMLmobile = HTMLmobile.replace("%data%",bio.contacts['mobile']);
  $("#topContacts").append(HTMLmobile);
  $("#footerContacts").append(HTMLmobile);
  HTMLemail = HTMLemail.replace("%data%",bio.contacts['email']);
  $("#topContacts").append(HTMLemail);
  $("#footerContacts").append(HTMLemail);
  HTMLgithub = HTMLgithub.replace("%data%",bio.contacts['github']);
  $("#topContacts").append(HTMLgithub);
  $("#footerContacts").append(HTMLgithub);
  HTMLtwitter = HTMLtwitter.replace("%data%",bio.contacts['twitter']);
  $("#topContacts").append(HTMLtwitter);
  $("#footerContacts").append(HTMLtwitter);
  HTMLlocation = HTMLlocation.replace("%data%",bio.contacts['location']);
  $("#topContacts").append(HTMLlocation);
}

HTMLbioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(HTMLbioPic);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
   var formattedSkill = '';
   var formattedD3 = '';
  for(var i = 0; i< bio.skills.length;i++){
    formattedSkill += HTMLskills.replace("%data%",bio.skills[i]);
    formattedD3 += HTMLskillD3.replace("%data%","fillgauge"+(i+1));
  }

   $("#skills").append(formattedSkill);
    $("#skills").append(formattedD3);
   
}

 

var education = {
    "schools" : [
    {
      "name":"北京航空航天大学",
      "location": "北京",
      "degree": "本科",
      "majors": ["人力资源","绩效管理","劳动法"],
      "dates":'2015.3-2017.7',
      "url":"http://www.buaa.edu.cn/"
    },
    {
     "name":"保定学院",
     "location": "保定",
     "degree":"专科",
     "majors": ["C#","网页设计","高数"],
     "dates":'2008.9-2011.6',
     "url":"http://www.bdu.edu.cn/"
    }
  ],
  "onlineCourse": [
    {
      "title":"慧聪商学院",
      "school":"慧聪网",
      "dates":"2014-2017",
      "url":"http://sxy.hc360.com"  
    }
  ],
  'display':function(){

  }
}

var projects = {
    "projects" : [
      {
        "title":"慧聪商学院",
        "dates":"2014",
        "description":"1.独立编写前端页面，利用h5+css3，js和JQuery实现页面交互，满足了需求的同时技术得到了很大提升。2.基本兼顾了各浏览器的兼容效果，确保不同用户的浏览体验。3.开发慧聪商学院Wap版页面。",
        "url":"http://sxy.hc360.com",
        "images":[
           "images/project1.png","images/project2.png"
        ]        
      },
       {
        "title":"实力汇",
        "dates":"2017",
        "description":"1.独立编写前端页面， js和JQuery实现页面交互，兼容到ie8。 2.参与产品讨论优化用户操作流程、交互设计，提升用户体验。",
        "url":"http://shilihui.hc360.com",
        "images":[
           "images/project3.png"
        ]        
      }
    ]
}

var work = {
    "jobs":[
       {
        "employer":"北京慧聪网",
        "title":"web前端工程师",
        "dates":"2014-6 - 至今",
        "location":"北京",
        "description":"1.使用HTML标记、div+css+javascript Dom等前端WEB技术独立进行整体平台的前端架构搭建；2.负责商学院的前端规范制定，技术文档的撰写；3.制定了静态资源组织策略和代码发布流程"
       },
       {
        "employer":"河北文始集团",
        "title":"php工程师",
        "dates":"2012.12 - 2014.5",
        "location":"石家庄",
        "description":"1.负责点点乐网的二次开发工作；2.点点乐网前端页面的部分编写；3.日常发版优化调整",
       },
        {
        "employer":"城市建设理论研究杂志社",
        "title":"php工程师",
        "dates":"2011.6 - 2012.11",
        "location":"石家庄",
        "description":"1.dedecms二次开发；2.重新架构页面布局；3.日常seo推广工作",
       }
    ]
}


education.display = function(){
    for(edu in education.schools){
        $("#education").append(HTMLschoolStart);
    
        var fotmattedTitle = HTMLschoolName.replace("%data%",education.schools[edu].name);
        $(".education-entry:last").append(fotmattedTitle);

         var fotmattedDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
        $(".education-entry:last").append(fotmattedDegree);

         var fotmattedDate = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
         $(".education-entry:last").append(fotmattedDate);

         var fotmattedLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
        $(".education-entry:last").append(fotmattedLocation);

        if(education.schools[edu].majors.length > 0){
            for(maj in education.schools[edu].majors){
              var fotmattedMaj = HTMLschoolMajor.replace("%data%",education.schools[edu].majors[maj]);
              $(".education-entry:last").append(fotmattedMaj); 
            }
           
        }

    }

}
education.display();


function displayWork(){

for(var i=0;i<work.jobs.length;i++){

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);

 }
}
displayWork();

//封装
projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
    
        var fotmattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(fotmattedTitle);

         var fotmattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(fotmattedDates);

         var fotmattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(fotmattedDescription);

        if(projects.projects[project].images.length > 0){
            for(img in projects.projects[project].images){
              var fotmattedImg = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
              $(".project-entry:last").append(fotmattedImg); 
            }
           
        }

    }
}
projects.display();

//地图
$("#mapDiv").append(googleMap);

initializeMap();

 var gauge1 = loadLiquidFillGauge("fillgauge1",55);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    var gauge2= loadLiquidFillGauge("fillgauge2", 28, config1);
    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#D4AB6A";
    config2.textColor = "#553300";
    config2.waveTextColor = "#805615";
    config2.waveColor = "#AA7D39";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    var gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config2);
    var config3 = liquidFillGaugeDefaultSettings();
    config3.textVertPosition = 0.8;
    config3.waveAnimateTime = 5000;
    config3.waveHeight = 0.15;
    config3.waveAnimate = false;
    config3.waveOffset = 0.25;
    config3.valueCountUp = false;
    config3.displayPercent = false;
    var gauge4 = loadLiquidFillGauge("fillgauge4", 50, config3);
    var config4 = liquidFillGaugeDefaultSettings();
    config4.circleThickness = 0.15;
    config4.circleColor = "#808015";
    config4.textColor = "#555500";
    config4.waveTextColor = "#FFFFAA";
    config4.waveColor = "#AAAA39";
    config4.textVertPosition = 0.8;
    config4.waveAnimateTime = 1000;
    config4.waveHeight = 0.05;
    config4.waveAnimate = true;
    config4.waveRise = false;
    config4.waveHeightScaling = false;
    config4.waveOffset = 0.25;
    config4.textSize = 0.75;
    config4.waveCount = 3;
    var gauge5 = loadLiquidFillGauge("fillgauge5", 60.44, config4);
    var config5 = liquidFillGaugeDefaultSettings();
    config5.circleThickness = 0.4;
    config5.circleColor = "#6DA398";
    config5.textColor = "#0E5144";
    config5.waveTextColor = "#6DA398";
    config5.waveColor = "#246D5F";
    config5.textVertPosition = 0.52;
    config5.waveAnimateTime = 5000;
    config5.waveHeight = 0;
    config5.waveAnimate = false;
    config5.waveCount = 2;
    config5.waveOffset = 0.25;
    config5.textSize = 1.2;
    config5.minValue = 30;
    config5.maxValue = 150
    config5.displayPercent = false;
    var gauge6 = loadLiquidFillGauge("fillgauge6", 120, config5);



