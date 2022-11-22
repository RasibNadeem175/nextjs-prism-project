import Layout from "../../components/Layout"
import { Rating } from "@mui/material"
import Synopsis from "../../components/page components/Synopsis"
import Title from "../../components/page components/Title"
import Image from "next/image"
import { useState } from "react"


const title = 'The name of the wind'
const author = 'Patrick'
const synopsis: string = 'The story is epic'
const imageURL = ''

type bookProp = {
    title: string;
    author: string;
    imageURL: string;
    synopsis: string;
    rating: number;
  
}

const Book: React.FC<bookProp> = (prop: bookProp) => {
    const [value, setValue] = useState(0);
    return (
     <Layout>
         <div>
            book
            <Title title={prop.title} by={prop.author}/>
            <Synopsis synopsis={prop.synopsis}/>
            <Rating
                name="simple-controlled"
                value={prop.rating}
                onChange={(event, newRating) => {
                    setValue(newRating || 0);
                }}
            />
         </div>
     </Layout>
    )
  }
  
  export default Book