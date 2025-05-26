import axios from "axios";
import { BASE_URL } from "../utils/constantes";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./userCard";


const Feed = () => {
  const feedData = useSelector(store => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if(feedData) return;
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
      
    } catch (error) {
      // TODO error handling
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center my-10">
      {feedData && <UserCard user={feedData.data[0]}/>}
    </div>
  );
}

export default Feed
