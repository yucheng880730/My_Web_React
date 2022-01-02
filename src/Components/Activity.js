import React, { Component } from "react";

class Activity extends Component {
  state = {
    events: [
      {
        id: "1",
        title: "The Taiwan Blockchain Summit",
        content:
          "There are six short talks in this annual seminar, one of the events that impressed me the most was the mention of how to raise funds. One speaker in the short talk is Edwin Yen who is the Blocto founder, he mentioned how they convinced Mark Cuban (owner of Dallas Mavericks) to invest their projrct. They not only share their own experience, and also their thoughts on future trends of the blockchain.  ",
        img: "../../images/event/blockchain.jpg",
      },
      {
        id: "2",
        title: "Seminar on International Trade and Economy 2020",
        content:
          "Had the honor to participate in this camp during the summer vacation. In addition to group meetings to discuss current affairs, they also invited seniors in the industry to share the impact and changes of economics and trade under the epidemic. Let me understand that the world situation is changing fast, and I must always keep myself at the forefront of the times.",
        img: "../../images/event/Site.jpg",
      },
      {
        id: "3",
        title: "Shopee Code League",
        content:
          "The competition lasts for more than two months, and there will be new competition questions every week to accumulate points based on the points system. The types of contest questions include algorithm, data analytics, and data science. In addition, there will be many free online courses every week for participants to sign up for free learning. In the competition, I knew my shortcomings and told myself that I needed to keep improving the programming ability of the python language.",
        img: "../../images/event/Shopee.jpg",
      },
      {
        id: "4",
        title: "Microsoft TAI One-day Intern",
        content:
          "The activity taught us how to use Azure Custom Vision to identify objects in the picture. This cloud service makes the training of the image recognition model very simple. In the subsequent grouping activities, we will also use this service and report the results on the stage. This activity allowed me to examine whether I was suitable for the job of a technical assistant, and I used azure cloud services to set up the database of my graduate project.",
        img: "../../images/event/TAI.jpg",
      },
      {
        id: "5",
        title: "Mopcon Mobile Technology Annual Conference",
        content:
          "In the meeting, there was a speech by Cathay Pacific Digital Banking Manager. The speaker shared the sparks that have been inspired by the cooperation between technology and finance, and also introduced some current application of fintech in the industry. This inspired me to be interested in the field of fintech, and I would like to do research more in the field of fintech in the future.",
        img: "../../images/event/mopcon-1.jpg",
      },
      {
        id: "6",
        title: "AI Emerging Navigator Program",
        content:
          "In the competition, I deeply felt that even if the relevant results can be analyzed, without a certain degree of understanding of the field, there is no way to make a complete and powerful conclusion. That is to say, before becoming a financial analyst, in addition to refined process skills, you must also have an in-depth understanding of professional knowledge in the financial field. I hope that through the internship, I can have a better understanding of how the industry operates.",
        img: "../../images/event/SAS.jpg",
      },
      {
        id: "7",
        title: "Volunteer Service - counselor",
        content:
          "This volunteer service is to return to hometown and design a four-day camp for school children there for free. As the leader of counselor team, I need to divide everyone into groups and give suggestions for each group.",
        img: "../../images/event/KH.jpg",
      },
    ],
  };

  render() {
    const { events } = this.state;
    console.log(events);

    return (
      <section id="portfolio">
        <div>
          <h1>Activities I have participated in</h1>

          {events.map((item) => (
            <div className="details">
              <div className="big-imgs">
                <img src={item.img} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h3 className="events-title">{item.title}</h3>
                  <p className="events-content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Activity;
