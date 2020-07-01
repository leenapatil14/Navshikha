import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Story from './story';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import pune1 from '../images/pune/1.jpeg';
import pune2 from '../images/pune/2.jpeg';
import pune3 from '../images/pune/3.jpeg';
import pune4 from '../images/pune/4.jpeg';
import pune6 from '../images/pune/6.jpeg';
import pune7 from '../images/pune/7.jpeg';
import pune8 from '../images/pune/8.jpeg';
import pune9 from '../images/pune/9.jpeg';
import lonavala from '../images/pune/lonavala.jpeg';
import ganapati from '../images/pune/ganapati.jpeg';
import sinhagad from '../images/pune/sinhagad.jpeg';
import sinhagad2 from '../images/pune/sinhagad2.jpeg';
import food from '../images/pune/food.jpeg';
import puneconclusion from '../images/pune/conclusion.jpeg';
import nyc1 from '../images/nyc/bg.jpg';
import nyc2 from '../images/nyc/1.jpeg';
import nyc3 from '../images/nyc/2.jpeg';
import nyc4 from '../images/nyc/12.jpeg';
import nyc5 from '../images/nyc/8.jpeg';
import nyc6 from '../images/nyc/11.jpeg';
import nyc7 from '../images/nyc/5.jpeg';
import nyc8 from '../images/nyc/4.jpeg';
import nyc9 from '../images/nyc/10.jpeg';
import nyc10 from '../images/nyc/7.jpeg';
import nyc11 from '../images/nyc/9.jpeg';
import nyc12 from '../images/nyc/3.jpeg';
import nyc13 from '../images/nyc/6.jpeg';
import lacuna1 from '../images/Lacuna.jpg';

const stories=[{
    'name':'Trip to Pune',
    'bg':pune1,
    'paragraphs':{'intro':'Being tired of the normal routine, we decided to go out for a short weekend outing to the city of Pune. Honestly, initially, I always used to think Pune was too overrated. However, my opinion was about to change.',
    'details':[
        {'image':lonavala,'desc':'The trip began as every road trip would, starting off late. The route from Thane to Pune, along the beautiful Mumbai-Pune Expressway, is what made the trip more fun. It seemed like just a few minutes had passed until we reached Lonavala, a hill-station town on the way. We visited Lion’s point, from where we could see the mighty Sahyadri standing tall, all in its glory. Although, the weather was hot, the cool breeze gushing around help us stay refreshed. Bidding adieu to Lonavala, we proceeded our journey to Talegaon, Pune.'},
        {'image':ganapati,'desc':'On the way to Talegaon, a huge statue of Lord Ganesha caught our attention. Finding out the way to the statue was like solving a mini treasure hunt, both exhausting and exciting at the same time. However, once we reached there, it freed us from all the stress and tiredness. The idol is about 54 feet tall mounted on a hill, hence visible from kilometers away. The stunning backdrop of a starry sky added more charm to it. Having seated, just staring at the magnanimous idol, there for an hour or so, felt like a meditation therapy, which revived our souls. It filled our minds with calmness and peace, it offered exactly what we were looking for from this journey.'},
        {'image':sinhagad,'desc':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously known as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chhatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).'},
        {'image':sinhagad2,'desc':'I have visited quite a few forts of the Maratha empire and have observed that each has its own story to tell. Some are happy, some tragic, but all equally astonishing. I often wonder how amazing it is that these structures have witnessed numerous eras, associated with some 300-400 years of history. Whenever I visit such places, I feel that the stones, the walls, and different structures are telling us their stories, helping us reconnect to the past. It seems like instant teleporting!'},
        {'image':food,'desc':'Today, Sinhagad is easily accessible by road, although you can always choose to trek towards the fort. The fort not only offers scenic beauty of the surrounding mountains like other fortresses do but also, one thing that sets Sinhagad apart is that you could get to try local food in a beautiful set-up amidst nature. After every few minutes’ walk around the fort, you will get to see a few local shopkeepers selling traditional Maharashtrian lunch. You can choose from a wide variety of options. Being an ardent food lover, I chose to try all of the items. I had the Vangyacha Bhareet (roasted brinjal curry), different types of chutneys and thecha (chilly chutney), peethla, jhunka-bhakar and taak (spicy buttermilk). The cherry on the cake is that in addition to this tasty feast, each shopkeeper will provide you with a mat and shed under a canopy of bushes to sit and have your food. You can spend as much time as you want under the canopy, and trust me, it’s way better than the luxurious 5-star restaurants have to offer. Soon, it was time to leave the fortress on our way back home.'},
    {'image':puneconclusion,'desc':'This short, unplanned and beautiful trip helped me get refreshed from all the stress I had before. I was fully ready to face whatever comes not the way later. The best part about Pune is its food (if you love spicy food, you should certainly not miss visiting Pune), the people, and of course its rich history. '}]},
    'images':[pune1,pune2,pune3,pune4,pune6,pune7,pune8,pune9]


},
{
    'name':'Trip to New York',
    'bg':nyc1,
    'paragraphs':{'intro':'After an exhausting semester, it was ‘that time of the year’ when half a month is spent on shopping and other half enjoying the winter holidays. For me, December is more special, as it is my birthday month. This year was full of mixed feelings as this was the first time in my life, I was away from family on birthday and I was in NYC!',
    'details':[
        {'image':nyc2,'desc':'On the last day of the semester I had back to back two finals and later, I had to catch a bus for New York City. The cherry on the cake, I was unable to come home the earlier night as we had decided to study all night for the exams and, having no time in between I had not eaten lunch. So basically, sleep and food-deprived, hurriedly packing bags, I somehow managed to board the bus. The bus journey was tiresome, being students, we are always low on budget and we have to compromise on our comfort sometimes, so cutting costs on food and traveling is often the most viable option. We left for NYC at night and by the time we reached there, it was dawn. Seeing the sunrise as we passed by the city, painted a beautiful picture of it which, will always be fed into my mind. '},
        {'image':nyc3,'desc':'I was truly grateful to have got a comfortable stay in Jersey City, thanks to my friend. It helped in three ways, one, I had spent fairly lesser amount of money on my stay, two, since Jersey City is well connected to NYC with buses and metro, I save a lot of time and money traveling to and fro from there to NYC and third I found a lot of Indians living nearby, and hence it became easy to get Indian groceries and food. So, living in NJ took care of my food, accommodation and saved money on travel. Being a student, it is necessary to cut the costs wherever required. This trip taught me to do so'},
        {'image':nyc4,'desc':'NYC is one of the most expensive cities not only to live in but also to travel to. First and the foremost thing to do is to get the metro card and NJ transit app. Metro and buses are the cheapest yet fastest way to stroll in and around the city. Luckily, having so many days with me to explore NYC I had a chance to visit the city from my place several times. First, I went with my friend, which helped me learn how to use public transportation. The best part of being a student is, you will somehow find the cheapest of everything, food, transport, sightseeing. In addition to this, the government also has provided various discounts and provisions for a student, so we took advantage of it and tried to see as many places as we could.'},
        {'image':nyc5,'desc':'A few days later, after getting well acquainted with the transportation and places to explore around, I planned out an entire day to roam around the city. We had decided to explore downtown for a day. So, we started with going to Liberty State Park in NJ. From Jersey City, we took a cab to Liberty State Park. The only mistake we did that we didn\'t give a proper destination for the ride, hence we had to walk almost for 4 km into the park to get to the ferry. However, the walk turned out to be the best as we could be able to see Manhattan’s skyline along with the Statue of Liberty. So, after walking for about 50 mins, we boarded the ferry for Manhattan. '},
        {'image':nyc6,'desc':'From Liberty State Park we had an option to either go to the Statue of Liberty or to take the ferry directly for Manhattan which costs around 7$ per person, we opted for the latter option. We got off near the Brookfield center which had a beautiful lighting setup for Christmas. Then we proceeded towards the 9/11 memorial which is across the street of Brookfield center. Later, we boarded the metro to Brooklyn. Since we didn’t want to miss the experience of ‘walking’ on the Brooklyn bridge and, wanted to save time, we opted to get a metro to Brooklyn instead and then come back to Manhattan to go the see Grand central station. '},
        {'image':nyc7,'desc':'Once we reached Grand Central, we explored the historic station, I was amazed to see how well they have preserved the old ticket counters even today. Later, we walked towards Times Square. Although this was my third visit to Times Square, it had never failed to surprise me because every time there was something new happening. One major problem we had faced during the entire trip was food. Finding good and cheap food is a tedious task in NYC. We either have to opt for food trucks that will have reasonable rates but the taste may not be authentic enough to fulfill your expectations. Other options are restaurants that were too costly. One very common and famous things to have is NY pizzas. We decided to have biryani from one of the food trucks. The overall day was jam-packed with all the sightseeing of downtown Manhattan. We had walked almost 10-12 km exploring the city, an exhausting yet amusing day.'},
        {'image':nyc8,'desc':'The next day, we planned to see Central Park and the Guggenheim Museum. I left at around 3 pm from Jersey City. Traveling alone in NYC had been in my bucket list, and this day I got to do so. It was both scary and exciting at the same time. I enjoyed figuring out buses and metro routes and hoping on them all alone. On the way, I met many types of people. I got down at the desired station and was waiting for my friend near the entrance for central park. At that time honestly, I was scared of going into the park as it was dark and there were very few pedestrians inside. But I had to pass through the park because the museum was across it. So anxiously, I started proceeding towards it. The paths and sidewalks were almost empty. I could see a few joggers and students roaming around though. So, I decided to stay on the main road which goes along the park. I had lost my track midway, both Google and Apple maps had given up. Luckily, I found a couple passing nearby and asked them the way to the museum. They were really helpful and made sure I am safe. It was a pleasure to meet them and have a short conversation on the way along. As directed by them I somehow reached the museum. '},
        {'image':nyc9,'desc':'We had decided to visit the Guggenheim museum that day, as it was ‘pay what you wish’. Yes! One more chance to save a big number of bucks is to keep a track of the days when museums are open with ‘pay what you wish’ a hack to cut costs. Also, there are many museums which will just provide discounts for students who show up their identity cards whether you are a student of the USA or not, which I feel is quite awesome. There are so many world heritages here in the USA. One of them is the Guggenheim museum. It is an UNESCO work heritage site, one of the many located all around the world. The museum in NYC has a unique architecture with a white theme that seemed like an anthill to me. One thing I learned is that even if you are not into art, even if it makes you sleepy or something like that, just have an experience, find a painting that you like, read through its description and observe… take as much time as you wish, it’s okay even if you aren\'t able to see every exhibit, but you must understand at least one of them. I feel lucky the I had a privilege to see great works from great artists all around the world here at Guggenheim.  '},
        {'image':nyc10,'desc':'One of the best things about NYC is its connectivity within and around the city which makes it easily commutable even for a stranger. Thanks to smartphones this magnanimous task has become much simpler and more efficient. Whenever I had to go, I just searched for the destination on the maps and got different routes to commute. Commuting through the metro in NYC is quite a task for first-timers but, you will get used to it within two or three trips easily. Similarly understanding the roads and lanes is somewhat confusing because like other cities, you don\'t have names for the street rather you have street and lane numbers. Having lived in India for so many years, I am used to getting familiar with the roads with names. It easy to understand and remember, so designating a street by number in NYC was tiresome and irritating initially but later when I commuted once or twice, I found out that this system is much better organized and precise.'},
        {'image':nyc11,'desc':'Concluding this blog, I would say the NYC definitely gave an unforgettable experience and the most amazing thing I liked about it is the people. The people here are so polite. Being a young girl roaming around alone in an unknown city is honestly not easy. You have no idea what lies further. Also, commutting to a city like NYC you have high chances of getting lost in those narrow streets. The best and safest way to hang around here is to ask. Don\'t hesitate to ask the locals any questions you have. Even the stupidest of your queries won’t ever be judged here and you will get help from them. People in NYC and the USA are welcoming and often make sure they will help you out in whatever possible way. This trip taught me the importance of being polite, dedicated and helped me improve the belief in myself.'}]},
    'images':[nyc12,nyc13]
},
{
    'name':'Lacuna: The void',
    'bg':lacuna1,
    'paragraphs':{'intro':'',
    'details':[
        {'image':'','desc':'Lately, I was in a dilemma for an unknown reason. I felt lonely and unhappy. And the worst thing, I couldn’t even figure out what was the reason behind it. I had never experienced such a state of mind. No matter what I do, I was never satisfied, something always seemed to be missing and I had no clue what was that. '},
        {'image':'','desc':'Nothing worked, spending time with family, studying, indulging in web series and movies, hanging out with friends, everything seemed useless. There was a constant ‘void’ inside my mind and it felt like something/someone was missing from my life. However, I had to somehow come out of this Lacuna, as it was slowly killing me from inside.'},
        {'image':'','desc':'Recently I found a song-Closer to fine by Indigo Girls, which aptly described my situation, as if it was written for me and I felt certain, this situation is not confined to me, in several stages of life everyone has to face such situations, which drains all of our energies, leaving nothing behind but emptiness. That is when I decided to write this blog. But before that, I had to fight this issue somehow, I wanted to find my answers. '},
        {'image':'','desc':'Maybe, it was not meeting up with the expectations, our loved ones had upon us. At times in life, I had to run behind achieving something that I often was unable to show gratitude towards people who always stood behind me. So I decided to work on it and spent more time with them, but the void did not yet disappear. Later, I thought maybe I was badly missing someone in my life. But the void did not go even after meeting that person. This made me wonder, what is it that I am not able to find an answer to. Additionally, I have a bad habit of staying restless until I don\'t find myself satisfied with what I was looking for.'},
        {'image':'','desc':'But as they say, when God closes one door, he opens 100(s) of others, one day, when I experienced something strange, which made me realize that all these issues I was facing with, were nothing but my faults!! I was not satisfied, because I kept expecting that others will help me, I was unhappy because I was not confident about my abilities. I was trying to find the answers in others, but the reality was, all the answers I wanted were lying within myself. '},
        {'image':'','desc':'This happened when someone, very close to me hurt me. I was at first, disheartened, but later out of the frustration, I became determined to solve my problem on my own. After I succeeded in it, I realized the problem was not with others, rather, I was creating my problems and crying over them. Someone rightly said you should not be dependent on others. People will come and go, but you will always be constant. So never change yourself for others. All you have to do is to work hard, study harder, enjoy little moments with people, and leave! That is was life taught me that day. Nothing is temporary change is the only constant, Sometimes we have to change ourselves, and sometimes, people around us change. We should not get affected by this.'},
        {'image':'','desc':'As the song rightly mentions,'},
        {'image':'','desc':'"And the less I seek my source for some definitive...The closer I am to fine..."'},
        {'image':'','desc':'The void is mostly because I didn’t have clarity on something or someone, now that I know the problem lies within me, everything is as clear and hard as a crystal, I am ready to carve it into a Diamond for myself.'}
        ],
        
    },
    'images':[]
}];
const useStyles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    cardRoot:{
        margin:15,
    },
    backArrow:{
        margin:0,
        padding:'2%',
        background:'linear-gradient(90deg, rgba(3,1,29,1) 0%, rgba(28,1,64,1) 39%, rgba(1,39,46,1) 70%, rgba(61,34,1,1) 100%)',
        cursor:'pointer',
        width:'100%'
    }
      
    
  });
  
class Travel extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:0,
            current:null,
            showStory:false
        }
        this.handleChange = this.handleChange.bind(this)

    }
     handleChange(story){
        //console.log(story)
        this.setState({
            current:story,
            showStory:true
        })
    };

    render() {
        const {classes} = this.props;
        const goBack=(event)=>{
            this.setState({
                showStory:false
            })
        };
       
        const cards=stories.map(story=>(
            <Grid item xs={12} sm={6} lg={4} md={4} key={story.name} >
            <Card className={classes.cardRoot} 
            onClick={()=>this.handleChange({story})}>
            <CardActionArea>
            <CardMedia
            component="img"
            image={story.bg}
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
            {story.name}
            </Typography>
            <Typography  color="textSecondary" >
            {story.paragraphs.intro}
            </Typography>
            </CardContent>
            </CardActionArea>

            </Card>
            </Grid>
        ));

        
        
       
        return (
            <div className={classes.root}>
                <Grid container alignContent="center" alignItems="center" justify="center">
                    {!this.state.showStory && cards}
                    {this.state.showStory && <div>
                        <div className={classes.backArrow} onClick={goBack}>
                            <ArrowBackIosIcon color="secondary"/>
                        </div>
                        <Story story={this.state.current}></Story></div>}
                </Grid>
            </div>
        );
    }
}


export default withStyles(useStyles)(Travel);