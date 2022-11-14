import {Button} from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const GroupTopics =()=>{
  const router = useRouter();
  const { groupId } = router.query;

  if(!groupId){
    return(<div>
      <h1>Group</h1>
      <div>No Id</div>
    </div>);
  }

  function handlePressPush() {
    router.push("/group");
    //router.push(`/?counter=123`, undefined, { shallow: true });
  }

  return(<div>

    <h1>Group</h1>
    {groupId}
    <hr/>
    <ul>
      <li><Link href={"/group"}>Group</Link></li>
      <li><Link href={"/group/4321"}>4321</Link></li>
    </ul>
    <Button onClick={handlePressPush}>Use Push</Button>

    <pre>
      {JSON.stringify(router.query,null,2)}
    </pre>
  </div>);
}
export default GroupTopics;