import { error, json } from '@sveltejs/kit';
import {blogs} from "../../../lib/blog.js";
const blogObj=JSON.parse(blogs);
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let flag=false;
    let index;
    for(let i=1;i<blogObj.length;i++){
        if(params.blog === `blog${i}`){
            index=i;
            flag=true;
            break;
        }
    }
  if (flag) {
    return {index};
  }
 
  throw error(404, 'Not found');
}