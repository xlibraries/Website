AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Lead Level Designer",
    cardImage: "assets/images/experience-page/bgc.jpg",
    place: "Bharatya Gaming Company",
    time: "(August, 2021 - Present)",
    desp: "<li>Working on Project Balod and action role playing game.</li><li>Project Balod is a PC title developing in Unreal Engine.</li>",
  },
  {
    title: "Game Developer Intern",
    cardImage: "assets/images/experience-page/gamergages.png",
    place: "GamerGages",
    time: "(April, 2021 - May, 2021)",
    desp: "<li>Worked on AR Ballon Shooter game as a game programmer which was developed in Unity 3D.</li> <li>Made a prototype of Tile Matching game similar to Match3 using Unity 2D.</li> <li>Created game design of Construct-O-Block a Tower Staking game and developed using Unity 2D.</li>",
  },

  // {
  //   title: "Azure Cloud Computing Intern",
  //   cardImage: "assets/images/experience-page/verzeo.png",
  //   place: "Verzeo",
  //   time: "(May, 2020 - July, 2020)",
  //   desp:"<li>Hosted a webssite in Azure.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Co-President Technical Club",
    cardImage: "assets/images/experience-page/technicalclub.png",
    description:
      "My team and I have mentored fellow club-mates and made several technical projects like creating website for college fest, robots for national level competition & college fest.",
  },
  {
    title: "Robotics Club Member",
    cardImage: "assets/images/experience-page/roboticsclub.png",
    description:
      "In Robotics Club I got the chance to work for some of the biggest robotics competetion like Robocon and E-yantra, and in Robocon 2020 we cleared stage 1 with 96%.",
  },
  // {
  //   title: "Embedded Club Member",
  //   cardImage: "assets/images/experience-page/embeddedclub.png",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "SIGGRAPH2021",
    subtitle: "Attendee",
    image: "assets/images/experience-page/siggraph2021.jpg",
    desp: " During the virtual conference, live events and “can't miss” scheduled sessions will take place throughout the week of 9–13 August..",
  },
  {
    title: "Indian Gaming Expo",
    subtitle: "Attendee",
    image: "assets/images/experience-page/igx.png",
    desp: "It was a 2 day long gaming expo in which speaker from different background realtedd to gaming industry presentedd there view on Indian Gaming Industry.",
  },
  {
    title: "Game Jobs Live Game Jam",
    subtitle: "Participant",
    image: "assets/images/experience-page/gamejobslive.png",
    desp: "This was a 1 week long game jam in which we developed The Lone Ember, a casual 2D platformer game. My primary role was as a Game Designer.",
  },
  {
    title: "Google for Game Developer Summit 2021",
    subtitle: "Attendee",
    image: "assets/images/experience-page/googleforgamedeveloper.png",
    desp: "It was a 2 day long event where google has invited multiple speakers accross various fields related to game industry from gamers to developers every field people were present there.",
  },
  {
    title: "Voodoo Summer Competition",
    subtitle: "Participant",
    image: "assets/images/experience-page/voodoo.png",
    desp: "It was a 1 month long hyper-casual competition for hyper-casual game developers where we got the chace to develop games for voodoo play test by them and if test results are below the maximum CPI/ KPI an opportunity was given to publish the game with Voodoo. For this competetion we developed Tower Stack.",
  },
  {
    title: "Finland Games Job Fair 2021",
    subtitle: "Attendee",
    image: "assets/images/experience-page/finlandgamesjobsfair.png",
    desp: "It was an interactive networking & recruitment event where speakers from 14 studios were present like Rovio, Spurecell & FingerSoft.",
  },
  {
    title: "Lego Ideas",
    subtitle: "Participant",
    image: "assets/images/experience-page/legoideas.png",
    desp: "Lego Ideas was a 1 month long game jam hosted by Lego and Unity, for which I developed Lego Mini World an role playing puzzel adventure game. I was the solo developer for this games.",
  },
  {
    title: "Blackthornprod GAME JAM #3",
    subtitle: "Participant",
    image: "assets/images/experience-page/blackthronprod.png",
    desp: "This was the first game jam I finished organized by Blackthornprod, for which we developed The Choice an narative story telling game. I was the 3D and Lightning Artist in the game.",
  },
  {
    title: "IRC Web Epo",
    subtitle: "PCB Designing Domain Winner",
    image: "assets/images/experience-page/ircwebexpo.png",
    desp: "Designed a PCB which can be unsed to created advance line follower robots which does not required any further external sensors with high effecience and low power consupiton.",
  },
  {
    title: "Robocon2020",
    subtitle: "Participant",
    image: "assets/images/experience-page/robocon2020.jpg",
    desp: "Developed multi fulctional football playing robot for ABU Robocon2020, this was a team competetion where we secured 96% in stage 1.",
  },
    {
    title: "AXIS 2020",
    subtitle: "Winner(3rd)",
    image: "assets/images/experience-page/axis20.jpg",
    desp: "Developed maze solver robot for autobot robotics competetion.",
  },
  {
    title: "Techfest 2019",
    subtitle: "Participant",
    image: "assets/images/experience-page/techfest.png",
    desp: "Developed maze solver robot for a robotics competetion.",
  },{
    title: "Tentrafiesta 2019",
    subtitle: "Participant",
    image: "assets/images/experience-page/tantrafiesta.svg",
    desp: "Developed line follower robot for a robotics competetion.",
  },
  {
    title: "Technovision 2019",
    subtitle: "Participant",
    image: "assets/images/experience-page/technovision.jpg",
    desp: "Developed remote controlled robot for Area51 competetion.",
  },
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
