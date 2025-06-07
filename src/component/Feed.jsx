import axios from "axios";
import { BASE_URL } from "../utils/constantes";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";


const Feed = () => {
  const feedData = useSelector(store => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if(feedData) return;
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
      
    } catch (error) {
      <Error status={404} title={"Lost in Space 🚀"} message={"The page you're looking for doesn't exist in this galaxy."} />
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);


  return feedData && (
    <div className="flex justify-center my-10">
      {feedData.data.length !== 0 ? <UserCard user={feedData.data[0]} /> : <h1>No feed found</h1>}
    </div>
  );
}

export default Feed;
