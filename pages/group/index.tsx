import { useRouter } from "next/router";

const Group =()=>{
  const router = useRouter();
  const {query,isReady} = useRouter();


  return(<div>
    <h1>Group</h1>
    <h3>Default</h3>
  </div>);
}
export default Group;