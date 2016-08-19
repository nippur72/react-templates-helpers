import { 
   map as __rtmap,
   assign as __rtassign,
   defaults,
   transform 
} from "lodash";

function __rtmergeprops(inline,external) {
    var res = __rtassign({},inline,external)
    if (inline.hasOwnProperty('style')) {
        res.style = defaults(res.style, inline.style);
    }
    if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
        res.className = external.className + ' ' + inline.className;
    }
    return res;
}

function __rtclass(ob: {}): string {
   return transform(ob, function(res: string[], value: string, key: string) { 
      if(value) { 
         res.push(key); 
      } 
   }, []).join(" ");
}

export {
   __rtmap,
   __rtassign,
   __rtmergeprops,
   __rtclass
}
