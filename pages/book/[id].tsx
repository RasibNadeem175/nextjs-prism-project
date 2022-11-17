import Layout from "../../components/Layout"
import { Rating } from "@mui/material"
import Synopsis from "../../components/page components/Synopsis"
import Title from "../../components/page components/Title"
const Book: React.FC = () => {
    return (
     <Layout>
         <div>
            book
            <Title/>
            <Synopsis/>
            <Rating name="size-small" defaultValue={2} size="small" />
         </div>
     </Layout>
    )
  }
  
  export default Book