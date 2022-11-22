import Title from "../../components/page components/Title";
import { Rating } from "@mui/material";
import Layout from "../../components/Layout"
import Synopsis from "../../components/page components/Synopsis";
import { useState } from "react";


const title = 'School of Greatness'
const author = 'Patrick'
const synopsis: string = 'great show !'
const imageURL = ''

type podcastProp = {
  title: string;
  author: string;
  imageURL: string;
  synopsis: string;
  rating: number;

}

const Podcast: React.FC<podcastProp> = (props: podcastProp) => {
  const [value, setValue] = useState(0);
  return (
    <Layout>
    <div>
       Movie
       <Title title={props.title} by={props.author}/>
       <Synopsis synopsis={synopsis}/>
       <Rating
           name="simple-controlled"
           value={props.rating}
           onChange={(event, newRating) => {
               setValue(newRating || 0);
           }}
       />
    </div>
</Layout>
    )
  }

  export default Podcast