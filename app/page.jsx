import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {database} from "../components/data.js"

export default function Home() {
  return (
    <div>
    <h1 class = "text-3xl m-5 text-center">Recently Generated Reports</h1>
    <div class = "flex flex-row bg-stone-200 text-stone-700 font-semibold p-2">
      <p class = "basis-1/5">Date</p>
      <p class = "basis-3/5">Report Name</p>
      <p class = "basis-1/5">Download</p>
    </div>
    <List />
    </div>
  );
}

function List(){
  const doptions = { year: 'numeric', month: 'short', day: '2-digit' };
  const toptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  const listitems = database.map( x => 
    <li>
      {new Date(x.date).toDateString('en-US', doptions)}: {new Date(x.date).toTimeString(undefined, toptions)}: {x.name}
    </li>
  )
  return <ul>{listitems}</ul>
}

