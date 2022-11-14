import { useRouter } from "next/router";

const GroupTopics =()=>{
  const router = useRouter();
  const { groupId } = router.query;

  return(<div>
    <h1>Group</h1>
    {groupId}
    <hr/>
    <pre>
      {JSON.stringify(router.query,null,2)}
    </pre>
  </div>);
}
export default GroupTopics;