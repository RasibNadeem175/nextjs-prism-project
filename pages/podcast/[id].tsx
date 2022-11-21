import Title from "../../components/page components/Title";
import { Rating } from "@mui/material";
import Layout from "../../components/Layout"
import Synopsis from "../../components/page components/Synopsis";
import { useState } from "react";


const title = 'School of Greatness'
const author = 'Patrick'
const synopsis: string = 'great show !'
const imageURL = ''

const Podcast: React.FC = () => {
  const [value, setValue] = useState(0);
  return (
    <Layout>
    <div>
       Movie
       <Title title={title} by={author}/>
       <Synopsis synopsis={synopsis}/>
       <Rating
           name="simple-controlled"
           value={value}
           onChange={(event, newValue) => {
               setValue(newValue || 0);
           }}
       />
    </div>
</Layout>
    )
  }

  export default Podcast